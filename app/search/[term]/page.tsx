import { notFound } from "next/navigation"

const SearchPage = ({ params: { term }}: { params: { term: string } }) => {
  if(!term) notFound()

  const termToUse = decodeURI(term)

  //API call to get the searched movies
  //API call to get the Popular Movies

  return (
    <div>Welcome to the search page: {termToUse}</div>
  )
}

export default SearchPage