(() => {
  'use_strict'
  angular.module('whatsapplike.controllers').controller('ContactsCtrl', ContactsCtrl)

  function ContactsCtrl($scope, ContactsSrv) {
    $scope.contacts = ContactsSrv.all();
  }
})();
