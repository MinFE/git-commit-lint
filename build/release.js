/**
 * @description release
 * @author: minfive
 * @createDate: 2017-09-07, 00:08:12 GMT+0800
 * @lastModify minfive
 * @lastDate: 2017-09-07, 00:08:12 GMT+0800
 */

const exec = require('child_process').exec;
const standardVersion = require('standard-version');

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

function updateChangelog() {
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
}

async function release() {
    if (await getBranchName() === 'master') {
        console.log('合并到 master 分支');
        updateChangelog();
    } else {
        console.log('合并了');
    }
}

release();