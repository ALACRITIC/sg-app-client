"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_model_1 = require("./base_model");
/**
 * Created by hgeorgiev on 8/20/16.
 */
var TeamMember = (function (_super) {
    __extends(TeamMember, _super);
    function TeamMember() {
        _super.apply(this, arguments);
    }
    return TeamMember;
}(base_model_1.BaseModel));
exports.TeamMember = TeamMember;
