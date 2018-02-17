class BooksApi extends CoreApi {
    constructor(restangular) {
        super(restangular, 'books');
    }

    checkout(uuid) {
        return this.appPath.one(uuid, 'checkout').one().get();
    }

    checkin(uuid) {
        return this.appPath.one(uuid, 'return').one().get();
    }
}
