(() => {
  'use_strict'
  angular.module('whatsapplike.controllers').controller('ChatNewCtrl', ChatNewCtrl)

  function ChatNewCtrl($scope, $stateParams, ChatsSrv) {
    console.log("coucou");
  }
})();
