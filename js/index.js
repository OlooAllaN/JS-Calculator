/*
 * Waits for document to load before before running javascript
 **/
$(document).ready(() => {

  //Global Object variable for display Input
  var value1 = 0;
  var value2 = 0;
  var operator = '';
  /*
   * Checks if the function operator has been entered once.
   */
  var check = function() {
    var opp = ['+', '-', '÷', 'x', '.'];
    var lastChar = $('.display').val().slice(-1);
    for (let i = 0; i < opp.length; i++) {
      if (opp[i] === lastChar) {
        return true;
      }
    }
    return false;
  }

  /*
   * Clears all entries on a screen.
   */
  $('#allClear').click(function() {
    $('.display').val('');
  });

  /*
   *Listens to number buttons click
   */
  $('.num-button').click(function() {
    var displayVal = $('.display').val();
    if (displayVal !== 0 && displayVal.length < 10) {
      //value1 = parseFloat(displayVal.slice(0,-1));
      var buttonVal = $(this).text();
      // value2 = parseFloat(buttonVal);
      var result = displayVal + buttonVal;
      $('.display').val(result);
    } else {
      displayVal;
    }
  });
  /*
   * This funtion listens for special keys called operators and saves the entry on the       display screen.
   */
  $('.operators').click(function() {
    if (check()) {
      $('.display').val('ERR');
    } else {
      var displayVal = $('.display').val();
      operator = $(this).text();
      var showOpp = displayVal + operator;
      $('.display').val(showOpp);
    }
  });

  /*
   * Takes display value as a string and does calculation
   */
  $('#equal').click(function() {
    var calculation = $('.display').val();
    var operatorIndex = calculation.indexOf(operator);
    var value1 = parseFloat(calculation.slice(0, operatorIndex));
    var value2 = parseFloat(calculation.slice(operatorIndex + 1));
    console.log(value1);
    console.log(value2);
    var operation = '';
    switch (operator) {
      case '÷':
        operation = divide(value1, value2);
        break;
      case 'x':
        operation = multiply(value1, value2);
        break;
      case '+':
        operation = add(value1, value2);
        break;
      case '-':
        operation = sub(value1, value2);
        break;
    }
    $(".display").val(operation);

  })

  $('#plus-minus').click(function() {
    var specialOpp = $(this).text();
    $('.display').html(specialOpp);
  })

  /*
   Math operator funcitons using the Math object.
  */
  function add(num1, num2) {
    return num1 + num2;
  }

  function sub(num1, num2) {
    return num1 - num2;
  }

  function divide(num1, num2) {
    return num1 / num2;
  }

  function multiply(num1, num2) {
    return num1 * num2;
  }
});