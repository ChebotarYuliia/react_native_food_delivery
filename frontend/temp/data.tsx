import { CategoryProps } from "../src/components/categories/Category";
import { RestaurantsRowProps } from "../src/components/restaurants/RestaurantsRow";
import { RestaurantCard } from "../types/base";

export const tempCategories: CategoryProps[] = [
  {
    id: 1,
    name: "Chinese",
    image: require("../assets/images/categories/chinese.png"),
  },
  {
    id: 2,
    name: "Italian",
    image: require("../assets/images/categories/spagetti.png"),
  },
  {
    id: 3,
    name: "Pizza",
    image: require("../assets/images/categories/pizza.png"),
  },
  {
    id: 4,
    name: "Burgers",
    image: require("../assets/images/categories/burger.png"),
  },
  {
    id: 5,
    name: "Seafood",
    image: require("../assets/images/categories/fish.png"),
  },
  {
    id: 6,
    name: "Desserts",
    image: require("../assets/images/categories/cupcake.png"),
  },
];

export const tempRestaurantRows: ({
  restaurants: number[];
} & RestaurantsRowProps)[] = [
  {
    id: 1,
    title: "Hot and spicy",
    description: "soft and tender fried chicken",
    restaurants: [1, 2, 3],
  },
  {
    id: 2,
    title: "Specials",
    description: "soft and tender fried chicken",
    restaurants: [4, 5],
  },
];

export const tempRestaurants: RestaurantCard[] = [
  {
    id: 1,
    image: require("../assets/images/restaurants/1.jpg"),
    children: "Papa Johns",
    category: "Pizzeria",
    filters: [2, 3],
    address: "5th Ave",
    rating: 4.55,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qui",
    dishes: [
      {
        id: 1,
        name: "Pizza Margarita",
        price: "8",
        description: "3 types of Cheese, onion, tomato sause",
        image: require("../assets/images/dishes/1.jpeg"),
        restaurantId: 1,
      },
      {
        id: 2,
        name: "Pizza Capriciosa",
        price: "10",
        description:
          "2 types of Cheese, olives, mushrooms, onion, tomato sause",
        image: require("../assets/images/dishes/2.jpg"),
        restaurantId: 1,
      },
      {
        id: 3,
        name: "Pizza Lux",
        price: "10",
        description: "3 types of Cheese, onion, tomato sause",
        image: require("../assets/images/dishes/3.jpeg"),
        restaurantId: 1,
      },
      {
        id: 4,
        name: "French Fries",
        price: "6",
        description: "Potato, oil, salt",
        image: require("../assets/images/dishes/4.jpeg"),
        restaurantId: 1,
      },
    ],
  },
  {
    id: 2,
    image: require("../assets/images/restaurants/2.jpg"),
    children: "Istanbul",
    category: "Fast food",
    filters: [4],
    address: "4th Ave",
    rating: 3.7,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    dishes: [
      {
        id: 1,
        name: "Burger Simple",
        price: "8",
        description: "Buns, Cheese, onion, cucumber, tomato sause",
        image: require("../assets/images/dishes/5.jpeg"),
        restaurantId: 2,
      },
      {
        id: 2,
        name: "Chicken Roll",
        price: "10",
        description: "Chicken, Cheese, Salate, Onion, Cream sause",
        image: require("../assets/images/dishes/7.jpg"),
        restaurantId: 2,
      },
    ],
  },
  {
    id: 3,
    image: require("../assets/images/restaurants/3.jpg"),
    children: "Pan Asia",
    category: "Asian",
    filters: [1, 5],
    address: "1st Ave",
    rating: 4.25,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    dishes: [
      {
        id: 1,
        name: "Ramen Classic",
        price: "12",
        description: "Chicken broth, Egg, beans, noodles",
        image: require("../assets/images/dishes/11.jpeg"),
        restaurantId: 3,
      },
      {
        id: 2,
        name: "Rice",
        price: "8",
        description: "Rice, beans, carrot, onion, soy sauce",
        image: require("../assets/images/dishes/12.jpeg"),
        restaurantId: 3,
      },
      {
        id: 3,
        name: "Meat Pie",
        price: "14",
        description: "Chicken, Cheese, Onion, Cream sause",
        image: require("../assets/images/dishes/13.jpeg"),
        restaurantId: 3,
      },
    ],
  },
  {
    id: 4,
    image: require("../assets/images/restaurants/4.png"),
    children: "McDonalds",
    category: "Fast food",
    filters: [4, 6],
    address: "2d Ave",
    rating: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    dishes: [
      {
        id: 1,
        name: "Burger Simple",
        price: "8",
        description: "Buns, Cheese, onion, cucumber, tomato sause",
        image: require("../assets/images/dishes/5.jpeg"),
        restaurantId: 4,
      },
      {
        id: 2,
        name: "Big Mac",
        price: "12",
        description: "Buns, 3 types of Cheese, onion, cucumber, tomato sause",
        image: require("../assets/images/dishes/6.png"),
        restaurantId: 4,
      },
      {
        id: 3,
        name: "Chicken Roll",
        price: "10",
        description: "Chicken, Cheese, Salate, Onion, Cream sause",
        image: require("../assets/images/dishes/7.jpg"),
        restaurantId: 4,
      },
      {
        id: 4,
        name: "McFlurry",
        price: "8",
        description: "Ice cream, cookies, caramel",
        image: require("../assets/images/dishes/8.png"),
        restaurantId: 4,
      },
    ],
  },
  {
    id: 5,
    children: "Intourist",
    category: "Reastaurant",
    address: "6th Ave",
    filters: [2, 5, 6],
    rating: 4,
    description: "",
    dishes: [
      {
        id: 1,
        name: "Ramen Classic",
        price: "12",
        description: "Chicken broth, Egg, beans, noodles",
        image: require("../assets/images/dishes/11.jpeg"),
        restaurantId: 5,
      },
      {
        id: 2,
        name: "Rice",
        price: "8",
        description: "Rice, beans, carrot, onion, soy sauce",
        image: require("../assets/images/dishes/12.jpeg"),
        restaurantId: 5,
      },
      {
        id: 3,
        name: "Meat Pie",
        price: "14",
        description: "Chicken, Cheese, Onion, Cream sause",
        image: require("../assets/images/dishes/13.jpeg"),
        restaurantId: 5,
      },
    ],
  },
];
