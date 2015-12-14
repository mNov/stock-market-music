var isPlaying = false;
var intervalID;

var option1 = new DataSet(
        "HistoricalQuotes.csv",
        ["2015/12/11", "2015/12/10", "2015/12/09", "2015/12/08","2015/12/07"],
        ["close", "volume", "open", "high", "low"],
        [
            googleClose,
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
                    [amazonClose]//closing scores
)
var option3 = new DataSet(
                    "Yahoo",
                    [],
                    ["close", "volume", "open", "high", "low"],
                    [yahooClose]//closing scores
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
          intervalID = setInterval(playNotes, 150);
      }else {
          isPlaying = false;
          position = 0;
          $(this).text("Play!");
          clearInterval(intervalID);
      }
  });

});