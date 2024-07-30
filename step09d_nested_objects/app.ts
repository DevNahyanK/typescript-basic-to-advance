type Author = {
    firstName: string,
    lastName: string;

};

type Book = {
    author: Author;
    name: string;

};

const myBook : Book = {
    author: {
        firstName: "J.K",
        lastName: "Rowling"
    },
    name: "Harry Potter"
}