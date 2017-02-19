(() => {
  'use_strict'
  angular.module('whatsapplike.controllers').controller('SignupCtrl', SignupCtrl)

  function SignupCtrl($scope, $state, UsersSrv, AuthentificationSrv) {
    $scope.input = {};

    $scope.signUp = function(signUpForm) {
      UsersSrv.add($scope.input.email, $scope.input.firstName,$scope.input.lastName, $scope.input.password).then(() => {
        AuthentificationSrv.auth($scope.input.email, $scope.input.password).then(function(user) {
          if(user) {
            $state.go('tab.chats');
          }
        }, function(error) {
          console.log(error);
        })
      });
    }
  }
})();
