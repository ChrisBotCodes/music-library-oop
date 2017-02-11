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
    let avgRating = [];
    if (this.tracks.length > 0) {
      for (track of this.tracks) {
        ratingSum += track.rating;
      }
      avgRating.push(ratingSum / this.tracks.length);
    } else {
      avgRating.push('N/A');
    }
    return avgRating[0];
  };
  this.totalDuration = function() {
    let sum = 0;
    for (track of this.tracks) {
      sum += track.length;
    }
    return sum;
  }
}

function Track(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}

Library.prototype.addPlaylist = function(playlist) {
  this.playlists.push(playlist);
}

Playlist.prototype.addTrack = function(track) {
  this.tracks.push(track);
}

let library1 = new Library('Cool Library', 'Chris');
let playlist1 = new Playlist('Cool Playlist')
let track1 = new Track('track 1', 1, 200);
let track2 = new Track('track 2', 5, 150);
let track3 = new Track('track 3', 5, 95);

playlist1.addTrack(track1);
playlist1.addTrack(track2);
playlist1.addTrack(track3);
library1.addPlaylist(playlist1);
console.log('library1--->', library1);
console.log('library1.name--->', library1.name);
console.log('library1.creator--->', library1.creator);
console.log('library1.playlists--->', library1.playlists);
console.log('library1.playlists[0].name--->', library1.playlists[0].name);
console.log('library1.playlists[0].tracks--->', library1.playlists[0].tracks);
console.log('library1.playlists[0].overallRating--->', library1.playlists[0].overallRating());
console.log('library1.playlists[0].totalDuration--->', library1.playlists[0].totalDuration());