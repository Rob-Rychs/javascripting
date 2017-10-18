(function () {
document.addEventListener('DOMContentLoaded', init);
function init() {
  const list = document.getElementById('list');
  const button = document.getElementById('myBtn');

   button.addEventListener('click', async (e) => {
     e.preventDefault();
     const response = await fetch('http://localhost:3300/quotes');
     const quotes = await response.json();
    
     let listItems = '';
     quotes.forEach((quote) => {
       listItems += `<li>${quote.name} says: "${quote.text}"</li>`;
     });
     // NEVER DO THIS!! BAD!! XSS
     list.innerHTML += listItems;
   })
}
})()

// const getData = async (url) => {
//   try {
//     const data = await fetch(`${url}/quotes`);
//     const quoteData = await data.json()
  
//     return document.getElementById('list').innerHTML = JSON.stringify(quoteData)
//   } catch(e) {
//     console.log(e)
//   }
// } add onclick"getData('http://localhost:3300/quotes') to button to use this example