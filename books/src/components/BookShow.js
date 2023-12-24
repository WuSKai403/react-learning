import { useState } from "react";
import BookEdit from './BookEdit';

function BookShow({onEdit, book, onDelete }) {
    const [showEdit, setShowEdit] = useState(false);
    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    const handleSubmit = (id, newTitle) => {
        setShowEdit(false);
        onEdit(id, newTitle);
    };

    let content = <h3>{book.title}</h3>;
    if (showEdit) {
        content = <BookEdit onSubmit={handleSubmit} book={book} />;
    }

    const handleDeleteClick = () => {
        onDelete(book.id);
    }
    return <div className="book-show">
        <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
        {content}
        <div className="actions">
            <button className="edit" onClick={handleEditClick}>
                Edit
            </button>
            <button className="delete" onClick={handleDeleteClick}>
                Deletes
            </button>
        </div>
    </div>
}
export default BookShow;