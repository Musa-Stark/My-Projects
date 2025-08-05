const Card2 = ({ h, p, image }) => {
  return (
    <div className="flex flex-col items-center p-6">
      <img src={image} alt="" />
      <h1 className="text-2xl font-bold mt-3">{h}</h1>
      <p className="text-gray-500 text-[18px] md:text-xl mt-3">{p}</p>
    </div>
  );
};

export default Card2;
