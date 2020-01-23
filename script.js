var textSelect;
document.addEventListener('mouseup', function(){
    textSelect = getSelectionText();
    if (textSelect.length > 0){ 
    
  //document.getElementById("demo1").innerHTML = textSelect;
  }
}, false);
    document.addEventListener("dragstart", function(event) {
    event.dataTransfer.setData("Text", textSelect);
   
  
});

// <!-- document.addEventListener("drag", function(event) { -->
 // <!-- <!-- document.getElementById("demo").innerHTML = "The p element is being dragged"; --> -->
// <!-- }); -->

/* Events fired on the drop target */
document.addEventListener("dragover", function(event) {
  event.preventDefault();
});

document.addEventListener("drop", function(event) {
  event.preventDefault();
  // if ( event.target.className == "st" ) {
    var data = event.dataTransfer.getData("Text");
    localStorage.setItem( 'objectToPass', data);
    window.open('launch.html', 'newwindow', 'width=1200,height=637');return false;
    // document.getElementById('new-target').innerHTML+=data;
  // }
});

function getSelectionText(){
    var selectedText = ""
    if (window.getSelection){ 
        selectedText = window.getSelection().toString();
    }
    return selectedText;
}
