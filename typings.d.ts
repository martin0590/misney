type Genre = {
  id: number
  name: string
}

type Genres = {
  genres: Genre[]
}

type GenrePageProps = {
  params: {
    id: string
  },
  searchParams: {
    genre: string
  }
}

type SearchResults = {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}

type Movie = {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  video: boolean
  vote_average: number
  vote_count: number
}

type MovieCarouselProps = {
  title?: string
  movies: Movie[]
  isVertical?: boolean
}

type CarouselBannerWrapperProps = {
  id?: string,
  keywords?: string
}

type CarouselBanner = {
  movies: Movie[]
}