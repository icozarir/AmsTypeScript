module app.member {
    interface IMemberDetailModel {
    }

    class MemberDetailController implements IMemberDetailModel {

        searchText = "";

        static $inject = ["dataAccessService"];
        constructor(private dataAccessService: app.common.DataAccessService) {
        }
    }
    angular.module("amsModule").controller("MemberDetailController", MemberDetailController);
}