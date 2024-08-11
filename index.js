let Book = {
	title: "JavaScript: The Definitive Guide",
	auther: "David Flanagan",
	publishedYear: 2020,
	Genre: "Programming"
}

console.log(Book.title)
console.log(Book["publishedYear"])

Book.pageCount = 1096;
console.log(Book)

Book.ISPN = "978-1491952023";
console.log(Book)

Book.publishedYear = 2021;
console.log(Book)

Book.auther = [ "David Flanagan", "Agatha Christie"];
Book.reviews = [
{reviewer: "Book Critic", comment: "A comprehensive guide to JavaScript" }
]

console.log(Book)
