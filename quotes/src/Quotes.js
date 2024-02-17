import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Quotes.css'; // Import CSS file for styling

function Quotes() {
  const [quotes, setQuotes] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchQuotes() {
      try {
        const response = await axios.get(`https://quotable.io/quotes?page=${page}`);
        setQuotes(response.data.results);
      } catch (error) {
        console.error('Error fetching quotes:', error);
      }
    }
    fetchQuotes();
  }, [page]);

  // Calculate pagination range
  const startIndex = (page - 1) * 5;
  const endIndex = startIndex + 5;

  // Handle pagination
  const handleNextPage = () => {
    setPage((prevPage) => (prevPage === Math.ceil(quotes.length / 5) ? 1 : prevPage + 1));
  };

  const handlePreviousPage = () => {
    setPage((prevPage) => (prevPage === 1 ? Math.ceil(quotes.length / 5) : prevPage - 1));
  };

  return (
    <div className="quotes-container">
      <h1>Quotes</h1>
      <ul className="quotes-list">
        {quotes.slice(startIndex, endIndex).map((quote, index) => (
          <li key={index} className="quote-item">
            <p>{quote.content}</p>
            <p>- {quote.author}</p>
          </li>
        ))}
      </ul>
      <div className="pagination">
        <button onClick={handlePreviousPage}>Previous Page</button>
        <button onClick={handleNextPage}>Next Page</button>
      </div>
    </div>
  );
}

export default Quotes;
