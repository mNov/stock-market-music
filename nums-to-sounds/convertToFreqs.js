var chromaticList = [
16.35, 17.32, 18.35, 19.45, 20.6, 21.83, 23.12, 24.5, 25.96, 27.5, 29.14, 30.87, 32.70, 34.65, 36.71, 38.89, 41.2, 43.65, 46.25, 49.0, 51.91, 55.0, 58.27, 61.74, 65.41, 69.30, 73.42, 77.78, 82.41, 87.31, 92.50, 98.00, 103.83, 110.00, 116.54, 123.47, 130.81, 138.59, 146.83, 155.56, 164.81, 174.61, 185.00, 196.00, 207.65, 220.00, 233.08, 246.94, 261.63, 277.18, 293.66, 311.13, 329.63, 349.23, 369.99, 392.00, 415.30, 440.00, 466.16, 493.88, 523.25, 554.37, 587.33, 622.25, 659.25, 698.46, 739.99, 783.99, 830.61, 880.00, 932.33, 987.77, 1046.50, 1108.73, 1174.66, 1244.51, 1318.51, 1396.91, 1479.98, 1567.98, 1661.22, 1760.00, 1864.66, 1975.53, 2093.00,
]


function generateScales(key, scale){
    var scaleArray= [ 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C' ]
    var frequencyMap = { C: 0,
  'C#/Db': 1,
  D: 2,
  'D#/Eb': 3,
  E: 4,
  F: 5,
  'F#/Gb': 6,
  G: 7,
  'G#/Ab': 8,
  A: 9,
  'A#/Bb': 10,
  B: 11 };
var homeFreq = frequencyMap[key]
// console.log(chromaticList.indexOf(261.63),chromaticList.indexOf(523.25))
var scalesArray = []
for (var j=0; j<7; j++){
	if (scale = "chromatic") scalesArray.push(chromaticList.slice(homeFreq, homeFreq+13))
    homeFreq+=12;
}
return scalesArray;
}

var sampleNotes = [ [ 1, 0.29448734215383654 ],
  [ 2, 0.7749207111265477 ],
  [ 3, 0.10935761513175896 ],
  [ 4, 0.4397519865025168 ],
  [ 4, 0.6213981152655568 ],
  [ 5, 0.17811963626710559 ] ];

var scales = generateScales("C#/Db");

function transformToNotes(notes, scales){
	var modulo = scales[0].length;
	return notes.map(function(note){
		return scales[note[0]][Math.floor((note[1]*modulo)%modulo)]
	})
}
// console.log(sampleNotes)
console.log(transformToNotes(sampleNotes, scales))



