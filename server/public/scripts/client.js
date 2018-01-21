console.log('client.js loaded');

var app = angular.module('photoApp', []);

app.controller('PhotoController', ['$http', function($http){
    console.log('controller loaded');
    var self = this;
    self.reactions = [ 
        { name: 'Like', class: 'fa fa-thumbs-up', id: 1 },
        { name: 'Heart', class: 'fa fa-heart', id: 2 }
    ];
   

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
    

    self.updateCounts = function(photoID, reactionID) {
        let update = {};
        if(reactionID == 1) {
            update = {
                likes: 1,
                hearts: 0
            }
        }
        else {
            update = {
                hearts: 1,
                likes: 0
            }
        }
        let id = photoID;
                
        $http({
            method: 'PUT',
            url: '/photos/' + id,
            data: update
        })
        .then(function(response){
            console.log('the result of the put is', response);
            self.getPhotos();
        });
    };

    

}]);