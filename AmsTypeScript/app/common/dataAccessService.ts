module app.common {
    interface IDataAccessService {
        getMemberResource(): ng.resource.IResourceClass<IMemberResource>;
    }

    interface IMemberResource extends ng.resource.IResource<app.domin.Member>{

    }

    export class DataAccessService implements IDataAccessService {

        static $inject = ["$resource"];
        constructor(private $resource: ng.resource.IResourceService) {

        }

        getMemberResource(): ng.resource.IResourceClass<IMemberResource> {
            return this.$resource("http://localhost/amsWebApi/api/memberapi/GetMembers");
        }
    }
    angular.module("commonServices").service("dataAccessService", DataAccessService);

}