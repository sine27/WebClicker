/**
 *    Copyright (C) Siyuan Gao - All Rights Reserved
 *    Unauthorized copying of this file, via any medium is strictly prohibited
 *    Proprietary and confidential
 *    Written by Siyuan Gao <siyuangao@gmail.com>, 10/6/15
 */

/*!
 *  Bootstrap is ran first will set all the necessary things like in appsingleton
 *  loggers, configs and many other things. It is reusable in many other applications
 */

//  NPM modules
import Winston          from 'winston';
import Promise          from 'bluebird';
import Path             from 'path';

//  Libraries
import AppSingleton     from './appsingleton';

/**
 * bootstrap the entire application
 *
 * @method bootstrap
 * @return {Undefined} Returns nothing
 */
function bootstrap () {

    //  Log tag
    var TAG = "bootstrap";

    //  This instance is shared across the entire app life-cycle
    var sharedInstance = AppSingleton.getInstance();
    // Mongo URL
    var mongodb = "mongodb://webclicker:cs252lab6@ds061474.mongolab.com:61474/webclicker"
    //  Creating a new shared instance for winston logger
    sharedInstance.log = new (Winston.Logger)({
        transports: [
            new (Winston.transports.Console)({
                colorize    : 'all',
                level       : sharedInstance.config.loglevel
            })
        ]
    });
    sharedInstance.L = {
        verbose :   (tag, log) => {sharedInstance.log.verbose(`[${tag}] : ${log}`);},
        info    :   (tag, log) => {sharedInstance.log.info(`[${tag}] : ${log}`);},
        error   :   (tag, log) => {sharedInstance.log.error(`[${tag}] : ${log}`);},
        warn    :   (tag, log) => {sharedInstance.log.warn(`[${tag}] : ${log}`);}
    };

    sharedInstance.L.info(TAG, "Bootstrap complete!");
}

module.exports = bootstrap;
