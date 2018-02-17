function BooksListController() {
    var self = this;

    self.data = [
        {
            'name': 'Testing in a Big Wide World of Test: How I Conquered the Test',
            'author': 'Test Testerson',
            'category': 'Testing',
            'published': '2/16/2018'
        },
        {
            'name': 'Testing in a Big Wide World of Test: How I Conquered the Test',
            'author': 'Test Testerson',
            'category': 'Testing',
            'published': '2/16/2018'
        },
        {
            'name': 'Testing in a Big Wide World of Test: How I Conquered the Test',
            'author': 'Test Testerson',
            'category': 'Testing',
            'published': '2/16/2018'
        },
        {
            'name': 'Testing in a Big Wide World of Test: How I Conquered the Test',
            'author': 'Test Testerson',
            'category': 'Testing',
            'published': '2/16/2018'
        },
        {
            'name': 'Testing in a Big Wide World of Test: How I Conquered the Test',
            'author': 'Test Testerson',
            'category': 'Testing',
            'published': '2/16/2018'
        },
    ]
}

BooksListController.$inject = [];

angular.module( 'books' )
    .component( 'booksList', {
        templateUrl: 'books/list/list.template.html',
        controller: BooksListController
    } );
