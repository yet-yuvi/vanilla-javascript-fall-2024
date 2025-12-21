const url =
  'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json';

const loadingComponent = document.getElementById('loading-text');
const productListContainer = document.getElementById('product-list');

const generateProducts = (products) => {
    productListContainer.innerHTML = '';
    const productItems = products.map((product) => {
        const productItem = document.createElement('li');
        productItem.className = 'bg-black/5 mb-4 px-4 py-2 rounded-md uppercase text-center';
        productItem.innerText = product.name;
        return productItem;
    });

    productListContainer.append(...productItems);
};



renderProducts();