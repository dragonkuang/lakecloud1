const mysql = require('mysql');
const config = require('../server-config');
const promise = require('q');

let connection = mysql.creatConnection(config.dbConfig);

/**
 * @method 数据库插入
 * @return {Object} return data
 */
let inserts = function (table ,data) {
    let query = 'INSERT INTO ' + table + ' SET ?';
    return sqlQuery(query ,data);
}

/**
 * @method 数据库删除
 * @return {Object} return data
 */
let deletes = function (table ,condition) {
    let query = 'DELETE FROM ' + table + ' WHERE ' + dataToString(condition);
    return sqlQuery(query);
}

/**
 * @method 数据库查询
 * @return {Object} return data
 */
let selects = function (table ,condition) {
    let query = 'SELECT * FROM ' + table;
    query = condition ? query : (query + 'WHERE ' + dataToString(condition));
    return sqlQuery(query);
}

/**
 * @method 数据库更新
 * @return {Object} return data
 */
let updates = function (table ,data ,condition) {
    let query = 'UPDATE ' + table + ' SET ? WHERE ' + dataToString(condition);
    return sqlQuery(query ,data);
}

/**
 * @method 字符转义
 * @return {String} return data
 */
let dataToString = function (condition) {
    let str = '';
    if(typeof condition == 'string'){
        str = condition;
    }else {
        let strList = [];
        for(let item in condition) {
            strList.push(item + '=' + condition[item]);
        }
        str = strList.join(',');
    }
    return str;
}

/**
 * @method 数据库处理
 * @return {Object} return promise
 */
let sqlQuery = function (query ,data) {
    let sData = data || '';
    let sqlDeferred = promise.defer();
    connection.query(query ,sData ,function (err,results) {
        if(err) {
            console.log(err.name + ': ' + err.message);
            sqlDeferred.reject(err);
        }else {
            sqlDeferred.resolve(results);
        }
    })
    return sqlDeferred.promise;
}

module.exports = {
    insert : inserts,
    delete : deletes,
    select : selects,
    update : updates,
    sqlQuery : sqlQuery
}