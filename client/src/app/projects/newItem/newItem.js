/**
 * Created by sudison on 11/21/13.
 */
angular.module('newItem',['resources.items'])
    .config(['$routeProvider', 'securityAuthorizationProvider', function ($routeProvider, securityAuthorizationProvider) {
        $routeProvider.when('/orders/newItem', {
            templateUrl:'projects/newItem/newItem.tpl.html',
            controller:'newItemViewCtrl'
        });
    }])
    .controller('newItemViewCtrl', ['$scope', '$location', 'Items', function ($scope, $location, Items) {
        $scope.item = {"state": "Initial"}
        $scope.submit = function() {

            Items.add($scope.item);
            $location.path("/inventory");
        }
    }]);
