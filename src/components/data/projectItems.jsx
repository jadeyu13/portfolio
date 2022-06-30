import { v4 as uuidv4 } from 'uuid';
export const projectItems = [
  {
    id: uuidv4(),
    title: "Shopping Cart",
    desc: "React.JS | TypeScript | React bootstrap",
    github: "https://github.com/jadeyu13/shopping-cart",
    demo: "https://shopping-cart-062022.netlify.app/",
    image: "./images/cart.jpeg",
  },
  {
    id: uuidv4(),
    title: "Recipe Application",
    desc: "React.JS | Recipe API | styled-components",
    github: "https://jadeyu13.github.io/recipe-app/",
    demo: 'https://super-strudel-2f893f.netlify.app/',
    image: "./images/recipe.jpeg",
  },
  {
    id: uuidv4(),
    title: "Budget Tracking Application",
    desc: "React.JS | useReducer | useContext hooks",
    github: "https://github.com/jadeyu13/expense-tracker",
    demo: "https://jadeyu13.github.io/expense-tracker/",
    image: "./images/expenses.jpeg",
  },
 
];

// export default projects