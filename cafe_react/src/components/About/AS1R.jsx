import H from "../H";
import P from "../P";
import Button from "../Button";

const AS1R = () => {
  return (
    <div className="md:w-[45%] flex flex-col items-start gap-6">
      <H style="text-5xl font-bold">
        About <span className="secondary-text">us</span>
      </H>
      <H style={"text-2xl font-bold"}>
        We provide high-quality food and beverages, always fresh and ready for
        delivery.
      </H>
      <P
        style="text-xl"
        text="Boost your productivity and build your mood with a glass of coffee in the morning"
      />
      <Button text="Get Your Order" />
    </div>
  );
};

export default AS1R;
