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
                controller: ($scope, BooksApi, users) => {
                    var self = this;

                    $scope.created = false;
                    $scope.error = false;

                    $scope.users = users;
                    $scope.data = self.data;

                    $scope.dueDate = moment().add(14, 'days').format('MM-DD-YYYY');

                    $scope.models = {
                        user: null
                    };

                    $scope.submit = () => {
                        BooksApi.checkout();
                    };
                },
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
