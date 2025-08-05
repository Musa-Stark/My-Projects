const H = ({ size = "text-lg sm:text-xl", text, center = "", mt = "mt-2" }) => {
  return <h1 className={`${size} ${center} ${mt} font-bold`}>{text}</h1>;
};

export default H;
