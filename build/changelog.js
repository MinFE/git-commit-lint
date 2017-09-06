/**
 * @description changlog build
 * @author: minfive
 * @createDate: 2017-09-06, 21:41:45 GMT+0800
 * @lastModify minfive
 * @lastDate: 2017-09-06, 21:41:45 GMT+0800
 */

const standardVersion = require('standard-version');

standardVersion(
    {
        noVerify: true,
        infile: 'CHANGELOG.md',
        silent: false,
        skip: {
            tag: false
        }
    },
    funcion(err) {
        if (err) {
            throw err;
        }
    }
);