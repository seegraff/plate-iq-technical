function BooksPaginationController(
    $state,
    $location,
    $stateParams
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
        var params = getParameters(self.data.previous);

        if(!params.offset) {
            params.offset = "0";
        }

        $state.go('root', params)
    };

    self.$onInit = () => {
        var offset = parseInt($stateParams.offset) + 10;

        self.data.totalPages = Math.ceil( self.data.count / 10 );

        if(offset) {
            self.data.currentPage = self.data.totalPages - Math.floor((self.data.count - offset) / 10) - 1;
        } else {
            self.data.currentPage = 1;
        }
    };
}

BooksPaginationController.$inject = [
    '$state',
    '$location',
    '$stateParams'
];

angular.module( 'books' )
    .component( 'booksPagination', {
        templateUrl: 'books/pagination/pagination.template.html',
        controller: BooksPaginationController,
        bindings: {
            data: '<'
        }
    } );
