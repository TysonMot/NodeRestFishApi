'use strick';

module.exports = function(app) {

    let FishDB = require('../controller/crud');

    app.route('/fish')
        .get(FishDB.getDB)
        .post(FishDB.createDB);

    app.route('/fish')
        .get(FishDB.readDB)
        .put(FishDB.updateDB)
        .delete(FishDB.deleteDB);

}