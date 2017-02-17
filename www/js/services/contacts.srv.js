(() => {
  'use_strict'
  angular.module('whatsapplike.services').factory('ContactsSrv', ContactsSrv);

  function ContactsSrv($http, $log, $q) {
    var contacts = null;

    function loadContacts(){
      var deferred = $q.defer();
      if(!contacts) {
        $http.get('/data/contacts.json').then(function(response) {
          contacts = response.data;
          deferred.resolve(contacts);
        }, function(error) {
          $log.error(error);
          $deferred.reject(error);
        });
      } else {
        deferred.resolve(contacts);
      }
      return deferred.promise;
    }

    return {
      all: function() {
        return loadContacts();
      },
      remove: function(contact) {
        return loadContacts().then(contacts => contacts.splice(contacts.indexOf(contact), 1));
      },
      get: function(contactId) {
        return loadContacts().then(contacts => {
          var deferred = $q.defer();
          var found = contacts.find(c => c._id === contactId)
          if(found) {
            deferred.resolve(found);
          } else {
            deferred.reject(new Error('No contact found for id ' + contactId));
          }
          return deferred.promise;
        });
      }
    };
  }

})();
