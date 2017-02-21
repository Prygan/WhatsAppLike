(() => {
  'use_strict'
  angular.module('whatsapplike.controllers').controller('ChatDetailCtrl', ChatDetailCtrl)

  function ChatDetailCtrl($scope, $state, $stateParams, ContactsSrv, MessagesSrv, AuthentificationSrv, moment) {
    $scope.input = {};

    $scope.$on('$ionicView.enter', function () {
      $scope.messages = MessagesSrv.getFromChatId($stateParams.chatId);
    });

    ContactsSrv.get(AuthentificationSrv.user().id).$loaded().then(
      function(contact) {
        $scope.user = {
          id: AuthentificationSrv.user().id,
          name: contact.firstName + " " + contact.lastName,
        }
      }
    );

    $scope.sendMessage = function() {
      MessagesSrv.add($stateParams.chatId, $scope.user.id, $scope.user.name, $scope.input.message);
      $scope.input.message = "";
    }
  }
})();
