function BooksFilterController(
    $state,
    $filter
) {
    var self = this;

    self.$onInit = () => {
        self.models = {
            name: self.params.name,
            author: self.params.author
        };

        if(self.params.from) {
            self.models.from = moment(self.params.from).toDate();
        }

        if(self.params.to) {
            self.models.to = moment(self.params.to).toDate();
        }

        if(self.params.availability) {
            self.models.availability = self.params.availability.toString();
        }

        if(self.params.category) {
            self.models.category = {
                uuid: self.params.category
            };
        }

        self.submit = () => {
            var models = Object.assign({}, self.models);

            models.to = $filter('date')(self.models.to, 'yyyy-MM-dd');
            models.from = $filter('date')(self.models.from, 'yyyy-MM-dd');
            models.category = models.category.uuid;

            var filterActive = Object.keys(models).some((key) => {
                return models[key] && models[key] !== '';
            });

            if(filterActive) {
                $state.go('root', models);
            }
        };

        self.reset = () => {
            $state.go('root', {
                name: null,
                author: null,
                category: null,
                from: null,
                to: null,
                availability: null
            });
        };
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
            data: '=',
            params: '='
        }
    } );
