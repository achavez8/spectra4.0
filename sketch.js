let label = 'waiting ...';

let classifier;

//load model here
function preload() {
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/h9pHxe-8B/'+'model.json');
}

function setup(){
  createCanvas(640, 520);

  //classification starts here
  classifyAudio();
  
}

//classify
function classifyAudio(){
  classifier.classify(gotResults);
}


function draw(){
  background(0);
  textAlign(CENTER, CENTER);
  //fill(25);
  //text(label, width/2, height - 16);

  // Background noise
  let emoji = "🔭";
  // Pick an emoji based on label
  if (label == "GO") {
    emoji = "🚀";
  } else if (label == "D1") {
    emoji = "🌟";
  } else if (label == "G3") {
    emoji = "🛰️";
  }

  // Draw the emoji
  textSize(256);
  text(emoji, width / 2, height / 2);
}

// STEP 3: Get the classification!
function gotResults(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  // Store the label
  label = results[0].label;
}

/*
links
https://teachablemachine.withgoogle.com/models/h9pHxe-8B/
https://editor.p5js.org/adri8/sketches/4StWbCWugZ
*/