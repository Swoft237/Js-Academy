//***read a file from the user* */

function startRead()
{
  // obtain input element through DOM 
  
  var file = document.getElementById('file').files[0];
  if(file)
	{
    getAsText(file);
  }
}

function getAsText(readFile)
{
	var reader;
	try
	{
    reader = new FileReader();
	}catch(e)
	{
		document.getElementById('output').innerHTML = 
			"Error: seems File API is not supported on your browser";
	  return;
  }
  
  // Read file into memory as UTF-8      
  reader.readAsText(readFile, "UTF-8");
  
  // Handle progress, success, and errors
  reader.onprogress = updateProgress;
  reader.onload = loaded;
  reader.onerror = errorHandler;
}

function updateProgress(evt)
{
  if (evt.lengthComputable)
	{
    // evt.loaded and evt.total are ProgressEvent properties
    var loaded = (evt.loaded / evt.total);
    if (loaded < 1)
		{
      // Increase the prog bar length
      // style.width = (loaded * 200) + "px";
			document.getElementById("bar").style.width = (loaded*100) + "%";
    }
  }
}

function loaded(evt)
{
  // Obtain the read file data    
  var fileString = evt.target.result;
  document.getElementById('output').innerHTML = fileString;
		document.getElementById("bar").style.width = 100 + "%";
}

function errorHandler(evt)
{
  if(evt.target.error.code == evt.target.error.NOT_READABLE_ERR)
	{
    // The file could not be read
		document.getElementById('output').innerHTML = "Error reading file..."
  }
}

//caesar encryption code 

function encrypt(str){
  
  //get the time at which the function start executing
  var t0 = performance.now();

    var solved = "";
    for(var i = 0; i <= str.length; i++){
    
    if (typeof str[i] !== 'undefined'){
    
      var asciiNum =  str[i].charCodeAt();

      if( (asciiNum >= 65 && asciiNum <= 87) || asciiNum >= 97 && asciiNum <= 119){

        solved += String.fromCharCode( asciiNum + 3);

      }else if( (asciiNum >= 88 && asciiNum <= 90) || asciiNum >= 120 && asciiNum <= 122){

        solved += String.fromCharCode( (asciiNum + 3) - 26);

      } else{
           solved += str[i];
      }
    }

}

//get the time at which the function ends
var t1 = performance.now();

document.getElementById("print").innerText = solved + "\n" + " it took you " +  (t1-t0)/1000 + " seconds to encrypt that message";
}



//function to decrypt
function decrypt(str){

  var t0 = performance.now();
    var solved = "";
    for(var i = 0; i <= str.length; i++){
    
    if (typeof str[i] !== 'undefined'){
    
      var asciiNum =  str[i].charCodeAt();

      if( (asciiNum >= 68 && asciiNum <= 90) || asciiNum >= 100 && asciiNum <= 122){

        solved += String.fromCharCode( asciiNum - 3);

      }else if( (asciiNum >= 65 && asciiNum <= 67) || asciiNum >= 97 && asciiNum <= 99){

        solved += String.fromCharCode( (asciiNum -3) + 26);

      } else{
           solved += str[i];
      }
    }

}
var t1 = performance.now();

document.getElementById("print").innerText = solved + "\n" + " it took you " +  (t1-t0)/1000 + " seconds to decrypt that cypher";
}





