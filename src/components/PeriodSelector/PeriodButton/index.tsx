import { periods } from '..'

type PeriodButtonProps = {
  label: typeof periods[number]
  selected: boolean
  setSelected: (value: string) => void
}

const PeriodButton: React.FC<PeriodButtonProps> = ({
  label,
  selected,
  setSelected
}) => {
  return (
    <button
      className={`px-2 py-1 text-sm font-bold transition rounded-sm 
      ${selected && 'brand-gradient text-white'}
      text-neutral-600 
      hover:brightness-110`}
      onClick={() => setSelected(label)}
    >
      {label.toUpperCase()}
    </button>
  )
}

export default PeriodButton
