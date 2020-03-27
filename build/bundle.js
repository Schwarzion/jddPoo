/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _class_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

var game = new _class_game__WEBPACK_IMPORTED_MODULE_0__["Game"](5, 1);
game.init(); //Initialize the game
game.start(); //Start the game
game.show_winner(); //Display winner


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _cup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);


var Game = /** @class */ (function () {
    /**
    * Create a new Game
    *
    * @param turnNb
    * @param diceNb
    */
    function Game(turnNb, diceNb) {
        var _this = this;
        this._players = [];
        /**
        * Add 2 players to the game
        *
        * @return void
        */
        this.init = function () {
            _this._players.push(new _player__WEBPACK_IMPORTED_MODULE_0__["Player"]('Michel'));
            _this._players.push(new _player__WEBPACK_IMPORTED_MODULE_0__["Player"]('Bobby'));
            _this._players.push(new _player__WEBPACK_IMPORTED_MODULE_0__["Player"]('Chris'));
            _this._players.push(new _player__WEBPACK_IMPORTED_MODULE_0__["Player"]('Karl'));
        };
        /**
        * Start the game
        *
        * @return void
        */
        this.start = function () {
            console.clear();
            console.log('NEW GAME\n');
            for (_this._turnNb; _this._turnNb > 0; _this._turnNb--) {
                for (var _i = 0, _a = _this._players; _i < _a.length; _i++) {
                    var player = _a[_i];
                    player.play(_this._cup);
                }
            }
        };
        /**
        * Display winner
        *
        * @return void
        */
        this.show_winner = function () {
            var score = 0;
            var winner;
            for (var _i = 0, _a = _this._players; _i < _a.length; _i++) {
                var player = _a[_i];
                var playerScore = player.get_score();
                winner = playerScore > score ? player : winner;
            }
            if (winner != undefined)
                console.log(winner.get_name() + " wins with " + winner.get_score() + " points");
        };
        this._turnNb = turnNb;
        this._diceNb = diceNb;
        this._cup = new _cup__WEBPACK_IMPORTED_MODULE_1__["Cup"](diceNb);
    }
    return Game;
}());



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
var Player = /** @class */ (function () {
    /**
     * Create a player with his name
     *
     * @param name
     */
    function Player(name) {
        var _this = this;
        /**
        * Return player name
        *
        * @return string
        */
        this.get_name = function () {
            return _this._name;
        };
        /**
        * Return player score
        *
        * @return number
        */
        this.get_score = function () {
            return _this._score;
        };
        /**
         * Player throws the cup
         *
         * @param cup
         *
         * @return void
         */
        this.play = function (cup) {
            console.log(_this._name + " throws the cup");
            cup.throw();
            _this._score += cup.get_value();
            cup.set_value(0);
            _this.display_score();
        };
        /**
         * Display player score in console
         *
         * @return void
         */
        this.display_score = function () {
            console.log("Total score: " + _this._score + "\n");
        };
        this._name = name;
        this._score = 0;
    }
    return Player;
}());



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cup", function() { return Cup; });
/* harmony import */ var _dice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);

