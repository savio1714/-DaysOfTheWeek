var countOne = 0;
var countTwo = 0;
var countThree = 0;
var countFour = 0;
var countFive = 0;
var countSix = 0;
var countSeven = 0;
var countEight = 0;
var countNine = 0;
var countTen = 0;
var countEleven = 0;
var countTwelve = 0;
var countThirteen = 0;
var countFourteen = 0;
var countFifteen = 0;
var countSixteen = 0;
var countSeventeen = 0;
var countEighteen = 0;
var countNineteen = 0;
var countTwenty = 0;
var countTwentyOne = 0;
var countTwentyTwo = 0;
var countTwentyThree = 0;
var countTwentyFour = 0;
var countTwentyFive = 0;
var countTwentySix = 0;
var countTwentySeven = 0;
var countTwentyEight = 0;
var countTwentyNine = 0;
var countThirty = 0;
var countThirtyOne = 0;


var Year = prompt("Please Enter Year");
if(Year ==""){
  alert("Enter correct Year... Now Please Refresh your Page");
}else{
document.getElementById("year").innerHTML = Year;

var Years = parseInt(Year);
var totalY = false;


document.write(" <div class='container'>");

document.write("<div class='columns2 '>");
document.write("<ul class='header-effect'>");
document.write("<li class='header'>Days/Date</li>");


document.write("<li>1</li>");
document.write("<li>2</li>");
document.write("<li>3</li>");
document.write(" <li>4</li>");
document.write(" <li>5</li>");
document.write("<li>6</li>");
document.write("<li>7</li>");
document.write(" <li>8</li>");
document.write(" <li>9</li>");
document.write("<li>10</li>");
document.write("<li>11</li>");
document.write(" <li>12</li>");
document.write(" <li>13</li>");
document.write("<li>14</li>");
document.write("<li>15</li>");
document.write(" <li>16</li>");
document.write(" <li>17</li>");
document.write("<li>18</li>");
document.write("<li>19</li>");
document.write(" <li>20</li>");
document.write(" <li>21</li>");
document.write("<li>22</li>");
document.write("<li>23</li>");
document.write(" <li>24</li>");
document.write("<li>25</li>");
document.write("<li>26</li>");
document.write(" <li>27</li>");
document.write(" <li>28</li>");
document.write("<li>29</li>");
document.write("<li>30</li>");
document.write(" <li>31</li>");
document.write(" <li class='total'>Total</li>");
document.write("</ul>");


document.write("</div>");


for (var t = 0; t < 7; t++) {
  var x = new Date();
  //set the year starting date
  x.setFullYear(Years, 01, 01);
  //set the next year starting date
  var y = new Date();
  y.setFullYear(Years + 1, 01, 01);
  getWeek(t);
}


function getWeek(t) {
  var Totalcount = 0;

  var one = 0;
  var two = 0;
  var three = 0;
  var four = 0;
  var five = 0;
  var six = 0;
  var seven = 0;
  var eight = 0;
  var nine = 0;
  var ten = 0;
  var eleven = 0;
  var twelve = 0;
  var thirteen = 0;
  var fourteen = 0;
  var fifteen = 0;
  var sixteen = 0;
  var seventeen = 0;
  var eighteen = 0;
  var nineteen = 0;
  var twenty = 0;
  var twentyOne = 0;
  var twentyTwo = 0;
  var twentyThree = 0;
  var twentyFour = 0;
  var twentyFive = 0;
  var twentySix = 0;
  var twentySeven = 0;
  var twentyEight = 0;
  var twentyNine = 0;
  var thirty = 0;
  var thirtyOne = 0;
  var countDays = 1;


  var j = 1;
  var count = 0;


  for (var i = 0; x < y; i += j) {

    if (x.getDay() === t) {
      countDays++;

      if (x.getDate() == 1) {
        one++;
      } else if (x.getDate() == 2) {
        two++;
      } else if (x.getDate() == 3) {
        three++;
      } else if (x.getDate() == 4) {
        four++;
      } else if (x.getDate() == 5) {
        five++;
      } else if (x.getDate() == 6) {
        six++;
      } else if (x.getDate() == 7) {
        seven++;
      } else if (x.getDate() == 8) {
        eight++;
      } else if (x.getDate() == 9) {
        nine++;
      } else if (x.getDate() == 10) {
        ten++;
      } else if (x.getDate() == 11) {
        eleven++;
      } else if (x.getDate() == 12) {
        twelve++;
      } else if (x.getDate() == 13) {
        thirteen++;
      } else if (x.getDate() == 14) {
        fourteen++;
      } else if (x.getDate() == 15) {
        fifteen++;
      } else if (x.getDate() == 16) {
        sixteen++;
      } else if (x.getDate() == 17) {
        seventeen++;
      } else if (x.getDate() == 18) {
        eighteen++;
      } else if (x.getDate() == 19) {
        nineteen++;
      } else if (x.getDate() == 20) {
        twenty++;
      } else if (x.getDate() == 21) {
        twentyOne++;
      } else if (x.getDate() == 22) {
        twentyTwo++;
      } else if (x.getDate() == 23) {
        twentyThree++;
      } else if (x.getDate() == 24) {
        twentyFour++;
      } else if (x.getDate() == 25) {
        twentyFive++;
      } else if (x.getDate() == 26) {
        twentySix++;
      } else if (x.getDate() == 27) {
        twentySeven++;
      } else if (x.getDate() == 28) {
        twentyEight++;
      } else if (x.getDate() == 29) {
        twentyNine++;
      } else if (x.getDate() == 30) {
        thirty++;
      } else if (x.getDate() == 31) {
        thirtyOne++;
      } else {

      }


      x = new Date(x.getTime() + (7 * 24 * 60 * 60 * 1000));
      j = 7;


    } else {
      j = 1;
      x = new Date(x.getTime() + (24 * 60 * 60 * 1000));
    }
  }

  var Totalcount = one + two + three + four + five + six + seven + eight + nine + ten + eleven + twelve + thirteen + fourteen + fifteen + sixteen + seventeen + eighteen + nineteen + twenty + twentyOne + twentyTwo + twentyThree + twentyFour + twentyFive + twentySix + twentySeven + twentyEight + twentyNine + thirty + thirtyOne;

  document.write("<div class='columns '>");
  document.write("<ul class='header-effect'>");
  if (t == 0) {
    document.write("<li class='header'>Sun</li>");
  } else if (t == 1) {
    document.write("<li class='header'>Mon</li>");
  } else if (t == 2) {
    document.write("<li class='header'>Tue</li>");
  } else if (t == 3) {
    document.write("<li class='header'>Wed</li>");
  } else if (t == 4) {
    document.write("<li class='header'>Thu</li>");
  } else if (t == 5) {
    document.write("<li class='header'>Fri</li>");
  } else if (t == 6) {
    document.write("<li class='header'>Sat</li>");
  }


  document.write("<li>" + one + "</li>");
  document.write("<li>  " + two + "</li>");
  document.write("<li>  " + three + "</li>");
  document.write(" <li>" + four + "</li>");
  document.write(" <li>" + five + "</li>");
  document.write("<li>  " + six + "</li>");
  document.write("<li>  " + seven + "</li>");
  document.write(" <li>" + eight + "</li>");
  document.write(" <li>" + nine + "</li>");
  document.write("<li>  " + ten + "</li>");
  document.write("<li>  " + eleven + "</li>");
  document.write(" <li>" + twelve + "</li>");
  document.write(" <li>" + thirteen + "</li>");
  document.write("<li>  " + fourteen + "</li>");
  document.write("<li>  " + fifteen + "</li>");
  document.write(" <li>" + sixteen + "</li>");
  document.write(" <li>" + seventeen + "</li>");
  document.write("<li>  " + eighteen + "</li>");
  document.write("<li>  " + nineteen + "</li>");
  document.write(" <li>" + twenty + "</li>");
  document.write(" <li>" + twentyOne + "</li>");
  document.write("<li>  " + twentyTwo + "</li>");
  document.write("<li>  " + twentyThree + "</li>");
  document.write(" <li>" + twentyFour + "</li>");
  document.write("<li>  " + twentyFive + "</li>");
  document.write("<li>  " + twentySix + "</li>");
  document.write(" <li>" + twentySeven + "</li>");
  document.write(" <li>" + twentyEight + "</li>");
  document.write("<li>  " + twentyNine + "</li>");
  document.write("<li>  " + thirty + "</li>");
  document.write(" <li>" + thirtyOne + "</li>");
  document.write(" <li>" + Totalcount + "</li>");
  document.write("</ul>");


  document.write("</div>");


  countOne = countOne + one;
  countTwo = countTwo + two;
  countThree = countThree + three;
  countFour = countFour + four;
  countFive = countFive + five;
  countSix = countSix + six;
  countSeven = countSeven + seven;
  countEight = countEight + eight;
  countNine = countNine + nine;
  countTen = countTen + ten;
  countEleven = countEleven + eleven;
  countTwelve = countTwelve + twelve;
  countThirteen = countThirteen + thirteen;
  countFourteen = countFourteen + fourteen;
  countFifteen = countFifteen + fifteen;
  countSixteen = countSixteen + sixteen;
  countSeventeen = countSeventeen + seventeen;
  countEighteen = countEighteen + eighteen;
  countNineteen = countNineteen + nineteen;
  countTwenty = countTwenty + twenty;
  countTwentyOne = countTwentyOne + twentyOne;
  countTwentyTwo = countTwentyTwo + twentyTwo;
  countTwentyThree = countTwentyThree + twentyThree;
  countTwentyFour = countTwentyFour + twentyFour;
  countTwentyFive = countTwentyFive + twentyFive;
  countTwentySix = countTwentySix + twentySix;
  countTwentySeven = countTwentySeven + twentySeven;
  countTwentyEight = countTwentyEight + twentyEight;
  countTwentyNine = countTwentyNine + twentyNine;
  countThirty = countThirty + thirty;
  countThirtyOne = countThirtyOne + thirtyOne;


}



var totalDays = countOne + countTwo + countThree + countFour + countFive + countSix + countSeven + countEight + countNine + countTen + countEleven + countTwelve + countThirteen + countFourteen + countFifteen + countSixteen + countSeventeen + countEighteen + countNineteen + countTwenty + countTwentyOne + countTwentyTwo + countTwentyThree + countTwentyFour + countTwentyFive + countTwentySix + countTwentySeven + countTwentyEight + countTwentyNine + countThirty + countThirtyOne;

document.write("<div class='columns2 '>");
document.write("<ul class='header-effect'>");
document.write("<li class='header'>Total</li>");


document.write("<li>" + countOne + "</li>");
document.write("<li>" + countTwo + "</li>");
document.write("<li>" + countThree + "</li>");
document.write(" <li>" + countFour + "</li>");
document.write(" <li>" + countFive + "</li>");
document.write("<li>" + countSix + "</li>");
document.write("<li>" + countSeven + "</li>");
document.write(" <li>" + countEight + "</li>");
document.write(" <li>" + countNine + "</li>");
document.write("<li>" + countTen + "</li>");
document.write("<li>" + countEleven + "</li>");
document.write(" <li>" + countTwelve + "</li>");
document.write(" <li>" + countThirteen + "</li>");
document.write("<li>" + countFourteen + "</li>");
document.write("<li>" + countFifteen + "</li>");
document.write(" <li>" + countSixteen + "</li>");
document.write(" <li>" + countSeventeen + "</li>");
document.write("<li>" + countEighteen + "</li>");
document.write("<li>" + countNineteen + "</li>");
document.write(" <li>" + countTwenty + "</li>");
document.write(" <li>" + countTwentyOne + "</li>");
document.write("<li>" + countTwentyTwo + "</li>");
document.write("<li>" + countTwentyThree + "</li>");
document.write(" <li>" + countTwentyFour + "</li>");
document.write("<li>" + countTwentyFive + "</li>");
document.write("<li>" + countTwentySix + "</li>");
document.write(" <li>" + countTwentySeven + "</li>");
document.write(" <li>" + countTwentyEight + "</li>");
document.write("<li>" + countTwentyNine + "</li>");
document.write("<li>" + countThirty + "</li>");
document.write(" <li>" + countThirtyOne + "</li>");
document.write(" <li>" + totalDays + "</li>");
document.write("</ul>");


document.write("</div>");


document.write("</div>");


}