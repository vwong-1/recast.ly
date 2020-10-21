import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import exampleVideoData from '/src/data/exampleVideoData.js';
import searchYouTube from '/src/lib/searchYouTube.js';
import YOUTUBE_API_KEY from '/src/config/youtube.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    // Add states here
    this.state = {
      currentVideo: exampleVideoData[0],
      videoData: exampleVideoData,
      query: null
    };

    this.onVideoTitleClick = this.onVideoTitleClick.bind(this);
    this.searchBarClick = this.searchBarClick.bind(this);
    this.onSearchBarChange = this.onSearchBarChange.bind(this);
  }

  // method that changes the state of current video
  onVideoTitleClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  onSearchBarChange(query) {
    this.setState({
      query: query
    });
  }

  componentDidMount() {
    // sets the default state
    // calls searchyoutube with initial data
    var options = {
      key: YOUTUBE_API_KEY,
      query: 'trees',
      max: 5
    };
    searchYouTube(options, (videos) => {
      this.setState({
        currentVideo: videos[0],
        videoData: videos
      });
    });
  }

  searchBarClick(query) {
    var options = {
      key: YOUTUBE_API_KEY,
      query: query,
      max: 5
    };
    searchYouTube(options, (videos) => {
      this.setState({
        currentVideo: videos[0],
        videoData: videos
      });
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search searchBarClick={this.searchBarClick} onSearchBarChange={this.onSearchBarChange} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videoData} onVideoTitleClick={this.onVideoTitleClick} />
          </div>
        </div>
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
