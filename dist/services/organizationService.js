angular.module('app')
.service('$organizationService', ["$userService", function($userService){
	"ng-inject";

	var self = this;
	self.projects = {
		'1235': [
			{$id: '345', name: 'Project A', status: {text: 'In Progress', color: 'amber'}},
			{$id: '456', name: 'Project B', status: {text: 'Awaiting Payment', color: 'red'}}
		],
		'3456': [
			{$id: '756', name: 'Project C', status: {text: 'Completed', color: 'green'}},
			{$id: '876', name: 'Project D', status: {text: 'In Progess', color: 'amber'}}
		]
	}

	self.organizations = [
		{$id: '1235', name: 'Organization A'},
		{$id: '3456', name: 'Organization B'}
	]

	self.getOrganization = function(organizationId){
		return _.find(self.organizations, {$id: organizationId})
	}

	//-Returns an array of $firebaseObject organizations belonging the current user
	self.getOrganizations = function(userId){
		return self.organizations;
	}

	self.getProjects = function(organizationId){
		return self.projects[organizationId];
	}

	self.getUsers = function(organizationId){
		
		return [
			{name:'Dan Poindexter'}
		];
	}

}]);