angular.module('app').component('project', {
	bindings: {projectId: '<'},
 	templateUrl: './components/project/project.html',
 	controller: ["$scope", "$rootElement", "$projectService", function($scope, $rootElement, $projectService){
 		"ngInject";

 		var self = this;

 		$scope.project = $projectService.getProject(self.projectId);

 	}]
});