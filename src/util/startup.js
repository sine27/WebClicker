/**
 *    Copyright (C) Siyuan Gao - All Rights Reserved
 *    Unauthorized copying of this file, via any medium is strictly prohibited
 *    Proprietary and confidential
 *    Written by Siyuan Gao <siyuangao@gmail.com>, 10/6/15
 */

/*!
 *  After bootstrap, all the necessary promises, values are defined in AppSingleton
 *  In startup.js we will begin loading the appropriate routes, settings
 */

import AppSingleton     from './appsingleton';
import Promise          from 'bluebird';

/**
 * startup the application, setting the proper path
 *
 * @comment use startup after bootstrap
 * @method startup
 * @return {Promise} Returns a promise that will be resolved when startup is complete
 */
function startup() {

    //  Log tag
    var TAG = "startup";

    //  This instance is shared across the entire app life-cycle
    var sharedInstance = AppSingleton.getInstance();

    return new Promise((resolve) => {

        //  Setup routes for app

        resolve({ });
    });

    return new Promise((resolve, reject) => {

        //  Wait for connection and resolve this promise
        //  Create connection with mongoose
        sharedInstance.mongodb = Mongodb.MongoClient.connect(this.mongodb, function(err, db) {
            if(err) {
            	reject(err);
            	sharedInstance.L.info(TAG, 'fail to connect mongodb');
            }
            else {
                sharedInstance.L.info(TAG, 'connected to mongodb');
                sharedInstance.db = db;

                //  Provisions the database just in case db is a fresh install
                Provision(db);
                sharedInstance.L.info(TAG, 'db provisioned');
                resolve({ });
            }
        });
    });

}
export default startup;
