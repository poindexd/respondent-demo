angular.module('app').component('project', {
	bindings: {projectId: '<'},
 	templateUrl: './components/project/project.html',
 	controller: ["$scope", "$rootElement", "$projectService", function($scope, $rootElement, $projectService){
 		"ngInject";

 		var self = this;

 		$scope.project = $projectService.getProject(self.projectId);

 		$scope.users = [
 			{name: 'Leta Gomez', image: 'https://randomuser.me/api/portraits/women/48.jpg'},
 			{name: 'Allen Torres', image: 'https://randomuser.me/api/portraits/men/38.jpg'},
 			{name: 'Sebastian Harper', image: 'https://randomuser.me/api/portraits/men/6.jpg'},
 			{name: 'Sarah Burton', image: 'https://randomuser.me/api/portraits/women/39.jpg'},
 			{name: 'Ida White', image: 'https://randomuser.me/api/portraits/women/27.jpg'},
 			{name: 'Wade Fuller', image: 'https://randomuser.me/api/portraits/men/73.jpg'},
 			{name: 'Beth Franklin', image: 'https://randomuser.me/api/portraits/women/54.jpg'}
 		]

 	}]
});