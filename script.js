var divClassHeader = document.querySelector('.header');
var divClassProducts = document.querySelector('.products');
var requestURL = 'https://raw.githubusercontent.com/KrisevichD/Test/master/products.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var productsList = request.response;
    populateHeader(productsList);
    showProducts(productsList);
}
function populateHeader(jsonObj) {
    var myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['company'];
    divClassHeader.appendChild(myH1);
}
function showProducts(jsonObj) {
    var products = jsonObj['products'];
    for (var i = 0; i < products.length; i++) {
        var myProdsItem = document.createElement('div');
        myProdsItem.className = "products_item";
        var myH2 = document.createElement('h2');
        var myPrice = document.createElement('p');
        myH2.textContent = products[i].name;
        myPrice.textContent = 'Price: ' + products[i].price;
        myProdsItem.appendChild(myH2);
        myProdsItem.appendChild(myPrice);
        divClassProducts.appendChild(myProdsItem);
    }
}