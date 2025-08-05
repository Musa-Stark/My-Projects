import AS1L from "./AS1L";
import AS1R from "./AS1R";

const About = () => {
  return (
    <main className="main-bg md:pt-20 pt-20 pb-6 w-full min-h-screen flex flex-col items-center justify-center">
      <div className="w-full lg:px-34 md:px-20 sm:px-15 px-5 flex not-md:flex-col-reverse not-md:gap-10 justify-between md:justify-evenly items-center">
        {/* left */}
        <AS1L />
        {/* right */}
        <AS1R />
      </div>
    </main>
  );
};

export default About;
