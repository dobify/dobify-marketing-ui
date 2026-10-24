import type { Features, Limits, Plan, PricesResponse, PricingPlan } from '@/types/Plans'
import axios from 'axios'

const limitKeys: (keyof Limits)[] = [
  'locations', 'users', 'products', 'transactions_per_month',
  'monthly_sales_amount', 'analytics_history_days',
]

const featureKeys: (keyof Features)[] = [
  'pos', 'sync', 'tap_to_pay', 'digital_receipts', 'simple_stock',
  'inventory', 'reports', 'expenses', 'shift_audits', 'multi_user',
  'multi_location', 'advanced_inventory', 'single_session',
]

function isPlan (value: unknown): value is Plan {
  if (!value || typeof value !== 'object') {
    return false
  }
  const plan = value as Plan
  return typeof plan.name === 'string' && plan.name.trim().length > 0
    && Number.isFinite(plan.price_mxn) && plan.price_mxn >= 0
    && Number.isFinite(plan.transaction_fee_percent) && plan.transaction_fee_percent >= 0
    && !!plan.limits && limitKeys.every(key => plan.limits[key] === null
      || (Number.isFinite(plan.limits[key]) && (plan.limits[key] as number) >= 0))
    && !!plan.features && featureKeys.every(key => typeof plan.features[key] === 'boolean')
    && (plan.features.api_access === undefined || typeof plan.features.api_access === 'boolean')
}

export function normalizePrices (response: PricesResponse): PricingPlan[] {
  const data = response?.data
  const plans = [
    { key: 'free' as const, plan: data?.free },
    { key: 'starter' as const, plan: data?.revenuecat?.starter },
    { key: 'pro' as const, plan: data?.revenuecat?.pro },
    { key: 'enterprise' as const, plan: data?.revenuecat?.enterprise },
  ]

  return plans.map(({ key, plan }) => {
    if (!isPlan(plan)) {
      throw new Error(`Invalid pricing data for ${key}`)
    }
    return { ...plan, key }
  })
}

export async function getPrices (signal?: AbortSignal): Promise<PricingPlan[]> {
  const response = await axios.get<PricesResponse>(import.meta.env.VITE_PRICES_URL || '/api/prices', {
    signal,
    timeout: 10_000,
  })
  return normalizePrices(response.data)
}
