// Store the selected elements that we are going to use. 
const selectProduct = document.querySelector('#product');

//Constant of temples
const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

//Function to template a product
function mapingProduct(product) {
	return `<option value="${product.id}">${product.name}</option>`
}

//Templating all product
function renderAllProducts(products) {
    const start = `<option value="" selected disabled>Select a Product...</option>`;
	const html = products.map(mapingProduct);
	selectProduct.innerHTML = start.concat(html.join(""));
}

renderAllProducts(products);