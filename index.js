'use strict';

var events = require('component-event')
	, domready = require('jb55-domready')
	, contains = require('JayceTDE-dom-contains')
	, docElement = document.documentElement
	, eventMap = {
		  mouseenter: 'mouseover'
		, mouseleave: 'mouseout'
	}
	, handlerMap = {}
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

		var related = e.relatedTarget || e[rel];

		if (!related || (related !== el && !contains(el, related))) {
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
