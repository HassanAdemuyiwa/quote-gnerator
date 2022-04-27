var apiQuotes = [];

// Get Quotes From API
async function getQuotes() {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    console.log(apiQuotes[13]);
  } catch (err) {
    // Catch Error Here
  }
}

// On Load
getQuotes();
