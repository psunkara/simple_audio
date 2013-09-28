// Generated by CoffeeScript 1.6.3
(function() {
  describe("Recorder", function() {
    describe("recording", function() {
      beforeEach(function() {
        this.recording = new Recording();
        waits(2000);
        return this.recording.start();
      });
      return it("Records audio", function() {
        expect(this.recording.errors.length).toEqual(0);
        expect(this.recording.sampleRate).toEqual(44100);
        expect(window.__recording).toEqual(true);
        expect(window.__leftchannel).not.toEqual([]);
        expect(window.__rightchannel).not.toEqual([]);
        expect(window.__recordingLength).toBeGreaterThan(0);
        this.recording.stop();
        expect(window.__recording).toEqual(false);
        expect(window.__leftchannel).toEqual([]);
        expect(window.__rightchannel).toEqual([]);
        expect(window.__recordingLength).toEqual(0);
        expect(this.recording.blob.constructor.name).toEqual("Blob");
        expect(this.recording.blob.type).toEqual("audio/wav");
        return expect(this.recording.blob.size).toBeGreaterThan(45);
      });
    });
    return describe('helper methods', function() {
      return it('write utf bytes', function() {});
    });
  });

}).call(this);

/*
//@ sourceMappingURL=recorderspec.map
*/
