(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'http://angularjs2-santycheca.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
