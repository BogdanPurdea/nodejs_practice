angular.module('TestApp', []);

angular.module('TestApp')
    .controller('MainController', controllerFunc);

function controllerFunc() {
    this.people = clientPeople;
}