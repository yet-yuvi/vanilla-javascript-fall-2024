const url =
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json";

const loadingComponent = document.getElementById("loading-text");
const productListContainer = document.getElementById("product-list");

const getProductRow = (productItem, index) => {
  const columnNames = ["name", "price", "type"];

  const serialCell = document.createElement("td");
  serialCell.classList.add(
    "m-auto",
    "px-2",
    "py-3",
    "text-center",
    "font-medium"
  );
  serialCell.innerText = (index + 1).toString();

  const cells = columnNames.map((cellData) => {
    const cell = document.createElement("td");
    cell.classList.add("m-auto", "px-2", "py-3", "text-center");
    const value = productItem[cellData];

    if (cellData === "price") {
      cell.innerText = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(Number(value));
    } else {
      cell.innerText = value;
    }

    return cell;
  });

  const productRowFull = document.createElement("tr");
  productRowFull.className = "hover:bg-blue-400 border-b cursor-pointer";
  productRowFull.append(serialCell, ...cells);
  return productRowFull;
};

const renderProductsList = (productList) => {
  productList.forEach((productItem, idx) => {
    const productRow = getProductRow(productItem, idx);
    productListContainer.appendChild(productRow);
  });
};

const getProducts = async () => {
  const apiResponse = await fetch(url);
  if (!apiResponse.ok) {
    throw new Error(
      `HTTP error: ${apiResponse.status} ${apiResponse.statusText}`
    );
  }
  const products = await apiResponse.json();
  return products;
};

const renderProducts = async () => {
  loadingComponent.innerText = "loading.....";

  try {
    const productList = await getProducts();
    productListContainer.innerHTML = "";

    if (Array.isArray(productList) && productList.length > 0) {
      renderProductsList(productList);
    } else {
      productListContainer.innerHTML =
        '<tr><td colspan="4" class="text-center py-4">No products found</td></tr>';
    }
  } catch (error) {
    console.error(error);
    alert(
      "Cannot load data from API: " +
        (error && error.message ? error.message : "Unknown error")
    );
  } finally {
    loadingComponent.innerText = "";
  }
};

renderProducts();
