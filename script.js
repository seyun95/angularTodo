
(function () {
    var app = angular.module('todo', []);

    app.controller('TodoCtrl', ['$scope', function($scope){
        $scope.todos = [
            {
                title: '앵귤러 공부',
                completed: false,
                createdAt: Date.now()
            },
            {
                title: '커피 내리기',
                completed: false,
                createdAt: Date.now()
            },
            {
                title: '운동하기',
                completed: true,
                createdAt: Date.now()
            }
        ];
    }]);

})();