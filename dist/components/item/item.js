angular.module('app').component('item', {
	bindings: { organizationId: '<', projectTypeId: '<', projectId: '<', itemId: '<' },
 	templateUrl: './components/item/item.html',
 	controller: ["$scope", "$itemService", "$location", "$userService", function($scope, $itemService, $location, $userService){
 		"ngInject";

 		var self = this;
 		//self.path = [self.organizationId, self.projectTypeId, self.projectId];

 		$scope.organizationId = self.organizationId;
 		$scope.projectTypeId = self.projectTypeId;

 		$scope.item = $itemService.getItem(self.itemId);
 		
 		$scope.item.$bindTo($scope, 'item');

 		$scope.$parent.$parent.item = $scope.item;
 		console.log('ITEM PARENT', $scope.$parent.$parent)
 	}]

});