import Image from 'next/image'
import Logo from '@public/assets/logo-seamore.svg'
import SearchIcon from '@public/assets/search.svg'
import MenuIcon from '@public/assets/menu.svg'

const Header = () => {
  return (
    <div className="flex items-center justify-between w-full p-4 mb-6 border-b h-14 bg-neutral-800 border-b-neutral-700">
      <div className="flex items-center justify-between gap-2">
        <Image src={Logo} alt="Logo" />
        <div className="flex gap-1">
          <span>71</span>
          <span className="font-bold text-neutral-600">GWEI</span>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <button>
          <Image src={SearchIcon} alt="Search" />
        </button>
        <button>
          <Image src={MenuIcon} alt="Menu" />
        </button>
      </div>
    </div>
  )
}

export default Header
