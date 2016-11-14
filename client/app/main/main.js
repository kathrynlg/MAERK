'use strict';

angular.module('maerkApp')
  .config(function($stateProvider) {


    $stateProvider.state('main', {
        // url: '/main',
        abstract: true,
        template: '<main class ="flex layout-row"></main>',
        authenticate: true
// may need to make it abstract

      })
      .state('main.employee', {
        url: '/employee',
        templateUrl: 'app/employee/employee.html',
        controller: 'EmployeeController',
        controllerAs: 'emp',
        authenticate: true
      })
      .state('main.client',{
        url:'/report-client',
        templateUrl: 'app/report/client.html',
        controller: 'ClientController',
        controllerAs: 'rep',
        authenticate: true
      })
      .state('main.skill',{
        url:'/report-skill',
        templateUrl: 'app/report/skill.html',
        controller: 'ClientController',
        controllerAs: 'rep',
        authenticate: true
      })
      .state('main.recruiters',{
        url:'/report-recruiters',
        templateUrl: 'app/report/recruiters.html',
        controller: 'ClientController',
        controllerAs: 'rep',
        authenticate: true
      });
  });
