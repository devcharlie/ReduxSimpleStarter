import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideDetail from './components/video_detail';

const API_KEY = 'AIzaSyAdcrkgkzCPMRZIWXnrHtjmVPMM0pPNOMQ';

//Create a new component. This should produce some HTML
class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('surfboards')

    }

    videoSearch(term){
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render()
    {
        return (
            <div>
                <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
                <VideDetail video={this.state.selectedVideo} />
                <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
                           videos={this.state.videos} />

            </div>
        );
    }
}


//Take this generated HTMl and put it on the webpage
ReactDOM.render(<App />, document.querySelector('.container'));