/**
 * Post sample: 
 *
 * Copyright © 2014 Stewan Pacheco <talk@stpa.co>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the “Software”), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
(function () {
    angular.module('my.app')
    .controller('DashboardCtrl', ['report', function(report) {    
        var vm = this;
        //
        // Goal #1a
        // Morris settings
        vm.reportBalanceXkey = 'y';
        vm.reportBalanceYkeys = '["a", "b"]';
        vm.reportBalanceLabels = '["Income", "Expense"]';
        vm.reportBalanceColors = '["#31C0BE", "#c7254e"]';
        // data from api
        vm.reportBalanceData = report.balance();  
        
        //
        // Goal #1b
        // Morris settings
        vm.reportOrderXkey = 'y';
        vm.reportOrderYkeys = '["a", "b"]';
        vm.reportOrderLabels = '["New Orders", "Recurring Orders"]';
        vm.reportOrderColors = '["#31C0BE", "#c7254e"]';
        // data from api
        vm.reportOrderData = report.order();  
        
        //
        // Goal #2
        // Morris settings
        vm.reportGenreColors = '["#31C0BE","#c7254e","#98a0d3"]';
        vm.reportGenreFormatter = function(y, data) { return y+'%' }
        // data from api
        vm.reportGenreData = report.genre();
                
        //
        // Goal #3
        // Morris settings
        vm.reportAgeX = 'y';
        vm.reportAgeY = '["a", "b"]';
        vm.reportAgeLabels = '["Female", "Male"]';
        vm.reportAgeColors = '["#31C0BE", "#c7254e"]';
        // data from api
        vm.reportAgeData = report.age();   
    }]);
})();