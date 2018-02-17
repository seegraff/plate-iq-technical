function BooksCreateController(
    $filter,
    ngDialog
) {
    var self = this;

    self.$onInit = () => {
        self.click = () => {
            ngDialog.open({
                template: 'books/create/create.dialog.html',
                className: 'ngdialog-theme-default books-create',
                controllerAs: 'dialog',
                controller: ['$scope', 'BooksApi', ($scope, BooksApi) => {
                    $scope.data = self.data;

                    $scope.created = false;
                    $scope.error = false;

                    $scope.models = {
                        name: null,
                        author: null,
                        category: null,
                        published: null
                    };

                    $scope.submit = () => {
                        var models = Object.assign({}, $scope.models);
                        models.published = $filter('date')(models.published, 'yyyy-MM-dd');
                        BooksApi.create(models).then(() => {
                            $scope.created = true;
                        }, () => {
                            $scope.error = true;
                        });
                    };
                }]
            });
        };
    };
}

BooksCreateController.$inject = [
    '$filter',
    'ngDialog',
];

angular.module( 'books' )
    .component( 'booksCreate', {
        templateUrl: 'books/create/create.template.html',
        controller: BooksCreateController,
        bindings: {
            data: '<'
        }
    } );
