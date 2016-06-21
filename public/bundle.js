/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	/* App Bundled dependencies */

	var $ = __webpack_require__(1);
	window.jQuery = $;
	window.$ = $;
	__webpack_require__(2);
	__webpack_require__(15);

	var start = function () {
	    __webpack_require__(25).init;
	    __webpack_require__(28).startBrush;
	    __webpack_require__(29).changeCursor("paint");
	        
	    __webpack_require__(30).init;
	    
	    __webpack_require__(27).initBtnListeners;
	};

	start();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v2.2.3
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-04-05T19:26Z
	 */

	(function( global, factory ) {

		if ( typeof module === "object" && typeof module.exports === "object" ) {
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//"use strict";
	var arr = [];

	var document = window.document;

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var support = {};



	var
		version = "2.2.3",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android<4.1
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// Start with an empty selector
		selector: "",

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?

				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :

				// Return all the elements in a clean array
				slice.call( this );
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {

						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},

		isArray: Array.isArray,

		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function( obj ) {

			// parseFloat NaNs numeric-cast false positives (null|true|false|"")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			// adding 1 corrects loss of precision from parseFloat (#15100)
			var realStringObj = obj && obj.toString();
			return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
		},

		isPlainObject: function( obj ) {
			var key;

			// Not plain objects:
			// - Any object or value whose internal [[Class]] property is not "[object Object]"
			// - DOM nodes
			// - window
			if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}

			// Not own constructor property must be Object
			if ( obj.constructor &&
					!hasOwn.call( obj, "constructor" ) &&
					!hasOwn.call( obj.constructor.prototype || {}, "isPrototypeOf" ) ) {
				return false;
			}

			// Own properties are enumerated firstly, so to speed up,
			// if last one is own, then all properties are own
			for ( key in obj ) {}

			return key === undefined || hasOwn.call( obj, key );
		},

		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}

			// Support: Android<4.0, iOS<6 (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},

		// Evaluates a script in a global context
		globalEval: function( code ) {
			var script,
				indirect = eval;

			code = jQuery.trim( code );

			if ( code ) {

				// If the code includes a valid, prologue position
				// strict mode pragma, execute code by injecting a
				// script tag into the document.
				if ( code.indexOf( "use strict" ) === 1 ) {
					script = document.createElement( "script" );
					script.text = code;
					document.head.appendChild( script ).parentNode.removeChild( script );
				} else {

					// Otherwise, avoid the DOM node creation, insertion
					// and removal by using an indirect global eval

					indirect( code );
				}
			}
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE9-11+
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android<4.1
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	// JSHint would error on this code due to the Symbol not being defined in ES5.
	// Defining this global in .jshintrc would create a danger of using the global
	// unguarded in another place, it seems safer to just disable JSHint for these
	// three lines.
	/* jshint ignore: start */
	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}
	/* jshint ignore: end */

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

	function isArrayLike( obj ) {

		// Support: iOS 8.2 (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.2.1
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-10-17
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// General-purpose constants
		MAX_NEGATIVE = 1 << 31,

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// http://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,
		rescape = /'|\\/g,

		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		};

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, nidselect, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {

			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

					// ID selector
					if ( (m = match[1]) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;

					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {

						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rescape, "\\$&" );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
						while ( i-- ) {
							groups[i] = nidselect + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}

					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */
	function assert( fn ) {
		var div = document.createElement("div");

		try {
			return !!fn( div );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( div.parentNode ) {
				div.parentNode.removeChild( div );
			}
			// release memory in IE
			div = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				( ~b.sourceIndex || MAX_NEGATIVE ) -
				( ~a.sourceIndex || MAX_NEGATIVE );

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, parent,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( (parent = document.defaultView) && parent.top !== parent ) {
			// Support: IE 11
			if ( parent.addEventListener ) {
				parent.addEventListener( "unload", unloadHandler, false );

			// Support: IE 9 - 10 only
			} else if ( parent.attachEvent ) {
				parent.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( div ) {
			div.className = "i";
			return !div.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( div ) {
			div.appendChild( document.createComment("") );
			return !div.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( div ) {
			docElem.appendChild( div ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});

		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					return m ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];

			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See http://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( div ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// http://bugs.jquery.com/ticket/12359
				docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( div.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !div.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibing-combinator selector` fails
				if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( div ) {
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				div.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( div.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":enabled").length ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				div.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( div, "div" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( div, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": function( elem ) {
				return elem.disabled === false;
			},

			"disabled": function( elem ) {
				return elem.disabled === true;
			},

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			checkNonElements = base && dir === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

							if ( (oldCache = uniqueCache[ dir ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ dir ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( div1 ) {
		// Should return 1, but returns 4 (following)
		return div1.compareDocumentPosition( document.createElement("div") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( div ) {
		div.innerHTML = "<input/>";
		div.firstChild.setAttribute( "value", "" );
		return div.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( div ) {
		return div.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;



	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			} );

		}

		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );

		}

		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}

			qualifier = jQuery.filter( qualifier, elements );
		}

		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i,
				len = this.length,
				ret = [],
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						// Support: Blackberry 4.6
						// gEBID returns nodes no longer in the document (#6963)
						if ( elem && elem.parentNode ) {

							// Inject the element directly into the jQuery object
							this.length = 1;
							this[ 0 ] = elem;
						}

						this.context = document;
						this.selector = selector;
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this.context = this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			if ( selector.selector !== undefined ) {
				this.selector = selector.selector;
				this.context = selector.context;
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
					jQuery( selectors, context || this.context ) :
					0;

			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( pos ?
						pos.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	} );
	var rnotwhite = ( /\S+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, listener list, final state
					[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
					[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					then: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];

								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this === promise ? newDefer.promise() : this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Keep pipe for back-compat
			promise.pipe = promise.then;

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 3 ];

				// promise[ done | fail | progress ] = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add( function() {

						// state = [ resolved | rejected ]
						state = stateString;

					// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
				}

				// deferred[ resolve | reject | notify ]
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( subordinate /* , ..., subordinateN */ ) {
			var i = 0,
				resolveValues = slice.call( arguments ),
				length = resolveValues.length,

				// the count of uncompleted subordinates
				remaining = length !== 1 ||
					( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

				// the master Deferred.
				// If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

				// Update function for both resolve and progress values
				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( values === progressValues ) {
							deferred.notifyWith( contexts, values );
						} else if ( !( --remaining ) ) {
							deferred.resolveWith( contexts, values );
						}
					};
				},

				progressValues, progressContexts, resolveContexts;

			// Add listeners to Deferred subordinates; treat others as resolved
			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
						resolveValues[ i ].promise()
							.progress( updateFunc( i, progressContexts, progressValues ) )
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( deferred.reject );
					} else {
						--remaining;
					}
				}
			}

			// If we're not waiting on anything, resolve the master
			if ( !remaining ) {
				deferred.resolveWith( resolveContexts, resolveValues );
			}

			return deferred.promise();
		}
	} );


	// The deferred used on DOM ready
	var readyList;

	jQuery.fn.ready = function( fn ) {

		// Add the callback
		jQuery.ready.promise().done( fn );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );

			// Trigger any bound ready events
			if ( jQuery.fn.triggerHandler ) {
				jQuery( document ).triggerHandler( "ready" );
				jQuery( document ).off( "ready" );
			}
		}
	} );

	/**
	 * The ready event handler and self cleanup method
	 */
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}

	jQuery.ready.promise = function( obj ) {
		if ( !readyList ) {

			readyList = jQuery.Deferred();

			// Catch cases where $(document).ready() is called
			// after the browser event has already occurred.
			// Support: IE9-10 only
			// Older IE sometimes signals "interactive" too soon
			if ( document.readyState === "complete" ||
				( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

				// Handle it asynchronously to allow scripts the opportunity to delay ready
				window.setTimeout( jQuery.ready );

			} else {

				// Use the handy event callback
				document.addEventListener( "DOMContentLoaded", completed );

				// A fallback to window.onload, that will always work
				window.addEventListener( "load", completed );
			}
		}
		return readyList.promise( obj );
	};

	// Kick off the DOM ready check even if the user does not
	jQuery.ready.promise();




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		/* jshint -W018 */
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};




	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		register: function( owner, initial ) {
			var value = initial || {};

			// If it is a node unlikely to be stringify-ed or looped over
			// use plain assignment
			if ( owner.nodeType ) {
				owner[ this.expando ] = value;

			// Otherwise secure it in a non-enumerable, non-writable property
			// configurability must be true to allow the property to be
			// deleted with the delete operator
			} else {
				Object.defineProperty( owner, this.expando, {
					value: value,
					writable: true,
					configurable: true
				} );
			}
			return owner[ this.expando ];
		},
		cache: function( owner ) {

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( !acceptData( owner ) ) {
				return {};
			}

			// Check if the owner object already has a cache
			var value = owner[ this.expando ];

			// If not, create one
			if ( !value ) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;

					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}

			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );

			// Handle: [ owner, key, value ] args
			if ( typeof data === "string" ) {
				cache[ data ] = value;

			// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ prop ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :
				owner[ this.expando ] && owner[ this.expando ][ key ];
		},
		access: function( owner, key, value ) {
			var stored;

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {

				stored = this.get( owner, key );

				return stored !== undefined ?
					stored : this.get( owner, jQuery.camelCase( key ) );
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i, name, camel,
				cache = owner[ this.expando ];

			if ( cache === undefined ) {
				return;
			}

			if ( key === undefined ) {
				this.register( owner );

			} else {

				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {

					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = key.concat( key.map( jQuery.camelCase ) );
				} else {
					camel = jQuery.camelCase( key );

					// Try the string as a key before any manipulation
					if ( key in cache ) {
						name = [ key, camel ];
					} else {

						// If a key with the spaces exists, use it.
						// Otherwise, create an array by matching non-whitespace
						name = camel;
						name = name in cache ?
							[ name ] : ( name.match( rnotwhite ) || [] );
					}
				}

				i = name.length;

				while ( i-- ) {
					delete cache[ name[ i ] ];
				}
			}

			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

				// Support: Chrome <= 35-45+
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://code.google.com/p/chromium/issues/detail?id=378607
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :

						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );

					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE11+
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}

			return access( this, function( value ) {
				var data, camelKey;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {

					// Attempt to get data from the cache
					// with the key as-is
					data = dataUser.get( elem, key ) ||

						// Try to find dashed key if it exists (gh-2779)
						// This is for 2.2.x only
						dataUser.get( elem, key.replace( rmultiDash, "-$&" ).toLowerCase() );

					if ( data !== undefined ) {
						return data;
					}

					camelKey = jQuery.camelCase( key );

					// Attempt to get data from the cache
					// with the key camelized
					data = dataUser.get( elem, camelKey );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, camelKey, undefined );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				camelKey = jQuery.camelCase( key );
				this.each( function() {

					// First, attempt to store a copy or reference of any
					// data that might've been store with a camelCased key.
					var data = dataUser.get( this, camelKey );

					// For HTML5 data-* attribute interop, we have to
					// store property names with dashes in a camelCase form.
					// This might not apply to all properties...*
					dataUser.set( this, camelKey, value );

					// *... In the case of properties that might _actually_
					// have dashes, we need to also store a copy of that
					// unchanged property.
					if ( key.indexOf( "-" ) > -1 && data !== undefined ) {
						dataUser.set( this, key, value );
					}
				} );
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHidden = function( elem, el ) {

			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css( elem, "display" ) === "none" ||
				!jQuery.contains( elem.ownerDocument, elem );
		};



	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() { return tween.cur(); } :
				function() { return jQuery.css( elem, prop, "" ); },
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			do {

				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";

				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );

			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([\w:-]+)/ );

	var rscriptType = ( /^$|\/(?:java|ecma)script/i );



	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// Support: IE9
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

	// Support: IE9
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;


	function getAll( context, tag ) {

		// Support: IE9-11+
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret = typeof context.getElementsByTagName !== "undefined" ?
				context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== "undefined" ?
					context.querySelectorAll( tag || "*" ) :
				[];

		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/;

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {

					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	}


	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Android 4.0-4.3, Safari<=5.1
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Safari<=5.1, Android<4.2
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE<=11+
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();


	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE9
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},

		dispatch: function( event ) {

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( event );

			var i, j, ret, matched, handleObj,
				handlerQueue = [],
				args = slice.call( arguments ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;
			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Support (at least): Chrome, IE9
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			//
			// Support: Firefox<=42+
			// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
			if ( delegateCount && cur.nodeType &&
				( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push( { elem: cur, handlers: matches } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		// Includes some event props shared by KeyEvent and MouseEvent
		props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
			"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),

		fixHooks: {},

		keyHooks: {
			props: "char charCode key keyCode".split( " " ),
			filter: function( event, original ) {

				// Add which for key events
				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}

				return event;
			}
		},

		mouseHooks: {
			props: ( "button buttons clientX clientY offsetX offsetY pageX pageY " +
				"screenX screenY toElement" ).split( " " ),
			filter: function( event, original ) {
				var eventDoc, doc, body,
					button = original.button;

				// Calculate pageX/Y if missing and clientX/Y available
				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;

					event.pageX = original.clientX +
						( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
						( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY +
						( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
						( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}

				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}

				return event;
			}
		},

		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}

			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];

			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

			event = new jQuery.Event( originalEvent );

			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}

			// Support: Cordova 2.5 (WebKit) (#13255)
			// All events should have a target; Cordova deviceready doesn't
			if ( !event.target ) {
				event.target = document;
			}

			// Support: Safari 6.0+, Chrome<28
			// Target should not be a text node (#504, #13143)
			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}

			return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: Android<4.0
					src.returnValue === false ?
				returnTrue :
				returnFalse;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://code.google.com/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	jQuery.fn.extend( {
		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );


	var
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,

		// Support: IE 10-11, Edge 10240+
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	// Manipulating tables requires a tbody
	function manipulationTarget( elem, content ) {
		return jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

			elem.getElementsByTagName( "tbody" )[ 0 ] ||
				elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
			elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );

		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}

		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			dataUser.set( dest, udataCur );
		}
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android<4.1, PhantomJS<2
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;

			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {

						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {

		// Keep domManip exposed until 3.0 (gh-2225)
		domManip: domManip,

		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: QtWebKit
				// .get() because push.apply(_, arraylike) throws
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );


	var iframe,
		elemdisplay = {

			// Support: Firefox
			// We have to pre-define these values for FF (#10227)
			HTML: "block",
			BODY: "block"
		};

	/**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */

	// Called only from within defaultDisplay
	function actualDisplay( name, doc ) {
		var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

			display = jQuery.css( elem[ 0 ], "display" );

		// We don't have any data stored on the element,
		// so use "detach" method as fast way to get rid of the element
		elem.detach();

		return display;
	}

	/**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */
	function defaultDisplay( nodeName ) {
		var doc = document,
			display = elemdisplay[ nodeName ];

		if ( !display ) {
			display = actualDisplay( nodeName, doc );

			// If the simple way fails, read from inside an iframe
			if ( display === "none" || !display ) {

				// Use the already-created iframe if possible
				iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
					.appendTo( doc.documentElement );

				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = iframe[ 0 ].contentDocument;

				// Support: IE
				doc.write();
				doc.close();

				display = actualDisplay( nodeName, doc );
				iframe.detach();
			}

			// Store the correct default display
			elemdisplay[ nodeName ] = display;
		}

		return display;
	}
	var rmargin = ( /^margin/ );

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {

			// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view || !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};

	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};


	var documentElement = document.documentElement;



	( function() {
		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		// Support: IE9-11+
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {
			div.style.cssText =

				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );

			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";

			documentElement.removeChild( container );
		}

		jQuery.extend( support, {
			pixelPosition: function() {

				// This test is executed only once but we still do memoizing
				// since we can use the boxSizingReliable pre-computing.
				// No need to check if the test was already performed, though.
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {

				// Support: Android 4.0-4.3
				// We're checking for boxSizingReliableVal here instead of pixelMarginRightVal
				// since that compresses better and they're computed together anyway.
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {

				// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return reliableMarginLeftVal;
			},
			reliableMarginRight: function() {

				// Support: Android 2.3
				// Check if div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container. (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// This support function is only executed once so no memoizing is needed.
				var ret,
					marginDiv = div.appendChild( document.createElement( "div" ) );

				// Reset CSS: box-sizing; display; margin; border; padding
				marginDiv.style.cssText = div.style.cssText =

					// Support: Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;box-sizing:content-box;" +
					"display:block;margin:0;border:0;padding:0";
				marginDiv.style.marginRight = marginDiv.style.width = "0";
				div.style.width = "1px";
				documentElement.appendChild( container );

				ret = !parseFloat( window.getComputedStyle( marginDiv ).marginRight );

				documentElement.removeChild( container );
				div.removeChild( marginDiv );

				return ret;
			}
		} );
	} )();


	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );
		ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

		// Support: Opera 12.1x only
		// Fall back to style even without computed
		// computed is undefined for elems on document fragments
		if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// Support: IE9
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// http://dev.w3.org/csswg/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

			// Support: IE9-11+
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,

		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {

		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	function setPositiveNumber( elem, value, subtract ) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?

			// If we already have the right measurement, avoid augmentation
			4 :

			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,

			val = 0;

		for ( ; i < 4; i += 2 ) {

			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {

				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {

				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Support: IE11 only
		// In IE 11 fullscreen elements inside of an iframe have
		// 100x too small dimensions (gh-1764).
		if ( document.msFullscreenElement && window.top !== window ) {

			// Support: IE11 only
			// Running getBoundingClientRect on a disconnected node
			// in IE throws an error.
			if ( elem.getClientRects().length ) {
				val = Math.round( elem.getBoundingClientRect()[ name ] * 100 );
			}
		}

		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {

			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}

			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	function showHide( elements, show ) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;

		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			values[ index ] = dataPriv.get( elem, "olddisplay" );
			display = elem.style.display;
			if ( show ) {

				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if ( !values[ index ] && display === "none" ) {
					elem.style.display = "";
				}

				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if ( elem.style.display === "" && isHidden( elem ) ) {
					values[ index ] = dataPriv.access(
						elem,
						"olddisplay",
						defaultDisplay( elem.nodeName )
					);
				}
			} else {
				hidden = isHidden( elem );

				if ( display !== "none" || !hidden ) {
					dataPriv.set(
						elem,
						"olddisplay",
						hidden ? display : jQuery.css( elem, "display" )
					);
				}
			}
		}

		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for ( index = 0; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
			if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
				elem.style.display = show ? values[ index ] || "" : "none";
			}
		}

		return elements;
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// Support: IE9-11+
				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					style[ name ] = value;
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
						elem.offsetWidth === 0 ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);

				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {

					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}

				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);

	// Support: Android 2.3
	jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
		function( elem, computed ) {
			if ( computed ) {
				return swap( elem, { "display": "inline-block" },
					curCSS, [ elem, "marginRight" ] );
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		},
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHidden( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE9
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back Compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );

		// Handle queue: false promises
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// Height/width overflow pass
		if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {

			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE9-10 do not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			display = jQuery.css( elem, "display" );

			// Test default display if display is currently "none"
			checkDisplay = display === "none" ?
				dataPriv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

			if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
				style.display = "inline-block";
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}

		// show/hide pass
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.exec( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// If there is dataShow left over from a stopped hide or show
					// and we are going to proceed with show, we should pretend to be hidden
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

			// Any non-fx value stops us from restoring the original display value
			} else {
				display = undefined;
			}
		}

		if ( !jQuery.isEmptyObject( orig ) ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", {} );
			}

			// Store state if its toggle - enables .stop().toggle() to "reverse"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}
			if ( hidden ) {
				jQuery( elem ).show();
			} else {
				anim.done( function() {
					jQuery( elem ).hide();
				} );
			}
			anim.done( function() {
				var prop;

				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
			for ( prop in orig ) {
				tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

				if ( !( prop in dataShow ) ) {
					dataShow[ prop ] = tween.start;
					if ( hidden ) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}

		// If this is a noop like .hide().hide(), restore an overwritten display value
		} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
			style.display = display;
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length ; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	jQuery.Animation = jQuery.extend( Animation, {
		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnotwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ?
			opt.duration : opt.duration in jQuery.fx.speeds ?
				jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHidden ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		window.clearInterval( timerId );

		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: iOS<=5.1, Android<=4.2+
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE<=11+
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: Android<=2.3
		// Options inside disabled selects are incorrectly marked as disabled
		select.disabled = true;
		support.optDisabled = !opt.disabled;

		// Support: IE<=11+
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();


	var boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[ name ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name, propName,
				i = 0,
				attrNames = value && value.match( rnotwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					propName = jQuery.propFix[ name ] || name;

					// Boolean attributes get special treatment (#10870)
					if ( jQuery.expr.match.bool.test( name ) ) {

						// Set corresponding property to false
						elem[ propName ] = false;
					}

					elem.removeAttribute( name );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		};
	} );




	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					return tabindex ?
						parseInt( tabindex, 10 ) :
						rfocusable.test( elem.nodeName ) ||
							rclickable.test( elem.nodeName ) && elem.href ?
								0 :
								-1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {
				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;

					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );




	var rclass = /[\t\r\n\f]/g;

	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {

							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( type === "string" ) {

					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnotwhite ) || [];

					while ( ( className = classNames[ i++ ] ) ) {

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// Store className if set
						dataPriv.set( this, "__className__", className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + getClass( elem ) + " " ).replace( rclass, " " )
						.indexOf( className ) > -1
				) {
					return true;
				}
			}

			return false;
		}
	} );




	var rreturn = /\r/g,
		rspaces = /[\x20\t\r\n\f]+/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					return typeof ret === "string" ?

						// Handle most common string cases
						ret.replace( rreturn, "" ) :

						// Handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {

					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :

						// Support: IE10-11+
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								( support.optDisabled ?
									!option.disabled : option.getAttribute( "disabled" ) === null ) &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];
						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	// Return jQuery for attributes-only inclusion


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

	jQuery.extend( jQuery.event, {

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true

					// Previously, `originalEvent: {}` was set here, so stopPropagation call
					// would not be triggered on donor event, since in our own
					// jQuery.event.stopPropagation function we had a check for existence of
					// originalEvent.stopPropagation method, so, consequently it would be a noop.
					//
					// But now, this "simulate" function is used only for events
					// for which stopPropagation() is noop, so there is no need for that anymore.
					//
					// For the 1.x branch though, guard for "click" and "submit"
					// events is still used, but was moved to jQuery.event.stopPropagation function
					// because `originalEvent` should point to the original event for the constancy
					// with other events and for more focused logic
				}
			);

			jQuery.event.trigger( e, null, elem );

			if ( e.isDefaultPrevented() ) {
				event.preventDefault();
			}
		}

	} );

	jQuery.fn.extend( {

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
		function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );

	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );




	support.focusin = "onfocusin" in window;


	// Support: Firefox
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome, Safari
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );

					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;

	var nonce = jQuery.now();

	var rquery = ( /\?/ );



	// Support: Android 2.3
	// Workaround failure to string-cast null input
	jQuery.parseJSON = function( data ) {
		return JSON.parse( data + "" );
	};


	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE9
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

			if ( jQuery.isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

			// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,

				// URL without anti-cache param
				cacheURL,

				// Response headers
				responseHeadersString,
				responseHeaders,

				// timeout handle
				timeoutTimer,

				// Url cleanup var
				urlAnchor,

				// To know if global events are to be dispatched
				fireGlobals,

				// Loop variable
				i,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// The jqXHR state
				state = 0,

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( state === 2 ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return state === 2 ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						var lname = name.toLowerCase();
						if ( !state ) {
							name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( !state ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( state < 2 ) {
								for ( code in map ) {

									// Lazy-add the new callback in a way that preserves old ones
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							} else {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR ).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;

			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" ).replace( rhash, "" )
				.replace( rprotocol, location.protocol + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );

				// Support: IE8-11+
				// IE throws exception if url is malformed, e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE8-11+
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add anti-cache in url if needed
				if ( s.cache === false ) {
					s.url = rts.test( cacheURL ) ?

						// If there is already a '_' parameter, set its value
						cacheURL.replace( rts, "$1_=" + nonce++ ) :

						// Otherwise add one to the end
						cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
				}
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			for ( i in { success: 1, error: 1, complete: 1 } ) {
				jqXHR[ i ]( s[ i ] );
			}

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( state === 2 ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					state = 1;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Propagate exception as error if not done
					if ( state < 2 ) {
						done( -1, e );

					// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Called once
				if ( state === 2 ) {
					return;
				}

				// State is "done" now
				state = 2;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			async: false,
			global: false,
			"throws": true
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;

			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapAll( html.call( this, i ) );
				} );
			}

			if ( this[ 0 ] ) {

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function() {
			return this.parent().each( function() {
				if ( !jQuery.nodeName( this, "body" ) ) {
					jQuery( this ).replaceWith( this.childNodes );
				}
			} ).end();
		}
	} );


	jQuery.expr.filters.hidden = function( elem ) {
		return !jQuery.expr.filters.visible( elem );
	};
	jQuery.expr.filters.visible = function( elem ) {

		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		// Use OR instead of AND as the element is not visible if either is true
		// See tickets #10406 and #13132
		return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0;
	};




	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, value ) {

				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};

		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();

				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						} ) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};

	var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE9
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();

					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {

									// Support: IE9
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(

											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,

										// Support: IE9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );

					// Support: IE9
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {

							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}

					// Create the abort callback
					callback = callback( "abort" );

					try {

						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// Force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;

		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	// Keep a copy of the old load method
	var _load = jQuery.fn.load;

	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );
		}

		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};




	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}

	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {
		offset: function( options ) {
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var docElem, win,
				elem = this[ 0 ],
				box = { top: 0, left: 0 },
				doc = elem && elem.ownerDocument;

			if ( !doc ) {
				return;
			}

			docElem = doc.documentElement;

			// Make sure it's not a disconnected DOM node
			if ( !jQuery.contains( docElem, elem ) ) {
				return box;
			}

			box = elem.getBoundingClientRect();
			win = getWindow( doc );
			return {
				top: box.top + win.pageYOffset - docElem.clientTop,
				left: box.left + win.pageXOffset - docElem.clientLeft
			};
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();

			} else {

				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );

	// Support: Safari<7-8+, Chrome<37-44+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {

						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable, null );
			};
		} );
	} );


	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		},
		size: function() {
			return this.length;
		}
	} );

	jQuery.fn.andSelf = jQuery.fn.addBack;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}



	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}

	return jQuery;
	}));


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// This file is autogenerated via the `commonjs` Grunt task. You can require() this file in a CommonJS environment.
	__webpack_require__(3)
	__webpack_require__(4)
	__webpack_require__(5)
	__webpack_require__(6)
	__webpack_require__(7)
	__webpack_require__(8)
	__webpack_require__(9)
	__webpack_require__(10)
	__webpack_require__(11)
	__webpack_require__(12)
	__webpack_require__(13)
	__webpack_require__(14)

/***/ },
/* 3 */
/***/ function(module, exports) {

	/* ========================================================================
	 * Bootstrap: transition.js v3.3.6
	 * http://getbootstrap.com/javascript/#transitions
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
	  // ============================================================

	  function transitionEnd() {
	    var el = document.createElement('bootstrap')

	    var transEndEventNames = {
	      WebkitTransition : 'webkitTransitionEnd',
	      MozTransition    : 'transitionend',
	      OTransition      : 'oTransitionEnd otransitionend',
	      transition       : 'transitionend'
	    }

	    for (var name in transEndEventNames) {
	      if (el.style[name] !== undefined) {
	        return { end: transEndEventNames[name] }
	      }
	    }

	    return false // explicit for ie8 (  ._.)
	  }

	  // http://blog.alexmaccaw.com/css-transitions
	  $.fn.emulateTransitionEnd = function (duration) {
	    var called = false
	    var $el = this
	    $(this).one('bsTransitionEnd', function () { called = true })
	    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
	    setTimeout(callback, duration)
	    return this
	  }

	  $(function () {
	    $.support.transition = transitionEnd()

	    if (!$.support.transition) return

	    $.event.special.bsTransitionEnd = {
	      bindType: $.support.transition.end,
	      delegateType: $.support.transition.end,
	      handle: function (e) {
	        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
	      }
	    }
	  })

	}(jQuery);


/***/ },
/* 4 */
/***/ function(module, exports) {

	/* ========================================================================
	 * Bootstrap: alert.js v3.3.6
	 * http://getbootstrap.com/javascript/#alerts
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // ALERT CLASS DEFINITION
	  // ======================

	  var dismiss = '[data-dismiss="alert"]'
	  var Alert   = function (el) {
	    $(el).on('click', dismiss, this.close)
	  }

	  Alert.VERSION = '3.3.6'

	  Alert.TRANSITION_DURATION = 150

	  Alert.prototype.close = function (e) {
	    var $this    = $(this)
	    var selector = $this.attr('data-target')

	    if (!selector) {
	      selector = $this.attr('href')
	      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
	    }

	    var $parent = $(selector)

	    if (e) e.preventDefault()

	    if (!$parent.length) {
	      $parent = $this.closest('.alert')
	    }

	    $parent.trigger(e = $.Event('close.bs.alert'))

	    if (e.isDefaultPrevented()) return

	    $parent.removeClass('in')

	    function removeElement() {
	      // detach from parent, fire event then clean up data
	      $parent.detach().trigger('closed.bs.alert').remove()
	    }

	    $.support.transition && $parent.hasClass('fade') ?
	      $parent
	        .one('bsTransitionEnd', removeElement)
	        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
	      removeElement()
	  }


	  // ALERT PLUGIN DEFINITION
	  // =======================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this)
	      var data  = $this.data('bs.alert')

	      if (!data) $this.data('bs.alert', (data = new Alert(this)))
	      if (typeof option == 'string') data[option].call($this)
	    })
	  }

	  var old = $.fn.alert

	  $.fn.alert             = Plugin
	  $.fn.alert.Constructor = Alert


	  // ALERT NO CONFLICT
	  // =================

	  $.fn.alert.noConflict = function () {
	    $.fn.alert = old
	    return this
	  }


	  // ALERT DATA-API
	  // ==============

	  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

	}(jQuery);


/***/ },
/* 5 */
/***/ function(module, exports) {

	/* ========================================================================
	 * Bootstrap: button.js v3.3.6
	 * http://getbootstrap.com/javascript/#buttons
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // BUTTON PUBLIC CLASS DEFINITION
	  // ==============================

	  var Button = function (element, options) {
	    this.$element  = $(element)
	    this.options   = $.extend({}, Button.DEFAULTS, options)
	    this.isLoading = false
	  }

	  Button.VERSION  = '3.3.6'

	  Button.DEFAULTS = {
	    loadingText: 'loading...'
	  }

	  Button.prototype.setState = function (state) {
	    var d    = 'disabled'
	    var $el  = this.$element
	    var val  = $el.is('input') ? 'val' : 'html'
	    var data = $el.data()

	    state += 'Text'

	    if (data.resetText == null) $el.data('resetText', $el[val]())

	    // push to event loop to allow forms to submit
	    setTimeout($.proxy(function () {
	      $el[val](data[state] == null ? this.options[state] : data[state])

	      if (state == 'loadingText') {
	        this.isLoading = true
	        $el.addClass(d).attr(d, d)
	      } else if (this.isLoading) {
	        this.isLoading = false
	        $el.removeClass(d).removeAttr(d)
	      }
	    }, this), 0)
	  }

	  Button.prototype.toggle = function () {
	    var changed = true
	    var $parent = this.$element.closest('[data-toggle="buttons"]')

	    if ($parent.length) {
	      var $input = this.$element.find('input')
	      if ($input.prop('type') == 'radio') {
	        if ($input.prop('checked')) changed = false
	        $parent.find('.active').removeClass('active')
	        this.$element.addClass('active')
	      } else if ($input.prop('type') == 'checkbox') {
	        if (($input.prop('checked')) !== this.$element.hasClass('active')) changed = false
	        this.$element.toggleClass('active')
	      }
	      $input.prop('checked', this.$element.hasClass('active'))
	      if (changed) $input.trigger('change')
	    } else {
	      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
	      this.$element.toggleClass('active')
	    }
	  }


	  // BUTTON PLUGIN DEFINITION
	  // ========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.button')
	      var options = typeof option == 'object' && option

	      if (!data) $this.data('bs.button', (data = new Button(this, options)))

	      if (option == 'toggle') data.toggle()
	      else if (option) data.setState(option)
	    })
	  }

	  var old = $.fn.button

	  $.fn.button             = Plugin
	  $.fn.button.Constructor = Button


	  // BUTTON NO CONFLICT
	  // ==================

	  $.fn.button.noConflict = function () {
	    $.fn.button = old
	    return this
	  }


	  // BUTTON DATA-API
	  // ===============

	  $(document)
	    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
	      var $btn = $(e.target)
	      if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
	      Plugin.call($btn, 'toggle')
	      if (!($(e.target).is('input[type="radio"]') || $(e.target).is('input[type="checkbox"]'))) e.preventDefault()
	    })
	    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
	      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
	    })

	}(jQuery);


/***/ },
/* 6 */
/***/ function(module, exports) {

	/* ========================================================================
	 * Bootstrap: carousel.js v3.3.6
	 * http://getbootstrap.com/javascript/#carousel
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // CAROUSEL CLASS DEFINITION
	  // =========================

	  var Carousel = function (element, options) {
	    this.$element    = $(element)
	    this.$indicators = this.$element.find('.carousel-indicators')
	    this.options     = options
	    this.paused      = null
	    this.sliding     = null
	    this.interval    = null
	    this.$active     = null
	    this.$items      = null

	    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

	    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
	      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
	      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
	  }

	  Carousel.VERSION  = '3.3.6'

	  Carousel.TRANSITION_DURATION = 600

	  Carousel.DEFAULTS = {
	    interval: 5000,
	    pause: 'hover',
	    wrap: true,
	    keyboard: true
	  }

	  Carousel.prototype.keydown = function (e) {
	    if (/input|textarea/i.test(e.target.tagName)) return
	    switch (e.which) {
	      case 37: this.prev(); break
	      case 39: this.next(); break
	      default: return
	    }

	    e.preventDefault()
	  }

	  Carousel.prototype.cycle = function (e) {
	    e || (this.paused = false)

	    this.interval && clearInterval(this.interval)

	    this.options.interval
	      && !this.paused
	      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

	    return this
	  }

	  Carousel.prototype.getItemIndex = function (item) {
	    this.$items = item.parent().children('.item')
	    return this.$items.index(item || this.$active)
	  }

	  Carousel.prototype.getItemForDirection = function (direction, active) {
	    var activeIndex = this.getItemIndex(active)
	    var willWrap = (direction == 'prev' && activeIndex === 0)
	                || (direction == 'next' && activeIndex == (this.$items.length - 1))
	    if (willWrap && !this.options.wrap) return active
	    var delta = direction == 'prev' ? -1 : 1
	    var itemIndex = (activeIndex + delta) % this.$items.length
	    return this.$items.eq(itemIndex)
	  }

	  Carousel.prototype.to = function (pos) {
	    var that        = this
	    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

	    if (pos > (this.$items.length - 1) || pos < 0) return

	    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
	    if (activeIndex == pos) return this.pause().cycle()

	    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
	  }

	  Carousel.prototype.pause = function (e) {
	    e || (this.paused = true)

	    if (this.$element.find('.next, .prev').length && $.support.transition) {
	      this.$element.trigger($.support.transition.end)
	      this.cycle(true)
	    }

	    this.interval = clearInterval(this.interval)

	    return this
	  }

	  Carousel.prototype.next = function () {
	    if (this.sliding) return
	    return this.slide('next')
	  }

	  Carousel.prototype.prev = function () {
	    if (this.sliding) return
	    return this.slide('prev')
	  }

	  Carousel.prototype.slide = function (type, next) {
	    var $active   = this.$element.find('.item.active')
	    var $next     = next || this.getItemForDirection(type, $active)
	    var isCycling = this.interval
	    var direction = type == 'next' ? 'left' : 'right'
	    var that      = this

	    if ($next.hasClass('active')) return (this.sliding = false)

	    var relatedTarget = $next[0]
	    var slideEvent = $.Event('slide.bs.carousel', {
	      relatedTarget: relatedTarget,
	      direction: direction
	    })
	    this.$element.trigger(slideEvent)
	    if (slideEvent.isDefaultPrevented()) return

	    this.sliding = true

	    isCycling && this.pause()

	    if (this.$indicators.length) {
	      this.$indicators.find('.active').removeClass('active')
	      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
	      $nextIndicator && $nextIndicator.addClass('active')
	    }

	    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
	    if ($.support.transition && this.$element.hasClass('slide')) {
	      $next.addClass(type)
	      $next[0].offsetWidth // force reflow
	      $active.addClass(direction)
	      $next.addClass(direction)
	      $active
	        .one('bsTransitionEnd', function () {
	          $next.removeClass([type, direction].join(' ')).addClass('active')
	          $active.removeClass(['active', direction].join(' '))
	          that.sliding = false
	          setTimeout(function () {
	            that.$element.trigger(slidEvent)
	          }, 0)
	        })
	        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
	    } else {
	      $active.removeClass('active')
	      $next.addClass('active')
	      this.sliding = false
	      this.$element.trigger(slidEvent)
	    }

	    isCycling && this.cycle()

	    return this
	  }


	  // CAROUSEL PLUGIN DEFINITION
	  // ==========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.carousel')
	      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
	      var action  = typeof option == 'string' ? option : options.slide

	      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
	      if (typeof option == 'number') data.to(option)
	      else if (action) data[action]()
	      else if (options.interval) data.pause().cycle()
	    })
	  }

	  var old = $.fn.carousel

	  $.fn.carousel             = Plugin
	  $.fn.carousel.Constructor = Carousel


	  // CAROUSEL NO CONFLICT
	  // ====================

	  $.fn.carousel.noConflict = function () {
	    $.fn.carousel = old
	    return this
	  }


	  // CAROUSEL DATA-API
	  // =================

	  var clickHandler = function (e) {
	    var href
	    var $this   = $(this)
	    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
	    if (!$target.hasClass('carousel')) return
	    var options = $.extend({}, $target.data(), $this.data())
	    var slideIndex = $this.attr('data-slide-to')
	    if (slideIndex) options.interval = false

	    Plugin.call($target, options)

	    if (slideIndex) {
	      $target.data('bs.carousel').to(slideIndex)
	    }

	    e.preventDefault()
	  }

	  $(document)
	    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
	    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

	  $(window).on('load', function () {
	    $('[data-ride="carousel"]').each(function () {
	      var $carousel = $(this)
	      Plugin.call($carousel, $carousel.data())
	    })
	  })

	}(jQuery);


/***/ },
/* 7 */
/***/ function(module, exports) {

	/* ========================================================================
	 * Bootstrap: collapse.js v3.3.6
	 * http://getbootstrap.com/javascript/#collapse
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // COLLAPSE PUBLIC CLASS DEFINITION
	  // ================================

	  var Collapse = function (element, options) {
	    this.$element      = $(element)
	    this.options       = $.extend({}, Collapse.DEFAULTS, options)
	    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
	                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
	    this.transitioning = null

	    if (this.options.parent) {
	      this.$parent = this.getParent()
	    } else {
	      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
	    }

	    if (this.options.toggle) this.toggle()
	  }

	  Collapse.VERSION  = '3.3.6'

	  Collapse.TRANSITION_DURATION = 350

	  Collapse.DEFAULTS = {
	    toggle: true
	  }

	  Collapse.prototype.dimension = function () {
	    var hasWidth = this.$element.hasClass('width')
	    return hasWidth ? 'width' : 'height'
	  }

	  Collapse.prototype.show = function () {
	    if (this.transitioning || this.$element.hasClass('in')) return

	    var activesData
	    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

	    if (actives && actives.length) {
	      activesData = actives.data('bs.collapse')
	      if (activesData && activesData.transitioning) return
	    }

	    var startEvent = $.Event('show.bs.collapse')
	    this.$element.trigger(startEvent)
	    if (startEvent.isDefaultPrevented()) return

	    if (actives && actives.length) {
	      Plugin.call(actives, 'hide')
	      activesData || actives.data('bs.collapse', null)
	    }

	    var dimension = this.dimension()

	    this.$element
	      .removeClass('collapse')
	      .addClass('collapsing')[dimension](0)
	      .attr('aria-expanded', true)

	    this.$trigger
	      .removeClass('collapsed')
	      .attr('aria-expanded', true)

	    this.transitioning = 1

	    var complete = function () {
	      this.$element
	        .removeClass('collapsing')
	        .addClass('collapse in')[dimension]('')
	      this.transitioning = 0
	      this.$element
	        .trigger('shown.bs.collapse')
	    }

	    if (!$.support.transition) return complete.call(this)

	    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

	    this.$element
	      .one('bsTransitionEnd', $.proxy(complete, this))
	      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
	  }

	  Collapse.prototype.hide = function () {
	    if (this.transitioning || !this.$element.hasClass('in')) return

	    var startEvent = $.Event('hide.bs.collapse')
	    this.$element.trigger(startEvent)
	    if (startEvent.isDefaultPrevented()) return

	    var dimension = this.dimension()

	    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

	    this.$element
	      .addClass('collapsing')
	      .removeClass('collapse in')
	      .attr('aria-expanded', false)

	    this.$trigger
	      .addClass('collapsed')
	      .attr('aria-expanded', false)

	    this.transitioning = 1

	    var complete = function () {
	      this.transitioning = 0
	      this.$element
	        .removeClass('collapsing')
	        .addClass('collapse')
	        .trigger('hidden.bs.collapse')
	    }

	    if (!$.support.transition) return complete.call(this)

	    this.$element
	      [dimension](0)
	      .one('bsTransitionEnd', $.proxy(complete, this))
	      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
	  }

	  Collapse.prototype.toggle = function () {
	    this[this.$element.hasClass('in') ? 'hide' : 'show']()
	  }

	  Collapse.prototype.getParent = function () {
	    return $(this.options.parent)
	      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
	      .each($.proxy(function (i, element) {
	        var $element = $(element)
	        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
	      }, this))
	      .end()
	  }

	  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
	    var isOpen = $element.hasClass('in')

	    $element.attr('aria-expanded', isOpen)
	    $trigger
	      .toggleClass('collapsed', !isOpen)
	      .attr('aria-expanded', isOpen)
	  }

	  function getTargetFromTrigger($trigger) {
	    var href
	    var target = $trigger.attr('data-target')
	      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

	    return $(target)
	  }


	  // COLLAPSE PLUGIN DEFINITION
	  // ==========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.collapse')
	      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

	      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
	      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
	      if (typeof option == 'string') data[option]()
	    })
	  }

	  var old = $.fn.collapse

	  $.fn.collapse             = Plugin
	  $.fn.collapse.Constructor = Collapse


	  // COLLAPSE NO CONFLICT
	  // ====================

	  $.fn.collapse.noConflict = function () {
	    $.fn.collapse = old
	    return this
	  }


	  // COLLAPSE DATA-API
	  // =================

	  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
	    var $this   = $(this)

	    if (!$this.attr('data-target')) e.preventDefault()

	    var $target = getTargetFromTrigger($this)
	    var data    = $target.data('bs.collapse')
	    var option  = data ? 'toggle' : $this.data()

	    Plugin.call($target, option)
	  })

	}(jQuery);


/***/ },
/* 8 */
/***/ function(module, exports) {

	/* ========================================================================
	 * Bootstrap: dropdown.js v3.3.6
	 * http://getbootstrap.com/javascript/#dropdowns
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // DROPDOWN CLASS DEFINITION
	  // =========================

	  var backdrop = '.dropdown-backdrop'
	  var toggle   = '[data-toggle="dropdown"]'
	  var Dropdown = function (element) {
	    $(element).on('click.bs.dropdown', this.toggle)
	  }

	  Dropdown.VERSION = '3.3.6'

	  function getParent($this) {
	    var selector = $this.attr('data-target')

	    if (!selector) {
	      selector = $this.attr('href')
	      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
	    }

	    var $parent = selector && $(selector)

	    return $parent && $parent.length ? $parent : $this.parent()
	  }

	  function clearMenus(e) {
	    if (e && e.which === 3) return
	    $(backdrop).remove()
	    $(toggle).each(function () {
	      var $this         = $(this)
	      var $parent       = getParent($this)
	      var relatedTarget = { relatedTarget: this }

	      if (!$parent.hasClass('open')) return

	      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return

	      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

	      if (e.isDefaultPrevented()) return

	      $this.attr('aria-expanded', 'false')
	      $parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget))
	    })
	  }

	  Dropdown.prototype.toggle = function (e) {
	    var $this = $(this)

	    if ($this.is('.disabled, :disabled')) return

	    var $parent  = getParent($this)
	    var isActive = $parent.hasClass('open')

	    clearMenus()

	    if (!isActive) {
	      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
	        // if mobile we use a backdrop because click events don't delegate
	        $(document.createElement('div'))
	          .addClass('dropdown-backdrop')
	          .insertAfter($(this))
	          .on('click', clearMenus)
	      }

	      var relatedTarget = { relatedTarget: this }
	      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

	      if (e.isDefaultPrevented()) return

	      $this
	        .trigger('focus')
	        .attr('aria-expanded', 'true')

	      $parent
	        .toggleClass('open')
	        .trigger($.Event('shown.bs.dropdown', relatedTarget))
	    }

	    return false
	  }

	  Dropdown.prototype.keydown = function (e) {
	    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

	    var $this = $(this)

	    e.preventDefault()
	    e.stopPropagation()

	    if ($this.is('.disabled, :disabled')) return

	    var $parent  = getParent($this)
	    var isActive = $parent.hasClass('open')

	    if (!isActive && e.which != 27 || isActive && e.which == 27) {
	      if (e.which == 27) $parent.find(toggle).trigger('focus')
	      return $this.trigger('click')
	    }

	    var desc = ' li:not(.disabled):visible a'
	    var $items = $parent.find('.dropdown-menu' + desc)

	    if (!$items.length) return

	    var index = $items.index(e.target)

	    if (e.which == 38 && index > 0)                 index--         // up
	    if (e.which == 40 && index < $items.length - 1) index++         // down
	    if (!~index)                                    index = 0

	    $items.eq(index).trigger('focus')
	  }


	  // DROPDOWN PLUGIN DEFINITION
	  // ==========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this)
	      var data  = $this.data('bs.dropdown')

	      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
	      if (typeof option == 'string') data[option].call($this)
	    })
	  }

	  var old = $.fn.dropdown

	  $.fn.dropdown             = Plugin
	  $.fn.dropdown.Constructor = Dropdown


	  // DROPDOWN NO CONFLICT
	  // ====================

	  $.fn.dropdown.noConflict = function () {
	    $.fn.dropdown = old
	    return this
	  }


	  // APPLY TO STANDARD DROPDOWN ELEMENTS
	  // ===================================

	  $(document)
	    .on('click.bs.dropdown.data-api', clearMenus)
	    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
	    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
	    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
	    .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

	}(jQuery);


/***/ },
/* 9 */
/***/ function(module, exports) {

	/* ========================================================================
	 * Bootstrap: modal.js v3.3.6
	 * http://getbootstrap.com/javascript/#modals
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // MODAL CLASS DEFINITION
	  // ======================

	  var Modal = function (element, options) {
	    this.options             = options
	    this.$body               = $(document.body)
	    this.$element            = $(element)
	    this.$dialog             = this.$element.find('.modal-dialog')
	    this.$backdrop           = null
	    this.isShown             = null
	    this.originalBodyPad     = null
	    this.scrollbarWidth      = 0
	    this.ignoreBackdropClick = false

	    if (this.options.remote) {
	      this.$element
	        .find('.modal-content')
	        .load(this.options.remote, $.proxy(function () {
	          this.$element.trigger('loaded.bs.modal')
	        }, this))
	    }
	  }

	  Modal.VERSION  = '3.3.6'

	  Modal.TRANSITION_DURATION = 300
	  Modal.BACKDROP_TRANSITION_DURATION = 150

	  Modal.DEFAULTS = {
	    backdrop: true,
	    keyboard: true,
	    show: true
	  }

	  Modal.prototype.toggle = function (_relatedTarget) {
	    return this.isShown ? this.hide() : this.show(_relatedTarget)
	  }

	  Modal.prototype.show = function (_relatedTarget) {
	    var that = this
	    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

	    this.$element.trigger(e)

	    if (this.isShown || e.isDefaultPrevented()) return

	    this.isShown = true

	    this.checkScrollbar()
	    this.setScrollbar()
	    this.$body.addClass('modal-open')

	    this.escape()
	    this.resize()

	    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

	    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
	      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
	        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
	      })
	    })

	    this.backdrop(function () {
	      var transition = $.support.transition && that.$element.hasClass('fade')

	      if (!that.$element.parent().length) {
	        that.$element.appendTo(that.$body) // don't move modals dom position
	      }

	      that.$element
	        .show()
	        .scrollTop(0)

	      that.adjustDialog()

	      if (transition) {
	        that.$element[0].offsetWidth // force reflow
	      }

	      that.$element.addClass('in')

	      that.enforceFocus()

	      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

	      transition ?
	        that.$dialog // wait for modal to slide in
	          .one('bsTransitionEnd', function () {
	            that.$element.trigger('focus').trigger(e)
	          })
	          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
	        that.$element.trigger('focus').trigger(e)
	    })
	  }

	  Modal.prototype.hide = function (e) {
	    if (e) e.preventDefault()

	    e = $.Event('hide.bs.modal')

	    this.$element.trigger(e)

	    if (!this.isShown || e.isDefaultPrevented()) return

	    this.isShown = false

	    this.escape()
	    this.resize()

	    $(document).off('focusin.bs.modal')

	    this.$element
	      .removeClass('in')
	      .off('click.dismiss.bs.modal')
	      .off('mouseup.dismiss.bs.modal')

	    this.$dialog.off('mousedown.dismiss.bs.modal')

	    $.support.transition && this.$element.hasClass('fade') ?
	      this.$element
	        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
	        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
	      this.hideModal()
	  }

	  Modal.prototype.enforceFocus = function () {
	    $(document)
	      .off('focusin.bs.modal') // guard against infinite focus loop
	      .on('focusin.bs.modal', $.proxy(function (e) {
	        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
	          this.$element.trigger('focus')
	        }
	      }, this))
	  }

	  Modal.prototype.escape = function () {
	    if (this.isShown && this.options.keyboard) {
	      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
	        e.which == 27 && this.hide()
	      }, this))
	    } else if (!this.isShown) {
	      this.$element.off('keydown.dismiss.bs.modal')
	    }
	  }

	  Modal.prototype.resize = function () {
	    if (this.isShown) {
	      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
	    } else {
	      $(window).off('resize.bs.modal')
	    }
	  }

	  Modal.prototype.hideModal = function () {
	    var that = this
	    this.$element.hide()
	    this.backdrop(function () {
	      that.$body.removeClass('modal-open')
	      that.resetAdjustments()
	      that.resetScrollbar()
	      that.$element.trigger('hidden.bs.modal')
	    })
	  }

	  Modal.prototype.removeBackdrop = function () {
	    this.$backdrop && this.$backdrop.remove()
	    this.$backdrop = null
	  }

	  Modal.prototype.backdrop = function (callback) {
	    var that = this
	    var animate = this.$element.hasClass('fade') ? 'fade' : ''

	    if (this.isShown && this.options.backdrop) {
	      var doAnimate = $.support.transition && animate

	      this.$backdrop = $(document.createElement('div'))
	        .addClass('modal-backdrop ' + animate)
	        .appendTo(this.$body)

	      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
	        if (this.ignoreBackdropClick) {
	          this.ignoreBackdropClick = false
	          return
	        }
	        if (e.target !== e.currentTarget) return
	        this.options.backdrop == 'static'
	          ? this.$element[0].focus()
	          : this.hide()
	      }, this))

	      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

	      this.$backdrop.addClass('in')

	      if (!callback) return

	      doAnimate ?
	        this.$backdrop
	          .one('bsTransitionEnd', callback)
	          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
	        callback()

	    } else if (!this.isShown && this.$backdrop) {
	      this.$backdrop.removeClass('in')

	      var callbackRemove = function () {
	        that.removeBackdrop()
	        callback && callback()
	      }
	      $.support.transition && this.$element.hasClass('fade') ?
	        this.$backdrop
	          .one('bsTransitionEnd', callbackRemove)
	          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
	        callbackRemove()

	    } else if (callback) {
	      callback()
	    }
	  }

	  // these following methods are used to handle overflowing modals

	  Modal.prototype.handleUpdate = function () {
	    this.adjustDialog()
	  }

	  Modal.prototype.adjustDialog = function () {
	    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

	    this.$element.css({
	      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
	      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
	    })
	  }

	  Modal.prototype.resetAdjustments = function () {
	    this.$element.css({
	      paddingLeft: '',
	      paddingRight: ''
	    })
	  }

	  Modal.prototype.checkScrollbar = function () {
	    var fullWindowWidth = window.innerWidth
	    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
	      var documentElementRect = document.documentElement.getBoundingClientRect()
	      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
	    }
	    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
	    this.scrollbarWidth = this.measureScrollbar()
	  }

	  Modal.prototype.setScrollbar = function () {
	    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
	    this.originalBodyPad = document.body.style.paddingRight || ''
	    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
	  }

	  Modal.prototype.resetScrollbar = function () {
	    this.$body.css('padding-right', this.originalBodyPad)
	  }

	  Modal.prototype.measureScrollbar = function () { // thx walsh
	    var scrollDiv = document.createElement('div')
	    scrollDiv.className = 'modal-scrollbar-measure'
	    this.$body.append(scrollDiv)
	    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
	    this.$body[0].removeChild(scrollDiv)
	    return scrollbarWidth
	  }


	  // MODAL PLUGIN DEFINITION
	  // =======================

	  function Plugin(option, _relatedTarget) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.modal')
	      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

	      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
	      if (typeof option == 'string') data[option](_relatedTarget)
	      else if (options.show) data.show(_relatedTarget)
	    })
	  }

	  var old = $.fn.modal

	  $.fn.modal             = Plugin
	  $.fn.modal.Constructor = Modal


	  // MODAL NO CONFLICT
	  // =================

	  $.fn.modal.noConflict = function () {
	    $.fn.modal = old
	    return this
	  }


	  // MODAL DATA-API
	  // ==============

	  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
	    var $this   = $(this)
	    var href    = $this.attr('href')
	    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
	    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

	    if ($this.is('a')) e.preventDefault()

	    $target.one('show.bs.modal', function (showEvent) {
	      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
	      $target.one('hidden.bs.modal', function () {
	        $this.is(':visible') && $this.trigger('focus')
	      })
	    })
	    Plugin.call($target, option, this)
	  })

	}(jQuery);


/***/ },
/* 10 */
/***/ function(module, exports) {

	/* ========================================================================
	 * Bootstrap: tooltip.js v3.3.6
	 * http://getbootstrap.com/javascript/#tooltip
	 * Inspired by the original jQuery.tipsy by Jason Frame
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // TOOLTIP PUBLIC CLASS DEFINITION
	  // ===============================

	  var Tooltip = function (element, options) {
	    this.type       = null
	    this.options    = null
	    this.enabled    = null
	    this.timeout    = null
	    this.hoverState = null
	    this.$element   = null
	    this.inState    = null

	    this.init('tooltip', element, options)
	  }

	  Tooltip.VERSION  = '3.3.6'

	  Tooltip.TRANSITION_DURATION = 150

	  Tooltip.DEFAULTS = {
	    animation: true,
	    placement: 'top',
	    selector: false,
	    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
	    trigger: 'hover focus',
	    title: '',
	    delay: 0,
	    html: false,
	    container: false,
	    viewport: {
	      selector: 'body',
	      padding: 0
	    }
	  }

	  Tooltip.prototype.init = function (type, element, options) {
	    this.enabled   = true
	    this.type      = type
	    this.$element  = $(element)
	    this.options   = this.getOptions(options)
	    this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport))
	    this.inState   = { click: false, hover: false, focus: false }

	    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
	      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
	    }

	    var triggers = this.options.trigger.split(' ')

	    for (var i = triggers.length; i--;) {
	      var trigger = triggers[i]

	      if (trigger == 'click') {
	        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
	      } else if (trigger != 'manual') {
	        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
	        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

	        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
	        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
	      }
	    }

	    this.options.selector ?
	      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
	      this.fixTitle()
	  }

	  Tooltip.prototype.getDefaults = function () {
	    return Tooltip.DEFAULTS
	  }

	  Tooltip.prototype.getOptions = function (options) {
	    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

	    if (options.delay && typeof options.delay == 'number') {
	      options.delay = {
	        show: options.delay,
	        hide: options.delay
	      }
	    }

	    return options
	  }

	  Tooltip.prototype.getDelegateOptions = function () {
	    var options  = {}
	    var defaults = this.getDefaults()

	    this._options && $.each(this._options, function (key, value) {
	      if (defaults[key] != value) options[key] = value
	    })

	    return options
	  }

	  Tooltip.prototype.enter = function (obj) {
	    var self = obj instanceof this.constructor ?
	      obj : $(obj.currentTarget).data('bs.' + this.type)

	    if (!self) {
	      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
	      $(obj.currentTarget).data('bs.' + this.type, self)
	    }

	    if (obj instanceof $.Event) {
	      self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true
	    }

	    if (self.tip().hasClass('in') || self.hoverState == 'in') {
	      self.hoverState = 'in'
	      return
	    }

	    clearTimeout(self.timeout)

	    self.hoverState = 'in'

	    if (!self.options.delay || !self.options.delay.show) return self.show()

	    self.timeout = setTimeout(function () {
	      if (self.hoverState == 'in') self.show()
	    }, self.options.delay.show)
	  }

	  Tooltip.prototype.isInStateTrue = function () {
	    for (var key in this.inState) {
	      if (this.inState[key]) return true
	    }

	    return false
	  }

	  Tooltip.prototype.leave = function (obj) {
	    var self = obj instanceof this.constructor ?
	      obj : $(obj.currentTarget).data('bs.' + this.type)

	    if (!self) {
	      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
	      $(obj.currentTarget).data('bs.' + this.type, self)
	    }

	    if (obj instanceof $.Event) {
	      self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false
	    }

	    if (self.isInStateTrue()) return

	    clearTimeout(self.timeout)

	    self.hoverState = 'out'

	    if (!self.options.delay || !self.options.delay.hide) return self.hide()

	    self.timeout = setTimeout(function () {
	      if (self.hoverState == 'out') self.hide()
	    }, self.options.delay.hide)
	  }

	  Tooltip.prototype.show = function () {
	    var e = $.Event('show.bs.' + this.type)

	    if (this.hasContent() && this.enabled) {
	      this.$element.trigger(e)

	      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
	      if (e.isDefaultPrevented() || !inDom) return
	      var that = this

	      var $tip = this.tip()

	      var tipId = this.getUID(this.type)

	      this.setContent()
	      $tip.attr('id', tipId)
	      this.$element.attr('aria-describedby', tipId)

	      if (this.options.animation) $tip.addClass('fade')

	      var placement = typeof this.options.placement == 'function' ?
	        this.options.placement.call(this, $tip[0], this.$element[0]) :
	        this.options.placement

	      var autoToken = /\s?auto?\s?/i
	      var autoPlace = autoToken.test(placement)
	      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

	      $tip
	        .detach()
	        .css({ top: 0, left: 0, display: 'block' })
	        .addClass(placement)
	        .data('bs.' + this.type, this)

	      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
	      this.$element.trigger('inserted.bs.' + this.type)

	      var pos          = this.getPosition()
	      var actualWidth  = $tip[0].offsetWidth
	      var actualHeight = $tip[0].offsetHeight

	      if (autoPlace) {
	        var orgPlacement = placement
	        var viewportDim = this.getPosition(this.$viewport)

	        placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top'    :
	                    placement == 'top'    && pos.top    - actualHeight < viewportDim.top    ? 'bottom' :
	                    placement == 'right'  && pos.right  + actualWidth  > viewportDim.width  ? 'left'   :
	                    placement == 'left'   && pos.left   - actualWidth  < viewportDim.left   ? 'right'  :
	                    placement

	        $tip
	          .removeClass(orgPlacement)
	          .addClass(placement)
	      }

	      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

	      this.applyPlacement(calculatedOffset, placement)

	      var complete = function () {
	        var prevHoverState = that.hoverState
	        that.$element.trigger('shown.bs.' + that.type)
	        that.hoverState = null

	        if (prevHoverState == 'out') that.leave(that)
	      }

	      $.support.transition && this.$tip.hasClass('fade') ?
	        $tip
	          .one('bsTransitionEnd', complete)
	          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
	        complete()
	    }
	  }

	  Tooltip.prototype.applyPlacement = function (offset, placement) {
	    var $tip   = this.tip()
	    var width  = $tip[0].offsetWidth
	    var height = $tip[0].offsetHeight

	    // manually read margins because getBoundingClientRect includes difference
	    var marginTop = parseInt($tip.css('margin-top'), 10)
	    var marginLeft = parseInt($tip.css('margin-left'), 10)

	    // we must check for NaN for ie 8/9
	    if (isNaN(marginTop))  marginTop  = 0
	    if (isNaN(marginLeft)) marginLeft = 0

	    offset.top  += marginTop
	    offset.left += marginLeft

	    // $.fn.offset doesn't round pixel values
	    // so we use setOffset directly with our own function B-0
	    $.offset.setOffset($tip[0], $.extend({
	      using: function (props) {
	        $tip.css({
	          top: Math.round(props.top),
	          left: Math.round(props.left)
	        })
	      }
	    }, offset), 0)

	    $tip.addClass('in')

	    // check to see if placing tip in new offset caused the tip to resize itself
	    var actualWidth  = $tip[0].offsetWidth
	    var actualHeight = $tip[0].offsetHeight

	    if (placement == 'top' && actualHeight != height) {
	      offset.top = offset.top + height - actualHeight
	    }

	    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

	    if (delta.left) offset.left += delta.left
	    else offset.top += delta.top

	    var isVertical          = /top|bottom/.test(placement)
	    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
	    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

	    $tip.offset(offset)
	    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
	  }

	  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
	    this.arrow()
	      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
	      .css(isVertical ? 'top' : 'left', '')
	  }

	  Tooltip.prototype.setContent = function () {
	    var $tip  = this.tip()
	    var title = this.getTitle()

	    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
	    $tip.removeClass('fade in top bottom left right')
	  }

	  Tooltip.prototype.hide = function (callback) {
	    var that = this
	    var $tip = $(this.$tip)
	    var e    = $.Event('hide.bs.' + this.type)

	    function complete() {
	      if (that.hoverState != 'in') $tip.detach()
	      that.$element
	        .removeAttr('aria-describedby')
	        .trigger('hidden.bs.' + that.type)
	      callback && callback()
	    }

	    this.$element.trigger(e)

	    if (e.isDefaultPrevented()) return

	    $tip.removeClass('in')

	    $.support.transition && $tip.hasClass('fade') ?
	      $tip
	        .one('bsTransitionEnd', complete)
	        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
	      complete()

	    this.hoverState = null

	    return this
	  }

	  Tooltip.prototype.fixTitle = function () {
	    var $e = this.$element
	    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
	      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
	    }
	  }

	  Tooltip.prototype.hasContent = function () {
	    return this.getTitle()
	  }

	  Tooltip.prototype.getPosition = function ($element) {
	    $element   = $element || this.$element

	    var el     = $element[0]
	    var isBody = el.tagName == 'BODY'

	    var elRect    = el.getBoundingClientRect()
	    if (elRect.width == null) {
	      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
	      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
	    }
	    var elOffset  = isBody ? { top: 0, left: 0 } : $element.offset()
	    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
	    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

	    return $.extend({}, elRect, scroll, outerDims, elOffset)
	  }

	  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
	    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
	           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
	           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
	        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }

	  }

	  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
	    var delta = { top: 0, left: 0 }
	    if (!this.$viewport) return delta

	    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
	    var viewportDimensions = this.getPosition(this.$viewport)

	    if (/right|left/.test(placement)) {
	      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
	      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
	      if (topEdgeOffset < viewportDimensions.top) { // top overflow
	        delta.top = viewportDimensions.top - topEdgeOffset
	      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
	        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
	      }
	    } else {
	      var leftEdgeOffset  = pos.left - viewportPadding
	      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
	      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
	        delta.left = viewportDimensions.left - leftEdgeOffset
	      } else if (rightEdgeOffset > viewportDimensions.right) { // right overflow
	        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
	      }
	    }

	    return delta
	  }

	  Tooltip.prototype.getTitle = function () {
	    var title
	    var $e = this.$element
	    var o  = this.options

	    title = $e.attr('data-original-title')
	      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

	    return title
	  }

	  Tooltip.prototype.getUID = function (prefix) {
	    do prefix += ~~(Math.random() * 1000000)
	    while (document.getElementById(prefix))
	    return prefix
	  }

	  Tooltip.prototype.tip = function () {
	    if (!this.$tip) {
	      this.$tip = $(this.options.template)
	      if (this.$tip.length != 1) {
	        throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!')
	      }
	    }
	    return this.$tip
	  }

	  Tooltip.prototype.arrow = function () {
	    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
	  }

	  Tooltip.prototype.enable = function () {
	    this.enabled = true
	  }

	  Tooltip.prototype.disable = function () {
	    this.enabled = false
	  }

	  Tooltip.prototype.toggleEnabled = function () {
	    this.enabled = !this.enabled
	  }

	  Tooltip.prototype.toggle = function (e) {
	    var self = this
	    if (e) {
	      self = $(e.currentTarget).data('bs.' + this.type)
	      if (!self) {
	        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
	        $(e.currentTarget).data('bs.' + this.type, self)
	      }
	    }

	    if (e) {
	      self.inState.click = !self.inState.click
	      if (self.isInStateTrue()) self.enter(self)
	      else self.leave(self)
	    } else {
	      self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
	    }
	  }

	  Tooltip.prototype.destroy = function () {
	    var that = this
	    clearTimeout(this.timeout)
	    this.hide(function () {
	      that.$element.off('.' + that.type).removeData('bs.' + that.type)
	      if (that.$tip) {
	        that.$tip.detach()
	      }
	      that.$tip = null
	      that.$arrow = null
	      that.$viewport = null
	    })
	  }


	  // TOOLTIP PLUGIN DEFINITION
	  // =========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.tooltip')
	      var options = typeof option == 'object' && option

	      if (!data && /destroy|hide/.test(option)) return
	      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
	      if (typeof option == 'string') data[option]()
	    })
	  }

	  var old = $.fn.tooltip

	  $.fn.tooltip             = Plugin
	  $.fn.tooltip.Constructor = Tooltip


	  // TOOLTIP NO CONFLICT
	  // ===================

	  $.fn.tooltip.noConflict = function () {
	    $.fn.tooltip = old
	    return this
	  }

	}(jQuery);


/***/ },
/* 11 */
/***/ function(module, exports) {

	/* ========================================================================
	 * Bootstrap: popover.js v3.3.6
	 * http://getbootstrap.com/javascript/#popovers
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // POPOVER PUBLIC CLASS DEFINITION
	  // ===============================

	  var Popover = function (element, options) {
	    this.init('popover', element, options)
	  }

	  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

	  Popover.VERSION  = '3.3.6'

	  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
	    placement: 'right',
	    trigger: 'click',
	    content: '',
	    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	  })


	  // NOTE: POPOVER EXTENDS tooltip.js
	  // ================================

	  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

	  Popover.prototype.constructor = Popover

	  Popover.prototype.getDefaults = function () {
	    return Popover.DEFAULTS
	  }

	  Popover.prototype.setContent = function () {
	    var $tip    = this.tip()
	    var title   = this.getTitle()
	    var content = this.getContent()

	    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
	    $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
	      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
	    ](content)

	    $tip.removeClass('fade top bottom left right in')

	    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
	    // this manually by checking the contents.
	    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
	  }

	  Popover.prototype.hasContent = function () {
	    return this.getTitle() || this.getContent()
	  }

	  Popover.prototype.getContent = function () {
	    var $e = this.$element
	    var o  = this.options

	    return $e.attr('data-content')
	      || (typeof o.content == 'function' ?
	            o.content.call($e[0]) :
	            o.content)
	  }

	  Popover.prototype.arrow = function () {
	    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
	  }


	  // POPOVER PLUGIN DEFINITION
	  // =========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.popover')
	      var options = typeof option == 'object' && option

	      if (!data && /destroy|hide/.test(option)) return
	      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
	      if (typeof option == 'string') data[option]()
	    })
	  }

	  var old = $.fn.popover

	  $.fn.popover             = Plugin
	  $.fn.popover.Constructor = Popover


	  // POPOVER NO CONFLICT
	  // ===================

	  $.fn.popover.noConflict = function () {
	    $.fn.popover = old
	    return this
	  }

	}(jQuery);


/***/ },
/* 12 */
/***/ function(module, exports) {

	/* ========================================================================
	 * Bootstrap: scrollspy.js v3.3.6
	 * http://getbootstrap.com/javascript/#scrollspy
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // SCROLLSPY CLASS DEFINITION
	  // ==========================

	  function ScrollSpy(element, options) {
	    this.$body          = $(document.body)
	    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
	    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
	    this.selector       = (this.options.target || '') + ' .nav li > a'
	    this.offsets        = []
	    this.targets        = []
	    this.activeTarget   = null
	    this.scrollHeight   = 0

	    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
	    this.refresh()
	    this.process()
	  }

	  ScrollSpy.VERSION  = '3.3.6'

	  ScrollSpy.DEFAULTS = {
	    offset: 10
	  }

	  ScrollSpy.prototype.getScrollHeight = function () {
	    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
	  }

	  ScrollSpy.prototype.refresh = function () {
	    var that          = this
	    var offsetMethod  = 'offset'
	    var offsetBase    = 0

	    this.offsets      = []
	    this.targets      = []
	    this.scrollHeight = this.getScrollHeight()

	    if (!$.isWindow(this.$scrollElement[0])) {
	      offsetMethod = 'position'
	      offsetBase   = this.$scrollElement.scrollTop()
	    }

	    this.$body
	      .find(this.selector)
	      .map(function () {
	        var $el   = $(this)
	        var href  = $el.data('target') || $el.attr('href')
	        var $href = /^#./.test(href) && $(href)

	        return ($href
	          && $href.length
	          && $href.is(':visible')
	          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
	      })
	      .sort(function (a, b) { return a[0] - b[0] })
	      .each(function () {
	        that.offsets.push(this[0])
	        that.targets.push(this[1])
	      })
	  }

	  ScrollSpy.prototype.process = function () {
	    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
	    var scrollHeight = this.getScrollHeight()
	    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
	    var offsets      = this.offsets
	    var targets      = this.targets
	    var activeTarget = this.activeTarget
	    var i

	    if (this.scrollHeight != scrollHeight) {
	      this.refresh()
	    }

	    if (scrollTop >= maxScroll) {
	      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
	    }

	    if (activeTarget && scrollTop < offsets[0]) {
	      this.activeTarget = null
	      return this.clear()
	    }

	    for (i = offsets.length; i--;) {
	      activeTarget != targets[i]
	        && scrollTop >= offsets[i]
	        && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
	        && this.activate(targets[i])
	    }
	  }

	  ScrollSpy.prototype.activate = function (target) {
	    this.activeTarget = target

	    this.clear()

	    var selector = this.selector +
	      '[data-target="' + target + '"],' +
	      this.selector + '[href="' + target + '"]'

	    var active = $(selector)
	      .parents('li')
	      .addClass('active')

	    if (active.parent('.dropdown-menu').length) {
	      active = active
	        .closest('li.dropdown')
	        .addClass('active')
	    }

	    active.trigger('activate.bs.scrollspy')
	  }

	  ScrollSpy.prototype.clear = function () {
	    $(this.selector)
	      .parentsUntil(this.options.target, '.active')
	      .removeClass('active')
	  }


	  // SCROLLSPY PLUGIN DEFINITION
	  // ===========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.scrollspy')
	      var options = typeof option == 'object' && option

	      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
	      if (typeof option == 'string') data[option]()
	    })
	  }

	  var old = $.fn.scrollspy

	  $.fn.scrollspy             = Plugin
	  $.fn.scrollspy.Constructor = ScrollSpy


	  // SCROLLSPY NO CONFLICT
	  // =====================

	  $.fn.scrollspy.noConflict = function () {
	    $.fn.scrollspy = old
	    return this
	  }


	  // SCROLLSPY DATA-API
	  // ==================

	  $(window).on('load.bs.scrollspy.data-api', function () {
	    $('[data-spy="scroll"]').each(function () {
	      var $spy = $(this)
	      Plugin.call($spy, $spy.data())
	    })
	  })

	}(jQuery);


/***/ },
/* 13 */
/***/ function(module, exports) {

	/* ========================================================================
	 * Bootstrap: tab.js v3.3.6
	 * http://getbootstrap.com/javascript/#tabs
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // TAB CLASS DEFINITION
	  // ====================

	  var Tab = function (element) {
	    // jscs:disable requireDollarBeforejQueryAssignment
	    this.element = $(element)
	    // jscs:enable requireDollarBeforejQueryAssignment
	  }

	  Tab.VERSION = '3.3.6'

	  Tab.TRANSITION_DURATION = 150

	  Tab.prototype.show = function () {
	    var $this    = this.element
	    var $ul      = $this.closest('ul:not(.dropdown-menu)')
	    var selector = $this.data('target')

	    if (!selector) {
	      selector = $this.attr('href')
	      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
	    }

	    if ($this.parent('li').hasClass('active')) return

	    var $previous = $ul.find('.active:last a')
	    var hideEvent = $.Event('hide.bs.tab', {
	      relatedTarget: $this[0]
	    })
	    var showEvent = $.Event('show.bs.tab', {
	      relatedTarget: $previous[0]
	    })

	    $previous.trigger(hideEvent)
	    $this.trigger(showEvent)

	    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

	    var $target = $(selector)

	    this.activate($this.closest('li'), $ul)
	    this.activate($target, $target.parent(), function () {
	      $previous.trigger({
	        type: 'hidden.bs.tab',
	        relatedTarget: $this[0]
	      })
	      $this.trigger({
	        type: 'shown.bs.tab',
	        relatedTarget: $previous[0]
	      })
	    })
	  }

	  Tab.prototype.activate = function (element, container, callback) {
	    var $active    = container.find('> .active')
	    var transition = callback
	      && $.support.transition
	      && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length)

	    function next() {
	      $active
	        .removeClass('active')
	        .find('> .dropdown-menu > .active')
	          .removeClass('active')
	        .end()
	        .find('[data-toggle="tab"]')
	          .attr('aria-expanded', false)

	      element
	        .addClass('active')
	        .find('[data-toggle="tab"]')
	          .attr('aria-expanded', true)

	      if (transition) {
	        element[0].offsetWidth // reflow for transition
	        element.addClass('in')
	      } else {
	        element.removeClass('fade')
	      }

	      if (element.parent('.dropdown-menu').length) {
	        element
	          .closest('li.dropdown')
	            .addClass('active')
	          .end()
	          .find('[data-toggle="tab"]')
	            .attr('aria-expanded', true)
	      }

	      callback && callback()
	    }

	    $active.length && transition ?
	      $active
	        .one('bsTransitionEnd', next)
	        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
	      next()

	    $active.removeClass('in')
	  }


	  // TAB PLUGIN DEFINITION
	  // =====================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this)
	      var data  = $this.data('bs.tab')

	      if (!data) $this.data('bs.tab', (data = new Tab(this)))
	      if (typeof option == 'string') data[option]()
	    })
	  }

	  var old = $.fn.tab

	  $.fn.tab             = Plugin
	  $.fn.tab.Constructor = Tab


	  // TAB NO CONFLICT
	  // ===============

	  $.fn.tab.noConflict = function () {
	    $.fn.tab = old
	    return this
	  }


	  // TAB DATA-API
	  // ============

	  var clickHandler = function (e) {
	    e.preventDefault()
	    Plugin.call($(this), 'show')
	  }

	  $(document)
	    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
	    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

	}(jQuery);


/***/ },
/* 14 */
/***/ function(module, exports) {

	/* ========================================================================
	 * Bootstrap: affix.js v3.3.6
	 * http://getbootstrap.com/javascript/#affix
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */


	+function ($) {
	  'use strict';

	  // AFFIX CLASS DEFINITION
	  // ======================

	  var Affix = function (element, options) {
	    this.options = $.extend({}, Affix.DEFAULTS, options)

	    this.$target = $(this.options.target)
	      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
	      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

	    this.$element     = $(element)
	    this.affixed      = null
	    this.unpin        = null
	    this.pinnedOffset = null

	    this.checkPosition()
	  }

	  Affix.VERSION  = '3.3.6'

	  Affix.RESET    = 'affix affix-top affix-bottom'

	  Affix.DEFAULTS = {
	    offset: 0,
	    target: window
	  }

	  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
	    var scrollTop    = this.$target.scrollTop()
	    var position     = this.$element.offset()
	    var targetHeight = this.$target.height()

	    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

	    if (this.affixed == 'bottom') {
	      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
	      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
	    }

	    var initializing   = this.affixed == null
	    var colliderTop    = initializing ? scrollTop : position.top
	    var colliderHeight = initializing ? targetHeight : height

	    if (offsetTop != null && scrollTop <= offsetTop) return 'top'
	    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

	    return false
	  }

	  Affix.prototype.getPinnedOffset = function () {
	    if (this.pinnedOffset) return this.pinnedOffset
	    this.$element.removeClass(Affix.RESET).addClass('affix')
	    var scrollTop = this.$target.scrollTop()
	    var position  = this.$element.offset()
	    return (this.pinnedOffset = position.top - scrollTop)
	  }

	  Affix.prototype.checkPositionWithEventLoop = function () {
	    setTimeout($.proxy(this.checkPosition, this), 1)
	  }

	  Affix.prototype.checkPosition = function () {
	    if (!this.$element.is(':visible')) return

	    var height       = this.$element.height()
	    var offset       = this.options.offset
	    var offsetTop    = offset.top
	    var offsetBottom = offset.bottom
	    var scrollHeight = Math.max($(document).height(), $(document.body).height())

	    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
	    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
	    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

	    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

	    if (this.affixed != affix) {
	      if (this.unpin != null) this.$element.css('top', '')

	      var affixType = 'affix' + (affix ? '-' + affix : '')
	      var e         = $.Event(affixType + '.bs.affix')

	      this.$element.trigger(e)

	      if (e.isDefaultPrevented()) return

	      this.affixed = affix
	      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

	      this.$element
	        .removeClass(Affix.RESET)
	        .addClass(affixType)
	        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
	    }

	    if (affix == 'bottom') {
	      this.$element.offset({
	        top: scrollHeight - height - offsetBottom
	      })
	    }
	  }


	  // AFFIX PLUGIN DEFINITION
	  // =======================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.affix')
	      var options = typeof option == 'object' && option

	      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
	      if (typeof option == 'string') data[option]()
	    })
	  }

	  var old = $.fn.affix

	  $.fn.affix             = Plugin
	  $.fn.affix.Constructor = Affix


	  // AFFIX NO CONFLICT
	  // =================

	  $.fn.affix.noConflict = function () {
	    $.fn.affix = old
	    return this
	  }


	  // AFFIX DATA-API
	  // ==============

	  $(window).on('load', function () {
	    $('[data-spy="affix"]').each(function () {
	      var $spy = $(this)
	      var data = $spy.data()

	      data.offset = data.offset || {}

	      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
	      if (data.offsetTop    != null) data.offset.top    = data.offsetTop

	      Plugin.call($spy, data)
	    })
	  })

	}(jQuery);


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(16);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(24)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(17)();
	// imports


	// module
	exports.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n    padding: 20px 0px;\n    /*font: 14px \"Lucida Grande\", Helvetica, Arial, sans-serif;*/\n    background-image: url(" + __webpack_require__(18) + ");\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-position: bottom right;\n    background-size: 230px 230px; \n}\n\na { color: #00B7FF; }\n\nbutton {\n    width: 100%;\n    margin-top: 1em;\n}\n\n.app-title h2{\n    padding: 7px 0px;\n    margin: 0;\n    font-style: italic;\n}\n\n.app-body { margin-top: 1em; }\n\nbutton[type=\"button\"]:focus {\n outline: none!important;\n}\n\n#canvas,#viewport {\n  background-color: white;\n  border: 1px solid;\n  margin: 0 0 0 0;\n  width: 100%;\n  height: 100%;\n  border: 1px solid #ccc;\n  box-shadow: 2px 2px #ccc;\n  height: 30em;\n  overflow: hidden;\n   overflow-y: scroll;\n   overflow-x: scroll;\n}\n\n.list-group-item:first-child {\n  height: 4em;\n}\n\n#pickcolor, .color-picker {\n  display: none;\n}\n\npath:focus {\n  fill: pink;\n  stroke: red;\n  stroke-width: 1;\n}\n\n.color-wrapper {\n  position: relative;\n  width: 250px;\n  margin: 20px auto;\n}\n\n.color-wrapper p {\n  margin-bottom: 5px;\n}\n\ninput.call-picker {\n  border: 1px solid #AAA;\n  color: #666;\n  text-transform: uppercase;\n  float: left;\n  outline: none;\n  padding: 10px;\n  text-transform: uppercase;\n  width: 85px;\n}\n\n.color-picker {\n  width: 212px;\n  background: #F3F3F3;\n  height: auto;\n  padding: 5px;\n  border: 5px solid #fff;\n  box-shadow: 0px 0px 3px 1px #DDD;\n  position: absolute;\n  top: 3px;\n  right: 105%;\n}\n\n.color-holder {\n  background: #fff;\n  cursor: pointer;\n  border: 1px solid #AAA;\n  width: 100%;\n  height: 36px;\n  float: left;\n  margin-left: 0px;\n}\n\n.color-picker .color-item {\n  cursor: pointer;\n  width: 20px;\n  height: 20px;\n  list-style-type: none;\n  float: left;\n  margin: 2px;\n  border: 1px solid #DDD;\n}\n\n.color-picker .color-item:hover {\n  border: 1px solid #666;\n  opacity: 0.8;\n  -moz-opacity: 0.8;\n  filter: alpha(opacity=8);\n}\n\n#color-picker-mobile {\n    right: 55px;\n    top: -147px;\n}\n\n#mobile-nav {\n    display: none;\n    position: absolute;\n    bottom: 16px;\n    right: 16px;\n    padding-right: 9px;\n}\n#mobile-nav .mobile-tool {  \n    border: 0;\n    padding: 0;\n    margin: 0;\n    width: 42px;\n    font-size: 25px;\n    display: block;\n    float: right;\n    border-radius: 25px;\n    margin-top: -1px;\n}\n#mobile-nav .mobile-tool span {\n    margin-top: 8px;\n    color: black;\n}\n\n#mobile-nav #mobilenav-container { \n    float: right; \n    height: 43px; \n    padding: 0;\n    border: 1px solid rgb(173, 173, 173);\n    border-radius: 25px;\n    left: 14px;\n    background-color: #e6e6e6;\n}\n\n#mobile-nav #mobilenav-container.active {\n    border-radius: 25px 0 25px 25px;\n}\n\n#mobile-nav #mobilenav-container #mobile-menu {\n    float: left;\n    height: 41px;\n    padding: 8px 0;\n    padding-left: 7px;\n}\n\n#mobile-nav #mobilenav-container #mobile-menu a{\n    height: 33px;\n    width: 33px;\n    padding : 7px 15px;\n    margin : 0 10px;\n    padding-top: 1px;\n}\n\n#mobile-nav #mobilenav-container #mobile-menu a.mobile-menu-fill{\n    background-position: center center;\n    background-image: url(" + __webpack_require__(19) + ");\n    background-repeat: no-repeat;\n    background-size: 26px 26px;\n}\n\n#mobile-nav #mobilenav-container #mobile-menu a.mobile-menu-fill.active {\n    background-image: url(" + __webpack_require__(20) + ");\n}\n\n#mobile-nav #mobilenav-container #mobile-menu a.mobile-menu-erase{\n    background-position: center center;\n    background-image: url(" + __webpack_require__(21) + ");\n    background-repeat: no-repeat;\n    background-size: 26px 26px;\n}\n\n#mobile-nav #mobilenav-container #mobile-menu a.mobile-menu-erase.active {\n    background-image: url(" + __webpack_require__(22) + ");\n}\n\n#mobile-nav #mobilenav-container #mobile-menu a.mobile-menu-undo{\n    background-position: center center;\n    background-image: url(" + __webpack_require__(23) + ");\n    background-repeat: no-repeat;\n    background-size: 25px 25px;\n}\n\n#mobile-nav #mobilenav-container #mobile-menu .mobile-menu-pickcolor {\n    width : 30px;\n    float: right;\n    border: 2px solid;\n    height: 27px;\n    margin: 0 10px;\n}\n#mobile-nav #mobilenav-container #mobile-menu .mobile-menu-pickcolor #pickcolor-mobile,\n#mobile-nav #mobilenav-container #mobile-menu .mobile-menu-pickcolor #color-picker-mobile{\n    display: none;\n}\n\n#mobile-nav #mobilenav-container #mobile-menu .mobile-menu-pickcolor .color-holder-mobile{\n    height: 23px;\n}\n\n#mobile-nav #mobilenav-container #mobile-menu .mobile-menu-pickcolor .color-picker-mobile {\n    right: 28px;\n    top: -145px;\n}\n\n#mobile-nav #mobilenav-container .mobile-menu-brushsize {\n    position: absolute;\n    width: 44px;\n    right: 9px;\n    height: 200px;\n    bottom: 42px;\n    background-color: #e6e6e6;\n    border-radius: 25px 25px 0 0;\n    border: 1px solid rgb(173, 173, 173);\n    border-bottom: transparent;\n    text-align: center;\n    font-size: 13px;\n}\n\n#mobile-nav #mobilenav-container .mobile-menu-brushsize input[type=range][orient=vertical]\n{\n    writing-mode: bt-lr; /* IE */\n    -webkit-appearance: slider-vertical; /* WebKit */\n    width: 40px;\n    padding: 0 5px;\n    margin: 0 auto;\n    height: 150px;\n    padding: 6px 0;\n    \n}\n\n/* Range Input stylying */\n\n#mobile-nav #mobilenav-container .mobile-menu-brushsize input[type=range] { border: 1px solid transparent; }\n\n#mobile-nav #mobilenav-container .mobile-menu-brushsize input[type=range]::-webkit-slider-runnable-track {\n  background: transparent;\n  width: 4px;\n  background: #4172b3;\n  -webkit-appearance: none;\n  border: 0;\n}\n\n/* IE Webwik input range */\n#mobile-nav #mobilenav-container .mobile-menu-brushsize input[type=range]::-ms-track {\n  cursor: pointer;\n  background: #999;\n  border-color: transparent;\n  border-width: 16px 0;\n  color: transparent;\n}\n\ninput[type=range]::-ms-fill-lower,\ninput[type=range]:focus::-ms-fill-lower,\ninput[type=range]::-ms-fill-upper,\ninput[type=range]:focus::-ms-fill-upper{ background: #999; }\n\n#mobile-nav #mobilenav-container .mobile-menu-brushsize input[type=range]::-ms-thumb {\n    border-radius: 25px;\n    -webkit-appearance: none;\n    width: 21px;\n    height: 21px;\n    background: #4172b3;\n    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n    border: 1px solid #000000; \n}\n\n#mobile-nav #mobilenav-container .mobile-menu-brushsize input[type=range]::-webkit-slider-thumb{\n    -webkit-appearance: none;\n  border: 2px solid #000000;\n  margin-top: -1px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  margin-left: -9px;\n  width: 30px;\n}\n\n#mobile-nav #mobilenav-container .mobile-menu-brushsize input[type=range]::-moz-range-thumb {\n    -webkit-appearance: none;\n    width: 21px;\n    height: 21px;\n    border-radius: 25px;\n    background: #4172b3;\n    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n    border: 1px solid #000000;\n}\n\n/* End of Range Input stylying */\n\n#mobile-nav #mobilenav-container .mobile-menu-brushsize label {\n    margin: 0;\n    margin-top: 10px;\n}\n\n.collapse.width {\n  position: relative;\n  width: 0;\n  overflow: hidden;\n  -webkit-transition: width 0.35s ease;\n  -moz-transition: width 0.35s ease;\n  -o-transition: width 0.35s ease;\n  transition: width 0.35s ease;\n}\n\n.collapsing {\n    -webkit-transition: none;\n    transition: none;\n}\n\n.collapse {  transition: height 0.01s; }\n\n@media screen and (max-width: 991px) {\n    #mobile-nav {\n        display: block;\n    }\n    .brushtools-container {\n        display: none;\n    }\n    .color-picker {\n        width: 224px;\n        padding: 3px;\n        border: 1px solid #fff;\n    }\n    .color-picker .color-item {\n        width: 25px;\n        height: 25px;\n        margin: 1px;\n    }\n}\n\n@media screen and (max-width: 736px) {\n    .app-title { display: none; }\n    \n    body { \n        height: calc(100%); \n        padding-top: 0px;\n    }\n    \n    #canvas { \n        height: calc(100%);\n        min-height: 90vh;\n     }    \n}\n\n", ""]);

	// exports


/***/ },
/* 17 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAXqwAAF6sBb12FHgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAN2SURBVFiFxZdPaFxVGMXPud+5M6m6ULG2UFD8B0FdSFVKpRAUFZvqVrswlJoiwZ2ILiS4q6CrbrpoKVJwY6HVqiC4aCtFFBEq1eimIgoaSUrSqljbzMz7XOS+9M2bmWT+JOTCncWd977ze+f7w3t0d6znCuuq3i+AqDFj5dVVIXD3nrYhjhvVMMoD4kSv95c3O9UAyRgRt2bAgwAyIKsx8F53vAWAOT+cE3VfOLxqDgBDd1uIx4y6YpS33/aLgt4V9aNRmSHu69eBkr02ZtS1ktjPRl0snJ0GcENyTkYdTxDjAwEI2l4QnzXYHgBbAuKEUVk6P5OLX3esCWJv3wAW4gdGeaC+B3BHKriXC+JflMVLECeMahhsT38A1F+Lla3Xk/i+kviNywYColEfJoixbgFULPzFH58W9QLIw+nsbMPru9z933IBR8annHgFQNVgBxte323UMZBHRXkD+sZQ3waECpDNEZyvoz7l7pdauiBQ54xyBe2PiA8ZtWDU2U5PLuixlu6AjSYnPurcQbqcu9yUggBNpgv+Aar3GWw3gJs6DqQQ328T/NNCOk4uA+EBeq0JAMBtRruQCvE7ANXOedMOo2baBP6kVBMfLwNRAyrD+Xjda9SpiPiwUf+l/r9gsDEANwPVeyLiNkMcz1PVbgt6plSY1Q6guQtvMCI+mtG/BmDunCBQA/0Q0FSg7da37jhBYgTAVToO1rx2qnyRQvwMwM5U578Bfmfh79Mw6vNk+/k858DQXRbsUOtU1O9GHRc00lWPo3K/UbV073xEfMSoPwvxpmHU/GIFx5fa9PYmQY8LGgFwa08DBpXhgth8RNy6WLz2XgHgDxG46MAtDP5A2T53nwEws0IqWhZZHTZmZwBsBnApOJ9c8IVzAOAZp8ilSzMo6O1Ec81gz/U6y7t98qX2hY1edyD+CgBDgTpfgHh2rcRTWrcUUvBlfrgxUD8MAtGN+JIL1HSaugeKZBsDNVWA2LUW4gngZBrdL5btub0AcdVgo6st7u4I0JtG+dIkLEOkV60cYudqirs7BD1h1N8A2CEwNq0E0a94ik+DPe/unV/LE8RPOURxzg8i3qKzAmkThAU7oqB3jJpLZ3ODiK8IkCA2F1q0uGcHFXdf5sOkebRyg4Im3fG0AxtI/6qRNSbdfbbXMd0SuxuAtVzr/nX8P3WWw3UqET4TAAAAAElFTkSuQmCC"

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABqlBMVEX///8AbvEAbO8AbPAAbfAAbPAAZv8Ab/EAbO8AbPEAbu8AbfAAbvAAcfAAbfAAbfAAbfAAbfAAbe8AbvAAbfAAbfAAbfAAbfAAZuYAgP8AbvAAa/IAbfAAbu8AcewAbfAAbfAAbfAAb+4AbfAAbfAAbfAAbfAAdOgAbPAAbfAAbfEAbPAAbPAAa/AAbfAAbfAAbfEAgP8AbvEAbe8Abu8Abe4AafAAbfAAbfAAcO8AbfAAbfEAbvIAbvEAbfAAbfEAbfAAbvEAauoAbu8Abu8AbfEAbe8Ac/IAbfAAbPAAbf8Ab+4AbfAAbfEAbfEAbfAAbPIAbfAAbvAAbfAAcO8AbfAAbvEAbPAAb/EAbfAAbfAAbfAAbfAAbvAAbfAAbfAAbfAAbPAAbPAAbPAAbe8AbfMAbfAAbPAAbfAAbe8Ab/QAbu8AcfEAa/AAbvAAbfEAbfAAbfEAbu8AbfAAbPAAbe4AYP8Aa/IAbe8AbfMAbfAAbvEAbfEAaPMAbfAAbfAAbPEAbPAAAP8AbvAAbPAAbvAAbvAAbfAAavQAceMAbfAAbfAAbfAAAABxrow5AAAAjHRSTlMAXXFj/WgFN2FcgP5mIqn23orVZPnc674KBKw56l8bv6jSHsCt8XULrvJbV8FFr7ZLBiViTz0RzoUw+sI6SvB881gMo7OwcxTbzwc86bKx+yi9M/cQI0h2NfxnyndD4LnRIZnkPyruNOfmF0ESMp7l2Y1y44ZNCEzEFdOQ1Bb4eklCAVbWnIntGAnLmoHUmcAAAAABYktHRI0bDOLVAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH4AYREggT7rDIsAAAAaVJREFUOMutkWlbUkEYhl9i91gWnhQRqLQQNMGklBZaNM2IAlzQzK0kUipLbYMAlyyXnh/dzBnhYjmnT7wfzsw8933NzHuGqLGlO/N/rjfAqIFMZr3F2iQBUrMaPnuuBUqdv2CTWlVOlhm72Aa026nDIelreacMp8ttlHDJzlbMsNQIl3Gli5oldNuVZcdVg6tauAYPtTLeU7qw16CrEnzo7ZNwXfB+f2Dght9gHbQGb94aEsIwQrfv3BX8Hu8lbPKLpu57lPABHg4+GhHyKM8fk2lMGBjn4ZMJPI0I/izK0+fsHi+EEIsTWRKTU5jQTc+Y9cMiTTI1EhXzWZp7iflg7HRHvFoIeBeVzQLAEgsStIyVEXr9hv/MVUeq3NrbGNLv1oB1SiPIg8z71IeK1uNrSH+kDeATfcZm/esITlvANn2B/FWDU5jdg76tQP6uzskN/CDK5mqMMidax0/2zeYhD6hyGoOVD4U8imE1TjuIK2PBhuKuCqc9376YZEpGNaf9X6VZ5gDFZB2vLG78/nOIQw1OdJTjj+XU5ETHoZP83wI1vv4B26mOlm9tWuUAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTYtMDYtMTdUMTg6MDg6MTkrMDI6MDDI68JDAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE2LTA2LTE3VDE4OjA4OjE5KzAyOjAwubZ6/wAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABjAAAAYwBs5R0wwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAGiSURBVFiFxZW9SgNBEIC/OTVphCiKCCIELX0FEWzEZ/AFBEtBC3vfwM5KEBsb8bdUsfKvUwwiJFqEFFZWNrIWyells7e3m7tcBqY42Jnvm2RvTpRS9DOCLJuJSCAi8yIynLuAiBSAI+AGeBKRslOhUip1AgXgGFCRrAHlxNqM4Cca3Fmil3AnibTw0wR4okS38KIH3CrRLfzMEx4rkSfcKOELP08J75DoB7xNwhV+kTE8zCvrKhaRIs31umw7lyK+bZMPAoeeE/nkCzDpA38GLrOEGy9hDPwWKAEC7GYF7xCIgd8BpciZANjLAt4mEAO/B0YMv1IAHKSF/wn4wCMSA4YaL3irjxH+AIw67Ighmq9pV/BQYF0reHSBRxoUiP8+WOGhwGuk4MMHHmky3g1cKUUAVPmPMWAG/1jTnivAolKq4VK8BPxEzD+BOY/pt7TJKy6T62/BqtakDsw6wDe1ujdgyuvvszSrAdMWuH55q7bziQKtptuYb3Mvsg6smCbbyVHi3SQgwAbwlYPAvoTLQA8RmQAWaG7KXkQDuI4VyCt+AY5bf29TPvfwAAAAAElFTkSuQmCC"

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA2FBMVEX///8AgP8Ab+4AauoAgP8AbfEAbfAAcO8Abu8Abe8Abf8AbPAAbfAAbfAAbfAAbfAAgP8AbfAAbfAAavQAbe8AbfAAbfAAZu4AAP8AbfAAbfAAbfEAbfAAcO8AbfAAVf8AbfAAafAAZv8AbfEAbu8AbfAAbfAAbfAAc/IAbfAAbfAAbvAAbfEAbfAAbfAAbfAAa+0AbfAAbfAAbfAAbe8AbfAAbPAAbfAAcewAau0AbfAAbfAAbPEAbe8AbfAAbfAAbfAAbe8AaPMAbfAAbvEAbO8AbfAAAABgugp7AAAARnRSTlMAAjwMBrLgILO0B7W2t8C4BKvXGNW/yQ8Bm8qhyxCmA8wRBbByzdriFLn1M35G/ewrethn5iN23Bsd34ValOF18qQWVFhAn+PHeAAAAAFiS0dER2C9yXsAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfgBhESBBmi0G6iAAAA4UlEQVQ4y53S51LCQBSG4QOEFkCkhyYg0kTAglKVJt/9X5JrJpBs2D3McP6dPG8myWSJbphAMMS6EUYkyju4wogBXOG4tjDiAFeYrisLMwFwhc8vCjMJcIXCpcJMQTV3Vxxpx+8zas/mPJ4v8F4sWWXOKyVxEKp6r9Xto/LAO1Ejo/Zm6/S5j22f05NYOmcXPzwhO3WBnseJ+rLTAHgeeoMX2Wk0Biav7v4m/D3nveNDXJl+nrYvsc3m8jn5vxZZuK+8XPhP2grama7t4ltf/NiBtdnqgp3zlP3hVzlHi67NH6YueDA4Vnr4AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE2LTA2LTE3VDE4OjA0OjI1KzAyOjAwm/hPWgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNi0wNi0xN1QxODowNDoyNSswMjowMOql9+YAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC"

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAABuvAAAbrwFeGpEcAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAMxQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFBQAFBQAFBAAEBAAEBAAEAwADAwADAwADAwADAwADAgAEBAIEBAIEBAIEBAIEBAIEAwIDAwIDAwIFAwIFAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEEAgEEAgEEAgEEAgEEAgEEBAEEBAEEBAEEAwEDAwEDAwEFAwEEAwEEAwEEAwEEAwEEAwEEAwEEAwEES303WgAAAEN0Uk5TAAEEBQ0OEBESExQVFxkaHB0eMDU3OkNGSUxWW19/gIiLjZGSnqKnq7S4vL/Cw8bJy83O0NHS1dfZ293g6PL09/v9/uSwWVEAAADJSURBVDjLrZPXDoJAEEVFxV6wY+8Nu4iKgqL3///JIEoI7o4Pet4mZ7KZnRII/BVBlgXKh+dAj/DiEoDJ95EVbLg+ugaZENuCTEioIBOS2tujEmf41B4ezoOiz6cP8LGpeX3miE8mkuuzOliY1ZfPncDGqjsJM/C4N+gXgGueqsFGF/m/cOjw+vDmkmR10kv7cxb9kbIz3cgQmNMMlpoLywkL3H2Qxs+wRWxU2a5sSu1kqAuo9FYPYdB3EVJuXy5L1L5dY/b3g34AMAdorTgRsvAAAAAASUVORK5CYII="

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var domId = "#color-picker",
	    defaultColor = "#000000",
	    selectedColor = "", //where ?
	    selectedColorId = "#pickcolor",
	    holder = ".color-holder";

	var mobilePicker = {
	    domId : "#color-picker-mobile",
	    selectedColorId: "#pickcolor-mobile",
	    holder : ".color-holder-mobile",
	    isMobile : __webpack_require__(26).isMobile.any() //true-false
	};   

	var selectColor = function (e) {
	    
	    e.stopPropagation();
	        
	    $(domId).fadeIn();

	    var btnFunctions = __webpack_require__(27);
	    var changeCursor = __webpack_require__(29).changeCursor;
	        
	    $(domId).children('li').on('click',function() {
	        var codeHex = $(this).data('hex');
	        $(holder).css({ 'background-color': codeHex });
	        $(selectedColorId).val(codeHex);
	        defaultColor = codeHex;

	        if (btnFunctions.checkStatus('fill',false)){
	            changeCursor('fill');
	        } else if (btnFunctions.checkStatus('erase',false)){
	                btnFunctions.resetErase('erase', selectedColorId);
	                changeCursor('erase');
	        } else { changeCursor('paint'); }
	    });
	    
	    if(mobilePicker.isMobile){
	        $(mobilePicker.domId).fadeIn();
	        
	        $(mobilePicker.domId).children('li').on('click',function() { 
	            var codeHex = $(this).data('hex');
	            $(mobilePicker.holder).css({ 'background-color': codeHex });
	            $(mobilePicker.selectedColorId).val(codeHex);
	            
	            defaultColor = codeHex;
	            
	            if (btnFunctions.checkStatusMobile('erase',false)){
	                btnFunctions.resetErase('erase', mobilePicker.selectedColorId);
	            }
	        });
	    }
	        
	};

	var fillColors = function (domId) {
	    
	    var colorList = [
	          '000000', '993300', '333300', '003300',
	          '003366', '000066', '333399', '333333',
	          '660000', 'FF6633', '666633', '336633',
	          '336666', '0066FF', '666699', '666666',
	          'CC3333', 'FF9933', '99CC33', '669966',
	          '66CCCC', '3366FF', '663366', '999999',
	          'CC66FF', 'FFCC33', 'FFFF66', '99FF66',
	          '99CCCC', '66CCFF', '993366', 'CCCCCC',
	          'FF99CC', 'FFCC99', 'FFFF99', 'CCffCC',
	          'CCFFff', '99CCFF', 'CC99FF', 'FFFFFF'];
	            
	    //populating colors
	    colorList.forEach(function(color){
	          $(domId).append(
	            '<li class="color-item" data-hex="' +
	            '#' + color + '" style="background-color:' +
	            '#' + color + ';"></li>'
	          );
	        });
	};

	var setDefaultColor = function () {
	    
	    $(selectedColorId).val(defaultColor);
	    $(holder).css({'background-color': defaultColor});
	    
	    if(mobilePicker.isMobile){ 
	        $(mobilePicker.selectedColorId).val(defaultColor);
	        $(mobilePicker.holder).css({'background-color': defaultColor});
	    }
	};
	     
	var init = (function (){
	    
	    fillColors(domId);

	    var setEventElement = __webpack_require__(31).setEventElement;
	    
	    if(mobilePicker.isMobile){ 
	        fillColors(mobilePicker.domId);
	        setEventElement(mobilePicker.holder)('click')(selectColor);    
	    }
	    
	    setEventElement(holder)('click')(selectColor);
	    
	    setDefaultColor();
	}());

	module.exports.domId = domId;
	module.exports.defaultColor = defaultColor;
	module.exports.selectedColor = selectedColor;
	module.exports.selectedColorId = selectedColorId;
	module.exports.holder = holder;
	module.exports.init = init;
	module.exports.mobilePicker = mobilePicker;

/***/ },
/* 26 */
/***/ function(module, exports) {

	var isMobile = {
	    Android: function() {
	        return navigator.userAgent.match(/Android/i);
	    },
	    BlackBerry: function() {
	        return navigator.userAgent.match(/BlackBerry/i);
	    },
	    iOS: function() {
	        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	    },
	    Opera: function() {
	        return navigator.userAgent.match(/Opera Mini/i);
	    },
	    Windows: function() {
	        return navigator.userAgent.match(/IEMobile/i);
	    },
	    any: function() {
	        if (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()) { 
	            return true; 
	        } 
	        else { 
	            return false;
	        }  
	    }
	};

	var isIE = function () {
	    
	    var sAgent = window.navigator.userAgent,
	        Idx = sAgent.indexOf("MSIE");

	    if (Idx > 0) {
	        return true;
	    }
	    else if (navigator.userAgent.match(/Trident\/7\./) || navigator.userAgent.match(/Trident\/6\./)) {
	        return true;
	    }
	    else {
	        return false;   
	    }
	};
	      

	module.exports.isMobile = isMobile;
	module.exports.isIE = isIE;



/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var domId = "",
	    dangerClass = "btn-danger",
	    primaryClass = "btn-primary",
	    fillBtn = "#fill",
	    unDoBtn = "#unDo",
	    eraseBtn = "#erase",
	    clearAllBtn = "#clearAll",
	    togglebuttons = ".togglebtn";

	var mobileButtons = {
	    menuTool : ".mobile-tool",
	    domMenu: ".mobile-menu",
	    containerMenu : "#mobilenav-container",
	    initMenu : function(scope) {
	        $(scope.domMenu).toggle();
	        $(scope.containerMenu).toggleClass('active');
	    },       
	    unDoBtn : ".mobile-menu-undo",
	    fillBtn : ".mobile-menu-fill",
	    eraseBtn : ".mobile-menu-erase",
	    activeClass : "active",
	    unActiveClass : "",
	    isMobile : __webpack_require__(26).isMobile.any() //true-false
	};   

	// Evaluate the state of the buttons (fill or eraser).
	var checkStatus = function (element, toActivate) {
	    
	        var isActive = false;
	        
	        if(element === "fill"){
	            element = fillBtn;
	        } else if(element === "erase"){
	            element = eraseBtn;
	        } else {
	            throw "Error executing checkStatus(), Button " + element + " element is not defined";
	        }
	        
	        if($(element).hasClass(dangerClass)){
	            isActive = true;
	        } else if(toActivate){
	            $(togglebuttons).removeClass(dangerClass).addClass(primaryClass);
	            $(element).addClass(dangerClass);
	            isActive = true;   
	        }
	    return isActive;
	};

	// Evaluate the state of the buttons (fill or eraser) for Mobile Devices.
	var checkStatusMobile = function (element, toActivate) {
	    
	        var isActive = false;
	        
	        if(element === "fill"){
	            element = mobileButtons.fillBtn;
	        } else if(element === "erase"){
	            element = mobileButtons.eraseBtn;
	        } else {
	            throw "Error executing checkStatus(), Button " + element + " element is not defined";
	        }
	        
	        if($(element).hasClass(mobileButtons.activeClass)){
	            isActive = true;
	        } else if(toActivate){
	            $(mobileButtons.domMenu + " " + togglebuttons).removeClass(mobileButtons.activeClass).addClass(mobileButtons.unActiveClass);
	            $(element).addClass(mobileButtons.activeClass);
	            isActive = true;   
	        }
	    return isActive;
	};


	var unDoAction = function() {
	    var paths = document.getElementsByTagName("path");
	    
	    if(paths) {
	        var lastPath = paths[paths.length - 1];
	        if (lastPath) {
	            
	            if (lastPath.getAttribute("fill") != "transparent") {
	                lastPath.setAttribute('fill',"transparent");
	            } else {
	                lastPath.parentNode.removeChild(lastPath);
	            }
	        }
	    }
	};

	//reset the color picker for eraser selection
	var resetErase = function (action, selectedColorId) {
	    (action === 'erase') ? $(selectedColorId).val('#FFFFFF') : '' ;
	};
	     
	var activeBtn = function () {

	     var thatId = "";
	     
	     if(mobileButtons.isMobile){ 
	         $(mobileButtons.domMenu + " " + togglebuttons).each(function(){ 
	            if($(this).hasClass(mobileButtons.activeClass)){
	                
	                thatId = $(this).attr("id");
	                
	                if(thatId.indexOf("fill") > -1) {
	                    thatId = "fill";
	                } else if(thatId.indexOf("erase") > -1) {
	                    thatId = "erase";
	                } else {
	                    thatId = "";
	                }
	            } 
	        });
	     } else {
	         $(togglebuttons).each(function(){ 
	            if($(this).hasClass(dangerClass)){
	                thatId = $(this).attr("id");
	            } 
	        });    
	     }
	     return thatId;
	};

	var clearActiveBtn = function () {
	    $(togglebuttons).removeClass(dangerClass).addClass(primaryClass);
	};

	var setActivebutton = function (active) {
	    
	    var activeBtn_ = activeBtn();
	    if (activeBtn_ === "" || activeBtn_ !== active) {
	        
	        if(mobileButtons.isMobile){
	            
	            $(mobileButtons.domMenu + " " + togglebuttons).removeClass(mobileButtons.activeClass).addClass(mobileButtons.unActiveClass);
	                
	            if(active === "fill"){
	                $(mobileButtons.fillBtn).addClass(mobileButtons.activeClass).removeClass(mobileButtons.unActiveClass);    
	            } else if (active === "erase") {
	                $(mobileButtons.eraseBtn).addClass(mobileButtons.activeClass).removeClass(mobileButtons.unActiveClass);
	            }
	        } else {
	            $('#' + active).addClass(dangerClass).removeClass(primaryClass);
	            $('#' + activeBtn_).addClass(primaryClass).removeClass(dangerClass);    
	        }
	    }
	    else if (activeBtn_ === active) {
	           
	            if(mobileButtons.isMobile){ 
	                
	                if(active === "fill"){
	                    $(mobileButtons.fillBtn).addClass(mobileButtons.unActiveClass).removeClass(mobileButtons.activeClass);    
	                } else if (active === "erase") {
	                    $(mobileButtons.eraseBtn).addClass(mobileButtons.unActiveClass).removeClass(mobileButtons.activeClass);
	                }
	                $(mobileButtons.domMenu + " " + togglebuttons).removeClass(mobileButtons.activeClass).addClass(mobileButtons.unActiveClass);
	            } else {
	                 $('#' + active).addClass(primaryClass).removeClass(dangerClass);
	                clearActiveBtn();
	            }
	    }
	    return activeBtn();
	};


	var actionManagerMobile = function (action) {
	    
	    var btnObjAction = { action : "", active: "" };
	    var mobilePicker_ = __webpack_require__(25).mobilePicker;
	    
	    if (action === 'fill'){
	            btnObjAction.action = action;
	            btnObjAction.active = "fill";

	            var doFillMobile_ = __webpack_require__(28).doFillMobile;
	            var setEvent_ = __webpack_require__(31).setEventElement;
	            setEvent_('g path')('touchstart')(doFillMobile_);
	            
	    } else if (action === "erase"){
	            btnObjAction.action = action;
	            btnObjAction.active = "erase";
	            
	            resetErase(action, mobilePicker_.selectedColorId);
	    } else {
	            btnObjAction = null;
	    }
	    
	    if(btnObjAction) {
	        
	        var activeBtn_ = setActivebutton(btnObjAction.active);
	        //Setting default brush for no fill - erase actions 
	        if (activeBtn_ !== btnObjAction.active) {
	             var colorSelected = $(mobilePicker_.holder).css('background-color');
	            $(mobilePicker_.selectedColorId).val(colorSelected);
	        }    
	    }
	};

	var actionManager = function (action) {
	    
	    var btnObjAction = { action : "", active: "" };
	    var cpicker = __webpack_require__(25);
	    
	    if (action === 'fill'){
	            btnObjAction.action = action;
	            btnObjAction.active = fillBtn.replace("#","");
	    } else if (action === "erase"){
	            btnObjAction.action = action;
	            btnObjAction.active = eraseBtn.replace("#","");
	            
	            resetErase(action, cpicker.selectedColorId);
	    } else {
	            btnObjAction = null;
	    }
	    
	    if(btnObjAction) {
	        
	        var changeCursor = __webpack_require__(29).changeCursor;
	        var activeBtn_ = setActivebutton(btnObjAction.active);
	        
	        if (activeBtn_ === btnObjAction.active) {
	            changeCursor(btnObjAction.action);
	        } else {
	            changeCursor('paint');
	            
	            var colorSelected = $(cpicker.holder).css('background-color');
	            $(cpicker.selectedColorId).val(colorSelected);
	        }    
	    }
	};
	 
	 
	var initBtnListeners = (function (){
	    var eventSetter = __webpack_require__(31);
	    
	    //initializing drawing line listener 
	    eventSetter.setFunctionElement(unDoBtn)('click')(unDoAction);
	         
	    //On FillBtn click event    
	    eventSetter.setEvent(fillBtn)('click')(actionManager)('fill');
	    
	    eventSetter.setEvent(eraseBtn)('click')(actionManager)('erase');
	    
	    //Clear Area event    
	    var clearCanvas = __webpack_require__(30).clearCanvas;
	    eventSetter.setFunctionElement(clearAllBtn)('click')(clearCanvas);
	    
	    //initializing mobile buttons events
	    if(mobileButtons.isMobile){
	        eventSetter.setEvent(mobileButtons.menuTool)('click')(mobileButtons.initMenu)(mobileButtons);

	        eventSetter.setFunctionElement(mobileButtons.unDoBtn)('click')(unDoAction);
	        
	        eventSetter.setEvent(mobileButtons.fillBtn)('click')(actionManagerMobile)('fill');
	        
	        eventSetter.setEvent(mobileButtons.eraseBtn)('click')(actionManagerMobile)('erase');
	    }
	}());  

	module.exports.checkStatus = checkStatus;
	module.exports.checkStatusMobile = checkStatusMobile;
	module.exports.resetErase = resetErase;
	module.exports.initBtnListeners = initBtnListeners;
	module.exports.fillBtn = fillBtn;
	module.exports.activeBtn = activeBtn;

	//Unit test export
	module.exports.setActivebutton = setActivebutton;
	module.exports.unDoAction = unDoAction;




/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var domId = "#brushValue",
	    diameter = "#diameter",
	    opacityId = "#opacity",
	    opacityValue = "#opacityValue",
	    path = "",
	    loop = "",
	    stopdraw = true;
	    
	var mobileBrush = {
	    domId : "#brushValueMobile",
	    mobileDiameter : "#diameter-mobile"
	};   

	var draw = function() {
	    clearTimeout(loop);
	    if(cursor){
	        var d = path.getAttribute("d");
	        d += " L" + (cursor.x) + " " + cursor.y;
	        path.setAttribute("d", d);   
	    }
	    if (!stopdraw) {
	        loop = setTimeout(draw, 1);
	    }
	};

	var doFillEListener = function (e){
	    
	    var btnObj = __webpack_require__(27);
	    
	    if(btnObj.fillBtn && btnObj.checkStatus('fill',0)) {
	        var selectedElement = e.target;
	        var color = $(__webpack_require__(25).selectedColorId).val();
	        selectedElement.setAttribute('fill', color);
	        
	        return selectedElement;
	        
	    } else { 
	        return null;
	    }
	};

	var doFillMobile = function (e){
	    
	    var checkStatusMobile_ = __webpack_require__(27).checkStatusMobile;
	    
	    if(checkStatusMobile_('fill',0)) {
	        var selectedElement = e.target;
	        var color = $(__webpack_require__(25).mobilePicker.selectedColorId).val();
	        
	        selectedElement.setAttribute('fill', color);
	    }
	};

	var stopDrawing = function () {
	    stopdraw = true;
	};

	//Drawing setting the starting point for mobile devices
	var startDrawinge = function (viewPort, e) {
	    
	    var setDrawPoint = __webpack_require__(29).setCursorPoint;
	    setDrawPoint(e);
	    
	    var checkStatus_ = __webpack_require__(27).checkStatusMobile;
	    
	    if(!checkStatus_('fill',false)){
	        var color = $(__webpack_require__(25).mobilePicker.selectedColorId).val(),
	            opacity = $(opacityId).val() / 90,
	            diameter_ = $(diameter).val();
	                    
	                stopdraw = false;
	                path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
	                path.setAttribute("stroke",color);
	                path.setAttribute("stroke-width",diameter_);
	                path.setAttribute("fill","transparent");
	                path.setAttribute("stroke-opacity",opacity);
	                path.setAttribute("transform","matrix(1,0,0,1,1,1)");
	                path.setAttribute("d","M"+ cursor.x+" "+ cursor.y);
	                var g = document.getElementById(viewPort);
	                g.appendChild(path);
	                loop = setTimeout(draw(),1);                  
	    }
	};

	var startDrawing = function (viewPort) {
	    
	    var checkStatus_ = __webpack_require__(27).checkStatus;
	    
	    if(!checkStatus_('fill',false)){
	        var color = $(__webpack_require__(25).selectedColorId).val(),
	            opacity = $(opacityId).val() / 90,
	            diameter_ = $(diameter).val();
	                stopdraw = false;
	                path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
	                path.setAttribute("stroke",color);
	                path.setAttribute("stroke-width",diameter_);
	                path.setAttribute("fill","transparent");
	                path.setAttribute("stroke-opacity",opacity);
	                path.setAttribute("transform","matrix(1,0,0,1,1,1)");
	                path.setAttribute("onmousedown","doFillListener(evt)");
	                path.setAttribute("d","M"+ cursor.x+" "+ cursor.y);
	                var g = document.getElementById(viewPort);
	                g.appendChild(path);
	                loop = setTimeout(draw(),1);
	        return path;                  
	    } else { return null; }
	};

	var setBrushValue = function () {
	        var value = ($(diameter).val() / 1 ).toFixed(0)+'px';
	        $(domId).text(value);
	        
	    var isMobile_ = __webpack_require__(26).isMobile;
	    if(isMobile_.any()){
	        $(mobileBrush.domId).text(value); 
	    }
	};

	var setOpacityValue = function () {
	        var value = (((($(opacityId).val() / 90)) * 100).toFixed(0) )+'%' ;
	        $(opacityValue).text(value);
	};

	var startBrush = (function () {
	    setBrushValue();
	    setOpacityValue();
	    window.doFillListener = doFillEListener;
	    
	    //Set Opacity/Brush size onchange listener
	    var handlerFunction = __webpack_require__(31).setFunctionElement;
	    
	    var isMobile_ = __webpack_require__(26).isMobile;
	    if(isMobile_.any()){
	        diameter = mobileBrush.mobileDiameter;
	    }
	    handlerFunction(diameter)('change')(setBrushValue);
	    handlerFunction(opacityId)('change')(setOpacityValue);
	    
	}());

	module.exports.startBrush = startBrush;
	module.exports.startDrawing = startDrawing;
	module.exports.startDrawinge = startDrawinge;

	module.exports.draw = draw;
	module.exports.stopDrawing = stopDrawing;

	//Mobile
	module.exports.doFillMobile = doFillMobile;

	//Unit test functions
	module.exports.doFillEListener = doFillEListener;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var cursor_ = {"x":0,"y":0}, 
	    delta_ = {"x":0,"y":0},
	    initialized = false; 
	    
	var changeCursor = function (cursor){
	        switch (cursor) {
	          case 'paint': cursor = 'url(../../images/paint-brush-01.ico), auto';break;
	          case 'erase': cursor = 'url(../../images/eraser-01.ico), auto'; break;
	          case 'fill':  cursor = 'move'; break;
	        }
	        var canvasId = __webpack_require__(30).domId;
	        $(canvasId).css('cursor', cursor);
	};

	var init = function () {
	    window.cursor = cursor_;
	    window.delta = delta_; 
	    initialized = true;
	};

	var setCursorPoint = function (e) {
	    
	    e.preventDefault();
	    if(initialized){
	        
	        var canvasId = __webpack_require__(30).domId;
	        
	        if(canvasId){
	            
	            var xPos = null, yPos = null;    
	            canvasId = canvasId.replace("#", "");
	            var rect = document.getElementById(canvasId).getBoundingClientRect();
	               
	            var browservalid = __webpack_require__(26); 
	            // Validating touch event for devices 
	            if(browservalid.isMobile.any()){
	                xPos = e.originalEvent.touches[0].pageX ? Math.round(e.originalEvent.touches[0].pageX) : 0;
	                yPos = e.originalEvent.touches[0].pageY ? Math.round(e.originalEvent.touches[0].pageY) : 0;
	            } else {
	                xPos = e.pageX;
	                yPos = e.pageY;
	            }
	            
	            delta.x = (xPos - rect.left) - cursor.x;
	            delta.y = (yPos - rect.top) - cursor.y;
	            cursor.x += delta.x;

	            // If the browser is IE select the first option
	            // If not select the other.
	            if(browservalid.isIE){
	                cursor.y += delta.y;
	            } else {
	                cursor.y += delta.y + 30;
	            }
	        } else {
	            throw "Error executing setCursorPoint(), canvasId is not defined";
	        }
	          
	    } else {
	      throw "Error executing setCursorPoint(), cursor object is not initialized";  
	    }    
	};

	module.exports.changeCursor = changeCursor;
	module.exports.init = init;
	module.exports.setCursorPoint = setCursorPoint;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var domId = "#canvas",
	gviewPort = "#viewport";

	var setCanvasEvents = function (){
	    
	    var eventSetter = __webpack_require__(31);
	    
	    $('body').on('click',function(){
	        $(__webpack_require__(25).domId).fadeOut();
	        $(__webpack_require__(25).mobilePicker.domId).fadeOut();
	    });
	    
	    //initializing drawing point 
	    var brushManager = __webpack_require__(28);
	    var viewPort = gviewPort ? gviewPort.replace("#", "") : "";
	    eventSetter.setEvent(domId)('mousedown')(brushManager.startDrawing)(viewPort);
	    $(domId).on("touchstart", function(e) {
	        brushManager.startDrawinge(viewPort, e);
	    });
	                
	    //Setting stop drawing event
	    eventSetter.setFunctionElement(domId)('mouseup touchend')(brushManager.stopDrawing);
	    
	    //initializing drawing line listener 
	    var setDrawPoint = __webpack_require__(29).setCursorPoint;
	    eventSetter.setEventElement(domId)('mousemove touchmove')(setDrawPoint);  
	};

	var clearCanvas = function () {
	    $(domId).find("path").remove();
	}
	      
	var init = (function(){
	    __webpack_require__(29).init();
	    setCanvasEvents();
	}());

	module.exports.domId = domId;
	module.exports.clearCanvas = clearCanvas;
	module.exports.init = init;


/***/ },
/* 31 */
/***/ function(module, exports) {

	
	//closure to associate a function with a dom event
	var setEvent = function(domId) {
	    return function(event) {
	        return function(bfunc) {
	            return function(fparam) {
	                return (function() {
	                    $(domId).on(event, function() {
	                        bfunc(fparam);  
	                    });
	                } ());
	            };
	        };
	    };
	};

	//closure to associate an event element within a Function in dom
	var setEventElement = function(domId) {
	    return function(event) {
	        return function(bfunc) {
	            return (function() {
	                $(domId).on(event, function(e) {
	                    bfunc(e);  
	                });
	            } ());
	        };
	    };
	};

	//closure to associate an event element to call a function
	var setFunctionElement = function(domId) {
	    return function(event) {
	        return function(bfunc) {
	            return (function() {
	                $(domId).on(event, function() { 
	                    bfunc();  
	                });
	            } ());
	        };
	    };
	};

	module.exports.setEvent = setEvent;
	module.exports.setEventElement = setEventElement;
	module.exports.setFunctionElement = setFunctionElement;




/***/ }
/******/ ]);