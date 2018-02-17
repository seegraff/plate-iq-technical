function CorePageController() {}

CorePageController.$inject = [];

angular.module( 'core' )
    .component( 'corePage', {
        templateUrl: 'core/page/page.template.html',
        controller: CorePageController,
        bindings: {
            list: '<'
        }
    } );