var Cup = /** @class */ (function () {
    /**
     * Create a cup
     *
     * @param diceNb
     *
     * @return void
     */
    function Cup(diceNb) {
        var _this = this;
        this._dices = [];
        /**
        * Generate number of dice needed to play,
        * Push it in dice array
        *
        * @param diceNb
        *
        * @return void
        */
        this.set_dices = function (diceNb) {
            for (diceNb; diceNb > 0; diceNb--) {
                _this._dices.push(new _dice__WEBPACK_IMPORTED_MODULE_0__["Dice"]());
            }
        };
        /**
        * Return cup value
        *
        * @return number
        */
        this.get_value = function () {
            return _this._value;
        };
        /**
        * Set cup value
        *
        * @param value
        *
        * @return void
        */
        this.set_value = function (value) {
            _this._value = value;
        };
        /**
        * Throw the cup
        *
        * @return void
        */
        this.throw = function () {
            //For all dices in cup
            for (var _i = 0, _a = _this._dices; _i < _a.length; _i++) {
                var dice = _a[_i];
                dice.throw(); //Player throwing cup
                _this._value += dice.get_value();
            }
            _this.display_score();
        };
        /**
        * Display player score in console
        *
        * @return void
        */
        this.display_score = function () {
            console.log("Turn score: " + _this._value);
        };
        this._value = 0;
        this.set_dices(diceNb);
    }
    return Cup;
}());



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dice", function() { return Dice; });
var Dice = /** @class */ (function () {
    /**
     * Create a dice with default value 0
     */
    function Dice() {
        var _this = this;
        /**
        * Return dice value
        *
        * @return number
        */
        this.get_value = function () {
            return _this._value;
        };
        /**
        * Set randomized dice value (between 1 - 6)
        *
        * @return void
        */
        this.throw = function () {
            _this._value = Math.floor(Math.random() * 6) + 1;
        };
        this._value = 0;
    }
    return Dice;
}());



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzcy9nYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzcy9wbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzL2N1cC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3MvZGljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7OztBQ2xGQTtBQUFBO0FBQW9DO0FBRXBDLElBQU0sSUFBSSxHQUFVLElBQUksZ0RBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFFbkMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMscUJBQXFCO0FBQ2xDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLGdCQUFnQjtBQUM5QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxnQkFBZ0I7Ozs7Ozs7O0FDTnBDO0FBQUE7QUFBQTtBQUFBO0FBQWtDO0FBQ047QUFFNUI7SUFNSTs7Ozs7TUFLRTtJQUNGLGNBQVksTUFBYyxFQUFFLE1BQWM7UUFBMUMsaUJBSUM7UUFmRCxhQUFRLEdBQWEsRUFBRSxDQUFDO1FBaUJ4Qjs7OztVQUlFO1FBQ0YsU0FBSSxHQUFHO1lBQ0gsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSw4Q0FBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDekMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSw4Q0FBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDeEMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSw4Q0FBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDeEMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSw4Q0FBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDM0MsQ0FBQztRQUdEOzs7O1VBSUU7UUFDRixVQUFLLEdBQUc7WUFDSixPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMxQixLQUFLLEtBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLEVBQUUsS0FBSSxDQUFDLE9BQU8sRUFBRSxFQUFFO2dCQUNqRCxLQUFtQixVQUFhLEVBQWIsVUFBSSxDQUFDLFFBQVEsRUFBYixjQUFhLEVBQWIsSUFBYSxFQUFFO29CQUE3QixJQUFJLE1BQU07b0JBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQzFCO2FBQ0o7UUFDTCxDQUFDO1FBRUQ7Ozs7VUFJRTtRQUNGLGdCQUFXLEdBQUc7WUFDVixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDZCxJQUFJLE1BQU0sQ0FBQztZQUNYLEtBQW1CLFVBQWEsRUFBYixVQUFJLENBQUMsUUFBUSxFQUFiLGNBQWEsRUFBYixJQUFhLEVBQUU7Z0JBQTdCLElBQUksTUFBTTtnQkFDWCxJQUFJLFdBQVcsR0FBRyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ3JDLE1BQU0sR0FBRyxXQUFXLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQzthQUVsRDtZQUNELElBQUksTUFBTSxJQUFJLFNBQVM7Z0JBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUksTUFBTSxDQUFDLFFBQVEsRUFBRSxtQkFBYyxNQUFNLENBQUMsU0FBUyxFQUFFLFlBQVMsQ0FBQyxDQUFDO1FBQ25GLENBQUM7UUFoREcsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLHdDQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQThDTCxXQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7O0FDL0REO0FBQUE7QUFBQTtJQUlJOzs7O09BSUc7SUFDSCxnQkFBWSxJQUFZO1FBQXhCLGlCQUdDO1FBRUQ7Ozs7VUFJRTtRQUNGLGFBQVEsR0FBRztZQUNQLE9BQU8sS0FBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDO1FBRUQ7Ozs7VUFJRTtRQUNGLGNBQVMsR0FBRztZQUNSLE9BQU8sS0FBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDO1FBRUQ7Ozs7OztXQU1HO1FBQ0gsU0FBSSxHQUFHLFVBQUMsR0FBUTtZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUksS0FBSSxDQUFDLEtBQUssb0JBQWlCLENBQUMsQ0FBQztZQUM1QyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDWixLQUFJLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUMvQixHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QixDQUFDO1FBRUQ7Ozs7V0FJRztRQUNILGtCQUFhLEdBQUc7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFnQixLQUFJLENBQUMsTUFBTSxPQUFJLENBQUMsQ0FBQztRQUNqRCxDQUFDO1FBNUNHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUEyQ0wsYUFBQztBQUFELENBQUM7Ozs7Ozs7OztBQ3pERDtBQUFBO0FBQUE7QUFBOEI7QUFFOUI7SUFJSTs7Ozs7O09BTUc7SUFDSCxhQUFZLE1BQWM7UUFBMUIsaUJBR0M7UUFaRCxXQUFNLEdBQVcsRUFBRSxDQUFDO1FBY3BCOzs7Ozs7O1VBT0U7UUFDTSxjQUFTLEdBQUcsVUFBQyxNQUFjO1lBQy9CLEtBQUssTUFBTSxFQUFFLE1BQU0sR0FBRyxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUU7Z0JBQy9CLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksMENBQUksRUFBRSxDQUFDLENBQUM7YUFDaEM7UUFDTCxDQUFDO1FBRUQ7Ozs7VUFJRTtRQUNLLGNBQVMsR0FBRztZQUNmLE9BQU8sS0FBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDO1FBRUQ7Ozs7OztVQU1FO1FBQ0ssY0FBUyxHQUFHLFVBQUMsS0FBYTtZQUM3QixLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN4QixDQUFDO1FBRUQ7Ozs7VUFJRTtRQUNLLFVBQUssR0FBRztZQUNYLHNCQUFzQjtZQUN0QixLQUFpQixVQUFXLEVBQVgsVUFBSSxDQUFDLE1BQU0sRUFBWCxjQUFXLEVBQVgsSUFBVyxFQUFFO2dCQUF6QixJQUFJLElBQUk7Z0JBQ1QsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMscUJBQXFCO2dCQUNuQyxLQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUNuQztZQUNELEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QixDQUFDO1FBRUQ7Ozs7VUFJRTtRQUNLLGtCQUFhLEdBQUc7WUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBZSxLQUFJLENBQUMsTUFBUSxDQUFDO1FBQzdDLENBQUM7UUEzREcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBMERMLFVBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7QUMxRUQ7QUFBQTtBQUFBO0lBR0k7O09BRUc7SUFDSDtRQUFBLGlCQUdDO1FBRUQ7Ozs7VUFJRTtRQUNLLGNBQVMsR0FBRztZQUNmLE9BQU8sS0FBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDO1FBRUQ7Ozs7VUFJRTtRQUNLLFVBQUssR0FBRztZQUNYLEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BELENBQUM7UUFuQkcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQW1CTCxXQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4vY2xhc3MvZ2FtZVwiO1xyXG5cclxuY29uc3QgZ2FtZSA6IEdhbWUgPSBuZXcgR2FtZSg1LCAxKTtcclxuXHJcbmdhbWUuaW5pdCgpOyAvL0luaXRpYWxpemUgdGhlIGdhbWVcclxuZ2FtZS5zdGFydCgpOyAvL1N0YXJ0IHRoZSBnYW1lXHJcbmdhbWUuc2hvd193aW5uZXIoKTsgLy9EaXNwbGF5IHdpbm5lciIsImltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IHsgQ3VwIH0gZnJvbSBcIi4vY3VwXCI7XG5cbmV4cG9ydCBjbGFzcyBHYW1lIHtcbiAgICBfcGxheWVyczogUGxheWVyW10gPSBbXTtcbiAgICBfdHVybk5iOiBudW1iZXI7XG4gICAgX2RpY2VOYjogbnVtYmVyO1xuICAgIF9jdXA6IEN1cDtcblxuICAgIC8qKlxuICAgICogQ3JlYXRlIGEgbmV3IEdhbWUgXG4gICAgKiBcbiAgICAqIEBwYXJhbSB0dXJuTmIgXG4gICAgKiBAcGFyYW0gZGljZU5iIFxuICAgICovXG4gICAgY29uc3RydWN0b3IodHVybk5iOiBudW1iZXIsIGRpY2VOYjogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3R1cm5OYiA9IHR1cm5OYjtcbiAgICAgICAgdGhpcy5fZGljZU5iID0gZGljZU5iO1xuICAgICAgICB0aGlzLl9jdXAgPSBuZXcgQ3VwKGRpY2VOYik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBBZGQgMiBwbGF5ZXJzIHRvIHRoZSBnYW1lXG4gICAgKiBcbiAgICAqIEByZXR1cm4gdm9pZFxuICAgICovXG4gICAgaW5pdCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5fcGxheWVycy5wdXNoKG5ldyBQbGF5ZXIoJ01pY2hlbCcpKTtcbiAgICAgICAgdGhpcy5fcGxheWVycy5wdXNoKG5ldyBQbGF5ZXIoJ0JvYmJ5JykpO1xuICAgICAgICB0aGlzLl9wbGF5ZXJzLnB1c2gobmV3IFBsYXllcignQ2hyaXMnKSk7XG4gICAgICAgIHRoaXMuX3BsYXllcnMucHVzaChuZXcgUGxheWVyKCdLYXJsJykpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgKiBTdGFydCB0aGUgZ2FtZVxuICAgICogXG4gICAgKiBAcmV0dXJuIHZvaWQgXG4gICAgKi9cbiAgICBzdGFydCA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5jbGVhcigpO1xuICAgICAgICBjb25zb2xlLmxvZygnTkVXIEdBTUVcXG4nKTtcbiAgICAgICAgZm9yICh0aGlzLl90dXJuTmI7IHRoaXMuX3R1cm5OYiA+IDA7IHRoaXMuX3R1cm5OYi0tKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBwbGF5ZXIgb2YgdGhpcy5fcGxheWVycykge1xuICAgICAgICAgICAgICAgIHBsYXllci5wbGF5KHRoaXMuX2N1cCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAqIERpc3BsYXkgd2lubmVyXG4gICAgKiBcbiAgICAqIEByZXR1cm4gdm9pZFxuICAgICovXG4gICAgc2hvd193aW5uZXIgPSAoKSA9PiB7XG4gICAgICAgIGxldCBzY29yZSA9IDA7XG4gICAgICAgIGxldCB3aW5uZXI7XG4gICAgICAgIGZvciAobGV0IHBsYXllciBvZiB0aGlzLl9wbGF5ZXJzKSB7XG4gICAgICAgICAgICBsZXQgcGxheWVyU2NvcmUgPSBwbGF5ZXIuZ2V0X3Njb3JlKCk7XG4gICAgICAgICAgICB3aW5uZXIgPSBwbGF5ZXJTY29yZSA+IHNjb3JlID8gcGxheWVyIDogd2lubmVyO1xuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdpbm5lciAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt3aW5uZXIuZ2V0X25hbWUoKX0gd2lucyB3aXRoICR7d2lubmVyLmdldF9zY29yZSgpfSBwb2ludHNgKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQ3VwIH0gZnJvbSBcIi4vY3VwXCI7XG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXIge1xuICAgIF9uYW1lOiBzdHJpbmc7XG4gICAgX3Njb3JlOiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBwbGF5ZXIgd2l0aCBoaXMgbmFtZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSBuYW1lXG4gICAgICovXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLl9zY29yZSA9IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBSZXR1cm4gcGxheWVyIG5hbWVcbiAgICAqIFxuICAgICogQHJldHVybiBzdHJpbmcgXG4gICAgKi9cbiAgICBnZXRfbmFtZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBSZXR1cm4gcGxheWVyIHNjb3JlXG4gICAgKiBcbiAgICAqIEByZXR1cm4gbnVtYmVyIFxuICAgICovXG4gICAgZ2V0X3Njb3JlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2NvcmU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGxheWVyIHRocm93cyB0aGUgY3VwXG4gICAgICogXG4gICAgICogQHBhcmFtIGN1cFxuICAgICAqIFxuICAgICAqIEByZXR1cm4gdm9pZCBcbiAgICAgKi9cbiAgICBwbGF5ID0gKGN1cDogQ3VwKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuX25hbWV9IHRocm93cyB0aGUgY3VwYCk7XG4gICAgICAgIGN1cC50aHJvdygpO1xuICAgICAgICB0aGlzLl9zY29yZSArPSBjdXAuZ2V0X3ZhbHVlKCk7XG4gICAgICAgIGN1cC5zZXRfdmFsdWUoMCk7XG4gICAgICAgIHRoaXMuZGlzcGxheV9zY29yZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERpc3BsYXkgcGxheWVyIHNjb3JlIGluIGNvbnNvbGVcbiAgICAgKlxuICAgICAqIEByZXR1cm4gdm9pZFxuICAgICAqL1xuICAgIGRpc3BsYXlfc2NvcmUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBUb3RhbCBzY29yZTogJHt0aGlzLl9zY29yZX1cXG5gKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgRGljZSB9IGZyb20gXCIuL2RpY2VcIjtcblxuZXhwb3J0IGNsYXNzIEN1cCB7XG4gICAgX3ZhbHVlOiBudW1iZXI7XG4gICAgX2RpY2VzOiBEaWNlW10gPSBbXTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIGN1cFxuICAgICAqIFxuICAgICAqIEBwYXJhbSBkaWNlTmIgXG4gICAgICogXG4gICAgICogQHJldHVybiB2b2lkXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZGljZU5iOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSAwO1xuICAgICAgICB0aGlzLnNldF9kaWNlcyhkaWNlTmIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogR2VuZXJhdGUgbnVtYmVyIG9mIGRpY2UgbmVlZGVkIHRvIHBsYXksIFxuICAgICogUHVzaCBpdCBpbiBkaWNlIGFycmF5IFxuICAgICogXG4gICAgKiBAcGFyYW0gZGljZU5iXG4gICAgKiBcbiAgICAqIEByZXR1cm4gdm9pZFxuICAgICovXG4gICAgcHJpdmF0ZSBzZXRfZGljZXMgPSAoZGljZU5iOiBudW1iZXIpID0+IHtcbiAgICAgICAgZm9yIChkaWNlTmI7IGRpY2VOYiA+IDA7IGRpY2VOYi0tKSB7XG4gICAgICAgICAgICB0aGlzLl9kaWNlcy5wdXNoKG5ldyBEaWNlKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBSZXR1cm4gY3VwIHZhbHVlXG4gICAgKlxuICAgICogQHJldHVybiBudW1iZXJcbiAgICAqL1xuICAgIHB1YmxpYyBnZXRfdmFsdWUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIFNldCBjdXAgdmFsdWVcbiAgICAqXG4gICAgKiBAcGFyYW0gdmFsdWVcbiAgICAqIFxuICAgICogQHJldHVybiB2b2lkXG4gICAgKi9cbiAgICBwdWJsaWMgc2V0X3ZhbHVlID0gKHZhbHVlOiBudW1iZXIpID0+IHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIFRocm93IHRoZSBjdXBcbiAgICAqXG4gICAgKiBAcmV0dXJuIHZvaWRcbiAgICAqL1xuICAgIHB1YmxpYyB0aHJvdyA9ICgpID0+IHtcbiAgICAgICAgLy9Gb3IgYWxsIGRpY2VzIGluIGN1cFxuICAgICAgICBmb3IgKGxldCBkaWNlIG9mIHRoaXMuX2RpY2VzKSB7XG4gICAgICAgICAgICBkaWNlLnRocm93KCk7IC8vUGxheWVyIHRocm93aW5nIGN1cFxuICAgICAgICAgICAgdGhpcy5fdmFsdWUgKz0gZGljZS5nZXRfdmFsdWUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRpc3BsYXlfc2NvcmUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIERpc3BsYXkgcGxheWVyIHNjb3JlIGluIGNvbnNvbGVcbiAgICAqXG4gICAgKiBAcmV0dXJuIHZvaWRcbiAgICAqL1xuICAgIHB1YmxpYyBkaXNwbGF5X3Njb3JlID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgVHVybiBzY29yZTogJHt0aGlzLl92YWx1ZX1gKVxuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgRGljZSB7XG4gICAgX3ZhbHVlOiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBkaWNlIHdpdGggZGVmYXVsdCB2YWx1ZSAwXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKVxuICAgIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogUmV0dXJuIGRpY2UgdmFsdWVcbiAgICAqXG4gICAgKiBAcmV0dXJuIG51bWJlclxuICAgICovXG4gICAgcHVibGljIGdldF92YWx1ZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogU2V0IHJhbmRvbWl6ZWQgZGljZSB2YWx1ZSAoYmV0d2VlbiAxIC0gNikgXG4gICAgKlxuICAgICogQHJldHVybiB2b2lkXG4gICAgKi9cbiAgICBwdWJsaWMgdGhyb3cgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNikgKyAxO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9