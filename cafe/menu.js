const menu = [
  {
    category: "Coffee",
    categoryDescription: "A selection of aromatic coffees to kickstart your day.",
    categoryImage: "https://images.unsplash.com/photo-1591456983933-4e9587fdd69f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29mZmVlJTIwY3VwfGVufDB8MHwwfHx8MA%3D%3D",
    items: [
      {
        name: "Espresso",
        price: 200,
        description: "Strong, aromatic shot of pure coffee. Perfect for a quick caffeine boost.",
        image: "https://images.unsplash.com/photo-1591456983933-4e9587fdd69f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29mZmVlJTIwY3VwfGVufDB8MHwwfHx8MA%3D%3D",
      },
      {
        name: "Cappuccino",
        price: 250,
        description: "Creamy espresso with steamed milk and a sprinkle of cocoa.",
        image: "https://images.unsplash.com/photo-1591456983933-4e9587fdd69f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29mZmVlJTIwY3VwfGVufDB8MHwwfHx8MA%3D%3D",
      },
      {
        name: "Latte",
        price: 300,
        description: "Smooth espresso with steamed milk and a light layer of foam.",
        image: "https://images.unsplash.com/photo-1591456983933-4e9587fdd69f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29mZmVlJTIwY3VwfGVufDB8MHwwfHx8MA%3D%3D",
      },
      {
        name: "Americano",
        price: 220,
        description: "Espresso diluted with hot water for a lighter taste.",
        image: "https://images.unsplash.com/photo-1591456983933-4e9587fdd69f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29mZmVlJTIwY3VwfGVufDB8MHwwfHx8MA%3D%3D",
      },
      {
        name: "Mocha",
        price: 350,
        description: "Espresso with chocolate syrup, steamed milk, and whipped cream.",
        image: "https://images.unsplash.com/photo-1591456983933-4e9587fdd69f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29mZmVlJTIwY3VwfGVufDB8MHwwfHx8MA%3D%3D",
      },
      {
        name: "Macchiato",
        price: 280,
        description: "Espresso with a dollop of frothy milk on top.",
        image: "https://images.unsplash.com/photo-1591456983933-4e9587fdd69f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29mZmVlJTIwY3VwfGVufDB8MHwwfHx8MA%3D%3D",
      },
      {
        name: "Flat White",
        price: 320,
        description: "Rich espresso with velvety steamed milk.",
        image: "https://images.unsplash.com/photo-1591456983933-4e9587fdd69f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29mZmVlJTIwY3VwfGVufDB8MHwwfHx8MA%3D%3D",
      },
      {
        name: "Turkish Coffee",
        price: 180,
        description: "Strong, unfiltered coffee brewed with finely ground beans.",
        image: "https://images.unsplash.com/photo-1591456983933-4e9587fdd69f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29mZmVlJTIwY3VwfGVufDB8MHwwfHx8MA%3D%3D",
      },
    ],
  },
  {
    category: "Tea",
    categoryDescription: "Traditional and flavored teas to soothe your senses.",
    categoryImage: "https://plus.unsplash.com/premium_photo-1674406481284-43eba097a291?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmxhY2slMjB0ZWF8ZW58MHwwfDB8fHww",
    items: [
      {
        name: "Green Tea",
        price: 150,
        description: "Refreshing and light, served with honey or lemon.",
        image: "https://plus.unsplash.com/premium_photo-1674406481284-43eba097a291?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmxhY2slMjB0ZWF8ZW58MHwwfDB8fHww",
      },
      {
        name: "Masala Chai",
        price: 120,
        description: "Traditional Pakistani tea with ginger, cinnamon, and cloves.",
        image: "https://plus.unsplash.com/premium_photo-1674406481284-43eba097a291?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmxhY2slMjB0ZWF8ZW58MHwwfDB8fHww",
      },
      {
        name: "Black Tea",
        price: 100,
        description: "Classic tea with a bold and robust flavor.",
        image: "https://plus.unsplash.com/premium_photo-1674406481284-43eba097a291?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmxhY2slMjB0ZWF8ZW58MHwwfDB8fHww",
      },
      {
        name: "Herbal Tea",
        price: 180,
        description: "A soothing blend of chamomile, mint, and lemongrass.",
        image: "https://plus.unsplash.com/premium_photo-1674406481284-43eba097a291?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmxhY2slMjB0ZWF8ZW58MHwwfDB8fHww",
      },
      {
        name: "Lemon Ginger Tea",
        price: 160,
        description: "Zesty and refreshing with a hint of spice.",
        image: "https://plus.unsplash.com/premium_photo-1674406481284-43eba097a291?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmxhY2slMjB0ZWF8ZW58MHwwfDB8fHww",
      },
      {
        name: "Earl Grey",
        price: 200,
        description: "Black tea flavored with bergamot oil.",
        image: "https://plus.unsplash.com/premium_photo-1674406481284-43eba097a291?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmxhY2slMjB0ZWF8ZW58MHwwfDB8fHww",
      },
      {
        name: "Peach Tea",
        price: 220,
        description: "Sweet and fruity black tea with peach flavor.",
        image: "https://plus.unsplash.com/premium_photo-1674406481284-43eba097a291?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmxhY2slMjB0ZWF8ZW58MHwwfDB8fHww",
      },
      {
        name: "Iced Tea",
        price: 180,
        description: "Chilled black tea with a slice of lemon.",
        image: "https://plus.unsplash.com/premium_photo-1674406481284-43eba097a291?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmxhY2slMjB0ZWF8ZW58MHwwfDB8fHww",
      },
    ],
  },
  {
    category: "Snacks",
    categoryDescription: "Delicious bites perfect for any time of the day.",
    categoryImage: "https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNuYWNrc3xlbnwwfDB8MHx8fDA%3D",
    items: [
      {
        name: "Chicken Sandwich",
        price: 350,
        description: "Grilled chicken with veggies and mayo in toasted bread.",
        image: "https://images.unsplash.com/photo-1621852004158-f3bc188ace2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFNhbmR3aWNoZXMlMjAlMjYlMjBXcmFwc3xlbnwwfDB8MHx8fDA%3D",
      },
      {
        name: "Veggie Samosa",
        price: 100,
        description: "Crispy pastry filled with spiced potatoes and peas.",
        image: "https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNuYWNrc3xlbnwwfDB8MHx8fDA%3D",
      },
      {
        name: "Cheese Fries",
        price: 300,
        description: "Golden fries topped with melted cheese and herbs.",
        image: "https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNuYWNrc3xlbnwwfDB8MHx8fDA%3D",
      },
      {
        name: "Chicken Nuggets",
        price: 400,
        description: "Crispy fried chicken nuggets served with dipping sauce.",
        image: "https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNuYWNrc3xlbnwwfDB8MHx8fDA%3D",
      },
      {
        name: "Spring Rolls",
        price: 250,
        description: "Crispy rolls filled with vegetables and served with sweet chili sauce.",
        image: "https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNuYWNrc3xlbnwwfDB8MHx8fDA%3D",
      },
      {
        name: "Paneer Tikka",
        price: 450,
        description: "Grilled cottage cheese marinated in spices.",
        image: "https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNuYWNrc3xlbnwwfDB8MHx8fDA%3D",
      },
      {
        name: "French Fries",
        price: 200,
        description: "Crispy golden fries served with ketchup.",
        image: "https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNuYWNrc3xlbnwwfDB8MHx8fDA%3D",
      },
      {
        name: "Chicken Wings",
        price: 500,
        description: "Spicy and crispy chicken wings with a tangy dip.",
        image: "https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNuYWNrc3xlbnwwfDB8MHx8fDA%3D",
      },
    ],
  },
  {
    category: "Desserts",
    categoryDescription: "Sweet treats to satisfy your cravings.",
    categoryImage: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzc2VydHxlbnwwfDB8MHx8fDA%3D",
    items: [
      {
        name: "Chocolate Cake",
        price: 300,
        description: "Rich, moist chocolate layer cake with ganache.",
        image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzc2VydHxlbnwwfDB8MHx8fDA%3D",
      },
      {
        name: "Gulab Jamun",
        price: 150,
        description: "Sweet fried dough balls soaked in rose syrup.",
        image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzc2VydHxlbnwwfDB8MHx8fDA%3D",
      },
      {
        name: "Cheesecake",
        price: 400,
        description: "Creamy cheesecake with a buttery biscuit base.",
        image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzc2VydHxlbnwwfDB8MHx8fDA%3D",
      },
      {
        name: "Tiramisu",
        price: 450,
        description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone.",
        image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzc2VydHxlbnwwfDB8MHx8fDA%3D",
      },
      {
        name: "Brownie",
        price: 250,
        description: "Fudgy chocolate brownie served with vanilla ice cream.",
        image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzc2VydHxlbnwwfDB8MHx8fDA%3D",
      },
      {
        name: "Panna Cotta",
        price: 350,
        description: "Creamy Italian dessert with a berry compote.",
        image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzc2VydHxlbnwwfDB8MHx8fDA%3D",
      },
      {
        name: "Red Velvet Cake",
        price: 400,
        description: "Moist red velvet cake with cream cheese frosting.",
        image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzc2VydHxlbnwwfDB8MHx8fDA%3D",
      },
      {
        name: "Mango Mousse",
        price: 300,
        description: "Light and airy mango-flavored mousse.",
        image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzc2VydHxlbnwwfDB8MHx8fDA%3D",
      },
    ],
  },
  {
    category: "Breakfast",
    categoryDescription: "Hearty and wholesome morning meals.",
    categoryImage: "https://plus.unsplash.com/premium_photo-1663840225885-b3a9a91e8d47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8QnJlYWtmYXN0JTIwJTI2JTIwTGlnaHQlMjBNZWFsc3xlbnwwfDB8MHx8fDA%3D",
    items: [
      {
        name: "Paratha with Omelette",
        price: 250,
        description: "Flaky layered bread served with a fluffy egg omelette.",
        image: "https://plus.unsplash.com/premium_photo-1663840225885-b3a9a91e8d47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8QnJlYWtmYXN0JTIwJTI2JTIwTGlnaHQlMjBNZWFsc3xlbnwwfDB8MHx8fDA%3D",
      },
      {
        name: "Pancakes with Maple Syrup",
        price: 350,
        description: "Fluffy pancakes drizzled with sweet maple syrup.",
        image: "https://plus.unsplash.com/premium_photo-1663840225885-b3a9a91e8d47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8QnJlYWtmYXN0JTIwJTI2JTIwTGlnaHQlMjBNZWFsc3xlbnwwfDB8MHx8fDA%3D",
      },
      {
        name: "Eggs Benedict",
        price: 400,
        description: "Poached eggs on English muffins with hollandaise sauce.",
        image: "https://plus.unsplash.com/premium_photo-1663840225885-b3a9a91e8d47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8QnJlYWtmYXN0JTIwJTI2JTIwTGlnaHQlMjBNZWFsc3xlbnwwfDB8MHx8fDA%3D",
      },
      {
        name: "Avocado Toast",
        price: 300,
        description: "Toasted bread topped with mashed avocado and seasonings.",
        image: "https://plus.unsplash.com/premium_photo-1663840225885-b3a9a91e8d47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8QnJlYWtmYXN0JTIwJTI2JTIwTGlnaHQlMjBNZWFsc3xlbnwwfDB8MHx8fDA%3D",
      },
      {
        name: "Breakfast Burrito",
        price: 450,
        description: "Scrambled eggs, beans, and cheese wrapped in a tortilla.",
        image: "https://plus.unsplash.com/premium_photo-1663840225885-b3a9a91e8d47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8QnJlYWtmYXN0JTIwJTI2JTIwTGlnaHQlMjBNZWFsc3xlbnwwfDB8MHx8fDA%3D",
      },
      {
        name: "Oatmeal with Fruits",
        price: 200,
        description: "Warm oatmeal topped with fresh fruits and honey.",
        image: "https://plus.unsplash.com/premium_photo-1663840225885-b3a9a91e8d47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8QnJlYWtmYXN0JTIwJTI2JTIwTGlnaHQlMjBNZWFsc3xlbnwwfDB8MHx8fDA%3D",
      },
      {
        name: "French Toast",
        price: 320,
        description: "Thick slices of bread dipped in egg batter and fried to perfection.",
        image: "https://plus.unsplash.com/premium_photo-1663840225885-b3a9a91e8d47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8QnJlYWtmYXN0JTIwJTI2JTIwTGlnaHQlMjBNZWFsc3xlbnwwfDB8MHx8fDA%3D",
      },
      {
        name: "Breakfast Platter",
        price: 500,
        description: "A hearty platter with eggs, sausages, toast, and hash browns.",
        image: "https://plus.unsplash.com/premium_photo-1663840225885-b3a9a91e8d47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8QnJlYWtmYXN0JTIwJTI2JTIwTGlnaHQlMjBNZWFsc3xlbnwwfDB8MHx8fDA%3D",
      },
    ],
  },
  {
    category: "Cold Beverages",
    categoryDescription: "Refreshing drinks to cool you down.",
    categoryImage: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbGQlMjBiZXZlcmFnZXN8ZW58MHwwfDB8fHww",
    items: [
      {
        name: "Iced Coffee",
        price: 300,
        description: "Chilled coffee with milk and caramel syrup.",
        image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbGQlMjBiZXZlcmFnZXN8ZW58MHwwfDB8fHww",
      },
      {
        name: "Fresh Lime Soda",
        price: 180,
        description: "Sparkling soda with fresh lime and mint.",
        image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbGQlMjBiZXZlcmFnZXN8ZW58MHwwfDB8fHww",
      },
      {
        name: "Mango Shake",
        price: 250,
        description: "Creamy mango shake made with fresh mangoes.",
        image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbGQlMjBiZXZlcmFnZXN8ZW58MHwwfDB8fHww",
      },
      {
        name: "Strawberry Smoothie",
        price: 280,
        description: "Refreshing smoothie made with fresh strawberries and yogurt.",
        image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbGQlMjBiZXZlcmFnZXN8ZW58MHwwfDB8fHww",
      },
      {
        name: "Iced Tea",
        price: 200,
        description: "Chilled black tea with a slice of lemon.",
        image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbGQlMjBiZXZlcmFnZXN8ZW58MHwwfDB8fHww",
      },
      {
        name: "Cold Brew",
        price: 350,
        description: "Smooth and strong cold-brewed coffee.",
        image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbGQlMjBiZXZlcmFnZXN8ZW58MHwwfDB8fHww",
      },
      {
        name: "Virgin Mojito",
        price: 220,
        description: "Refreshing mint and lime mocktail.",
        image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbGQlMjBiZXZlcmFnZXN8ZW58MHwwfDB8fHww",
      },
      {
        name: "Fruit Punch",
        price: 300,
        description: "A mix of fresh fruit juices with a hint of mint.",
        image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbGQlMjBiZXZlcmFnZXN8ZW58MHwwfDB8fHww",
      },
    ],
  },
];

export default menu;

// upload data in bulk via deepseek
// async function saveData() {
//   let menuNo = 0;
//   for (let i = 0; i < menu.length; i++) {
//     let itemNo = 0;
//     let category = menu[menuNo].category;
//     let cateDesc = menu[menuNo].categoryDescription;
//     let cateImg = menu[menuNo].categoryImage;
//     let name = null;
//     let price = null;
//     let description = null;
//     let image = null;
//     for (let i = 0; i < menu[0].items.length; i++) {
//       name = menu[0].items[itemNo].name;
//       price = menu[0].items[itemNo].price;
//       description = menu[0].items[itemNo].description;
//       image = menu[0].items[itemNo].image;
//       let q = `INSERT INTO menu(category, cateDescript, cateImg, name, price, description, image)
//     VALUES("${category}", "${cateDesc}", "${cateImg}", "${name}", "${price}", "${description}", "${image}")`;
//       const [results] = await connection.query(q);
//       console.log(results);
//       itemNo++;
//     }
//     menuNo++;
//   }
// }
// saveData();