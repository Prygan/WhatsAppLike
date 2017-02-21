(() => {
  'use_strict'
  angular.module('whatsapplike.services').factory('MessagesSrv', MessagesSrv);

  function MessagesSrv($firebaseArray, $firebaseObject) {
    var ref = firebase.database().ref();

    return {
      getFromChatId: function(chatId) {
        return $firebaseArray(ref.child('messages').child(chatId));
      },
      add: function(chatId, userId, sender, inputMsg) {
        var message = {
          chatId : chatId,
          senderId : userId,
          sender: sender,
          text : inputMsg,
          sendDate : new Date().toISOString()
        }
        return $firebaseArray(ref.child('messages').child(message.chatId)).$add(message);
      }
    };
  }
})();
