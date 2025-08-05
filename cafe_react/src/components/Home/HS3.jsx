import H from "../H";
import Card2 from "../Card2";
import Button from "../Button";

const HS3 = () => {
  return (
    <div className="w-full lg:px-34 md:px-20 sm:px-15 px-5 flex md:mb-6 not-md:mb-8 flex-col gap-3 not-md:mt-[670px] justify-between items-center">
      <div className="w-full mt-10 md:mt-20">
        <H style="text-4xl not-md:px-5 font-semibold">
          How to use delivery <span className="u-l">service</span>
        </H>

        <div className="w-full mx-auto mt-4 flex not-md:flex-col items-center justify-evenly">
          <Card2
            h={"Choose your coffee"}
            p={"There are 20+ coffees for you"}
            image={"/svg/cup-hand.svg"}
          />
          <Card2
            h={"We deliver it to you"}
            p={"Choose delivery service"}
            image={"/svg/food-van.svg"}
          />
          <Card2
            h={"Enjoy your coffee"}
            p={"Choose delivery service"}
            image={"/svg/cup-hand.svg"}
          />
        </div>
      </div>
      <Button text="Order now" />
    </div>
  );
};

export default HS3;
