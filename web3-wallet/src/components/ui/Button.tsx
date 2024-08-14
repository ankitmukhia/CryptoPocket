interface ButtonProps {
  onClick: () => void;
  text: string
}

const Button = ({ onClick, text }: ButtonProps) => {
  return <button
    onClick={onClick}
    className="flex h-10 w-full flex-row items-center justify-center rounded-md bg-zinc-900 p-2 text-sm font-semibold text-zinc-100 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
  >
    {text}
  </button>
}

export default Button;
