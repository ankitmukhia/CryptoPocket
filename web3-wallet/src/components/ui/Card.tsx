import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface CurrencyProps {
  id: number;
  currencys: string;
}

const dropDownCurrency: CurrencyProps[] = [
  {
    id: 1,
    currencys: "Bitcoin",
  },
  {
    id: 2,
    currencys: "Ethereum",
  },
];

const Card = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(dropDownCurrency[0]);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const handleCurrencySelect = (currency: CurrencyProps) => {
    setSelectedCurrency(currency);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div className="border border-[#A5A5A540] rounded-md px-4 py-2 flex flex-row justify-between items-center">
        <div>
          <p className="text-white text-sm">{selectedCurrency.currencys}</p>
          <p className="text-white text-xs">
            {selectedCurrency.currencys === "Bitcoin" ? "BTC" : "ETH"}
          </p>
        </div>

        <button onClick={toggleDropDown} className="flex items-center">
          <IoIosArrowDown color="white" size={20} />
        </button>

      </div>

      {isOpen && (
        <div className="absolute top-full mt-2 bg-zinc-100 rounded-md border border-gray-700/50 w-full">
          {dropDownCurrency.map((e: CurrencyProps) => (
            <div
              key={e.id}
              className="px-4 py-2 text-black hover:bg-zinc-300/50 cursor-pointer"
              onClick={() => handleCurrencySelect(e)}
            >
              {e.currencys}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;

