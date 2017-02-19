(() => {
  'use_strict'
  angular.module('whatsapplike.services').factory('ChatsSrv', ChatsSrv);

  function ChatsSrv($http, $log, $q, UuidSrv) {
    var chats = null;

    function loadChats(){
      var deferred = $q.defer();
      if(!chats) {
        $http.get('/data/chats.json').then(function(response) {
          chats = response.data;
          deferred.resolve(chats);
        }, function(error) {
          $log.error(error);
          deferred.reject(error);
        });
      } else {
        deferred.resolve(chats);
      }
      return deferred.promise;
    }

    return {
      all: function() {
        return loadChats();
      },
      remove: function(chat) {
        return loadChats().then(chats => chats.splice(chats.indexOf(chat), 1));
      },
      get: function(chatId) {
        return loadChats().then(chats => chats.find(c => c.id === chatId));
      },
      add: function(name, description) {
        var chat = {
          id : UuidSrv.generateUuid(),
          name : name,
          description : description ? description : "",
          lastText : "",
          face : ""
        }
        console.log(chat);
        return loadChats().then(() => chats.push(chat));
      }
    };
  }
})();
