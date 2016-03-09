var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var app;
(function (app) {
    var domin;
    (function (domin) {
        var Person = (function () {
            function Person(firstName, surName, email) {
                this.firstName = firstName;
                this.surName = surName;
                this.email = email;
            }
            Person.prototype.getName = function () {
                return this.firstName + " " + this.surName;
            };
            return Person;
        })();
        var Member = (function (_super) {
            __extends(Member, _super);
            function Member(firstName, surName, email, memberType, memberNumber) {
                _super.call(this, firstName, surName, email);
                this.firstName = firstName;
                this.surName = surName;
                this.email = email;
                this.memberType = memberType;
                this.memberNumber = memberNumber;
            }
            return Member;
        })(Person);
        domin.Member = Member;
        var Customer = (function (_super) {
            __extends(Customer, _super);
            function Customer(firstName, surName, email, customerType) {
                _super.call(this, firstName, surName, email);
                this.firstName = firstName;
                this.surName = surName;
                this.email = email;
                this.customerType = customerType;
            }
            return Customer;
        })(Person);
        domin.Customer = Customer;
    })(domin = app.domin || (app.domin = {}));
})(app || (app = {}));
//# sourceMappingURL=member.js.map