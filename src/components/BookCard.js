export default function BookCard({ book }) {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "https://via.placeholder.com/150x220?text=No+Cover";

  return (
    <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center">
      <img
        src={coverUrl}
        alt={book.title}
        className="w-32 h-44 object-cover mb-3 rounded"
      />
      <h2 className="text-lg font-semibold text-center">{book.title}</h2>
      <p className="text-sm text-gray-600">
        {book.author_name ? book.author_name.join(", ") : "Unknown Author"}
      </p>
      <p className="text-sm text-gray-500">
        {book.first_publish_year || "N/A"}
      </p>
    </div>
  );
}
