const tienda = document.querySelector('#catalogo');
const requestURL = 'DataBase.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
  const products = request.response;
  showProducts(products);
};

function showProducts(jsonObj) {
  const products = jsonObj['products'];
      
  for (var i = 0; i < products.length; i++) {
      const column = document.createElement('div');
      const myCard = document.createElement('div');
      const productImg = document.createElement('img');
      const cardBody = document.createElement('div');
      const cardTittle = document.createElement('h5');
      const description = document.createElement('p');
      const price = document.createElement('i');
      const buyNow = document.createElement('a');
      const cat = document.createElement('i');
      const br = document.createElement('br');
      const onstock = document.createElement('i');
      
      cardTittle.textContent = products[i].name;
      description.textContent = products[i].description;
      price.textContent = '$'+products[i].price;
      buyNow.textContent = 'Comprar ahora';
      buyNow.title = 'Comprar ahora';
      cat.textContent = ' Referencia '+products[i].id;
      myCard.setAttribute('id', products[i].id);
      
      productImg.src= products[i].img;
      buyNow.src= '#';
      
      column.className += "col-12 offset-0 col-sm-5 offset-sm-1";
      myCard.className += "card";
      productImg.className += "card-img-top";
      cardBody.className += "card-body";
      cardTittle.className += "card-title";
      description.className += "card-text";
      price.className += "badge badge-danger";
      buyNow.className += "btn btn-warning";
      cat.className += "text-muted";
      
      if (products[i].best_seller === true){
          const bestSeller = document.createElement('span');
          const checkSeller = document.createElement('i');
          checkSeller.textContent = ' Best seller best-seller';
          bestSeller.className += "badge badge-success fa fa-check";
          bestSeller.appendChild(checkSeller);
          cardBody.appendChild(bestSeller);
      }
      if(products[i].available === true){     
        onstock.textContent = 'Disponible';
        onstock.className += "badge badge-success";
      }else{
        onstock.textContent = 'No disponible';
        onstock.className += "badge badge-danger";
      }
      
      column.appendChild(myCard);
      myCard.appendChild(productImg);
      myCard.appendChild(cardBody);
      cardBody.appendChild(cardTittle);
      cardBody.appendChild(price);
      cardBody.appendChild(description);
      cardBody.appendChild(buyNow);
      cardBody.appendChild(br);
      cardBody.appendChild(onstock);
      cardBody.appendChild(cat);
      
      tienda.appendChild(column);
  }
}