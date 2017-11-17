angular.module('app').component('root', {
  templateUrl: './components/root/root.html',
  controller: function($scope, $organizationService, $userService){
  	"ngInject";

  	$scope.organizations = $organizationService.getOrganizations();

    $scope.getProjects = function(organizationId){
      return $organizationService.getProjects(organizationId)
    }

  }
});