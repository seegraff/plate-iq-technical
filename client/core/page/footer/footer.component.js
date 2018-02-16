function PageFooterController() {}

PageFooterController.$inject = [];

angular.module( 'core' )
    .component( 'pageFooter', {
        templateUrl: 'core/page/footer/footer.template.html',
        controller: PageFooterController
    } );
