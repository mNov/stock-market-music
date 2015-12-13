var isPlaying = false;
var intervalID;

var option1 = new DataSet(
        "HistoricalQuotes.csv",
        ["2015/12/11", "2015/12/10", "2015/12/09", "2015/12/08","2015/12/07"],
        ["close", "volume", "open", "high", "low"],
        [
            [738.8,
749.46,
751.61,
762.37,
763.25,
766.81,
752.54,
762.38,
767.04,
742.6,
750.26,
748.15,
748.28,
755.98,
756.6,
738.41,
740,
725.3,
728.96,
717,
731.23,
735.4,
728.32,
724.89,
733.76,
731.25,
728.11,
722.16,
721.11,
710.81,
716.92,
712.95,
708.49,
712.78,
702,
651.79,
642.61,
650.28,
666.1,
],
            [2223284,   1988035,    2697978,    1829004,    1811336,    2756194],
            [741.16,    752.85,     759.17,     757.89,     767.77,     753.1],
            [745.71,    755.85,     764.23,     764.8,      768.73,     768.49],
            [736.75,    743.83,     737.001,    754.2,      755.09,     750]
        ]
    );
var option2 = new DataSet(
                    "Amazon",
                    [],
                    ["close", "volume", "open", "high", "low"],
                    [[ 640.15,
  662.32,
  664.79,
  677.33,
  669.83,
  672.64,
  666.25,
  676.01,
  679.06,
  664.8,
  673.26,
  675.34,
  671.15,
  678.99,
  668.45,
  661.27,
  663.54,
  643.3,
  647.81,
  642.35,
  665.6,
  673.25,
  659.68,
  655.49,
  659.37,
  655.65,
  640.95,
  625.31,
  628.35,
  625.9,
  626.55,
  617.1,
  611.01,
  608.61,
  599.03,
  563.91,
  555.77,
  560.88,
  573.15,
  570.76,
  562.44,
  544.83,
  548.9,
  550.19,
  539.8,
  533.16,
  541.94,
  537.48,
  543.68,
  532.54,
  520.72,
  511.89,
  496.07,
  504.06,
  524.25,
  533.75,
  536.07,
  538.4,
  548.39,
  540.26,
  538.87,
  527.39,
  522.37,
  521.38,
  529.44 ]]//closing scores
)
var option3 = new DataSet(
                    "Yahoo",
                    [],
                    ["close", "volume", "open", "high", "low"],
                    [[ 32.91,
  34.63,
  34.4,
  34.85,
  34.68,
  34.91,
  34.34,
  35.65,
  33.71,
  33.81,
  32.94,
  33.16,
  32.96,
  33.36,
  33.11,
  32.625,
  32.98,
  32.86,
  32.945,
  32.19,
  33.23,
  33.38,
  33.99,
  33.68,
  34.2,
  35.12,
  35.07,
  34.72,
  35.27,
  35.62,
  35.05,
  35.185,
  34.3,
  33.4,
  33.17,
  31.67,
  31.12,
  32.83,
  33.5,
  33.37,
  33.48,
  32.09,
  32.34,
  32.86,
  32.52,
  32.37,
  31.87,
  30.955,
  30.85,
  30.71,
  28.91,
  28.91,
  28.26,
  27.6,
  29.13,
  29.34,
  29.74,
  30.4,
  31.17,
  30.74,
  30.93,
  31.4,
  31.04,
  30.32,
  31.43 ]]//closing scores
)
var spreadsheets = [option1, option2, option3];
var dataToSend;


$(function(){
  $('#make-music').removeAttr('disabled');
  //var spreadsheet = $
  $('#make-music').on('click', function() {
  });
  
  //custom data form show/hide
  $('#key').on('select', function(){
    var $this = $(this);
    var $optionCustom = $('#option-custom');
    if ($this.val() === 4) $optionCustom.show();
    else $optionCustom.hide();
  })
  
  //code for scale buttons
  var scaleCode = 1;
  $('.scale-btn').on('click', function(){
    var $this = $(this);
    scaleCode = parseInt($this.attr('id').slice(-1));
  });
  
  
  $('#make-music').on('click', function() {
    //console.log(spreadsheet)
    var spreadsheet = (spreadsheets[($('#key').val()-1)])
    console.log(spreadsheet)
    var keyCode = $('#key-select').val();
    dataToSend = {
      zscores: spreadsheet.getZScore(0).reverse(),
      scale: scaleCode,
      key: keyCode
    };
    var noteList = dataToSend.zscores.map(function(zScore){
    return zMod(zScore)
});
    var scales = generateScales(dataToSend.key, dataToSend.scale)
    deezNotes = transformToNotes(noteList, scales)
      if(!isPlaying) {
          isPlaying = true;
          $(this).text("Pause!");
          intervalID = setInterval(playNotes, 200);
      }else {
          isPlaying = false;
          position = 0;
          $(this).text("Play!");
          clearInterval(intervalID);
      }
  });

});