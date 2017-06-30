/*
 * @Author: zhengwei
 * @Date:   2016-10-26 13:49:47
 * @Last Modified by:   zwxs
 * @Last Modified time: 2016-10-27 16:57:03
 */

'use strict';
$(function() {
    setTitle($('.bcj-title'), $.getUrlParam('titleid'));
    setProductList($('.bcj-list'), $.getUrlParam('titleid'));

    function setTitle(dom, titleid) {
        $.ajax({
            url: "http://139.199.192.48:9090/api/getbaicaijiatitle",
            success: function(data) {
                var html = template('bcjTitle', data);
                dom.html(html);
                var titleLi = dom.find('.ul-wapper .tabs li');
                var tabsUlWidth = 0;
                for (var i = 0; i < titleLi.length; i++) {
                    tabsUlWidth += $(titleLi[i]).width();
                }
                dom.find('.ul-wapper .tabs').css('width', tabsUlWidth);
                $(titleLi[titleid || 0]).addClass('active');
            }
        })
    }

    function setProductList(dom, titleid, callback) {
        $.ajax({
            url: "http://139.199.192.48:9090/api/getbaicaijiaproduct",
            data: { "titleid": titleid || 0 },
            success: function(data) {
                var html = template('bcjProductList', data);
                dom.html(html);
            }
        })
    }   
})
