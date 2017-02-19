(() => {
  'use_strict'
  angular.module('whatsapplike.services').factory('MessagesSrv', MessagesSrv);

  function MessagesSrv($http, $log, $q, ContactsSrv, UuidSrv) {
    var messages = null;

    function loadMessages(){
      var deferred = $q.defer();
      if(!messages) {
        $http.get('/data/messages.json').then(function(response) {
          messages = response.data;
          messages = insertSendersName();
          deferred.resolve(messages);
        }, function(error) {
          $log.error(error);
          deferred.reject(error);
        });
      } else {
        deferred.resolve(messages);
      }
      return deferred.promise;
    }

    function insertSendersName(){
      return messages.map(m => {
        ContactsSrv.get(m.sender_id).then(function(sender){
          m.sender = sender.firstName + " " + sender.lastName;
        }, function(error){
          m.sender = "contact inconnu";
        });
        return m;
      });
    }

    return {
      all: function() {
        return loadMessages();
      },
      get: function(chatId) {
        return loadMessages().then(messages => messages.filter(m => m.chat_id === chatId));
      },
      add: function(chatId, userId, inputMsg) {
        var message = {
          _id : UuidSrv.generateUuid(),
          chat_id : chatId,
          sender_id : userId,
          message : inputMsg,
          send_date : Date.now()
        }
        return loadMessages().then(messages.push(message));
      }
    };
  }
})();
