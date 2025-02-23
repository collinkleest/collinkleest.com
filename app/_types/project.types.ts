export interface IProjectDTO {
  name: string
  description: string
  url: string
  language: string
  liveHomepage: string
  topics: string[]
}

export interface Repo {
  name: string
  description: string
  html_url: string
  language: string
  homepage: string
  archived: boolean
  topics: string[]
}
