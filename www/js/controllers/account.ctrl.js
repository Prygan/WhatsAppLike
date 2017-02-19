(() => {
  'use_strict'
  angular.module('whatsapplike.controllers').controller('AccountCtrl', AccountCtrl);

  function AccountCtrl($scope, $state, AuthentificationSrv) {
    $scope.user = AuthentificationSrv.user();

    $scope.signout = function(){
      AuthentificationSrv.signout();
      $state.go('signin');
    }
  }
})();
