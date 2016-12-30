angular.module('crud', ['ui.router'])

.run(function ($rootScope) {
$rootScope.safeApply = function(fn) {
      var phase = this.$root.$$phase;
      if (phase == '$apply' || phase == '$digest') {
        if (fn && (typeof(fn) === 'function')) {
          fn();
        }
      } else {
        this.$apply(fn);
      }
    };
})

.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider

	.state('login', {
		url: '/login',
		templateUrl: 'tpl/login.html'
	})

	.state('userlist', {
		url: '/userlist',
		templateUrl: 'tpl/userlist.html'
	})

	.state('register', {
		url: '/register',
		templateUrl: 'tpl/register.html'
	});

$urlRouterProvider.otherwise('/login');
});
