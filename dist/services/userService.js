angular.module('app')
.service('$userService', function(){

	var self = this;

	self.getUser = function(userId){
		return {name: 'Dan Poindexter', email: 'poindexd@umich.edu'}
	}

});