import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY =  '';

//Create a new component. This should produce some HTML
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}


//Take this generated HTMl and put it on the webpage
ReactDOM.render(<App />, document.querySelector('.container'));