(() => {
  'use_strict'
  angular.module('whatsapplike.services').factory('ContactsSrv', ContactsSrv);

  function ContactsSrv($http, $log, $q, $firebaseArray, $firebaseObject) {
    var ref = firebase.database().ref();

    return {
      all: function() {
        return $firebaseArray(ref.child('users'));
      },
      remove: function(id) {
        return $firebaseObject(ref.child('users').child(id)).$remove();
      },
      get: function(id) {
        return $firebaseObject(ref.child('users').child(id));
      }
    };
  }

})();
