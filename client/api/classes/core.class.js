class CoreApi {
    constructor(restangular, appName) {
        this.restangular = restangular;
        this.appName = appName;

        this.basePath = this.restangular.all('api/v1');
        this.appPath = this.basePath.one(this.appName);
    }

    list(parameters) {
        return this.appPath.get(parameters);
    }

    create(data) {
        return this.appPath.customPOST(data);
    }

    retrieve(uuid) {
        return this.appPath.one(uuid).get().then((result) => {
            console.log(this.appName + ' retrieve result', result);
        });
    }

    update(uuid, data) {
        return this.appPath.one(uuid).customPATCH(data);
    }

    delete(uuid) {
        return this.appPath.one(uuid).remove();
    }
}
