(() => {
  'use_strict'
  angular.module('whatsapplike.services').factory('AuthentificationSrv', AuthentificationSrv);

  function AuthentificationSrv($firebaseAuth, $http, $log, $q, UsersSrv) {
    var auth = $firebaseAuth();

    return {
      signup: function(firstName, lastName, email, password) {
        return auth.$createUserWithEmailAndPassword(email, password).then(function(user){
          return UsersSrv.add(user.uid, firstName, lastName, email);
        });
      },
      auth: function(email, password) {
        return auth.$signInWithEmailAndPassword(email, password);
      },
      user: function() {
        var user = auth.$getAuth();
        return {
          id: user.uid,
          email: user.email
        }
      },
      signout: function(){
        return auth.$signOut();
      },
      isConnected: function() {
        return auth.$requireSignIn();
      }
    };
  }
})();
