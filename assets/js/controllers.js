angular.module('LikeSorter', ['ui.bootstrap']);

// Controller for pulling soundcloud data

function TopListCtrl($scope, $http, $modal) {
    $scope.getData = function (sc_user) {
        SC.get('/users/' + sc_user + '/favorites', {
            limit: 200
        }, function (tracks) {
            $scope.$apply(function () {
                if (Object.getOwnPropertyNames(tracks).length > 1) {
                    $scope.likes = tracks;
                    $scope.reverse = true;
                    $scope.sortField = 'favoritings_count';
                    $scope.sc_user = sc_user;
                } else {
                    alert("That user has 0 Soundcloud likes or does not exist. Double check the username.")
                }
            })
        });
    }

    //$scope.sortField = 'like.favoritings_count';
    $scope.getData('coolrivers');

    // Opens the About popup info modal
    $scope.openpopup = function () {
        $modal.open({
            templateUrl: 'myModalContent.html',
            backdrop: true,
            windowClass: 'modal'
        });
    };

}
/*
SC.get("/tracks", {limit: 10, genres: "jazz"}, function(tracks){
        var length = tracks.length;
        for (var i = 0; i < length; i++){
            $('#results').append(tracks[i].genre + ' | ' + tracks[i].permalink_url + '<br/>');
    }
});

console.log(tracks);
  })
   }



SC.get("/tracks", {limit: 10, genres: "jazz"}, function(tracks){
        var length = tracks.length;
        for (var i = 0; i < length; i++){
            $('#results').append(tracks[i].genre + ' | ' + tracks[i].permalink_url + '<br/>');
    }
});
*/


/*
 function TopListCtrl($scope, $http, $modal) {
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
  $scope.openpopup = function () {
              $modal.open({
                  templateUrl: 'myModalContent.html',
                  backdrop: true,
                  windowClass: 'modal'
              });
          };




}
*/