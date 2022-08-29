import SearchIcon from '@public/assets/search.svg'
import Image from 'next/image'
import { useRef, useState } from 'react'

const Search = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
    inputRef.current?.focus()
  }

  return (
    <button
      className={`flex items-center px-3 py-1 rounded-sm transition
      ${isSearchOpen ? 'bg-neutral-900' : ''}
      focus-within:outline focus-within:outline-neutral-700`}
    >
      <Image
        src={SearchIcon}
        alt="Search"
        width={24}
        height={24}
        onClick={handleSearch}
        layout="fixed"
      />

      <input
        onBlur={() => setIsSearchOpen(false)}
        ref={inputRef}
        type="text"
        placeholder="Search"
        className={`px-3 bg-transparent w-36 outline-none transition : ;
        ${isSearchOpen ? '' : 'hidden'}`}
      />
    </button>
  )
}

export default Search
