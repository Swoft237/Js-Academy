
//print the keys to the displayer

function key(v){

document.getElementById("d").value += v;

}

function substring(){

  document.getElementById("d").value = document.getElementById("d").value.substring(0, document.getElementById("d").value.length - 1);
}

function memory(){

  var num = document.getElementById("d").value;

  return num;

}

function recall(){

  document.getElementById("d").value +=  memory();
}

function result(){

  var fnum = eval(document.getElementById("d").value);

  document.getElementById("d").value = fnum ;
}

function print(){
 
  document.getElementById("d").value = "*Swoft Thinking*";

}