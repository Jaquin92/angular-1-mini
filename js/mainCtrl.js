angular.module('friendsList').controller('mainCtrl', function ($scope) {
    $scope.friends = ['Garry', 'Jerry', 'George Jefferson', 'Larry', 'Perry', 'Mary']

    $scope.addFriend = function () {
        $scope.friends.push($scope.friendName)
        $scope.friendName = ""
    }

    $scope.deleteFriend = function (i) {
        $scope.friends.splice(i, 1)
    }

}





);