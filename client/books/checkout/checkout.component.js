function BooksCheckoutController(
    ngDialog,
    BooksApi
) {
    var self = this;

    self.$onInit = () => {
        self.click = () => {
            if ( self.data.user ) {
                BooksApi.checkin( self.data.uuid )
                    .then( ( result ) => {
                        self.data = result;
                    } );
            } else {
                ngDialog.open( {
                    template: 'books/checkout/checkout.dialog.html',
                    className: 'ngdialog-theme-default books-checkout',
                    controllerAs: 'dialog',
                    controller: ( $scope, users ) => {
                        var self = this;

                        $scope.updated = false;
                        $scope.error = false;

                        $scope.users = users;
                        $scope.data = self.data;

                        $scope.dueDate = moment()
                            .add( 14, 'days' )
                            .format( 'MM-DD-YYYY' );

                        $scope.models = {
                            user: null
                        };

                        $scope.submit = () => {
                            BooksApi.checkout( $scope.data.uuid, $scope.models.user )
                                .then( ( result ) => {
                                    $scope.updated = true;
                                    self.data = result;
                                }, () => {
                                    $scope.error = true;
                                } );
                        };
                    },
                    resolve: {
                        users: ( UsersApi ) => {
                            return UsersApi.list( {
                                limit: 1000
                            } );
                        }
                    },
                    bindings: {
                        users: '<'
                    }
                } );
            }
        };
    };
}

BooksCheckoutController.$inject = [
    'ngDialog',
    'BooksApi',
];

angular.module( 'books' )
    .component( 'booksCheckout', {
        templateUrl: 'books/checkout/checkout.template.html',
        controller: BooksCheckoutController,
        bindings: {
            data: '='
        }
    } );
