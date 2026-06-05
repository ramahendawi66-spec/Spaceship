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
});
