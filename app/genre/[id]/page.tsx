type GenrePageProps = {
  params: {
    id: string
  },
  searchParams: {
    genre: string
  }
}
const GenrePage = ({ params: {id}, searchParams: {genre} }: GenrePageProps) => {
  return (
    <div>Welcome to the genre with id: {id} and genre: {genre}</div>
  )
}

export default GenrePage