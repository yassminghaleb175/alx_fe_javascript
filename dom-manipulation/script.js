// Initial array of quotes
let quotes = [
    { text: "The only limit to our realization of tomorrow is our doubts of today.", category: "Motivation" },
    { text: "In the middle of difficulty lies opportunity.", category: "Wisdom" },
  ];
  
  // Check for the showRandomQuote function
  function showRandomQuote() {
    // Check for logic to select a random quote and update the DOM
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteDisplay = document.getElementById("quoteDisplay");
    const selectedQuote = quotes[randomIndex];
    quoteDisplay.innerText = `"${selectedQuote.text}" - ${selectedQuote.category}`;
  }
  
  // Check for the addQuote function
  function addQuote() {
    // Retrieve input values
    const newQuoteText = document.getElementById("newQuoteText").value;
    const newQuoteCategory = document.getElementById("newQuoteCategory").value;
  
    // Validate that inputs are provided
    if (newQuoteText && newQuoteCategory) {
      // Check for logic to add a new quote to the quotes array
      quotes.push({ text: newQuoteText, category: newQuoteCategory });
  
      // Clear input fields after adding
      document.getElementById("newQuoteText").value = "";
      document.getElementById("newQuoteCategory").value = "";
  
      alert("New quote added successfully!");
    } else {
      alert("Please enter both a quote and a category.");
    }
  }
  
  // Check for event listener on the “Show New Quote” button
  document.getElementById("newQuote").addEventListener("click", showRandomQuote);
  document.getElementById("addQuoteButton").addEventListener("click", addQuote);
  
  