describe('Help ALF', function() {
    beforeEach(function() {
        alf = new HelpAlf();
    });

    it('should return "Spaceship lost forever." for empty string', function() {
        expect(alf.findSpaceship('')).toEqual('Spaceship lost forever.');
    });

    it('should find spaceship in the middle', function() {
        expect(alf.findSpaceship('. . .\n. X .\n. . .')).toEqual([1, 1]);
    }
    
    )

    it('should find spaceship at top left', function() {
        expect(alf.findSpaceship('X . .\n. . .\n. . .')).toEqual([0, 2]);
    });

    it('should find spaceship at bottom right', function() {
        expect(alf.findSpaceship('. . .\n. . .\n. . X')).toEqual([2, 0]);
    });
    
});
