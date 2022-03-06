const products = [
  {
    id: 1,
    image: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4351/9781435159587.jpg",
    title: "Dorian Grey",
    author: "Oscar Wilde",
    price: 15,
    stock: 10,
  },
  {
    id: 2,
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Jane_Eyre_title_page.jpg",
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    price: 20,
    stock: 10,
  },
  {
    id: 3,
    image: "https://cdn.waterstones.com/bookjackets/large/9780/1411/9780141192475.jpg",
    title: "Emma",
    author: "Jane Austen",
    price: 10,
    stock: 10,
  },
  {
    id: 4,
    image: "https://images.penguinrandomhouse.com/cover/9780451530998",
    title: "Hard Times",
    author: "Charles Dickens",
    price: 14,
    stock: 10,
  },
  {
    id: 5,
    image: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781787557000/persuasion-9781787557000_hr.jpg",
    title: "Persuasion",
    author: "Jane Austen",
    price: 18,
    stock: 10,
  },
  {
    id: 6,
    image: "https://kbimages1-a.akamaihd.net/9541dc73-a03c-433d-9e2c-9fba5ff67ea5/1200/1200/False/dracula-173.jpg",
    tittle: "Dracula",
    author: "Bram Stoker",
    price: 25,
    stock: 10,
  },
  {
    id: 7,
    image: "http://prodimage.images-bn.com/pimages/9781950435098_p0_v2_s1200x630.jpg",
    tittle: "Little Women",
    author: "Louisa May Alcott",
    price: 14,
    stock: 10,
  },
];


export const getFetch = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(products), 3000);
    });
  };
  