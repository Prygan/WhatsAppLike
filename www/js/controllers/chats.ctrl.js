(() => {
    'use_strict'
    angular.module('whatsapplike.controllers').controller('ChatsCtrl', ChatsCtrl)

    function ChatsCtrl($scope, ChatsSrv) {
      $scope.chats = ChatsSrv.all();

      $scope.remove = function(id) {
        ChatsSrv.remove(id);
      };
    }
})();
