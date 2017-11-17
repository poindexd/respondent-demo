angular.module('app').component('project.settings', {
	bindings: { organizationId: '<', projectTypeId: '<', projectId: '<' },
	templateUrl: './components/project/settings.html',
	controller: ['$scope', '$projectService', '$mdDialog', '$mdToast', '$state',
	function($scope, $projectService, $mdDialog, $mdToast, $state){

		var self = this;


		$scope.project = $projectService.getproject(self.projectId);

		$scope.project.$bindTo($scope, 'project');

		$scope.removeproject = function(){
			var confirm = $mdDialog.confirm()
			.title('Delete this item?')
			//.textContent('Are you sure?')
			//.ariaLabel('TutorialsPoint.com')
			//.targetEvent(event)
			.ok('Yes')
			.cancel('No');
				  
			$mdDialog.show(confirm).then(function() {
				
				$projectService.removeproject(self.projectId).then(function(){
					$state.go('editor.organization.projects', {
						organizationId: self.organizationId,
						projectType: self.projectTypeId
					})
				});

				$mdToast.show(
					$mdToast.simple()
					.textContent('Item removed.')
					.position('bottom right')
				);

			}, function() {
				//$mdToast.showSimple('User not removed.');
			});
		}

	}]
});