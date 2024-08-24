import { IoEyeOff } from 'react-icons/io5'
import { useStore } from '../store'

const Hero = () => {
  const mnemonic = useStore((state) => state.mnemonicKeys)
  const words = mnemonic.split(" ");

  return <div>
    <p className="text-2xl mb-4 text-center text-white">Secret Recovery Phrase</p>
    <div className="group relative">
      {words[0] && (
        <div className="absolute inset-0 group-hover:opacity-0 flex z-10 items-center group:hover:opacity-0 transition-opacity justify-center pointer-events-none">
          <IoEyeOff color="white" size={22} />
        </div>
      )}
      <div className={`grid grid-cols-3 p-2 bg-[#27272AE6] ${words[0] && 'transition-all -row-span-3 duration-300 blur-sm hover:blur-none object-cover bg-zinc-800'} cursor-pointer gap-4 border border-[#A5A5A540] px-2 rounded-md col-span-2`}>
        {words.map((word, index) => (
          <div key={index} className="flex justify-start items-center p-1 space-x-2">
            {word && (
              <div className="text-gray-400 text-sm">{index + 1}.</div>
            )}
            <p className="text-white text-sm">{word ? word : "Create Mnemonic"}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
}

export default Hero;



/* return <div className="relative">
  <div className="absolute inset-0 flex z-10 items-center justify-center pointer-events-none">
    <IoEye color="white" className="group-hover:opacity-0 transition-opacity duration-300" />
  </div>
  <div className="group grid grid-cols-3 p-2 bg-[#27272AE6] transition-all duration-300 blur-sm hover:blur-none object-cover bg-zinc-800 cursor-pointer gap-4 border border-[#A5A5A540] px-2 rounded-md col-span-2">
    {words.map((word, index) => (
      <div key={index} className="flex justify-start items-center p-1 space-x-2">
        {word && (
          <div className="text-gray-400 text-sm">{index + 1}.</div>
        )}
        <p className="text-white text-sm">{word ? word : "Create Mnemonic"}</p>
      </div>
    ))}
  </div>
</div> */
