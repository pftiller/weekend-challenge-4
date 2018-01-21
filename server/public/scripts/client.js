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
        if(reactionID == 1) {
            let update = {
                likes: 1
            }
        }
        else {
            let update = {
                hearts: 1
            }
        }
        let id = photoID;
                
        $http({
            method: 'PUT',
            url: '/photos/' + id,
            data: edit
        })
        .then(function(response){
            console.log('the result of the put is', response);
        });
    };

    

}]);