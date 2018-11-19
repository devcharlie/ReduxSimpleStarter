import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyAdcrkgkzCPMRZIWXnrHtjmVPMM0pPNOMQ';

//Create a new component. This should produce some HTML
class App extends Component {
    constructor(props){
        super(props);

        this.state = { videos: []};

        YTSearch({key: API_KEY, term: 'surfboard'}, (data) => {
            this.setState({videos : data});
        });
    }
    render()
    {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}


//Take this generated HTMl and put it on the webpage
ReactDOM.render(<App />, document.querySelector('.container'));