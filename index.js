function export2csv(input) {
    let csvContent = "data:text/csv;charset=utf-8," + input.map(e => e.join(",")).join("\n");
    var encodeedUri = encodeURI(csvContent);
    window.open(encodeedUri);
}

module.exports.export2csv = export2csv;