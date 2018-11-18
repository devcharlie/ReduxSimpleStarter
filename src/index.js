import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

const API_KEY = '';


YTSearch({key: API_KEY, term: 'surfboard'}, function(data){
    console.log(data);
})
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