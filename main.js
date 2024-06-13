leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup()
{
  video = createCapture(VIDEO);
  video.size(500, 500);
  video.position(100, 70);

  canvas = createCanvas(350, 350);
  canvas.position(760, 0);
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function draw()
{
  background('lightgreen');
  document.getElementById("font-size").innerHTML = "The font size of the text is = " + difference + " px";
  textSize(difference);
  fill('#94721e');
  text('Ashwin', 40, 245);
}

function modelLoaded()
{
  console.log('posenet is initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
    {
      console.log(results);
      leftWristX = results[0].pose.leftWrist.x;
      rightWristX = results[0].pose.rightWrist.x;
      difference = floor(leftWristX - rightWristX);
      console.log("Left Wrist X = " + leftWristX + " Right Wrist X = " + rightWristX + " Difference = " + difference);
    }
}