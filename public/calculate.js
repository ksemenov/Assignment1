
var a1Grade;
var a2Grade;
var a3Grade;
var a4Grade;
var numOfGrades;
var sum

function percentageUpdate() {
  if(document.getElementById("A1Grade1").value !== "" && document.getElementById("A1Grade2").value !=="" ){
    a1Grade = parseInt(document.getElementById("A1Grade1").value) / parseInt(document.getElementById("A1Grade2").value) * 100;
    document.getElementById('A1Percentage').innerHTML = a1Grade.toFixed(2)+"%";
    };
  if(document.getElementById("A2Grade1").value !== "" && document.getElementById("A2Grade2").value !=="" ){
     a2Grade = parseInt(document.getElementById("A2Grade1").value) / parseInt(document.getElementById("A2Grade2").value) * 100;
    document.getElementById('A2Percentage').innerHTML = a2Grade.toFixed(2)+"%";
    };
  if(document.getElementById("A3Grade1").value !== "" && document.getElementById("A3Grade2").value !=="" ){
     a3Grade = parseInt(document.getElementById("A3Grade1").value) / parseInt(document.getElementById("A3Grade2").value) * 100;
    document.getElementById('A3Percentage').innerHTML = a3Grade.toFixed(2)+"%";
    };

if(document.getElementById("A4Grade1").value !== "" && document.getElementById("A4Grade2").value !=="" ){
  a4Grade = parseInt(document.getElementById("A4Grade1").value) / parseInt(document.getElementById("A4Grade2").value) * 100;
  document.getElementById('A4Percentage').innerHTML = a4Grade.toFixed(2)+"%";
  };
};
setInterval(percentageUpdate(), 1000);

function numGrades(){
  if(document.getElementById("A1Percentage").value !== ""){
    numOfGrades++;
  };
  if(document.getElementById("A2Percentage").value !== ""){
    numOfGrades++;
  };
  if(document.getElementById("A3Percentage").value !== ""){
    numOfGrades++;
  };
  if(document.getElementById("A4Percentage").value !== ""){
    numOfGrades++;
  };

};

function average() {
  var sum1=0;
  var sum2 = 0;
  if(document.getElementById("A1Percentage").innerHTML !== ""){
    sum1=sum1+ parseInt(document.getElementById("A1Grade1").value);
    sum2 = sum2 + parseInt(document.getElementById("A1Grade2").value);
  };
  if(document.getElementById("A2Percentage").innerHTML !== ""){
    sum1=sum1+ parseInt(document.getElementById("A2Grade1").value);
    sum2 = sum2 + parseInt(document.getElementById("A2Grade2").value);
 };
 if(document.getElementById("A3Percentage").innerHTML !== ""){
   sum1=sum1+ parseInt(document.getElementById("A3Grade1").value);
   sum2 = sum2 + parseInt(document.getElementById("A3Grade2").value);
 };
 if(document.getElementById("A4Percentage").innerHTML !== ""){
   sum1=sum1+ parseInt(document.getElementById("A4Grade1").value);
   sum2 = sum2 + parseInt(document.getElementById("A4Grade2").value);
 };
 if(sum1!==0 && sum2!==0){
   var average = sum1 / sum2 *100;
   document.getElementById('final').innerHTML = average.toFixed(2)+"%";


 };

};
function mean(){
  var sum = 0;
  var numOfGrades = 0;
  if(document.getElementById("A1Percentage").innerHTML !== ""){
    numOfGrades++;
    sum = sum + a1Grade;
  //  document.getElementById('final').innerHTML = sum/numOfGrades;
  };
  if(document.getElementById("A2Percentage").innerHTML !== ""){
    numOfGrades++;
    sum = sum + a2Grade;
 };
 if(document.getElementById("A3Percentage").innerHTML !== ""){
    numOfGrades++;
   sum = sum + a3Grade;
 };
 if(document.getElementById("A4Percentage").innerHTML !== ""){
    numOfGrades++;
   sum = sum + a4Grade;
 };
 if(numOfGrades !==0){
 var mean = sum / numOfGrades;
 document.getElementById('final').innerHTML = mean.toFixed(2)+"%";
 };
};

function refresh(){
  document.getElementById('A1Grade1').value ='';
  document.getElementById('A1Grade2').value ='';
  document.getElementById('A1Percentage').innerHTML ='';
  document.getElementById('A2Grade1').value ='';
  document.getElementById('A2Grade2').value ='';
  document.getElementById('A2Percentage').innerHTML ='';
  document.getElementById('A3Grade1').value ='';
  document.getElementById('A3Grade2').value ='';
  document.getElementById('A3Percentage').innerHTML ='';
  document.getElementById('A4Grade1').value ='';
  document.getElementById('A4Grade2').value ='';
  document.getElementById('A4Percentage').innerHTML ='';
  document.getElementById("final").innerHTML = '';
};
