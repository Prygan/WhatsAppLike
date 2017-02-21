(() => {
  'use_strict'
  angular.module('whatsapplike.services').factory('ChatsSrv', ChatsSrv);

  function ChatsSrv($http, $log, $q, $firebaseArray, $firebaseObject, UuidSrv) {
    var ref = firebase.database().ref();

    return {
      all: function() {
        return $firebaseArray(ref.child('chats'));
      },
      remove: function(id) {
        return $firebaseObject(ref.child('chats').child(id)).$remove();
      },
      get: function(id) {
        return $firebaseObject(ref.child('chats').child(id))
      },
      add: function(name, description) {
        var chat = {
          name : name,
          description : description ? description : "",
          lastText : "", //TODO take the real last text...
          face : ""
        }
        return $firebaseArray(ref.child('chats')).$add(chat);
      }
    };
  }
})();
