const wrapper =document.querySelector(".sliderWrapper")
const mrnuItems =document.querySelectorAll(".mrnuItem")



const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./imgs/air.png",
        },
        {
          code: "darkblue",
          img: "./imgs/air2.png",
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
          img: "./imgs/jordan.png",
        },
        {
          code: "green",
          img: "./imgs/jordan2.png",
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
          img: "./imgs/blazer.png",
        },
        {
          code: "green",
          img: "./imgs/blazer2.png",
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
          img: "./imgs/crater.png",
        },
        {
          code: "lightgray",
          img: "./imgs/crater2.png",
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
          img: "./imgs/hippie.png",
          
        },
        {
          code: "black",
          img: "./imgs/hippie2.png",
        },
      ],
    },
];

let choosenProuduct = products[0]

const currentProductImg =document.querySelector(".prouductImg");

const currentProductTitle =document.querySelector(".productTitle");

const currentProductPrice =document.querySelector(".productPrice");

const currentProductColors =document.querySelectorAll(".color");

const currentProductSizes =document.querySelectorAll(".size");

mrnuItems.forEach((item,index)=>{
    item.addEventListener("click", ()=>{
        //chsnge the current slide
        wrapper.style.transform= `translateX(${-100 * index}vw)`;
        //change the choosen product
        choosenProuduct = products[index];

        //change text of currentProduct
        currentProductTitle.textContent=choosenProuduct.title;
        currentProductPrice.textContent= "$" + choosenProuduct.price;
        currentProductImg.src =choosenProuduct.colors[0].img;

        //assing new colors
        
        currentProductColors.forEach((color , index) => {
          color.style.background = choosenProuduct.colors[index].code;
        });
        
    });
});
 

currentProductColors.forEach((color ,index) =>{
  color.addEventListener("click", () =>{
    currentProductImg.src = choosenProuduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) =>{
  size.addEventListener("click",()=>{
    currentProductSizes.forEach((size) =>{
      size.style.backgroundColor= "white";
      size.style.color= "black";
    });
    size.style.backgroundColor= "black";
    size.style.color= "white";
  });
});


const productButton =document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
  payment.style.display="flex";
});

close.addEventListener("click",()=>{
  payment.style.display="none";
});
