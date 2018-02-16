function CoreApplicationController() {}

CoreApplicationController.$inject = [];

angular.module( 'core' )
    .component( 'coreApplication', {
        templateUrl: 'core/application/application.template.html',
        controller: CoreApplicationController
    } );
