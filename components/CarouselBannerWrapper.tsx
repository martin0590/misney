import { getDiscoverMovies } from "@/lib/getMovies"
import CarouselBanner from "./CarouselBanner"

const CarouselBannerWrapper = async ({ id, keywords }: CarouselBannerWrapperProps) => {
  const movies = await getDiscoverMovies(id, keywords)

  return (
    <CarouselBanner movies={movies} />
  )
}

export default CarouselBannerWrapper