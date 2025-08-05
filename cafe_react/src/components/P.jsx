const P = ({ text, style = "" }) => {
  return <p className={`text-[#1E1300] leading-tight ${style}`}>{text}</p>;
};

export default P;
