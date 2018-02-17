function EditRowController(
    BooksApi
) {
    var self = this;

    self.$onInit = () => {
        self.models = {
            name: self.data.name,
            author: self.data.author,
            category: self.data.category,
            published: new Date(self.data.published)
        };

        console.log('edit row', self.data, self.categories.results);

        self.save = () => {
            var models = Object.assign({}, self.models);

            models.published = moment(models.published).format('YYYY-MM-DD')

            BooksApi.update(self.data.uuid, models).then((result) => {
                self.data = result;
                self.editing = false;
            });
        };

        self.quit = () => {
            self.editing = false;
        };
    };
}

EditRowController.$inject = [
    'BooksApi',
];

angular.module( 'books' )
    .component( 'editRow', {
        templateUrl: 'books/edit/row/row.template.html',
        controller: EditRowController,
        bindings: {
            data: '=',
            editing: '=',
            categories: '<'
        }
    });
