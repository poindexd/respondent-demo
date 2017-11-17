angular.module('app')
.service('$projectService', 
	function(){
	"ngInject";

	var self = this;
	self.projects =  [
			{$id: '345', name: 'Project A'},
			{$id: '456', name: 'Project B'},
			{$id: '756', name: 'Project C'},
			{$id: '876', name: 'Project D'}
	]

	self.getProject = function(projectId){
		return _.find(self.projects, {$id: projectId})
	}
});