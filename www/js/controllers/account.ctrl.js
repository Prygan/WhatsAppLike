(() => {
  'use_strict'
  angular.module('whatsapplike.controllers').controller('AccountCtrl', AccountCtrl);

  function AccountCtrl($scope, $state, $ionicHistory, AuthentificationSrv, UsersSrv) {
    UsersSrv.get(AuthentificationSrv.user().id).$loaded().then(
      function(user) {
        $scope.user = {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email
        }
      }
    );

    $scope.signout = function(){
      AuthentificationSrv.signout().then(
        function(){
          $ionicHistory.clearCache();
          $ionicHistory.clearHistory();
          $state.go('signin');
        }
      )
    }
  }
})();
