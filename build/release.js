/**
 * @description release
 * @author: minfive
 * @createDate: 2017-09-07, 00:08:12 GMT+0800
 * @lastModify minfive
 * @lastDate: 2017-09-07, 00:08:12 GMT+0800
 */

const exec = require('child_process').exec;

function getBranchName() {
    return new Promise((resolve, reject) => {
        exec('git branch', (err, stdout, stderr) => {
            if (err) {
                reject(err);
            }

            process.stdout.write(stdout);
        });
    });
}