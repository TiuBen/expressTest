const readLine = require('readline');
const fs = require('fs');
const path = require('path');

module.exports = {
    getAllProArry: function () {
        var _path = path.resolve(__dirname, '/snTemp/expressTest-master/Server/_Temp/allpro.txt');
        console.log(_path);
        const readInterface = readLine.createInterface({
            input: fs.createReadStream(_path),
            // output: process.stdout,
            // console: false
        });
        var _Temp = [];
        var one = {
            ProcedureName: '',
            Points: []
        };
        readInterface.on('line', function (line) {
            if (line.replace(" ").length === 0) {
                _Temp.push(one);

                one = {
                    ProcedureName: '',
                    Points: []
                };
            } else if (line.includes('RWY')) {
                one.ProcedureName = line;
            } else if (line.includes('F')) {
                one.Points.push(line.split(" ")[1]);
            }
        });
        readInterface.on('close', () => {
            console.log();
            _Temp.shift();
            console.log(_Temp);
        })
        return _Temp;
    }
}