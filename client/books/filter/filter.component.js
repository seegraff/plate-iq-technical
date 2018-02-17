function BooksFilterController(
    $state
) {
    var self = this;

    self.models = {
        title: null,
        author: null,
        category: null,
        from: null,
        to: null,
        availability: null
    };

    self.submit = () => {
        var filterActive = Object.keys(self.models).some((key) => {
            return self.models[key] && self.models[key] !== '';
        });

        if(filterActive) {
            $state.go('root', self.models);
        }
    };

    self.$onInit = () => {
    };
}

BooksFilterController.$inject = [
    '$state',
];

angular.module( 'books' )
    .component( 'booksFilter', {
        templateUrl: 'books/filter/filter.template.html',
        controller: BooksFilterController,
        bindings: {
            data: '='
        }
    } );
