import VideoListEntry from './VideoListEntry';

var VideoList = (props) => (
  <div className="video-list">
    {props.videos.map(video =>
      <VideoListEntry video={video} />
    )};
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;

/*
var VideoList = (props) => (
  <div className="video-list">
  <div><h5><em>videoListEntry</em> view goes here</h5></div>
  <div><h5><em>videoListEntry</em> view goes here</h5></div>
  <div><h5><em>videoListEntry</em> view goes here</h5></div>
  <div><h5><em>videoListEntry</em> view goes here</h5></div>
  <div><h5><em>videoListEntry</em> view goes here</h5></div>
</div>
);
*/