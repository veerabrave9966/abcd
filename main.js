function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	world
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	
	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(600, 300)
	video.parent('game_console');

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses)
}

function draw() {
	game()
}






