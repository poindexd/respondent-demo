angular.module('app')
.service('$projectService', 
	function(){
	"ngInject";

	var self = this;
	self.projects =  [
			{$id: '345', name: 'Project A', status: {text: 'In Progress', color: 'amber'}},
			{$id: '456', name: 'Project B', status: {text: 'Awaiting Payment', color: 'red'}},
			{$id: '756', name: 'Project C', status: {text: 'Completed', color: 'green'}},
			{$id: '876', name: 'Project D', status: {text: 'In Progess', color: 'amber'}}
	]

	self.getProject = function(projectId){
		return _.find(self.projects, {$id: projectId})
	}
});