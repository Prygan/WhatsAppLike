(() => {
  'use_strict'
  angular.module('whatsapplike.services').factory('UsersSrv', UsersSrv);

  function UsersSrv($http, $log, $q) {
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
      get: function(email, password) {
        return loadUsers().then(users => users.find(u => u.email === email && u.password === password));
      },
      add: function(mail, fn, ln, psswd) {
        var user = {
          _id : 'id',
          email : mail,
          firstName : fn,
          lastName : ln,
          password : pssw
        }
        return loadUsers().then(users.push(user));
      }
    };
  }
})();
