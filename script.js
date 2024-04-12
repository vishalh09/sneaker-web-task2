const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "https://i.postimg.cc/s23fp4mK/air.png",
      },
      {
        code: "darkblue",
        img: "https://i.postimg.cc/gkR6s4yP/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "https://i.postimg.cc/x135x9GY/jordan.png",
      },
      {
        code: "green",
        img: "https://i.postimg.cc/WzcJckjy/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "https://i.postimg.cc/t44nbyQ9/blazer.png",
      },
      {
        code: "green",
        img: "https://i.postimg.cc/HknnK2Xx/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "https://i.postimg.cc/KjcxTG5z/crater.png",
      },
      {
        code: "lightgray",
        img: "https://i.postimg.cc/dVZvrSG8/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "https://i.postimg.cc/SRYVD8dt/hippie.png",
      },
      {
        code: "black",
        img: "https://i.postimg.cc/QtQctb6D/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");



menuItems.forEach((item, index) => {
  item.addEventListener("click", ()=>{
    
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
    
    //change choosen product
    choosenProduct = products[index];
    
    //change text current product
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;
    
    //assing new colors
    currentProductColors.forEach((color, index) => {
    color.style.backgroundColor = choosenProduct.colors[index].code;
      });
  });
});

currentProductColors.forEach((color,index)=>{
  color.addEventListener("click", ()=>{
   currentProductImg.src = choosenProduct.colors[index].Img 
 });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});