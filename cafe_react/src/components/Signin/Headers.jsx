import H from "../H";
import P from "../P";

const Headers = () => {
  return (
    <div className="text-center mb-8">
      <div className="inline-block p-4 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-700 rounded-xl flex items-center justify-center">
          <div className="text-white text-2xl font-bold">☕</div>
        </div>
      </div>

      <H style="text-3xl font-bold mb-2">Welcome Back</H>
      <P
        text="Log in to continue your coffee journey with us"
        style="text-lg"
      />
    </div>
  );
};

export default Headers;
