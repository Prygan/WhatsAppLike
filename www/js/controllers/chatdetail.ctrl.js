(() => {
  'use_strict'
  angular.module('whatsapplike.controllers').controller('ChatDetailCtrl', ChatDetailCtrl)

  function ChatDetailCtrl($scope, $stateParams, ChatsSrv, MessagesSrv) {
    ChatsSrv.get($stateParams.chatId).then(function(chat){
      $scope.chat = chat;
    });
    MessagesSrv.get($stateParams.chatId).then(function(messages){
      $scope.messages = messages;
    });
    //mock the user id
    $scope.user = '589b3cbe458227fe6585cbc7';

    $scope.sendMessage = function(sendMessageForm) {
      MessagesSrv.add($scope.chat.id, $scope.user, $scope.input.message);
      MessagesSrv.get($stateParams.chatId).then(function(messages){
        $scope.messages = messages;
      });
    }
  }
})();
