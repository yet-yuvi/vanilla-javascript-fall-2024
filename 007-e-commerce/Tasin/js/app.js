const products = [
  {
    id: 1,
    name: "Think_pad Laptop",
    price: 1500,
    image: "./assets/images/Best-laptops-review.webp",
    categories: ["Laptops"],
  },
  {
    id: 2,
    name: "Wireless Mouse",
    price: 50,
    image: "./assets/images/Best-laptops-review.webp",
    categories: ["Accessories", "Peripherals"],
  },
  {
    id: 3,
    name: "Mechanical Keyboard",
    price: 100,
    image: "./assets/images/Best-laptops-review.webp",
    categories: ["Accessories", "Peripherals"],
  },
  {
    id: 4,
    name: "External Hard Drive",
    price: 120,
    image: "./assets/images/Best-laptops-review.webp",
    categories: ["Storage", "Accessories"],
  },
  {
    id: 5,
    name: "Graphics Card",
    price: 500,
    image: "./assets/images/Best-laptops-review.webp",
    categories: ["Components", "Gaming"],
  },
  {
    id: 6,
    name: "Portable SSD",
    price: 200,
    image: "./assets/images/Best-laptops-review.webp",
    categories: ["Storage", "Accessories"],
  },
  {
    id: 7,
    name: "Gaming Monitor",
    price: 300,
    image: "./assets/images/Best-laptops-review.webp",
    categories: ["Monitors", "Gaming"],
  },
  {
    id: 8,
    name: "All-in-One Printer",
    price: 150,
    image: "./assets/images/Best-laptops-review.webp",
    categories: ["Peripherals", "Printers"],
  },
];

const productGrid=document.getElementById('product-grid');

const getProductImageComponent = (product) => {
    const productImageComponent=document.createElement("img");
    productImageComponent.className="w-full h-48 object-cover mb-4";
    productImageComponent.src=product.image;
    productImageComponent.alt=product.name;
    
    return productImageComponent;
};

const getProductNameComponent = (productName) => {
    const productNameComponent=document.createElement("h2");
    productNameComponent.className="text-lg font-semibold mb-2";
    productNameComponent.innerText=productName;
    return productNameComponent;
};
const getProductPriceComponent = (productPrice) => {
    const productPriceComponent=document.createElement("p");
    productPriceComponent.className="text-gray-700 mb-4";
    productPriceComponent.innerText=`$${productPrice.toFixed(2)}`;
    return productPriceComponent;
};

const getAddToCartBtn = (product) => {
    const addToCartBtn=document.createElement("button");
    addToCartBtn.className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
    addToCartBtn.innerText="Add to Cart";
    return addToCartBtn;
};

const getProductCard = (product) => {
    const productCard=document.createElement("div");
    productCard.className="bg-white p-4 rounded shadow";
    const productImageComponent=getProductImageComponent(product);
    const productNameComponent=getProductNameComponent(product.name);
    const productPriceComponent=getProductPriceComponent(product.price);
    const addToCartBtn=getAddToCartBtn(product);

    productCard.append(
        productImageComponent,
        productNameComponent,
        productPriceComponent,
        addToCartBtn,
    );

    return productCard;
};

const renderProducts = (products) => {
   const productCards=products.map((product) => {
      const productCard=getProductCard(product);
      return productCard;
   });
    productGrid.innerHTML=" ";
    productGrid.append(...productCards);

}

renderProducts(products);