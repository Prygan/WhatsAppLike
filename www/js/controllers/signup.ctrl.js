(() => {
  'use_strict'
  angular.module('whatsapplike.controllers').controller('SignupCtrl', SignupCtrl)

  function SignupCtrl($scope, $state, $ionicPopup, UsersSrv, AuthentificationSrv) {
    $scope.input = {};

    $scope.signUp = function() {
      AuthentificationSrv.signup($scope.input.firstName, $scope.input.lastName, $scope.input.email, $scope.input.password).then(
        function() {
          $state.go('tab.contacts');
        },
        function() {
          $ionicPopup.alert({
            title: 'Impossible de créer le compte',
            template: 'Un compte existe déjà pour cette adresse mail !'
          });
        }
      );
    }
  }
})();
