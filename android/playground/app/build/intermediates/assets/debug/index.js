/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(1)
	var __weex_style__ = __webpack_require__(2)
	var __weex_script__ = __webpack_require__(3)
	
	__weex_define__('@weex-component/2db5b02b2b2467ace4cdd68021452568', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})
	
	__weex_bootstrap__('@weex-component/2db5b02b2b2467ace4cdd68021452568',undefined,undefined)

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "children": [
	    {
	      "type": "text",
	      "classList": [
	        "message"
	      ],
	      "attr": {
	        "value": function () {return this.message}
	      }
	    }
	  ]
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
	  "message": {
	    "fontSize": 70
	  }
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	module.exports = {
	  data: function () {return {
	    message: 'Hello, Weex!'
	  }}
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZmMwMWM3ZTE4MDJkMTcxNDAyNjQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LndlP2ZjYjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LndlP2RkZGIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LndlPzg2ZmMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LndlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxFQUFDOztBQUVELDJGOzs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7QUNTQTs7Y0FJQTtBQUZBO0FBREEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBmYzAxYzdlMTgwMmQxNzE0MDI2NCIsInZhciBfX3dlZXhfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vaW5kZXgud2VcIilcbnZhciBfX3dlZXhfc3R5bGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vaW5kZXgud2VcIilcbnZhciBfX3dlZXhfc2NyaXB0X18gPSByZXF1aXJlKFwiISEuLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109L1VzZXJzL21lbm1lbi9Db2RlUHJvamVjdC9XZWV4L1dlZXhEZW1vL25vZGVfbW9kdWxlcy9iYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9L1VzZXJzL21lbm1lbi9Db2RlUHJvamVjdC9XZWV4L1dlZXhEZW1vL25vZGVfbW9kdWxlcy9iYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT0vVXNlcnMvbWVubWVuL0NvZGVQcm9qZWN0L1dlZXgvV2VleERlbW8vbm9kZV9tb2R1bGVzL2JhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPS9Vc2Vycy9tZW5tZW4vQ29kZVByb2plY3QvV2VleC9XZWV4RGVtby9ub2RlX21vZHVsZXMvYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vaW5kZXgud2VcIilcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC1jb21wb25lbnQvMmRiNWIwMmIyYjI0NjdhY2U0Y2RkNjgwMjE0NTI1NjgnLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuX193ZWV4X2Jvb3RzdHJhcF9fKCdAd2VleC1jb21wb25lbnQvMmRiNWIwMmIyYjI0NjdhY2U0Y2RkNjgwMjE0NTI1NjgnLHVuZGVmaW5lZCx1bmRlZmluZWQpXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXgud2U/ZW50cnk9dHJ1ZVxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJtZXNzYWdlXCJcbiAgICAgIF0sXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5tZXNzYWdlfVxuICAgICAgfVxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vc3JjL2luZGV4LndlXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIm1lc3NhZ2VcIjoge1xuICAgIFwiZm9udFNpemVcIjogNzBcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vc3JjL2luZGV4LndlXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8dGV4dCBjbGFzcz1cIm1lc3NhZ2VcIj57eyBtZXNzYWdlIH19PC90ZXh0PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZT5cbiAgLm1lc3NhZ2Uge1xuICAgIGZvbnQtc2l6ZTogNzBcbiAgfVxuPC9zdHlsZT5cblxuPHNjcmlwdD5cbiAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZGF0YToge1xuICAgICAgbWVzc2FnZTogJ0hlbGxvLCBXZWV4ISdcbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC53ZT8zOGIyMDk4NSJdLCJzb3VyY2VSb290IjoiIn0=