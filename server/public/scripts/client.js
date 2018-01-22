console.log('client.js loaded');
var app = angular.module('photoApp', ['ngAnimate']);

app.controller('PhotoController', ['$http', PhotoController]);

function PhotoController($http) {
    console.log('controller loaded');
    var vm = this;
    vm.reactions = [ 
        { name: 'Like', class: 'fa fa-thumbs-up', id: 1 },
        { name: 'Heart', class: 'fa fa-heart', id: 2 }
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
   vm.updateCounts = function(photoID, reactionID) {
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
            vm.getPhotos();
        });
    };

    

};
app.directive("flipReveal", function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'template.html',
      scope: {
        url: '=',
        flip: '='
      }
    }
  })