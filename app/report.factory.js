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
    //
    // naming and coding a factory like the john papa guide. 
    // https://github.com/johnpapa/angular-styleguide#factories
    //
        .factory('report', function () {
            return {
                balance: balance,
                order: order,
                genre: genre,
                age: age
            }

            function balance() {
                //    
                // mocking data for goal #1a
                //
                return [
                    { y: "2009", a: 100, b: 90 },
                    { y: "2010", a: 75, b: 65 },
                    { y: "2011", a: 50, b: 40 },
                    { y: "2012", a: 75, b: 65 },
                    { y: "2013", a: 50, b: 40 },
                    { y: "2014", a: 175, b: 65 },
                    { y: "2015", a: 300, b: 90 }
                ];
            }

            function order() {
                //    
                // mocking data for goal #1b
                //
                return [
                    { y: "2009", a: 50, b: 80 },
                    { y: "2010", a: 75, b: 65 },
                    { y: "2011", a: 90, b: 98 },
                    { y: "2012", a: 190, b: 165 },
                    { y: "2013", a: 220, b: 280 },
                    { y: "2014", a: 388, b: 659 },
                    { y: "2015", a: 600, b: 490 }
                ];
            }

            function genre() {
                //
                // mocking data for goal #2
                //
                return [
                    { label: "Male", value: 35 },
                    { label: "Female", value: 65 }
                ];
            }

            function age() {
                //
                // mocking data for goal #3
                //
                return [
                    { y: '18-25', a: 100, b: 90 },
                    { y: '26-35', a: 75, b: 65 },
                    { y: '35-50', a: 50, b: 40 },
                    { y: '+50', a: 75, b: 65 }
                ];
            }
        });
})();