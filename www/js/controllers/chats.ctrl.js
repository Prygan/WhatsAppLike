(() => {
    'use_strict'
    angular.module('whatsapplike.controllers').controller('ChatsCtrl', ChatsCtrl)

    function ChatsCtrl($scope, ChatsSrv) {
      ChatsSrv.all().then(function(chats){
          $scope.chats = chats;
      });
      $scope.remove = function(chat) {
        ChatsSrv.remove(chat);
      };
    }
})();
