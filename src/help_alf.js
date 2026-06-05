function HelpAlf() {}

HelpAlf.prototype.findSpaceship = function(map) {

    if(map === '')
    return 'Spaceship lost forever.';
    
    var rows = map.split('\n');
    
    for (var y = 0; y < rows.length; y++) {
        var cols = rows[y].split(' ');
        for (var x = 0; x < cols.length; x++) {
            if (cols[x] === 'X') {
                return [x, rows.length - 1 - y]; //umdrehen
            }
        }
    }

    
};