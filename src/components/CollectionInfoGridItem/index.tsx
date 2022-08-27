import MenuIcon from '@public/assets/menu-1.svg'
import Image from 'next/image'

type CollectionInfoGridItem = {
  title: string
  data: string
  children?: React.ReactNode
  type?: 'vol'
}

const CollectionInfoGridItem = ({
  title,
  data,
  children,
  type
}: CollectionInfoGridItem) => {
  return (
    <div className="flex flex-col items-center justify-center gap-1 box">
      <p className="text-xs font-bold text-neutral-600">
        {title.toUpperCase()}
      </p>
      <div className="flex items-center gap-1">
        {type === 'vol' && (
          <Image src={MenuIcon} alt="Icon" width={16} height={16} />
        )}
        <span className="text-lg font-bold">{data}</span>
      </div>
      {children}
    </div>
  )
}

export default CollectionInfoGridItem
