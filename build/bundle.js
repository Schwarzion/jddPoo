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

var game = new _class_game__WEBPACK_IMPORTED_MODULE_0__["Game"](5, 4);
game.init();
game.start();
game.show_winner();
// Tests
// import { Dice } from "./class/dice";
// const dice: Dice = new Dice();
// dice.throw();
// console.log(dice.get_value());


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _cup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);


var Game = /** @class */ (function () {
    function Game(turnNb, diceNb) {
        var _this = this;
        this._players = [];
        this._cup = new _cup__WEBPACK_IMPORTED_MODULE_1__["Cup"](0);
        this.init = function () {
            console.log('init');
            _this.add_players();
        };
        this.start = function () {
            console.log('starting game !');
            for (_this._turnNb; _this._turnNb > 0; _this._turnNb--) {
                console.log("_____________________\n------New Turn-------\n");
                _this._cup = new _cup__WEBPACK_IMPORTED_MODULE_1__["Cup"](_this._diceNb);
                for (var _i = 0, _a = _this._players; _i < _a.length; _i++) {
                    var player = _a[_i];
                    player.play(_this._cup);
                }
                console.log("\n_____________________\n-----End of Turn-----\n");
            }
        };
        this.show_winner = function () {
            //affiche le gagnant en comparant les joueurs
        };
        this.add_players = function () {
            _this._players.push(new _player__WEBPACK_IMPORTED_MODULE_0__["Player"]('Michel'));
            _this._players.push(new _player__WEBPACK_IMPORTED_MODULE_0__["Player"]('Bobby'));
        };
        this._turnNb = turnNb;
        this._diceNb = diceNb;
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
    function Player(name) {
        var _this = this;
        this.get_name = function () {
            return _this._name;
        };
        this.get_score = function () {
            return _this._score;
        };
        this.play = function (cup) {
            console.log(_this.get_name() + " playing");
            cup.throw();
            // console.log(this.get_score());
        };
        this.display_score = function () {
            return _this._score;
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
    function Cup(diceNb) {
        var _this = this;
        this._dices = [];
        this.setDices = function (diceNb) {
            for (diceNb; diceNb > 0; diceNb--) {
                _this._dices.push(new _dice__WEBPACK_IMPORTED_MODULE_0__["Dice"]());
            }
        };
        this.get_value = function () {
            return _this._value;
        };
        this.set_value = function (value) {
            _this._value = value;
        };
        this.throw = function () {
            //loop in dice array
            //Use dice.throw
            //get values
            // this.set_value();
            // console.log(this._dices);
            // return (this._value);
        };
        this.display_score = function () {
            return _this._dices[_this._dices.length - 1].get_value();
        };
        this._value = diceNb;
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
    function Dice() {
        var _this = this;
        this.get_value = function () {
            return _this._value;
        };
        this.throw = function () {
            _this._value = Math.floor(Math.random() * 6) + 1;
        };
        this._value = 0;
    }
    return Dice;
}());



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzcy9nYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzcy9wbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzL2N1cC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3MvZGljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7OztBQ2xGQTtBQUFBO0FBQW9DO0FBRXBDLElBQU0sSUFBSSxHQUFVLElBQUksZ0RBQUksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7QUFFbEMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ1osSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBR25C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LEtBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQztRQUVNLGNBQVMsR0FBRyxVQUFDLEtBQWE7WUFDN0IsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDeEIsQ0FBQztRQUVNLFVBQUssR0FBRztZQUNYLG9CQUFvQjtZQUNwQixnQkFBZ0I7WUFDaEIsWUFBWTtZQUNaLG9CQUFvQjtZQUNwQiw0QkFBNEI7WUFDNUIsd0JBQXdCO1FBQzVCLENBQUM7UUFFTSxrQkFBYSxHQUFHO1lBQ25CLE9BQU8sS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUMzRCxDQUFDO1FBNUJHLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7SUE0QkwsVUFBQztBQUFELENBQUM7Ozs7Ozs7OztBQ3BDRDtBQUFBO0FBQUE7SUFHSTtRQUFBLGlCQUdDO1FBRU0sY0FBUyxHQUFHO1lBQ2YsT0FBTyxLQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7UUFHTSxVQUFLLEdBQUc7WUFDWCxLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwRCxDQUFDO1FBVkcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQVVMLFdBQUM7QUFBRCxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi9jbGFzcy9nYW1lXCI7XHJcblxyXG5jb25zdCBnYW1lIDogR2FtZSA9IG5ldyBHYW1lKDUsNCk7XHJcblxyXG5nYW1lLmluaXQoKTtcclxuZ2FtZS5zdGFydCgpO1xyXG5nYW1lLnNob3dfd2lubmVyKCk7XHJcblxyXG5cclxuLy8gVGVzdHNcclxuLy8gaW1wb3J0IHsgRGljZSB9IGZyb20gXCIuL2NsYXNzL2RpY2VcIjtcclxuXHJcbi8vIGNvbnN0IGRpY2U6IERpY2UgPSBuZXcgRGljZSgpO1xyXG4vLyBkaWNlLnRocm93KCk7XHJcbi8vIGNvbnNvbGUubG9nKGRpY2UuZ2V0X3ZhbHVlKCkpOyIsImltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IHsgQ3VwIH0gZnJvbSBcIi4vY3VwXCI7XG5cbmV4cG9ydCBjbGFzcyBHYW1lIHtcbiAgICBfcGxheWVyczogUGxheWVyW10gPSBbXTtcbiAgICBfdHVybk5iOiBudW1iZXI7XG4gICAgX2RpY2VOYjogbnVtYmVyO1xuICAgIF9jdXA6IEN1cCA9IG5ldyBDdXAoMCk7XG5cbiAgICBjb25zdHJ1Y3Rvcih0dXJuTmI6IG51bWJlciwgZGljZU5iOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fdHVybk5iID0gdHVybk5iO1xuICAgICAgICB0aGlzLl9kaWNlTmIgPSBkaWNlTmI7XG4gICAgfVxuXG4gICAgaW5pdCA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2luaXQnKTtcbiAgICAgICAgdGhpcy5hZGRfcGxheWVycygpO1xuICAgIH1cblxuXG4gICAgc3RhcnQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzdGFydGluZyBnYW1lICEnKTtcbiAgICAgICAgZm9yICh0aGlzLl90dXJuTmI7IHRoaXMuX3R1cm5OYiA+IDA7IHRoaXMuX3R1cm5OYi0tKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgX19fX19fX19fX19fX19fX19fX19fXFxuLS0tLS0tTmV3IFR1cm4tLS0tLS0tXFxuYClcbiAgICAgICAgICAgIHRoaXMuX2N1cCA9IG5ldyBDdXAodGhpcy5fZGljZU5iKTtcbiAgICAgICAgICAgIGZvciAobGV0IHBsYXllciBvZiB0aGlzLl9wbGF5ZXJzKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBsYXllci5wbGF5KHRoaXMuX2N1cCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgXFxuX19fX19fX19fX19fX19fX19fX19fXFxuLS0tLS1FbmQgb2YgVHVybi0tLS0tXFxuYClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dfd2lubmVyID0gKCkgPT4ge1xuICAgICAgICAvL2FmZmljaGUgbGUgZ2FnbmFudCBlbiBjb21wYXJhbnQgbGVzIGpvdWV1cnNcbiAgICB9XG5cbiAgICBhZGRfcGxheWVycyA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5fcGxheWVycy5wdXNoKG5ldyBQbGF5ZXIoJ01pY2hlbCcpKTtcbiAgICAgICAgdGhpcy5fcGxheWVycy5wdXNoKG5ldyBQbGF5ZXIoJ0JvYmJ5JykpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBDdXAgfSBmcm9tIFwiLi9jdXBcIjtcblxuZXhwb3J0IGNsYXNzIFBsYXllciB7XG4gICAgX25hbWU6IHN0cmluZztcbiAgICBfc2NvcmU6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5fc2NvcmUgPSAwO1xuICAgIH1cblxuICAgIGdldF9uYW1lID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgICB9XG5cbiAgICBnZXRfc2NvcmUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zY29yZTtcbiAgICB9XG5cbiAgICBwbGF5ID0gKGN1cDogQ3VwKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuZ2V0X25hbWUoKX0gcGxheWluZ2ApO1xuICAgICAgICBjdXAudGhyb3coKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5nZXRfc2NvcmUoKSk7XG4gICAgfVxuXG4gICAgZGlzcGxheV9zY29yZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Njb3JlO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBEaWNlIH0gZnJvbSBcIi4vZGljZVwiO1xuXG5leHBvcnQgY2xhc3MgQ3VwIHtcbiAgICBfdmFsdWU6IG51bWJlcjtcbiAgICBfZGljZXM6IERpY2VbXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoZGljZU5iOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSBkaWNlTmI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXREaWNlcyA9IChkaWNlTmI6IG51bWJlcikgPT4ge1xuICAgICAgICBmb3IgKGRpY2VOYjsgZGljZU5iID4gMDsgZGljZU5iLS0pIHtcbiAgICAgICAgICAgIHRoaXMuX2RpY2VzLnB1c2gobmV3IERpY2UoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0X3ZhbHVlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldF92YWx1ZSA9ICh2YWx1ZTogbnVtYmVyKSA9PiB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIHRocm93ID0gKCkgPT4ge1xuICAgICAgICAvL2xvb3AgaW4gZGljZSBhcnJheVxuICAgICAgICAvL1VzZSBkaWNlLnRocm93XG4gICAgICAgIC8vZ2V0IHZhbHVlc1xuICAgICAgICAvLyB0aGlzLnNldF92YWx1ZSgpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl9kaWNlcyk7XG4gICAgICAgIC8vIHJldHVybiAodGhpcy5fdmFsdWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkaXNwbGF5X3Njb3JlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGljZXNbdGhpcy5fZGljZXMubGVuZ3RoIC0gMV0uZ2V0X3ZhbHVlKCk7XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBEaWNlIHtcbiAgICBfdmFsdWU6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKClcbiAgICB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gMDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0X3ZhbHVlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgdGhyb3cgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNikgKyAxO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9