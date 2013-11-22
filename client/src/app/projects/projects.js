function SelectedItems() {
    this.items = [];
}
SelectedItems.prototype.selected = function(id) {
    if (this.items.indexOf(id) == -1) {
        this.items.push(id);
    }
}
SelectedItems.prototype.unselected = function(id) {
    if (this.items.indexOf(id) > -1) {
        this.items.splice(id, 1);
    }
}
angular.module('orders', ['resources.items', 'productbacklog', 'sprints', 'security.authorization', 'newItem'])

.config(['$routeProvider', 'securityAuthorizationProvider', function ($routeProvider, securityAuthorizationProvider) {
  $routeProvider.when('/inventory', {
    templateUrl:'projects/projects-list.tpl.html',
    controller:'ProjectsViewCtrl',
    resolve:{
      items:['Items', function (Items) {
        //TODO: fetch only for the current user
        return Items.get();
      }],
      authenticatedUser: securityAuthorizationProvider.requireAuthenticatedUser
    }
  });
}])

.controller('ProjectsViewCtrl', ['$scope', '$location', 'items', 'security', function ($scope, $location, items, security) {
  $scope.items = items;

  $scope.newItem = function () {
    $location.path('/orders/newItem');
  }
}])
    .controller('ItemTableCtrl', ['$scope', '$element', function ($scope, $element) {
        $scope.selectedItems = new SelectedItems();

        $scope.updateSelection = function(action, id) {
            if (action == 'add') {
                $scope.selectedItems.selected(id);
            } else if (action == 'remove') {
                $scope.selectedItems.unselected(id);
            }
        }
    }]);

