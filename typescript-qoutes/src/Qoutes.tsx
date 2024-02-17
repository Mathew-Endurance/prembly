import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Qoutes.css'; // Import CSS file for styling

interface Quote {
  content: string;
  author: string;
}

function Quotes(): JSX.Element {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [page, setPage] = useState<number>(1);

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
  const startIndex: number = (page - 1) * 5;
  const endIndex: number = startIndex + 5;

  // Handle pagination
  const handleNextPage = () => {
    setPage((prevPage: number) => (prevPage === Math.ceil(quotes.length / 5) ? 1 : prevPage + 1));
  };

  const handlePreviousPage = () => {
    setPage((prevPage: number) => (prevPage === 1 ? Math.ceil(quotes.length / 5) : prevPage - 1));
  };

  return (
    <div className="quotes-container">
      <h1>Quotes</h1>
      <ul className="quotes-list">
        {quotes.slice(startIndex, endIndex).map((quote: Quote, index: number) => (
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
