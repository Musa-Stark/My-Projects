import H from "../H";
import P from "../P";
import Button from "../Button";

const HS1 = () => {
  return (
    <div className="relative lg:px-34 md:px-20 sm:px-15 px-5 flex not-lg:mt-10 not-lg:flex-col justify-between items-center">
      <img src="/svg/beans.svg" alt="beans" className="absolute not-lg:hidden top-0 right-0 w-[30%]"/>
      {/* left */}
      <div className="w-[55%] not-lg:w-full flex flex-col items-start gap-10">
        <H style="lg:text-5xl text-4xl font-bold">
          Enjoy your <span className="secondary-text">coffee</span> before your
          activity
        </H>
        <P style="text-xl" text="Boost your productivity and build your mood with a glass of coffee in the morning" />
        <Button text="Order now" />
      </div>
      {/* right */}
      <div className="md:w-[45%] sm:w-[65%] w-[80%] aspect-square rounded-full z-10 flex items-center justify-center">
        <img
          src="/svg/img-hero.svg"
          width={1000}
          height={1000}
          className="object-cover"
          alt="img-hero"
        />
      </div>
    </div>
  );
};

export default HS1;
