function dropDown(clickedSection) {
  var backVar = document.getElementById("backText");
  var expVar = document.getElementById("expDiv");
  var highlightVar = document.getElementById("Projects");

  switch (clickedSection) {
    case "experience":
      if (expVar.style.display == "block") {
        expVar.style.display = "none";
      } else {
        expVar.style.display = "block";
      }
      break;
    case "background":
      if (backVar.style.display == "block") {
        backVar.style.display = "none";
      } else {
        backVar.style.display = "block";
      }
      break;
    case "highlights":
      if (highlightVar.style.display == "block") {
        highlightVar.style.display = "none";
      } else {
        highlightVar.style.display = "block";
      }
      break;
    default:
  }
}
