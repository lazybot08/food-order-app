import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Veg. Noodles",
    description: "Made with loads of mix vegetables and seasoned with soy sauce, ginger, garlic and celery.",
    price: 110.00,
  },
  {
    id: "m2",
    name: "Paneer Chilli",
    description: "Cubes of fried cripy paneer are tossed in a spicy sauce. Goes well with rice or noodles!",
    price: 179.00,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, juicy!",
    price: 125.00,
  },
  {
    id: "m4",
    name: "White Sauce Pasta",
    description: "Cooked penne pasta in a smooth, creamy and white sauce!",
    price: 159.00,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />

  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
