'use strict';

var events = require('event')
	, domready = require('domready')
	, docElement = document.documentElement
	, eventMap = {
			mouseenter: 'mouseover'
		, mouseleave: 'mouseout'
	}
	, handlerMap = {}
;

var contains = /\[native code\]/.test(docElement.contains.toString()) || docElement.compareDocumentPosition ?
	function (a, b) {
		var adown = a.nodeType === 9 ? a.documentElement : a
			, bup = b && b.parentNode
		;

		return a === bup || !!(bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains(bup) :
					a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16
			));
	} :
	function (a, b) {
		if (b) {
			while ((b = b.parentNode)) {
				if (b === a) {
					return true;
				}
			}
		}
		return false;
	}
;

exports.bind = function (el, type, fn, capture) {

	var origType = type.toLowerCase()
		, rel = type === 'mouseenter' ? 'fromElement' : 'toElement'
		, handler
	;

	type = eventMap[origType];

	if (!type) {
		throw "Event type not supported";
	}

	handler = function (e) {
		
		e = e || window.event;

		var target = e.target || e.srcElement
			, related = e.relatedTarget || e[rel]
		;

		if (target === el && (!related || (related !== target && !contains(target, related)))) {
			fn.apply(this, arguments);
		}

	};

	handlerMap[fn] = handler;

	return events.bind(el, type, handler, capture);

};

exports.unbind = function (el, type, fn, capture) {

	return events.unbind(el, type, handlerMap[fn], capture);

};

domready(function () {

	if (document.body.onmouseenter !== undefined) {
		exports.bind = events.bind;
		exports.unbind = events.unbind;
	}

});
