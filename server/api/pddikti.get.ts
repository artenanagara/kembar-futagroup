type PddiktiResponse = {
  status?: string
  data?: Array<Record<string, string>>
}

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const type = query.type === 'prodi' ? 'prodi' : 'pt'
  const keyword = String(query.q ?? '').trim()

  if (keyword.length < 3) {
    return { data: [] }
  }

  try {
    const response = await $fetch<PddiktiResponse>(
      `https://api-pddikti.kemdiktisaintek.go.id/pencarian/${type}/${encodeURIComponent(keyword)}`,
      {
        headers: {
          Origin: 'https://pddikti.kemdiktisaintek.go.id',
          Referer: 'https://pddikti.kemdiktisaintek.go.id/'
        },
        timeout: 8000
      }
    )

    return { data: response.data ?? [] }
  } catch {
    return { data: [] }
  }
})
