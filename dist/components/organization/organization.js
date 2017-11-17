angular.module('app').component('organization', {
  bindings: { organizationId: '<' },
  templateUrl: './components/organization/organization.html',
  controller: ["$scope", "$organizationService", "$userService", function($scope, $organizationService, $userService){
  	"ng-inject";
  	
	$scope.organizationId = this.organizationId;

	$scope.organization = $organizationService.getOrganization(this.organizationId);
	$scope.users = $organizationService.getUsers(this.organizationId);

  }]
});