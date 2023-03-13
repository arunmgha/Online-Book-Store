// get the book catalog element
const bookCatalog = document.querySelector('#book-catalog');

// listen for clicks on the "Add to Cart" buttons
bookCatalog.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const book = event.target.parentNode;
    const title = book.querySelector('h3').textContent;
    const price = book.querySelector('p:last-child').textContent;
    
    addToCart(title, price);
  }
});

// add an item to the shopping cart
function addToCart(title, price) {
  const shoppingCart = document.querySelector('#shopping-cart ul');
  const total = document.querySelector('#shopping-cart p');
  
  const item = document.createElement('li');
  item.textContent = `${title} - ${price}`;
  shoppingCart.appendChild(item);
  
  const currentTotal = parseFloat(total.textContent.replace('$', ''));
  const newTotal = currentTotal + parseFloat(price.replace('$', ''));
  total.textContent = `Total: $${newTotal.toFixed(2)}`;
}

// listen for clicks on the "Checkout" button
const checkoutButton = document.querySelector('#shopping-cart button');
checkoutButton.addEventListener('click', () => {
  alert('Thank you for your purchase!');
});
