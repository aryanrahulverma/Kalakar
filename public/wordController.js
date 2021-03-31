var myApp = angular.module("wordsApp", []);
myApp.controller("ctrl", function ($scope, $http) {
        console.log("hello");
        $http.get('words.json')
            .success(function (data) {
                console.log(data);
                $scope.randNumber = Math.floor(Math.random() * Math.floor(14));
                $scope.x = data.des[$scope.randNumber]
                console.log($scope.x)
            });
});
