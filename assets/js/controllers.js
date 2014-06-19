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