export interface Plan {
  name: string
  price_mxn: number
  transaction_fee_percent: number
  limits: Limits
  features: Features
}

export interface Limits {
  locations: number | null
  users: number | null
  products: number | null
  transactions_per_month: number | null
  // The API expresses sales limits in centavos, not pesos.
  monthly_sales_amount: number | null
  analytics_history_days: number | null
}

export interface Features {
  pos: boolean
  sync: boolean
  tap_to_pay: boolean
  digital_receipts: boolean
  simple_stock: boolean
  inventory: boolean
  reports: boolean
  expenses: boolean
  shift_audits: boolean
  multi_user: boolean
  multi_location: boolean
  advanced_inventory: boolean
  api_access?: boolean
  single_session: boolean
}

export type PlanKey = 'free' | 'starter' | 'pro' | 'enterprise'

export interface PricingPlan extends Plan {
  key: PlanKey
}

export interface PricesResponse {
  data: {
    free: Plan
    revenuecat: Record<Exclude<PlanKey, 'free'>, Plan>
  }
}
