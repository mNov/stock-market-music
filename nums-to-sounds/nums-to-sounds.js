//Used this as a base:
//http://modernweb.com/2013/10/28/audio-synthesis-in-javascript/

var audio = new (window.AudioContext || window.webkitAudioContext)(),
    position = 0; 

function playNotes() {
    var freq = deezNotes[position];
    position += 1;
    if(position >= deezNotes.length) {
       // position = 0;
    }
    if(freq) {
        createOscillator(freq);
    }

    // deezNotes.forEach(function(note,index){
    //     createOscillator(note);
    //     setTimeout(function(){},1000);
    // });
}

function createOscillator(freq) {
    var attack = 10,
        decay = 250,
        gain = audio.createGain(),
        osc = audio.createOscillator();

    gain.connect(audio.destination);
    gain.gain.setValueAtTime(0, audio.currentTime);
    gain.gain.linearRampToValueAtTime(1, audio.currentTime + attack / 1000);
    gain.gain.linearRampToValueAtTime(0, audio.currentTime + decay / 1000);

    osc.frequency.value = freq;
    osc.type = "square";
    osc.connect(gain);
    osc.start(0);

    setTimeout(function() {
        osc.stop(0);
        osc.disconnect(gain);
        gain.disconnect(audio.destination);
    }, decay)
}
