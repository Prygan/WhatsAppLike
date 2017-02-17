(() => {
  'use_strict'
  angular.module('whatsapplike.controllers').controller('ContactsCtrl', ContactsCtrl)

  function ContactsCtrl($scope, ContactsSrv) {
    ContactsSrv.all().then(function(contacts){
      $scope.contacts = contacts;
    })
  }
})();
