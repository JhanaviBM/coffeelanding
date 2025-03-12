import { useParams } from "react-router";
import { Link } from "react-router";


const ChildCoffee = () => {
  const coffeeDetails = {
    1: { name: "Espresso", description: "A strong and concentrated coffee brewed by forcing hot water through finely-ground coffee beans." },
    2: { name: "Cappuccino", description: "A balanced coffee with equal parts espresso, steamed milk, and milk foam." },
    3: { name: "Filter Coffee", description: "A traditional South Indian coffee brewed using a metal filter with chicory-blended coffee powder." },
    4: { name: "Latte", description: "A smooth and creamy coffee made with espresso and steamed milk, topped with foam." },
    5: { name: "Mocha", description: "A chocolate-flavored variant of a latte, combining espresso, chocolate syrup, and steamed milk." },
    6: { name: "Macchiato", description: "An espresso with a small amount of steamed milk or foam." },
  };

  const { id } = useParams();
  const coffee = coffeeDetails[id];
  {/*{const [content, setContent] = useState("");

  const handleContent = () => {
    const coffeeId = parseInt(id);
    
    if (coffeeId === 1) {
      setContent("Espresso");
    } else if (coffeeId === 2) {
      setContent("Macchiato");
    } else if (coffeeId === 3) {
      setContent("Cappuccino");
    } else {
      setContent("Unknown Coffee");
    }}
  }*/}
  return (
    <div className="bg-amber-200 p-5 text-center h-96">
      {/*<h2 className="text-3xl font-bold">Inside Coffee {id}</h2>
      <button onClick={handleContent} className="bg-amber-700 text-amber-50">What it is?</button>
      <p className="text-2xl font-bold">{content}</p>
      <Link to="/know-more" className="bg-amber-500 rounded-[10px]">Back To Menu</Link>*/}
      <h2 className="text-3xl font-bold">{coffee.name}</h2>
      <p className="mt-2 text-lg">{coffee.description}</p>
      <br />
      <Link to="/know-more" className="bg-amber-500 px-4 py-2 rounded-lg text-white">
        Back To Menu
      </Link>
    </div>
  );
};

export default ChildCoffee;
