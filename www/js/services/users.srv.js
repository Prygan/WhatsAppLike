(() => {
  'use_strict'
  angular.module('whatsapplike.services').factory('UsersSrv', UsersSrv);

  function UsersSrv($http, $log, $q, $firebaseObject) {
    var ref = firebase.database().ref();
    var users = null;

    function loadUsers(){
      var deferred = $q.defer();
      if(!users) {
        $http.get('/data/users.json').then(function(response) {
          users = response.data;
          deferred.resolve(users);
        }, function(error) {
          $log.error(error);
          deferred.reject(error);
        });
      } else {
        deferred.resolve(users);
      }
      return deferred.promise;
    }

    return {
      all: function() {
        return loadUsers();
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
