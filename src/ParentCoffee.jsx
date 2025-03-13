import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
const Coffee = () => {
  const items = [
    { id: 1, item: "Espresso", price: 100, image: "src/assets/images/i.webp" },
    { id: 2, item: "Cappuccino", price: 100, image: "src/assets/images/cappuccino.webp",},
    { id: 3, item: "Filter Coffee", price: 100, image: "src/assets/images/filtercoffee.webp",},
    { id: 4, item: "Latte", price: 100, image: "src/assets/images/latte.webp" },
    { id: 5, item: "Mocha", price: 100, image: "src/assets/images/mocha.webp" },
    { id: 6, item: "Macchiato", price: 100, image: "src/assets/images/macchiato.webp" },
  ];

  {/*const handleAlert = (id) => {
    alert(id);
  }*/}
  return (
    <div className="grid bg-amber-200 w-full h-[80vh]">
      <h1 className="text-black text-5xl text-center pt-15 ">Coffee Details</h1>
      <div>
        <ul className="grid grid-cols-3 gap-5">
        {items.map((item)=>(
          <li key={item.id} className = "bg-amber-400 py-6 h-full rounded-md place-items-center">
            <h1 className="text-xl font-semibold">{item.item}</h1>
            <p>{item.price}</p>
            <img src = {item.image} alt = {item.item} className = "w-40 h-40 rounded-2xl mb-2"/>
            <Link to = {`/know-more/inside/${item.id}`} className = "bg-amber-900 text-white text-2xl rounded-md py-1 px-2">Inside A Coffee</Link>
          </li>
        ))}
      </ul>
      </div>
      <Outlet /> {/* This allows nested routes to render */}
    </div>
  );
};

export default Coffee;
