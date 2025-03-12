import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
const Coffee = () => {
  const items = [
    {id: 1, item: "Espresso", price: 100},
    {id: 2, item: "Cappuccino", price: 100},
    {id: 3, item: "Filter Coffee", price: 100},
    {id: 4, item: "Latte", price: 100},
    {id: 5, item: "Mocha", price: 100},
    {id: 6, item: "Macchiato", price: 100},
  ]

  {/*const handleAlert = (id) => {
    alert(id);
  }*/}
  return (
    <div className="grid bg-amber-200 w-full h-96">
      <h1 className="text-black text-5xl text-center pt-5">Coffee Details</h1>
      <div>
        <ul className="grid grid-cols-3 gap-5">
        {items.map((item)=>(
          <li key={item.id} className = "bg-amber-400 rounded-[5px] place-items-center">
            <h1>{item.item}</h1>
            <p>{item.price}</p>
            <Link to = {`/inside/${item.id}`} className = "bg-amber-900 text-white">Inside A Coffee</Link>
          </li>
        ))}
      </ul>
      </div>
      <Outlet /> {/* This allows nested routes to render */}
    </div>
  );
};

export default Coffee;
