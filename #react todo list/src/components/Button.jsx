const Button = ({
  text,
  bgColor = "bg-green-600",
  hBgColor = "hover:bg-green-700",
  aBgColor = "active:bg-green-900",
  outline = "outline-green-600",
  mt = "",
  onClick,
}) => {
  return (
    <button
    onClick={onClick}
      className={`rounded-xl px-3 py-2 text-white cursor-pointer ${bgColor} ${hBgColor} ${aBgColor} ${mt} ${outline} focus:outline-2 outline-offset-1 text-center`}
    >
      {text}
    </button>
  );
};

export default Button;
