import { MealBox } from './classes/meal-box';
import { Beans, Meat, Rice } from './classes/meals';

import { MainDishBuilder } from './classes/main-dish-builder';
import { VeganDishBuilder } from './classes/vegan-dish-builder';

const rice = new Rice('Arroz', 5);
const beans = new Beans('Feijão', 10);
const meat = new Meat('Carne', 20);
const mealBox = new MealBox();
mealBox.add(rice, beans, meat);
console.log(mealBox.getPrice());

const mainDishBuilder = new MainDishBuilder();
const meal1 = mainDishBuilder.makeMeal().makeDessert();
console.log(meal1.getMeal());
console.log(meal1.getPrice());

mainDishBuilder.reset();
const meal2 = mainDishBuilder.makeBeverage();
console.log(meal2.getMeal());
console.log(meal2.getPrice());

const veganDishBuilder = new VeganDishBuilder();
const veganMeal = veganDishBuilder.makeMeal();
console.log(veganMeal.getMeal());
console.log(veganMeal.getPrice());
