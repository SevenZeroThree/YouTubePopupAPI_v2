///
///
/// https://developers.google.com/youtube/2.0/developers_guide_json
///
var youTube = function () {
    var showMyVideos = function (data) {
        var feed = data.feed;
        var entries = feed.entry || [];
        var html = ['<ul>'];
        for (var i = 0; i < entries.length; i++) {
            // Create a new video with the entry from the feed
            var video = new _video(entries[i]);

            html.push('<li>');
            html.push('<a href="' + video.link + '" title="' + video.description + '" target="_blank">');
            html.push('<img src="' + video.thumbnail + '" width="209" />');
            html.push(video.title)
            html.push('</a>');
            html.push('</li>');
        }
        html.push('</ul>');
        document.getElementById('videos').innerHTML = html.join('');
    },
    _video = function (video) {
        this.title = video.title.$t;

        // There are several links in the feed
        // Position 0 is the link to the video
        // Other links are to related videos, etc.
        this.link = video.link[0].href;

        // Each video can have several thumbnails
        // The one at position 0 is the thumbnail used for the video
        this.thumbnail = video.media$group.media$thumbnail[0].url;

        this.description = video.media$group.media$description.$t;
    };

    return {
        showMyVideos: showMyVideos
    }
}();