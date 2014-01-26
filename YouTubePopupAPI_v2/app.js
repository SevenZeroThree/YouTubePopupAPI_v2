
var youTube = function () {
    var showMyVideos = function (data) {
        var feed = data.feed;
        var entries = feed.entry || [];
        var html = ['<ul>'];
        for (var i = 0; i < entries.length; i++) {
            var entry = entries[i];
            var title = entry.title.$t;
            var link = entry.link[0].href;
            var thumbnail = entry.media$group.media$thumbnail[0].url;
            var description = entry.media$group.media$description.$t;

            //html.push('<li>', title, '</li>');
            html.push('<li>');
            html.push('<a href="' + link + '" target="_blank">');
            html.push('<img src="' + thumbnail + '" title="' + description + '" width="209" />');
            html.push(title)
            html.push('</a>');
            html.push('</li>');
        }
        html.push('</ul>');
        document.getElementById('videos').innerHTML = html.join('');
    };

    return {
        showMyVideos: showMyVideos
    }
}();