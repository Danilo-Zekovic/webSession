/*
 * Danilo Zekovic
 * spa.shell.js
 * Shell module for TipCalculator
*/

/*jslint         browser : true, continue : true,
  devel  : true, indent  : 2,    maxerr   : 50,
  newcap : true, nomen   : true, plusplus : true,
  regexp : true, sloppy  : true, vars     : false,
  white  : true
*/
/*global $, spa */

spa.shell = (function () {
  //---------------- BEGIN MODULE SCOPE VARIABLES --------------
  var
    configMap = {
      main_html : String()
        
        + '<div class="jumbotron">'
          + '<h1>Tip Calculator</h1>'
          + '<p>Calculate your tip and split it with your friends with just few clicks</p>' 
        + '</div>' 
        
        + '<form class="form-horizontal" role="form">'
          + '<!-- Input box for amount -->'
          + '<div class="form-group">'
            + '<label class="control-label col-sm-2" for="amount">Check amount:</label>'
            + '<div class="col-sm-10">'
              + '<input type="number" class="form-control" id="amount" min="0" placeholder="Amount in dollars">'
            + '</div>'
          + '</div>'
          
          + '<!-- Input box for number of people splittiong the check -->'
          + '<div class="form-group">'
            + '<label class="control-label col-sm-2" for="num-people">Number of people:</label>'
            + '<div class="col-sm-10">'
              + '<select class="form-control" id="num-people">'
                + '<option>1</option>'
                + '<option>2</option>'
                + '<option>3</option>'
                + '<option>4</option>'
                + '<option>5</option>'
                + '<option>6</option>'
                + '<option>7</option>'
                + '<option>8</option>'
                + '<option>9</option>'
                + '<option>10</option>'
              + '</select>'
            + '</div>'
          + '</div>'
          + '<div class="col-md-1">0%</div>'
          + '<div class="col-md-10">'
            + '<div id="slider"></div>'
          + '</div>'
          + '<div class="col-md-1">50% <p id="percent">20%</p></div>'
          
          + '<div class="form-group">'
            + '<!-- Calculate button -->'
            + '<div class="col-sm-4">'
              + '<button type="button" class="btn btn-default pull-right">Calculate</button>'
            + '</div>'
          
            + '<div class="col-sm-8">'
              + '<table class="table table-hover">'
                + '<tbody>'
                  + '<tr>'
                    + '<th>Total Tip:</th>'
                    + '<td id="totalTip"> --tip amount-- </td>'
                  + '</tr>'
                  + '<tr>'
                    + '<th>Per Person:</th>'
                    + '<td id="perPerson"> --amount to pay per person-- </td>'
                  + '</tr>'
                + '</tbody>'
              + '</table>'
            + '</div>'
          + '</div>'
          
        + '</form>'
    },
    stateMap  = { $container : null },
    jqueryMap = {},

    setJqueryMap, initModule;
  //----------------- END MODULE SCOPE VARIABLES ---------------

  //-------------------- BEGIN UTILITY METHODS -----------------
  //--------------------- END UTILITY METHODS ------------------

  //--------------------- BEGIN DOM METHODS --------------------
  // Begin DOM method /setJqueryMap/
  setJqueryMap = function () {
    var $container = stateMap.$container;
    jqueryMap = { $container : $container };
  };
  // End DOM method /setJqueryMap/
  //--------------------- END DOM METHODS ----------------------

  //------------------- BEGIN EVENT HANDLERS -------------------
  //-------------------- END EVENT HANDLERS --------------------

  //------------------- BEGIN PUBLIC METHODS -------------------
  // Begin Public method /initModule/
  initModule = function ( $container ) {
    stateMap.$container = $container;
    console.log("It works");
    $container.html( configMap.main_html );
    setJqueryMap();
  };
  // End PUBLIC method /initModule/

  return { initModule : initModule };
  //------------------- END PUBLIC METHODS ---------------------
}());