import P from "./P";
import H from "./H";

const Card = ({ style = "", image, h = "", price = "", p = "" }) => {
  return (
    <div className={`md:w-fit rounded-2xl bg-white shadow-lg p-4 ${style}`}>
      {/* img */}
      <div className="w-full md:w-72 aspect-[16/11] border border-gray-400 overflow-hidden rounded-lg">
        <img src={image} alt="img" className="object-cover w-full h-full" />
      </div>
      {/* headings */}
      <div className="w-72 mt-6 flex items-center justify-between">
        <H style={"text-2xl font-semibold"}>{h}</H>
        {price !== "" && <H style={"text-2xl font-bold"}>{price} K</H>}
      </div>
      {/* paragraph + cart */}
      <div className="w-full md:w-72 mt-1 flex items-center justify-between">
        <P style="w-[70%] text-md" text={p} />
        <div className="rounded-full secondary-bg-h primary-bg animate-pulse hover:animate-none cursor-pointer p-2">
          <img src="/svg/cart.svg" alt="Buy" className="invert-100" />
        </div>
      </div>
    </div>
  );
};

export default Card;
