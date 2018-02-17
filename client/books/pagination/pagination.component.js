function BooksPaginationController(
    $state,
    $location
) {
    var self = this;

    self.getNumberArray = (number) => {
        return new Array(number);
    };

    function getParameters(string) {
        var search = string.replace('http://localhost:8000/api/v1/books/?', '');
        return JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');
    }

    self.goToNextPage = () => {
        $state.go('root', getParameters(self.data.next))
    };

    self.goToPreviousPage = () => {
        $state.go('root', getParameters(self.data.previous))
    };
}

BooksPaginationController.$inject = [
    '$state',
    '$location'
];

angular.module( 'books' )
    .component( 'booksPagination', {
        templateUrl: 'books/pagination/pagination.template.html',
        controller: BooksPaginationController,
        bindings: {
            data: '='
        }
    } );
