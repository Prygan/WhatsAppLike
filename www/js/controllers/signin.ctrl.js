(() => {
  'use_strict'
  angular.module('whatsapplike.controllers').controller('SigninCtrl', SigninCtrl)

  function SigninCtrl($scope, $state, $ionicPopup, AuthentificationSrv) {
    $scope.input = {};

    $scope.signIn = function() {
      AuthentificationSrv.auth($scope.input.email, $scope.input.password).then(
        function() {
          $state.go('tab.contacts');
        },
        function() {
          $ionicPopup.alert({
            title: 'Impossible de vous connecter',
            template: 'Le login ou le mot de passe saisi est incorrect'
          });
        }
      );
    }
  }
})();
