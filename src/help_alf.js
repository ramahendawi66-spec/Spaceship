function HelpAlf() {}
HelpAlf.prototype.findSpaceship = function(map) {
    if(map === '') {
        return 'Spaceship lost forever.';
    }
    
    const rows = map.split('\n');
    
    for (let y = 0; y < rows.length; y++) {
        const cols = rows[y].split(' ');
        for (let x = 0; x < cols.length; x++) {
            if (cols[x] === 'X') {
                return [x, rows.length - 1 - y];
            }
        }
    }
    
};