var app;
(function (app) {
    var member;
    (function (member) {
        var MemberController = (function () {
            function MemberController(dataAccessService) {
                var _this = this;
                this.dataAccessService = dataAccessService;
                this.searchText = "";
                this.listOfMembers = [];
                var resource = dataAccessService.getMemberResource();
                resource.query(function (data) {
                    _this.listOfMembers = data;
                });
            }
            MemberController.prototype.searchMember = function () {
                this.listOfMembers;
                alert(this.searchText);
            };
            MemberController.prototype.editMember = function () {
            };
            MemberController.prototype.addMember = function () {
            };
            MemberController.prototype.deleteMember = function (index) {
                this.listOfMembers.splice(index, 1);
            };
            MemberController.$inject = ["dataAccessService"];
            return MemberController;
        })();
        angular.module("amsModule").controller("MemberController", MemberController);
    })(member = app.member || (app.member = {}));
})(app || (app = {}));
//# sourceMappingURL=memberCtrl.js.map