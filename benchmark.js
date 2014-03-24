var fs = require('fs');
var path = require('path');
var Benchmark = require('benchmark');

var pathProblem = process.argv.slice(2)[0];

fs.readdirSync(pathProblem)
    .filter(function(file) {
        return (/.js$/).test(file);
    })
    .forEach(function(file) {
        var pathFile = path.resolve(process.cwd(), pathProblem, file);

        console.log('Working. Please, wait...');

        (new Benchmark(file, require(pathFile), {
            onComplete: function() {
                console.log(this.toString());
            }
        })).run();
    });