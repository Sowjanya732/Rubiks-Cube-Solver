/**

CUBER
-----

Cuber is a programmable Rubiks cube of sorts.

NOTATION

UPPERCASE = Clockwise to next 90 degree peg
lowercase = Anticlockwise to next 90 degree peg

FACE & SLICE ROTATION COMMANDS

F   Front
S   Standing (rotate according to Front Face's orientation)
B   Back

L   Left
M   Middle (rotate according to Left Face's orientation)
R   Right

U   Up
E   Equator (rotate according to Up Face's orientation)
D   Down

ENTIRE CUBE ROTATION COMMANDS

X   Rotate entire cube according to Right Face's orientation
Y   Rotate entire cube according to Up Face's orientation
Z   Rotate entire cube according to Front Face's orientation


**/


var ERNO = {};

(function () {

	function CustomEvent ( event, params ) {
		params = params || { bubbles: false, cancelable: false, detail: undefined };
		var evt = document.createEvent( 'CustomEvent' );
		evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
		return evt;
	};

	CustomEvent.prototype = window.Event.prototype;

	window.CustomEvent = CustomEvent;

	if (!Function.prototype.bind) {

		Function.prototype.bind = function (oThis) {
			if (typeof this !== "function") {
				// closest thing possible to the ECMAScript 5
				// internal IsCallable function
				throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
			}

			var aArgs = Array.prototype.slice.call(arguments, 1),
				fToBind = this,
				fNOP = function () {},
				fBound = function () {
					return fToBind.apply(this instanceof fNOP && oThis
						? this
						: oThis,
						aArgs.concat(Array.prototype.slice.call(arguments)));
				};

			fNOP.prototype = this.prototype;
			fBound.prototype = new fNOP();

			return fBound;
		};
	}

})();



ERNO.extend = function ( obj, source ) {

	
	if ( Object.keys ) {

		var keys = Object.keys( source );

		for (var i = 0, il = keys.length; i < il; i++) {

			var prop = keys[i];
			Object.defineProperty( obj, prop, Object.getOwnPropertyDescriptor( source, prop ) );

		}

	} else {

		var safeHasOwnProperty = {}.hasOwnProperty;

		for ( var prop in source ) {

			if ( safeHasOwnProperty.call( source, prop ) ) {

				obj[prop] = source[prop];

			}

		}

	}

	return obj;

};
