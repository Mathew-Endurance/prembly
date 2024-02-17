var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Quotes.css'; // Import CSS file for styling
function Quotes() {
    const [quotes, setQuotes] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(() => {
        function fetchQuotes() {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const response = yield axios.get(`https://quotable.io/quotes?page=${page}`);
                    setQuotes(response.data.results);
                }
                catch (error) {
                    console.error('Error fetching quotes:', error);
                }
            });
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
    return className = "quotes-container" >
        Quotes < /h1>
        < ul;
    className = "quotes-list" >
        { quotes, : .slice(startIndex, endIndex).map((quote, index) => key = { index }, className = "quote-item" >
                { quote, : .content } < /p>
                < p > -{ quote, : .author } < /p>
                < /li>) }
        < /ul>
        < div;
    className = "pagination" >
        onClick;
    {
        handlePreviousPage;
    }
     > Previous;
    Page < /button>
        < button;
    onClick = { handleNextPage } > Next;
    Page < /button>
        < /div>
        < /div>;
    ;
}
export default Quotes;
