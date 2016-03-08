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

        listOfMembers = new Array<app.domin.Member>();

        constructor() {
            var member1 = new app.domin.Member('Anders', 'Svensson', 'as@knowledgecube.net', 2, 1);
            var member2 = new app.domin.Member('Jens', 'Nilsson', 'jl@knowledgecube.net', 1, 2);
            var member3 = new app.domin.Member('Olof', 'Olsson', 'oo@knowledgecube.net', 2, 3);
            var member4 = new app.domin.Member('Therese', 'Jensen', 'as@as.dl', 3, 4);
            var member5 = new app.domin.Member('Pia', 'Bengtsson', 'fl@dk.kl' ,3, 5); 
            var member6 = new app.domin.Member('Carl', 'Karlsson', 'ck@dk.kl' , 2, 6);
            var member7 = new app.domin.Member('Åsa', 'Olsson', 'ao@dk.kl' , 1, 7);
            this.listOfMembers.push(member1);
            this.listOfMembers.push(member2);
            this.listOfMembers.push(member3);
            this.listOfMembers.push(member4);
            this.listOfMembers.push(member5);
            this.listOfMembers.push(member6);
            this.listOfMembers.push(member7);
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