function BooksFilterController(
    $state,
    $filter
) {
    var self = this;

    self.models = {
        name: null,
        author: null,
        category: null,
        from: null,
        to: null,
        availability: null
    };

    self.submit = () => {
        var models = Object.assign({}, self.models);

        models.to = $filter('date')(self.models.to, 'yyyy-MM-dd');
        models.from = $filter('date')(self.models.from, 'yyyy-MM-dd');

        var filterActive = Object.keys(models).some((key) => {
            return models[key] && models[key] !== '';
        });

        if(filterActive) {
            $state.go('root', models);
        }
    };

    self.$onInit = () => {
    };
}

BooksFilterController.$inject = [
    '$state',
    '$filter'
];

angular.module( 'books' )
    .component( 'booksFilter', {
        templateUrl: 'books/filter/filter.template.html',
        controller: BooksFilterController,
        bindings: {
            data: '='
        }
    } );
