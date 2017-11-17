angular.module('app').component('projectPreview', {
	bindings: {project: '<', organizationId: '<', projectTypeId: '<', projectId: '<' },
	templateUrl: './components/projects/projectPreview.html',
	controller: ["$scope", "$projectService", function($scope, $projectService){
		"ngInject";

		$scope.project = this.project || $projectService.getproject(this.projectId);;
		

	}]
});