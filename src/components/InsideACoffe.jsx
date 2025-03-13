import { useParams } from "react-router-dom";

const InsideACoffe = () => {
  const rating = [
    { id: 1, rating: "worst" },
    { id: 2, rating: "bad" },
    { id: 3, rating: "good" },
    { id: 4, rating: "better" },
    { id: 5, rating: "best" },
  ];

  const { id, ratingId } = useParams();
  const coffeeRating = rating.find((rate) => rate.id === parseInt(ratingId));
  console.log(coffeeRating);
  return (
    <div>
      <h1 className="text-3xl font-bold">Coffee ID: {id}</h1>
      <p className="text-2xl font-bold">
        Rating: {coffeeRating ? coffeeRating.rating : "Unknown"}
      </p>
    </div>
  );
};

export default InsideACoffe;
