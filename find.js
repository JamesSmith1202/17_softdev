var hue = 165;
var saturation = 100;
var light = 57;

var threshold = 5;
var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//randomize later
var targetX = Math.floor(boxWidth * Math.random());
var targetY = Math.floor(boxHeight * Math.random());


console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
    return ((x0-x1)**2 + (y0-y1)**2)**(1/2);
};

var findMaxDist = function(){
    var corners = [[0,0], [0, boxHeight], [boxWidth, 0], [boxWidth, boxHeight]];
    var maxDist = 0;
    var temp = 0;
    for(var i = 0; i < 4; i++){
	temp = distance(targetX, targetY, corners[i][0], corners[i][1]);
	if(temp > maxDist){
	    maxDist = temp;
	}
    }
    return maxDist;
};

var maxDist = findMaxDist();

var findIt = function(e) {
    var x = event.clientX;
    var y = event.clientY;
    var dist = distance(targetX, targetY, x, y);
    if (dist < threshold){
	//you win
    }
    else{
	box.style.backgroundColor = "hsl("+hue+","+saturation+"%,"+light*((maxDist-dist)/maxDist)+"%)";
    }
};
box.addEventListener("mousemove", findIt);

