export type Theme = 'light' | 'dark'

export type SearchType = 'numbers' | 'letters' | 'mixed'

export type Contact = {
  firstName: string
  lastName: string
  phoneNumbers: [string]
}

export type Merchant = {
  create_business_date: string
  create_date: string
  create_txn_id: string
  created_by: string
  df_flag: string
  inst_no: string
  lookup_code: string
  lookup_id: number
  lookup_values_1: string
  lookup_values_2: string
  lookup_values_3: string
  lookup_values_4: string
  lookup_values_5: string
  rec_no: number
  status: string
  update_business_date: string
  update_by: number
  update_date: string
  update_txn_id: number
}

export type Gift = {
  amout: number
  description: string
  firstName: string
  lastName: string
  phoneNumber: string
  store: string
  store_type: string
  id: number
}
