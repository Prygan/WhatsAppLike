(() => {
  'use_strict'
  angular.module('whatsapplike.services').factory('UsersSrv', UsersSrv);

  function UsersSrv($http, $log, $q, $firebaseObject, $firebaseArray) {
    var ref = firebase.database().ref();

    return {
      all: function() {
        return $firebaseArray(ref.child('users'));
      },
      get: function(id) {
        return $firebaseObject(ref.child('users').child(id));
      },
      add: function(uid, firstName, lastName, email) {
        var user = {
          firstName: firstName,
          lastName: lastName,
          email: email
        }
        return ref.child('users').child(uid).set(user);
      }
    };
  }
})();
