describe('Help ALF', function() {
    beforeEach(function() {
        alf = new HelpAlf();
    });

    it('should return "Spaceship lost forever." for empty string', function() {
        expect(alf.findSpaceship('')).toEqual('Spaceship lost forever.');
    });
});
