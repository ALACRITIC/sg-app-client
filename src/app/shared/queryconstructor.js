"use strict";
var http_1 = require("@angular/http");
function QueryConstructor(page, itemsPerPage) {
    var skip;
    if (page == 1) {
        skip = 0;
    }
    else {
        page--;
        skip = page * itemsPerPage;
    }
    var params = new http_1.URLSearchParams();
    params.set('top', itemsPerPage.toString());
    params.set('skip', skip.toString());
    return params;
}
exports.QueryConstructor = QueryConstructor;
