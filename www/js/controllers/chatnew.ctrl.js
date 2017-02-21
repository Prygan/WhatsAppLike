(() => {
  'use_strict'
  angular.module('whatsapplike.controllers').controller('ChatNewCtrl', ChatNewCtrl)

  function ChatNewCtrl($scope, $stateParams, $state, ChatsSrv) {
    $scope.input = {};
    $scope.createConv = function() {
      ChatsSrv.add($scope.input.name, $scope.input.description);
      $state.go('tab.chats');
    }
  }
})();
