"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_model_1 = require("./base_model");
var Club = (function (_super) {
    __extends(Club, _super);
    function Club() {
        _super.apply(this, arguments);
    }
    return Club;
}(base_model_1.BaseModel));
exports.Club = Club;
