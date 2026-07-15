export const formatNewsDate = (isoDate: string) => new Intl.DateTimeFormat('id-ID', {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
}).format(new Date(isoDate))
