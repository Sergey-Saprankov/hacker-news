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
  comments: CommentsSchema[]
  childComments: CommentsSchema[]
  status: boolean
  error: null | string
}
