/**
 * Created by dragon.kuang on 16/9/30.
 */
'use strict'
var config = {}

var dbConfig = {
    host : 'localhost',
    user : 'root',
    password : 'rootroot',
    database : 'lackcloud'
}

var fConfig = {
    host : '10.199.194.36',
    port : '21',
    user : 'ftp',
    password : 'vsftpd2016s'
}

config.dbConfig = dbConfig;
config.fConfig = fConfig;

config.code = {
    fail : -1,
    success : 200
}

module.exports = config;