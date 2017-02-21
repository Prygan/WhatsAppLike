(() => {
  'use_strict'
  angular.module('whatsapplike.controllers').controller('SigninCtrl', SigninCtrl)

  function SigninCtrl($scope, $state, AuthentificationSrv) {
    $scope.input = {};

    $scope.signIn = function() {
      AuthentificationSrv.auth($scope.input.email, $scope.input.password).then(
        function() {
          $state.go('tab.contacts');
        },
        function(err) {
          console.log(err);
        }
      );
    }
  }
})();
