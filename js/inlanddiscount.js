/*
 * @Author: zhengwei
 * @Date:   2016-10-24 22:14:54
 * @Last Modified by:   zwxs
 * @Last Modified time: 2016-10-27 16:58:51
 */

'use strict';
$(function() {
    setProductList($('.inland-discount-list'))

    function setProductList(dom, callback) {
        $.ajax({
            url: "http://139.199.192.48:9090/api/getinlanddiscount",
            success: function(data) {
                var html = template("productList", data);
                dom.html(html);

            }
        })
    }
});
