/**
 * Created by Cest on 2016/10/10.
 */
'use strict';

var tpl = __inline('./index.tpl');

/**
 * 首页模块
 *
 * @class index
 * @constructor
 */
var index = Vue.extend({
	template : tpl,
	ready : function () {

	}
})

var init = function () {
	return new index({
		el: "#page-main",
		replace: false
	})
}

module.exports = {
	init: init
}