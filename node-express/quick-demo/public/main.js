(function () {
document.addEventListener('DOMContentLoaded', init);
function init() {
  const list = document.getElementById('list');
  const button = document.getElementById('myBtn');
  const createQuoteForm = document.getElementById('create-quote');

  async function getQuotes(e) {
    e && e.preventDefault();
    const response = await fetch('http://localhost:3300/quotes');
    const quotes = await response.json();
    
   
    let listItems = '';
    quotes.forEach((quote) => {
      listItems += `<li>${quote.name} says: "${quote.text}"</li>`;
    });
    // NEVER DO THIS!! BAD!! XSS
    list.innerHTML = listItems;
  }

  async function addQuote(event) {
    event && event.preventDefault();
    const formData = new FormData(createQuoteForm);
    const newQuote = {};
    for ([key, value] of formData.entries()) {
      newQuote[key] = value;
    }

    try {
     await fetch('http://localhost:3300/quotes', {
       method: 'post',
       headers: {
           'Content-Type': 'application/json'
       },
       body: JSON.stringify(newQuote)
     });

       // clear the form, reload the quotes list!
       createQuoteForm.reset();
       getQuotes();

    } catch(e) {
      console.log('Error creating the quoate.', e);
    }
    
  }
   getQuotes();
   button.addEventListener('click', getQuotes);
   createQuoteForm.addEventListener('submit', addQuote);
  }
})()

// another way to fetch() the quotes 
// const getData = async (url) => {
//   try {
//     const data = await fetch(`${url}/quotes`);
//     const quoteData = await data.json()
  
//     return document.getElementById('list').innerHTML = JSON.stringify(quoteData)
//   } catch(e) {
//     console.log(e)
//   }
// } add onclick"getData('http://localhost:3300/quotes') to button to use this example