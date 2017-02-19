(() => {
  'use_strict'
  angular.module('whatsapplike.services').factory('AuthentificationSrv', AuthentificationSrv);

  function AuthentificationSrv($http, $log, $q, UsersSrv) {
    var user = null;

    function authentificate(email, password){
      var deferred = $q.defer();
      if(!user) {
        UsersSrv.all().then(function(response) {
          console.log(response);
          var user_found = response.find(u => u.email === email && u.password === password);
          if(user_found) {
              user = {
                _id : user_found._id,
                firstName : user_found.firstName,
                lastName : user_found.lastName,
                email : user_found.email
              }
              deferred.resolve(user);
          }
          else
              deferred.reject(new Error("no user found"));
        }, function(error) {
          $log.error(error);
          deferred.reject(error);
        });
      } else {
        deferred.resolve(user);
      }
      return deferred.promise;
    }

    return {
      auth: function(email, password) {
        return authentificate(email, password);
      },
      user: _ => user,
      signout: function(){
        user = null;
      }
    };
  }
})();
