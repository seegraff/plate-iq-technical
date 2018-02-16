function PageHeaderController() {}

PageHeaderController.$inject = [];

angular.module( 'core' )
    .component( 'pageHeader', {
        templateUrl: 'core/page/header/header.template.html',
        controller: PageHeaderController
    } );
