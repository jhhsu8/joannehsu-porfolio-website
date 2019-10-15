"use strict";

var routerApp = angular.module("routerApp", ["ui.router"]);

routerApp.config(
    ["$stateProvider", "$urlRouterProvider", "$locationProvider", function($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise("/");
        
        /* $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        }); */
        
        $stateProvider
            .state("app", {
            url: "/",
            views: {
                "navigation": {
                    templateUrl: "views/navigation.html"
                },
                "content": {
                    templateUrl: "views/portfolio.html"
                }
            }
        })
            .state("app.resume", {
            url: "resume",
            views: {
                "content@": {
                    templateUrl: "views/resume.html",
                    controller: "JoanneController"
                }
            }
        })
            .state("app.references", {
            url: "references",
            views: {
                "content@": {
                    templateUrl: "views/references.html",
                    controller: "JoanneController"
                }
            }
        });
    }]);