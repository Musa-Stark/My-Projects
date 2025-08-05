import Card from "../Card";

const Category = () => {
  return (
    <main class="w-full pt-14 flex flex-col items-center">
      <div class="w-[90%] mt-16 flex flex-col items-start justify-between">
        <h1 class="text-3xl font-bold">
          Hope you <span class="u-l">like</span>
        </h1>
        <p class="mt-4 text-xl">Which is your favourite?</p>
        <div class="w-[90%] mt-12 mb-4 m-auto grid lg:grid-cols-3 md:grid-cols-2 not-md:grid-cols-1 gap-7">
          <Card image={"/svg/food-van.svg"} h="Category" p="Description" />
          <Card image={"/svg/food-van.svg"} h="Category" p="Description" />
          <Card image={"/svg/food-van.svg"} h="Category" p="Description" />
          <Card image={"/svg/food-van.svg"} h="Category" p="Description" />
          <Card image={"/svg/food-van.svg"} h="Category" p="Description" />
          <Card image={"/svg/food-van.svg"} h="Category" p="Description" />
          <Card image={"/svg/food-van.svg"} h="Category" p="Description" />
          <Card image={"/svg/food-van.svg"} h="Category" p="Description" />
          <Card image={"/svg/food-van.svg"} h="Category" p="Description" />
          <Card image={"/svg/food-van.svg"} h="Category" p="Description" />
          <Card image={"/svg/food-van.svg"} h="Category" p="Description" />
          <Card image={"/svg/food-van.svg"} h="Category" p="Description" />
        </div>
      </div>
    </main>
  );
};

export default Category;
