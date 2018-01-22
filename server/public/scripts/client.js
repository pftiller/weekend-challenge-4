console.log('client.js loaded');
var app = angular.module('photoApp', ['ngAnimate']);

app.controller('PhotoController', ['$http', PhotoController]);

function PhotoController($http) {
    console.log('controller loaded');
    var vm = this;
    vm.reactions = [ 
        { name: 'Like', class: 'fa fa-thumbs-up', visible: true, id: 1 },
        { name: 'Heart', class: 'fa fa-heart', visible: true, id: 2 },
        { name: 'Click', class: 'fa fa-mouse-pointer', visible: false, id: 3}
    ];
    vm.photoList = [];

    vm.getPhotos = function() {
        $http({
            method: 'GET',
            url: '/photos'
        })
        .then(function(response){
            console.log('here is the response', response.data);
            vm.photoList = response.data
        });
    };
   vm.getPhotos();

   updateCounts = function(photoID, reactionID) {
        let update = {};
        if(reactionID == 1) {
            update = {
                likes: 1,
                hearts: 0,
                clicks: 0
            }
        }
        else if(reactionID == 2){
            update = {
                hearts: 1,
                likes: 0,
                clicks: 0
            }
        }
        else {
            update = {
                likes: 0,
                hearts: 0,
                clicks: 1
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
            vm.getPhotos();
        });
    };

    

};
