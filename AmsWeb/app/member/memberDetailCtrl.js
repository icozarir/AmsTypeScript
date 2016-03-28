var app;
(function (app) {
    var member;
    (function (member) {
        var MemberDetailController = (function () {
            function MemberDetailController(dataAccessService) {
                this.dataAccessService = dataAccessService;
                this.searchText = "";
            }
            MemberDetailController.$inject = ["dataAccessService"];
            return MemberDetailController;
        })();
        angular.module("amsModule").controller("MemberDetailController", MemberDetailController);
    })(member = app.member || (app.member = {}));
})(app || (app = {}));
//# sourceMappingURL=memberDetailCtrl.js.map