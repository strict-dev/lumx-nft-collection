type ContainerProps = {
  children: React.ReactNode
  className?: string
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={`p-3 rounded-sm bg-neutral-800 mx-4 
      ${className ? className : ''}`}
    >
      {children}
    </div>
  )
}

export default Container
