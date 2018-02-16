function PageContentController() {}

PageContentController.$inject = [];

angular.module( 'core' )
    .component( 'pageContent', {
        transclude: true,
        restrict: 'E',
        templateUrl: 'core/page/content/content.template.html',
        controller: PageContentController
    } );
