class CoreApi {
    constructor(restangular, appName) {
        this.restangular = restangular;
        this.appName = appName;

        this.basePath = this.restangular.all('api/v1');
        this.appPath = this.basePath.one(this.appName);
    }

    list() {
        return this.appPath.get().then((result) => {
            console.log(this.appName + ' list result', result);
        });
    }

    create(data) {
        return this.appPath.post(data).then((result) => {
            console.log(this.appName + ' create result', result);
        });
    }

    retrieve(uuid) {
        return this.appPath.one(uuid).get().then((result) => {
            console.log(this.appName + ' retrieve result', result);
        });
    }

    update(uuid, data) {
        return this.appPath.one(uuid).post(data).then((result) => {
            console.log(this.appName + ' update result', result);
        });
    }

    delete(uuid) {
        return this.appPath.one(uuid).remove().then((result) => {
            console.log(this.appName + ' delete result', result);
        });
    }
}
