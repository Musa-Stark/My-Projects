import H from "../H";
import Card from "../Card";

const HS2 = () => {
  return (
    <div className="w-full lg:px-34 md:px-20 sm:px-15 px-5 not-md:mb-20 relative flex flex-col justify-between items-left">
      <img
        src="/svg/beans.svg"
        alt="_"
        className="absolute top-0 left-20 not-lg:hidden w-[30%]"
      />
      <H style="md:text-4xl text-3xl font-semibold ">
        Popular <span className="u-l">Now</span>
      </H>
      <div className="w-full h-80 pb-6 relative mt-10 md:mt-32 rounded-4xl md:bg-[#F9D9AA]">
        {/* card */}
        <div className="md:w-5xl left-1/2 flex items-center not-md:gap-10 flex-col md:translate-x-[-50%] md:absolute">
          <Card
            image={"/svg/sec2.1.svg"}
            h={"Vanilla Latte"}
            price={21}
            p={"Get the best vanilla latte from our shop"}
            style={"md:absolute md:top-0 md:left-0 md:translate-y-[-20%]"}
          />
          <Card
            image={"/svg/sec2.1.svg"}
            h={"Espresso"}
            price={12}
            p={"Get the best espresso from our shop"}
            style={
              "md:absolute md:top-0 md:left-1/2 md:translate-x-[-50%] md:translate-y-[-20%]"
            }
          />
          <Card
            image={"/svg/sec2.1.svg"}
            h={"Hazelnut Latte"}
            price={23}
            p={"Get the best hazelnut latte from our shop"}
            style={"md:absolute md:top-0 md:right-0 md:translate-y-[-20%]"}
          />
        </div>
      </div>
    </div>
  );
};

export default HS2;
