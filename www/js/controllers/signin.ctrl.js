(() => {
  'use_strict'
  angular.module('whatsapplike.controllers').controller('SigninCtrl', SigninCtrl)

  function SigninCtrl($scope, $state, AuthentificationSrv) {
    $scope.input = {};

    $scope.$on('$ionicView.enter', function () {
      if($scope.user) {
        $state.go('tab.chats');
      }
    });

    $scope.signIn = function(signInForm) {
      AuthentificationSrv.auth($scope.input.email, $scope.input.password).then(function(user) {
        if(user) {
          $scope.user = user;
          $state.go('tab.chats');
        }
      });
    }
  }
})();
