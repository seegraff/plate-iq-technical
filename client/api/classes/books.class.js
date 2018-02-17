class BooksApi extends CoreApi {
    constructor(restangular) {
        super(restangular, 'books');
    }

    checkout(book, user) {
        return this.appPath.one(book, 'checkout').one(user).get();
    }

    checkin(book) {
        return this.appPath.one(book, 'return').get();
    }
}
