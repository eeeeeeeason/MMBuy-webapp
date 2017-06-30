/*
 * @Author: zhengwei
 * @Date:   2016-10-24 22:14:54
 * @Last Modified by:   zhengwei
 * @Last Modified time: 2016-10-25 18:36:27
 */

'use strict';
$(function() {
    setProductList($('.money-product'), $.getUrlParam('productid'))

    function setProductList(dom, productid, callback) {       
        $.ajax({
            url: "http://139.199.192.48:9090/api/getmoneyctrlproduct",
            data: { 'productid': productid },
            success: function(data) {
                var html = template("moneyProduct",data);
                dom.html(html);
            }
        })
    }
});
