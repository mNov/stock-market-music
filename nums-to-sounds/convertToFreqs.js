function zMod(zScore){
    // modifies z scores to go from 0 to 1 so that they may be 
    //multiplied by the number of notes in a particular scale

    //returns an array with the octave at index 0 and the
    //modified z score at index 1


    //sets the most common values to be centered at octave 4
    if (zScore >= -.5 && zScore < .5) return [3,zScore + .5];

    else if (zScore >= -1 && zScore < -.5) return [2,(zScore+1)*2];
    
    else if (zScore >=.5 && zScore < 1) return [4,(zScore - .5)*2];
    
    else if (zScore >= -2 && zScore < -1) return [1, zScore+2];
    
    else if (zScore >= 1 && zScore < 2) return [5, zScore-1];
    
    else if (zScore < -2) return [0,0];

    else if (zScore >= 2) return [6,0];
    
}



var chromaticList = [
16.35, 17.32, 18.35, 19.45, 20.6, 21.83, 23.12, 24.5, 25.96, 27.5, 29.14, 30.87, 32.70, 34.65, 36.71, 38.89, 41.2, 43.65, 46.25, 49.0, 51.91, 55.0, 58.27, 61.74, 65.41, 69.30, 73.42, 77.78, 82.41, 87.31, 92.50, 98.00, 103.83, 110.00, 116.54, 123.47, 130.81, 138.59, 146.83, 155.56, 164.81, 174.61, 185.00, 196.00, 207.65, 220.00, 233.08, 246.94, 261.63, 277.18, 293.66, 311.13, 329.63, 349.23, 369.99, 392.00, 415.30, 440.00, 466.16, 493.88, 523.25, 554.37, 587.33, 622.25, 659.25, 698.46, 739.99, 783.99, 830.61, 880.00, 932.33, 987.77, 1046.50, 1108.73, 1174.66, 1244.51, 1318.51, 1396.91, 1479.98, 1567.98, 1661.22, 1760.00, 1864.66, 1975.53, 2093.00,
]

// Generate Scales bases on input of key (string) and scale (int)
function generateScales(key, scale){
    var frequencyMap = { 'c': 0,
  'cd': 1,
  'd': 2,
  'de': 3,
  'e': 4,
  'f': 5,
  'fg': 6,
  'g': 7,
  'ga': 8,
  'a': 9,
  'ab': 10,
  'b': 11 };
var homeFreq = frequencyMap[key]
var scalesArray = [];
var scaleInProgress = [];
for (var j=0; j<7; j++){
  // Chromatic Scale
	if (scale === 4) scalesArray.push(chromaticList.slice(homeFreq, homeFreq+13))
  // Major Scale
	else if (scale === 1){
		scaleInProgress = [];
		scaleInProgress.push(chromaticList[homeFreq], chromaticList[homeFreq + 2], chromaticList[homeFreq + 4], chromaticList[homeFreq + 5], chromaticList[homeFreq + 7], chromaticList[homeFreq + 9], chromaticList[homeFreq + 11], chromaticList[homeFreq + 12]);
		scalesArray.push(scaleInProgress);
	}
  //Harmonic Minor
  else if (scale === 2){
    scaleInProgress = []
    scaleInProgress.push(chromaticList[homeFreq], chromaticList[homeFreq + 2], chromaticList[homeFreq + 3], chromaticList[homeFreq + 5], chromaticList[homeFreq + 7], chromaticList[homeFreq + 8], chromaticList[homeFreq + 11], chromaticList[homeFreq + 12]);
    scalesArray.push(scaleInProgress);
  }
  //Pentanonic
  else if (scale ===5){
    scaleInProgress = []
    scaleInProgress.push(chromaticList[homeFreq], chromaticList[homeFreq + 2], chromaticList[homeFreq + 4], chromaticList[homeFreq + 7], chromaticList[homeFreq + 9], chromaticList[homeFreq + 12]);
    scalesArray.push(scaleInProgress);
  }
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

var scales = generateScales("ab", 3);


function transformToNotes(notes, scales){
	var modulo = scales[0].length;
	return notes.map(function(note){
		return scales[note[0]][Math.floor((note[1]*modulo)%modulo)]
	})
}

// console.log(transformToNotes(sampleNotes, scales))



// console.log(noteList)
