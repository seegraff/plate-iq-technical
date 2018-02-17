function CorePageController(
    BooksApi,
    CategoriesApi,
    $log
) {
    var self = this;

    self.list = {};

    BooksApi.list().then((result) => {
        self.list = result;
    });
}

CorePageController.$inject = [
    'BooksApi',
    'CategoriesApi',
    '$log'
];

angular.module( 'core' )
    .component( 'corePage', {
        templateUrl: 'core/page/page.template.html',
        controller: CorePageController
    } );
