///////////////////////////////////////////
//   document.getElementById("myButton").onclick = function() {
//   document.body.style.backgroundColor = "blue";
// };
// document.getElementById("sttageone").onclick = function() {
//     var element = document.getElementById("myElement");
//     element.style.display = (element.style.display === "none") ? alert("hi") : alert("welcome");
//   };
//////////////////////////////////////////////
$(document).ready(function () {
  //to show the header
  $(".header").show("slow");
  //to show the discription
  $(".describtion").show("slow");
  //to show the img
  $(".image").show("slow");

  $(".main-title").click(function () {
    // $(".div_list").fadeIn("slow");
    $(".div_list").slideToggle("slow");
  });

  //Open a stage one in a new window:
  var link = document.getElementById("sttageone");
  link.target = "_blank";

  //Open a signup page in a new window:
  var link = document.getElementById("sign");
  link.target = "_blank";

  //Prevent a link  of an email in the contact page from being clicked
  var link = document.getElementById("link");
  link.onclick = function (event) {
    event.preventDefault();
  };

  //end links

  //start paragraph

  //Change the fontSize of a <p> tag
  var paragraph = document.getElementById("describtionid");
  paragraph.style.fontSize = "28px";

  //Change the color of a <p> tag
  var paragraph = document.getElementById("describtionid");
  paragraph.style.color = "#795548";

});

