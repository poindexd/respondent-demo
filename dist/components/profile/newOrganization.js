angular.module('app').component('newOrganization', {
  //bindings: { project: '<' },
  templateUrl: './components/profile/newOrganization.html',
  controller: ['$organizationService', function($organizationService){
  	
  	this.newOrganization = function(){
  		$organizationService.newOrganization({
  			name: this.name, 
  			email: this.email
  		});
  	}

  }]
});