var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//randomize later
var targetX = boxWidth / 2;
var targetY = boxHeight / 2;


console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
    return (x0**2 -x1**2 + y0**2 - y1**2)**(1/2);
};

var findMaxDist = function(){
    var corners = [[0,0], [0, boxHeight], [boxWidth, 0], [boxWidth, boxHeight]];
    var maxDist = 0;
    var temp = 0;
    for(int i = 0; i < 4; i++){
	temp = distance(targetX, targetY, corners[i][0], corners[i][1]);
	if(temp > maxDist){
	    maxDist = temp;
	}
    }
    return maxDist;
};

var findIt = function(e) {
    var x = event.clientX;
    var y = event.clientY;
    var dist = distance(targetX, targetY, x, y);
    box.style.color = rgb(255,200,183);
};
box.addEventListener("mousemove", findIt);

