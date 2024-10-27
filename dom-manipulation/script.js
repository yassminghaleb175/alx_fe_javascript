// Array to store quote objects
const quotes = [
    { text: "The only limit to our realization of tomorrow is our doubts of today.", category: "Motivation" },
    { text: "Life is 10% what happens to us and 90% how we react to it.", category: "Life" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", category: "Inspiration" }
];

// Function to display a random quote
function showRandomQuote() {
    const quoteContainer = document.getElementById("quoteContainer");
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    // Clear previous quote
    while (quoteContainer.firstChild) {
        quoteContainer.removeChild(quoteContainer.firstChild);
    }

    // Create new elements for the quote and its category
    const quoteText = document.createElement("p");
    quoteText.textContent = `"${randomQuote.text}"`;

    const quoteCategory = document.createElement("p");
    quoteCategory.textContent = `— ${randomQuote.category}`;

    // Append the new elements to the container
    quoteContainer.appendChild(quoteText);
    quoteContainer.appendChild(quoteCategory);
}

// Function to add a new quote
function addQuote() {
    const newQuoteText = document.getElementById("newQuoteText").value.trim();
    const newQuoteCategory = document.getElementById("newQuoteCategory").value.trim();

    if (newQuoteText && newQuoteCategory) {
        const newQuote = { text: newQuoteText, category: newQuoteCategory };
        quotes.push(newQuote);

        // Clear input fields
        document.getElementById("newQuoteText").value = "";
        document.getElementById("newQuoteCategory").value = "";

        // Optionally display the new quote immediately
        showRandomQuote();
    } else {
        alert("Please enter both a quote and a category.");
    }
}

// Initial call to display a random quote when the page loads
document.addEventListener("DOMContentLoaded", showRandomQuote);
Example HTML to Use with script.js
Here’s the corresponding HTML file you can use, which remains unchanged:

html
Copy code
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quote Manager</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        #quoteContainer {
            margin-bottom: 20px;
            font-size: 1.2em;
        }
        input {
            margin-right: 10px;
        }
    </style>
</head>
<body>
    <h1>Random Quote Generator</h1>
    <div id="quoteContainer"></div>
    <button onclick="showRandomQuote()">Show Random Quote</button>

    <div>
        <input id="newQuoteText" type="text" placeholder="Enter a new quote" />
        <input id="newQuoteCategory" type="text" placeholder="Enter quote category" />
        <button onclick="addQuote()">Add Quote</button>
    </div>

    <script src="script.js"></script>
</body>
</html>
