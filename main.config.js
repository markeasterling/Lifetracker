app.config(($routeProvider) => (
    $routeProvider
      .when("/", {
        templateUrl: "login.html"
      })
      .when("/main", {
        templateUrl: "main.html"
      })
))
