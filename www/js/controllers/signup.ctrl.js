(() => {
  'use_strict'
  angular.module('whatsapplike.controllers').controller('SignupCtrl', SignupCtrl)

  function SignupCtrl($scope, $state, UsersSrv, AuthentificationSrv) {
    $scope.input = {};

    $scope.signUp = function() {
      AuthentificationSrv.signup($scope.input.firstName, $scope.input.lastName, $scope.input.email, $scope.input.password).then(
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
