const fs = require('fs');
const webpackdiff = require('./webpack-diff');
const opn = require('opn');

console.log('this is the starter file');

const args = process.argv;

const baselineStatsPath = args[2]
const prStatsPath = args[3]

fs.readFile(baselineStatsPath, 'utf8', function(err, baselineStatsData) {
    fs.readFile(prStatsPath, 'utf-8', function(err, prStatsData) {
        var assetsData = webpackdiff.generateAssetsData(baselineStatsData, prStatsData);
        var modulesData = webpackdiff.generateModulesData(baselineStatsData, prStatsData);

        var assetsDataPath = 'src/assetsData.json';
        var modulesDataPath = 'src/modulesData.json';
        fs.writeFile(assetsDataPath, JSON.stringify(assetsData), function(err) {
            fs.writeFile(modulesDataPath, JSON.stringify(modulesData), function(err) { 
                console.log('assetsData.json and baselineData.json created');

                opn('http://localhost:3000');
            })
        })
    })
});

