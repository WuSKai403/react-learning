import { useState } from "react";
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
    const [books, setBooks] = useState([]);

    const editBookById = (id, newTitle) => {
        const updatedBooks = books.map((book) => {
            if (id===book.id) {
                return { ...book, title: newTitle }
            }
            return book;
        })
        setBooks(updatedBooks);
    };

    const deleteBookById = (id) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });
        setBooks(updatedBooks);
    };
    const createBoot = (title) => {
        const updatedBooks = [
            ...books,
            { id: Math.round(Math.random() * 999), title }
        ];
        console.log('need to add book with:', { title });
        setBooks(updatedBooks);
    };

    return (<div className="app">
        <h1>Reading Lust</h1>
        <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
        <BookCreate onCreate={createBoot} />
    </div>)
}

export default App;