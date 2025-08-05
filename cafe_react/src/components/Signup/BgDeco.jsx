const BgDeco = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 w-32 h-32 bg-amber-200 rounded-full opacity-20 float-animation"></div>
      <div
        className="absolute top-40 right-20 w-24 h-24 bg-orange-300 rounded-full opacity-30 float-animation"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-32 left-1/4 w-20 h-20 bg-yellow-200 rounded-full opacity-25 float-animation"
        style={{ animationDelay: "4s" }}
      ></div>
    </div>
  );
};

export default BgDeco;
