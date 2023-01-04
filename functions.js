// Manage logic through global Javascript functions that utlize Jquery

var colors = [
    'green',
    'blue',
    'red'
]
var index = 0;
function changeColor() {
    $( "#my-block" ).css( "background-color", colors[index % colors.length] );
    index++;
}