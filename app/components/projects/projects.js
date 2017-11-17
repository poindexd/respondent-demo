angular.module('app').component('projects', {
	bindings: { organizationId: '<' },
	templateUrl: './components/projects/projects.html',
	controller: function($scope, $projectService, $organizationService, $state){
		"ngInject";

		var self = this;
		
		$scope.projects = $organizationService.getProjects(self.organizationId)

	}
});