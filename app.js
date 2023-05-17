const cardArray = [
  {
    name: "cheeseburger",
    image: "images/cheeseburger.png",
  },
  {
    name: "fries",
    image: "images/fries.png",
  },
  {
    name: "hotdog",
    image: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    image: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    image: "images/milkshake.png",
  },
  {
    name: "pizza",
    image: "images/pizza.png",
  },
  {
    name: "cheeseburger",
    image: "images/cheeseburger.png",
  },
  {
    name: "fries",
    image: "images/fries.png",
  },
  {
    name: "hotdog",
    image: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    image: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    image: "images/milkshake.png",
  },
  {
    name: "pizza",
    image: "images/pizza.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
