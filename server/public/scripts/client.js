console.log('client.js loaded');

var app = angular.module('photoApp', []);

app.controller('PhotoController', ['$http', function($http){
    console.log('controller loaded');
    var self = this;

    self.photoList = [];

    self.getPhotos = function() {
        $http({
            method: 'GET',
            url: '/photos'
        })
        .then(function(response){
            console.log('here is the response', response.data);
            self.photoList = response.data
        });
    };

    self.getPhotos();
    
























}]);