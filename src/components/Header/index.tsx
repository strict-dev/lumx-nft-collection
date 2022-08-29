import Logo from '@public/assets/logo-seamore.svg'
import MenuIcon from '@public/assets/menu.svg'
import Search from 'components/Search'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="fixed z-50 flex items-center justify-between w-full max-w-sm p-4 mb-6 border-b h-14 bg-neutral-800 border-b-neutral-700">
      <div className="flex items-center justify-between gap-4">
        <Image src={Logo} alt="Logo" width={24} height={24} layout="fixed" />
        <div className="flex gap-1">
          <span>71</span>
          <span className="font-bold text-neutral-600">GWEI</span>
        </div>
      </div>

      <nav className="flex items-center justify-between gap-4">
        <Search />

        <Image
          src={MenuIcon}
          alt="Menu"
          width={24}
          height={24}
          layout="fixed"
          onClick={() => console.log('Menu')}
          className="cursor-pointer"
        />
      </nav>
    </header>
  )
}

export default Header
