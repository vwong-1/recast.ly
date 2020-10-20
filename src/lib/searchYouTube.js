var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      q: options.query,
      maxResults: options.max,
      videoEmbeddable: true,
      key: options.key,
      part: "snippet",
      type: 'video'
    },
    success: function (data) {
      console.log(data);
      callback(data.items);
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('Failed to get data from youtube', data);
    }
  });

};

export default searchYouTube;