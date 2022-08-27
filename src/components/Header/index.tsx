import Logo from '@public/assets/logo-seamore.svg'
import MenuIcon from '@public/assets/menu.svg'
import SearchIcon from '@public/assets/search.svg'
import Image from 'next/image'

const Header = () => {
  return (
    <div className="fixed z-50 flex items-center justify-between w-full p-4 mb-6 border-b h-14 bg-neutral-800 border-b-neutral-700">
      <div className="flex items-center justify-between gap-4">
        <Image src={Logo} alt="Logo" width={24} height={24} />
        <div className="flex gap-1">
          <span>71</span>
          <span className="font-bold text-neutral-600">GWEI</span>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <button>
          <Image src={SearchIcon} alt="Search" width={24} height={24} />
        </button>
        <button>
          <Image src={MenuIcon} alt="Menu" width={24} height={24} />
        </button>
      </div>
    </div>
  )
}

export default Header
