export const Input = ({ customPH, type }: {
  customPH: string
  type: string
}) => {
  const removeDefaultArrow = '[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none';

  return (
    <input
      placeholder={customPH}
      type={type}
      className={`${removeDefaultArrow} border border-gray-600/30 p-2 rounded-md bg-transparent`}
    />
  )
}
