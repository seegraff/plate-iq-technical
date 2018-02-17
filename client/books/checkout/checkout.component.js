function BooksCheckoutController(
    ngDialog
) {
    var self = this;

    self.$onInit = () => {
        self.click = () => {
            ngDialog.open({
                template: 'books/checkout/checkout.dialog.html',
                className: 'ngdialog-theme-default books-checkout',
                controllerAs: 'dialog',
                controller: ['$scope', 'BooksApi', 'UsersApi', ($scope, BooksApi, UsersApi) => {
                    var self = this;

                    self.$onInit = () => {
                        $scope.data = self.data;
                        $scope.users = self.users;

                        $scope.dueDate = moment().add(14, 'days').format('MM-DD-YYYY');

                        $scope.submit = () => {
                        };
                    };
                }],
                resolve: {
                    users: (UsersApi) => {
                        return UsersApi.list({limit: 1000});
                    }
                },
                bindings: {
                    users: '<'
                }
            });
        };
    };
}

BooksCheckoutController.$inject = [
    'ngDialog',
];

angular.module( 'books' )
    .component( 'booksCheckout', {
        templateUrl: 'books/checkout/checkout.template.html',
        controller: BooksCheckoutController,
        bindings: {
            data: '<'
        }
    } );
