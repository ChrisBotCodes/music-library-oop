function Library(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

function Playlist(name) {
  this.name = name;
  this.tracks = [];
  this.overallRating = function() {
    let ratingSum = 0;
    if (this.tracks.length > 0) {
      for (track of this.tracks) {
        ratingSum += track.rating;
      }
      let avgRating = ratingSum / this.tracks.length
    } else {
      let avgRating = 'N/A';
    }
    return avgRating;
  };
  this.totalDuration = function() {
    let sum = 0;
    for (track of this.tracks) {
      sum += track.length;
    }
    return sum;
  };
}

function Track(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;

}