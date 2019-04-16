import React from 'react';
import './DisplayQuote.css';

const DisplayQuote = ({ quotestate }) => {
    return (
        <div className="DisplayQuote">
            <ul>
                <li>Nom : {quotestate.character}</li>
                <li><img src={quotestate.image}  alt="simpson" /></li>
                <li>Quote : {quotestate.quote}</li>
            </ul>
        </div>
    );
};

export default DisplayQuote;