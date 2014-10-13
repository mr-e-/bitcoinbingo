function config ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
  $stateProvider
    .state('games', {
      url: "/",
      templateUrl: "views/games.html",
      controller: 'GamesController',
      data: { pageTitle: 'Play bingo' }
    })
    .state('game', {
      url: "/game/:gameid",
      templateUrl: "views/game.html",
      controller: 'GameController',
      data: { pageTitle: 'Game' }
    })
    .state('register', {
      url: "/register",
      templateUrl: "views/common/register.html",
      data: { pageTitle: 'Register' }
    })
    .state('404', {
      url: "/404",
      templateUrl: "views/common/404.html",
      data: { pageTitle: 'Page not found' }
    })
}
  app
  .config(config)
  .run(function ($rootScope, $state) {
    console.log("test run");
    $rootScope.$state = $state;
  });