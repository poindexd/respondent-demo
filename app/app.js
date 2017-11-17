var app = angular.module('app', [
	'ConsoleLogger',				// For logging UI Router state changes
	'ui.router',					// Routing
	'ncy-angular-breadcrumb',		// UI Router breadcrumbs
])
//.constant("$MD_THEME_CSS","")
.run(['PrintToConsole', function(PrintToConsole) {

	// When this value is true, UI Router state changes will
	// be logged to console.

    PrintToConsole.active = false;

}])
.run(['$rootScope', function($rootScope){

	//Initialize Breadcrumb
	$rootScope.breadcrumb = {};

}])
.config(function ($stateProvider, $urlRouterProvider, $locationProvider, $breadcrumbProvider) {
		"ngInject";
	
		// Use a custom template for the breadcrumbs
		$breadcrumbProvider.setOptions({
	      templateUrl: '/lib/breadcrumb/breadcrumb.html'
	    });

		// Set html5 mode to disable the /#/ in the url.
		// Requires the <base> to be set in html
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});
	 
	 	// Declare the routing states
		var states = [
			{
				name: 'root',
				url: '',
				abstract: true,				
				views: {
					'root@': {
						component: 'root'
					}
				}
			},
			{
				name: 'root.home',
				url: '/',
				views: {
					'main@root': 'home'
				},
				ncyBreadcrumb:{
					skip: true
				}
			},
			{
				name: 'root.organization',
				url: '/organization/{organizationId}',
				views: {
					'main@root' : {
						component: 'organization'
					}
				},
				resolve: {
					organizationId: function($stateParams){
						return $stateParams.organizationId;
					},
					organizationLabel: function($stateParams, $organizationService, $rootScope){
						//"ngInject";
						
						$rootScope.breadcrumb.organization = $organizationService.getOrganization(
							$stateParams.organizationId
						);
					}
				},
				ncyBreadcrumb:{
					label: '{{$root.breadcrumb.organization.name}}'
				}
			},
			{
				name: 'root.organization.projects',
				url: '/projects',
				views: {
					'main@root': {
						component: 'projects',
					}
				},
				resolve: {

					editing: function(){
						return true;
					},
					projectTypeId: function($stateParams){
						return $stateParams.projectTypeId;
					},
					projectsLabel: function($stateParams, $rootScope){
						"ngInject";

						$rootScope.breadcrumb.projects = $stateParams.projectTypeId;
					}
				},
				ncyBreadcrumb: {
					label: 'Projects'
				}
				
			},
			{
				name: 'root.organization.projects.project',
				url: '/{projectId}',
				views: {
					'main@root': {
						component: 'project'
					}
				},
				resolve: {
					projectId: function($stateParams){
						return $stateParams.projectId;
					},
					projectLabel: function($stateParams, $rootScope, $projectService){
						"ngInject";

						$rootScope.breadcrumb.project = $projectService.getProject(
							$stateParams.projectId
						);
					}
				},
				ncyBreadcrumb: {
					label: '{{$root.breadcrumb.project.name}}'
				}
			},
		]

		// Loop over the state definitions and register them
		states.forEach(function(state) {
			$stateProvider.state(state);
		});

	
})