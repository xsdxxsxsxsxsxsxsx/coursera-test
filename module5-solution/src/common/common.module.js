(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://angularjs2-santycheca.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
