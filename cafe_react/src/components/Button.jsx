const Button = ({text, onClick}) => {
  return (
    <button onClick={onClick} className="px-5 py-2 primary-bg secondary-bg-h transition duration-200 cursor-pointer font-semibold rounded-full text-white">
      {text}
    </button>
  );
};

export default Button;
