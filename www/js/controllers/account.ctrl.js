(() => {
  'use_strict'
  angular.module('whatsapplike.controllers').controller('AccountCtrl', AccountCtrl);

  function AccountCtrl($scope) {
    $scope.settings = {
      enableFriends: true
    };
  }
})();
