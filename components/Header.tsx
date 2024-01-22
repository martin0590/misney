import Link from "next/link"
import { ThemeToggler } from "./ThemeToggler"
import SearchInput from "./SearchInput"
import GenreDrowndown from "./GenreDrowndown"
const Header = () => {
  return (
    <header className="fixed w-full z-20 top-0 flex items-center justify-between p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900">
      <Link href={'/'} className="mr-10">
        <h1 className="cursor-pointer font-bold text-5xl">Misney</h1>
      </Link>

      <div className="flex space-x-2">
        {/* GenreDropdown */}
        <GenreDrowndown />
        {/* SearchInput */}
        <SearchInput />
        {/* Theme Toggler */}
        <ThemeToggler />
      </div>
    </header>
  )
}

export default Header