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
