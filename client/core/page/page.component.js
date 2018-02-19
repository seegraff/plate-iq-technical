function CorePageController(
    $stateParams
) {
    var self = this;

    self.params = $stateParams;
}

CorePageController.$inject = [
    '$stateParams'
];

angular.module( 'core' )
    .component( 'corePage', {
        templateUrl: 'core/page/page.template.html',
        controller: CorePageController,
        bindings: {
            books: '<',
            categories: '<'
        }
    } );
