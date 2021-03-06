export interface Block {
  id: string
  type: string
  attributes: Attributes
}

export interface Attributes {
  index: number
  timestamp: number
  data: string
}
