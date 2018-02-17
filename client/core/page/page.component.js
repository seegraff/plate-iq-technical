function CorePageController(
    $scope,
    BooksApi,
    CategoriesApi
) {
    var self = this;

    self.$onInit = () => {
        self.pagination = {
            next: self.list.next,
            previous: self.list.previous,
            totalPages: Math.floor( self.list.count / 10 ),
            currentPage: 1
        };
    };
}

CorePageController.$inject = [
    '$scope',
    'BooksApi',
    'CategoriesApi'
];

angular.module( 'core' )
    .component( 'corePage', {
        templateUrl: 'core/page/page.template.html',
        controller: CorePageController,
        bindings: {
            list: '<'
        }
    } );
