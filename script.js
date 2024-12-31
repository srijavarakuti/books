
const books = [
    {
        title: "The Great Gatsby",
        price: "$10.99",
        image: "https://via.placeholder.com/150x200?text=The+Great+Gatsby"
    },
    {
        title: "1984",
        price: "$8.99",
        image: "https://via.placeholder.com/150x200?text=1984"
    },
    {
        title: "To Kill a Mockingbird",
        price: "$12.99",
        image: "https://via.placeholder.com/150x200?text=To+Kill+a+Mockingbird"
    },
    {
        title: "The Catcher in the Rye",
        price: "$9.99",
        image: "https://via.placeholder.com/150x200?text=The+Catcher+in+the+Rye"
    }
];
const bookGrid = document.getElementById('book-grid');

books.forEach(book => {
    const bookCard = document.createElement('div');
    bookCard.className = 'book-card';
    bookCard.innerHTML = `
        <img src="${book.image}" alt="${book.title}">
        <h3>${book.title}</h3>
        <p>${book.price}</p>
        <button class="btn">Add to Cart</button>
    `;
    bookGrid.appendChild(bookCard);
});
