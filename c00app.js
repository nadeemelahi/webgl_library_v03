// author: "nadeem@webscripts.biz"

var gl = ngl.get_gl();
ngl.configureDraw();

// 3 x 3D(x,y,z) geometry vertices 
// 3 x 3D(red,green,blue) colour channels 
var cnt = 3;
var dim = 3;

var verts =  new Float32Array( 
	[ -1,-1,0  ,  0,-1,0  ,  0,0,0 ]
);

var colours =  new Float32Array( 
	[ 1,0,0  ,  0,1,0  ,  0,0,1 ]
);

var xAngle=0, yAngle=0, zAngle=0;
var xScale=1, yScale=1, zScale=1;
var xLoc=0, yLoc=0, zLoc=0; 


ngl.loadAttribute("vert",verts,dim);
ngl.loadAttribute("colour",colours,dim);

ngl.loadUniform1f("xAngle",xAngle);
ngl.loadUniform1f("yAngle",yAngle);
ngl.loadUniform1f("zAngle",zAngle);

ngl.loadUniform1f("xScale",xScale);
ngl.loadUniform1f("yScale",yScale);
ngl.loadUniform1f("zScale",zScale);

ngl.loadUniform1f("xLoc",xLoc);
ngl.loadUniform1f("yLoc",yLoc);
ngl.loadUniform1f("zLoc",zLoc);

function drawframe(){
	gl.clear(gl.COLOR_BUFFER_BIT);
	gl.drawArrays(gl.TRIANGLES, 0, cnt);
	//
	//yAngle++;
	//if(yAngle>360) yAngle = 0;
	//setTimeout(animate,100);
}
drawframe();

