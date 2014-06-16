
// Adds filters to app
angular.module('likeSorter', []);


var frownyface = '0x2639';
// Controller for pulling soundcloud data

function TopListCtrl($scope, $http) {
  $scope.getData = function(sc_user) {
     var url = 'http://api.soundcloud.com/users/'+ sc_user +'/favorites.json?client_id=0553ef1b721e4783feda4f4fe6611d04&limit=200&linked_partitioning=1&callback=JSON_CALLBACK';
    $http.jsonp(url).success(function(data) {
     if (Object.keys(data.collection).length > 0) {
      $scope.likes = data;
      $scope.sortField = 'like.favoritings_count';
      $scope.reverse = true;
      $scope.sc_user = sc_user;
     } 
     
    else {
      alert("That user has 0 Soundcloud likes. So sad...")
     }

  }).error(function (data, status, headers, config) {          
             alert("Something went awry with that request. Double check that's a real Soundcloud username");         
        });
  }
  $scope.getData('coolrivers');

 
}


/*
$scope.likes = data;
  $scope.sortField = 'like.favoritings_count';
    $scope.reverse = false;
    $scope.sc_user = sc_user;

// Try this tomorrow

if( response.results[0].locations.length > 0 ){
         var geoclng = response.results[0].locations[0].latLng.lng;
         var geoclat = response.results[0].locations[0].latLng.lat;
         //now use lon/lat on map etc
     } else {
         alert("Sorry, wrong input");
     }
  )}



    */