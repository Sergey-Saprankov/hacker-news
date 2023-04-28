export interface CommentsSchema {
  by: string
  id: number
  parent: number
  time: number
  text: string
  type: string
  kids: number[]
}

export interface CommentsListSchema {
  comment: CommentsSchema[]
  status: boolean
  error: null | string
}
