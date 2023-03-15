// --- VARIABLE DEFINITIONS

// var topic = "HTML";

var topics = ["HTML", "CSS", "Git", "JavaScript"];

var topic = topics[Math.floor(Math.random() * topics.length)]; // Random topic derived from 'topics' array.

// var shapes = ["triangle", "square", "pentagon", "circle"];

// --- FUNCTION DECLARATIONS

function listTopics() { // Lists values in 'topics' array.

    for (var x = 0; x < topics.length; x++) {

      console.log(topics[x]);

    }

}

function selectTopic() { // Logs to console a response associated with a condition.

    if (topic === 'HTML') {

      console.log("Let's study HTML!");

    } else if (topic === 'CSS') {

      console.log("Let's study CSS!");

    } else if (topic === 'Git') {

      console.log("Let's study Git!");

    } else if (topic === 'JavaScript') {

      console.log("Let's study JavaScript!");

    } else {

      console.log('Please try again!');

    }

}

console.log("Here are the topics we learned through Prework:");

listTopics();

console.log("Which topic should we study first?");

selectTopic();

/*

// --- FOR LOOP EXAMPLE : FOR LOOP EXAMPLE : Print to console all shapes in array 'topics'.

for(var x = 0; x < topics.length; x++) {

    console.log(topics[x]);

}

// --- IF STATEMENT EXAMPLE : Print to console response associated with value of 'topic'.

if (topic === 'HTML') {

  console.log("Let's study HTML!");

} else if (topic === 'CSS') {

  console.log("Let's study CSS!");

} else if (topic === 'Git') {

  console.log("Let's study Git!");

} else if (topic === 'JavaScript') {

  console.log("Let's study JavaScript!");

} else {

  console.log('Please try again!');

}

// --- FOR LOOP EXAMPLE : Print to console all shapes in array 'shapes'.

for (var i = 0; i < shapes.length; i++) {

    console.log(shapes[i]);

}

*/