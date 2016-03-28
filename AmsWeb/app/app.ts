﻿module app {
    var mainApp = angular.module("amsModule", ["ngRoute", "commonServices"]);
    mainApp.config(routeConfig);

    routeConfig.$inject = ["$routeProvider"];
    // Route function that return void
    function routeConfig($routeProvider: ng.route.IRouteProvider): void {
        $routeProvider.when("/member",
            {
                templateUrl: "/amsWeb/app/member/member.html",
                controller: "MemberController as vm"
            })
            .when("/memberDetail/:memberId",
            {
                templateUrl: "/amsWeb/app/member/memberDetail.html",
                controller: "MemberDetailController as vm"
            })
            .otherwise("/member");
    }
}