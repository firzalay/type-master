import { json } from '@sveltejs/kit'

import english from './english/english.json'

export const GET = ({ url }) => {
  const limit = Number(url.searchParams.get('limit'))
  const words = english.words.slice(0, limit).sort(() => 0.5 - Math.random())
  return json(words)
}
