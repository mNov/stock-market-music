//outer array is date (row)
//inner array is data-points (column)
//indx [n][0] is closing score
var DataSet = function(name, rows, columns, data) {
    this.name = name;
    this.rows = rows;
    this.columns = columns;
    this.data = data;
};
DataSet.prototype.getAverage = function(column) {
    //you can specify the column name or the array index of the column
    var columnIndx = typeof column === 'number' ? column : this.columns.indexOf(column);
    if (column === -1) throw Error("ERR: cannot find property " + column);
    var targetColumn = this.data[columnIndx];
    return targetColumn.reduce(function(a,b) {return a+b}, 0) / targetColumn.length;
};
DataSet.prototype.getMean = DataSet.prototype.getAverage;

DataSet.prototype.getVariance = function(column) {
    var columnIndx = typeof column === 'number' ? column : this.columns.indexOf(column);
    if (column === -1) throw Error("ERR: cannot find property " + column);
    var targetColumn = this.data[columnIndx];
    
    var mean = this.getAverage(column);
    return targetColumn
        .map(function(num){ return Math.pow((num - mean), 2)})
        .reduce(function(a,b) { return a+b },0) 
        / targetColumn.length;
};

DataSet.prototype.getStandardDeviation = function(column){
    var columnIndx = typeof column === 'number' ? column : this.columns.indexOf(column);
    if (column === -1) throw Error("ERR: cannot find property " + column);
    
    return Math.sqrt(this.getVariance(column));
};

DataSet.prototype.getZScore = function(column) {
    var columnIndx = typeof column === 'number' ? column : this.columns.indexOf(column);
    if (column === -1) throw Error("ERR: cannot find property " + column);
    var stdDev = this.getStandardDeviation(column);
    var avg = this.getMean(column);
    var targetColumn = this.data[columnIndx];
    
    return targetColumn.map(function(num) { return (num - avg) / stdDev});
    
};

var sampleDataSet = new DataSet(
        "HistoricalQuotes.csv",
        ["2015/12/11", "2015/12/10", "2015/12/09", "2015/12/08","2015/12/07"],
        ["close", "volume", "open", "high", "low"],
        [
            [738.87,    749.46,     751.61,     762.37,     763.25,     766.81],
            [2223284,   1988035,    2697978,    1829004,    1811336,    2756194],
            [741.16,    752.85,     759.17,     757.89,     767.77,     753.1],
            [745.71,    755.85,     764.23,     764.8,      768.73,     768.49],
            [736.75,    743.83,     737.001,    754.2,      755.09,     750]
        ]
    );
