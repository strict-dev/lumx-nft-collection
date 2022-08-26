type CardWrapperProps = {
  children: React.ReactNode
  className?: string
}

const CardWrapper: React.FC<CardWrapperProps> = ({ children, className }) => {
  return (
    <div className={`p-3 rounded-sm bg-neutral-800 ${className}`}>
      {children}
    </div>
  )
}

export default CardWrapper
