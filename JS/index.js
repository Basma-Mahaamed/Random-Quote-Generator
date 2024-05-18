const quotes = [
   { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
   { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
   { text: "In the end, it's not the years in your life that count. It's the life in your years.", author: "Abraham Lincoln" },
   { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
   { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
   { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" }
 ];
 
 let lastIndex = -1;
 
 function generateRandomQuote() {
   let newIndex;
   do {
     newIndex = Math.floor(Math.random() * quotes.length);
   } while (newIndex === lastIndex); // Repeat until a new index is generated
   
   lastIndex = newIndex;
 
   document.getElementById("text").textContent = quotes[newIndex].text;
   document.getElementById("author").textContent = "- " + quotes[newIndex].author;
 }
 
 document.getElementById("new-quote").addEventListener("click", generateRandomQuote);
 
 generateRandomQuote();
 