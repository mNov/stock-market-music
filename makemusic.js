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
]
            [2223284,   1988035,    2697978,    1829004,    1811336,    2756194],
            [741.16,    752.85,     759.17,     757.89,     767.77,     753.1],
            [745.71,    755.85,     764.23,     764.8,      768.73,     768.49],
            [736.75,    743.83,     737.001,    754.2,      755.09,     750]
        ]
    );
var option2 = null;
var option3 = null;
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
  
  
  
  $('#make-music').on('click', function(){
    var spreadsheet = spreadsheets[($('#key').val()-1)];
    var keyCode = $('#key-select').val();
    var dataToSend = {
      zscores: spreadsheet.getZScore(0),
      scale: scaleCode,
      key: keyCode
    }
        console.log(dataToSend);

  })
  
  $('#test').on('click', function() {
    
    var spreadsheet = spreadsheets[($('#key').val()-1)];
    var keyCode = $('#key-select').val();
    dataToSend = {
      zscores: spreadsheet.getZScore(0),
      scale: scaleCode,
      key: keyCode
    };
    console.log(dataToSend);
  });
});