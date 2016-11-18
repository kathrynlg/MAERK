'use strict';
(function(Register) {

  angular.module('maerkApp')
    .controller('RegController', function($q, $mdToast, $mdDialog, Report, Empfactory) {

      this.month = "january";
      this.monthNames = ["january", "february", "march", "april", "may", "june",
        "july", "august", "september", "october", "november", "december"
      ];
      var currentYear = new Date().getYear() + 1900;
      var totalYears = [];
      for (var i = 2007; i <= currentYear; i++) {
        totalYears.push(i);
      }
      this.yearList = totalYears;
      this.tempYear = 2015;




      this.loader = function() {
        if (this.report[this.month].length != 0) {
          console.log('report found');

        }else{
          console.log('report is empty');
          this.report[this.month] = Empfactory.getAll();
          console.log(this.report[this.month]);
        }
      }



      this.fromSelectYear = function(month) {
        Report.getYear(this.tempYear).$promise
          .then((reportYear) => {
            this.report = reportYear;
            this.loader();
          })
      }


      this.toastDate;
      this.createReg = Report.createReg;
      this.updateReg = Report.updateReg;
      // this.report = Report.getYear('2014');
      this.report = Report.getYear(this.tempYear);

      this.confirm = function() {
        console.log('push the changes to report DB');

      }


      this.query = {
        order: 'name',
        limit: 5,
        page: 1
      }
      this.limitOptions = [5, 10, 15];
      this.total = 20;
      // console.log(this.employees);

      this.options = {
        rowSelection: true,
        multiSelect: true,
        autoSelect: true,
        decapitate: false,
        largeEditDialog: false,
        boundaryLinks: false,
        limitSelect: true,
        pageSelect: true
      };
      this.logPagination = function(page, limit) {
        console.log('page: ', page);
        console.log('limit: ', limit);
      }

      function createChartData(array, prop) {
        var arr = [];
        arr.push(['client', prop])
        for (var i = 0; i < array.length; i++) {
          arr.push([
            array[i].name, array[i][prop]
          ])
        }
        // console.log(arr)
        return arr;
      }

    })
}());
