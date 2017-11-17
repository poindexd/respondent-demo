angular.module('app').component('project', {
	bindings: { organizationId: '<', projectTypeId: '<', projectId: '<'},
 	templateUrl: './components/project/project.html',
 	controller: ["$scope", "$itemService", "$projectTypes", "$mdDialog", "$rootElement", "$projectService", function($scope, $itemService, $projectTypes, $mdDialog, $rootElement, $projectService){
 		"ngInject";

 		var self = this;

 		console.log('loading project')
 		//self.path = [self.organizationId, self.projectTypeId, self.projectId];

 		$scope.loading = true;

 		$scope.organizationId = self.organizationId;
 		$scope.projectTypeId = self.projectTypeId;
 		$scope.projectType = $projectTypes.getprojectType(self.projectTypeId)
 		
 		$scope.allowedChildren = {};

 		angular.forEach($scope.projectType.allowedChildren, function(child){
 			$scope.allowedChildren[child] = $projectTypes.getprojectType(child);
 		})

 		$scope.items = $itemService.getItems(self.projectId);
 		//$scope.item = $itemService.getItem(self.itemId);
 		$scope.itemId = self.itemId;

 		$scope.addItem = function(){
 			var item = {
 				blah: true,
 				template: 'likert'
 			}
 			$itemService.addItem(self.projectId, item)
 		}

 		$scope.addproject = function(projectTypeId){

 			var template = '<projects organization-id="\'' + self.organizationId + '\'" project-type-id="\'' + projectTypeId + '\'" editing="false"></projects>';
 			console.log(template);

 			$mdDialog.show({
 				//parent: $rootElement,
 				//scope: $scope,
 				//preserveScope: true,
 				clickOutsideToClose: true,
 				fullscreen: true,
 				template: template
 			}).then(function(project){
 				console.log('selected project', project);
 				$itemService.addItem(self.projectId, {
 					projectRefTypeId: projectTypeId,
 					projectRef: project.$id
 				})
 			})
 		}

 		$scope.onDrop = function(item, index){
 			var from = item.index;
			var to = (index > item.index) ? index - 1 : index;

			console.log('Moving item from ' + from + ' to ' + to)
 			$scope.items.$updateIndexes(item, from, to)

 			//Prevent array from changing client side
 			return false;
 		}

 	}]
});