const inicio = document.querySelector('#nuevos');

const requestURL = 'DataBase.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
  const products = request.response;
  showNewProducts(products);
};
function showNewProducts(jsonObj) {
  const products = jsonObj['products'];
      
  for (var i = 0; i < 2; i++) {
      const column = document.createElement('div');
      const myCard = document.createElement('div');
      const productImg = document.createElement('img');
      const cardBody = document.createElement('div');
      const cardTittle = document.createElement('h2');
      const cardBadge = document.createElement('span');
      const description = document.createElement('p');
      const price = document.createElement('i');
      const buyNow = document.createElement('a');
      
      cardBadge.textContent = products[i].name;
      description.textContent = products[i].description;
      price.textContent = 'Nuevo';
      buyNow.textContent = 'Comprar ahora';
      buyNow.title = 'Comprar ahora';
      
      productImg.src= products[i].img;
      buyNow.src= '#';
      
      column.className += "col-12 offset-0 col-sm-6 offset-sm-0";
      myCard.className += "card bg-dark text-white";
      productImg.className += "card-img";
      cardBody.className += "card-img-overlay";
      cardTittle.className += "card-title";
      description.className += "card-text";
      price.className += "badge badge-success";
      buyNow.className += "btn btn-warning";
      cardBadge.className += "badge badge-light";
      
      cardTittle.appendChild(cardBadge);
      column.appendChild(myCard);
      myCard.appendChild(productImg);
      myCard.appendChild(cardBody);
      cardBody.appendChild(cardTittle);
      cardBody.appendChild(price);
      cardBody.appendChild(description);
      cardBody.appendChild(buyNow);
      
      inicio.appendChild(column);
  }
}