module app.member {
    interface IMemberModel {
        searchText: string;
        listOfMembers: app.domin.Member[];
        searchMember(): void;
        editMember(): void;
        addMember(): void;
        deleteMember(index: number): void;
    }

    class MemberController implements IMemberModel {

        searchText = "";

        listOfMembers = [];

        static $inject = ["dataAccessService"];
        constructor(private dataAccessService: app.common.DataAccessService) {
            var resource = dataAccessService.getMemberResource();
            resource.query((data: app.domin.Member[]) => {
                this.listOfMembers = data;
            });
        }

        searchMember(): void {
            this.listOfMembers
            alert(this.searchText);
        }

        editMember(): void {

        }

        addMember(): void {

        }

        deleteMember(index: number): void {
            this.listOfMembers.splice(index, 1);
        }
    }
    angular.module("amsModule").controller("MemberController", MemberController);
}