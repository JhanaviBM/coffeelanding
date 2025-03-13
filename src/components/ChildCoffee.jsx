import { useParams } from "react-router";
import { Link } from "react-router-dom"; // Ensure you're using 'react-router-dom'

const ChildCoffee = () => {
  const coffeeDetails = {
    1: {
      name: "Espresso",
      description:
        "A strong and concentrated coffee brewed by forcing hot water through finely-ground coffee beans.",
    },
    2: {
      name: "Cappuccino",
      description:
        "A balanced coffee with equal parts espresso, steamed milk, and milk foam.",
    },
    3: {
      name: "Filter Coffee",
      description:
        "A traditional South Indian coffee brewed using a metal filter with chicory-blended coffee powder.",
    },
    4: {
      name: "Latte",
      description:
        "A smooth and creamy coffee made with espresso and steamed milk, topped with foam.",
    },
    5: {
      name: "Mocha",
      description:
        "A chocolate-flavored variant of a latte, combining espresso, chocolate syrup, and steamed milk.",
    },
    6: {
      name: "Macchiato",
      description: "An espresso with a small amount of steamed milk or foam.",
    },
  };

  const rating = [
    { id: 1, rating: "worst" },
    { id: 2, rating: "bad" },
    { id: 3, rating: "good" },
    { id: 4, rating: "better" },
    { id: 5, rating: "best" },
  ];

  const { id } = useParams(); // Get coffee id from the URL
  const coffee = coffeeDetails[id]; // Fetch coffee details using the id

  return (
    <div className="bg-amber-200 p-5 text-center h-96">
      <h2 className="text-3xl font-bold">{coffee.name}</h2>
      <p className="mt-2 text-lg">{coffee.description}</p>
      <br />
      <Link
        to="/know-more"
        className="bg-amber-500 px-4 py-2 rounded-lg text-white"
      >
        Back To Menu
      </Link>

      <div className="mt-5 flex justify-center space-x-5 text-4xl text-white pb-6 bg-amber-800 pt-8">
        
        {rating.map((rate) => (
          <div
            key={rate.id}
          >
            <Link
              to={`/know-more/inside/${id}/${rate.id}`}
              className="text-white"
            ><div>⭐</div>
              
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChildCoffee;
