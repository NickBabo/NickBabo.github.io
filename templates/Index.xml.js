/*
	Copyright (C) 2015 Apple Inc. All Rights Reserved.
	See LICENSE.txt for this sample’s licensing information

	Abstract:
	A list template shows a list of items on the right, such as movies or TV shows. Focus on one to see its related content on the left, such as its artwork or description.
*/
var Template = function() {
	return '<?xml version="1.0" encoding="UTF-8"?>' +
  '<document>' +
  '<stackTemplate>' +
  '<banner>' +
  '<title>Available Action Movies</title>'+
  '</banner> '+
  '<collectionList> '+
  '<shelf> '+
  '<section> '+
  '<lockup onselect="playMedia(\'https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4\', \'video\')">' +
  '<img src="path to image" width="182" height="274"/> '+
  '<title>Movie 1</title>' +
  '</lockup> '+
  '<lockup onselect="playMedia('path to video', 'video')"> '+
  '<img src="path to image" width="182" height="274" /> '+
  '<title>Movie 2</title> '+
  '</lockup>' +
  '</section>' +
  '</shelf> '+
  '</collectionList> '+
  '</stackTemplate>' +
  '</document>' +

}
