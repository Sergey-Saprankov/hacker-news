export interface ItemsSchema {
  by: string
  descendants: number
  id: number
  score: number
  time: number
  title: string
  type: string
  url: string
  kids: number[]
}

export interface NewsSchema {
  items: ItemsSchema
  status: boolean
  error: null | string
}
