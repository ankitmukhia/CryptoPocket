import { Input } from '../components/ui/Input'

export const Send = () => {
  return <form className="flextext-white">
    <div className="flex flex-col gap-4">
      <Input customPH="Address" type={"text"} />
      <Input customPH="Amount" type={"number"} />
    </div>
  </form>
}
