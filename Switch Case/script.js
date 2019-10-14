function switchCase()
{
  var input = document.getElementsByTagName("input")[0].value;
  console.log(input);
  var text;


  switch (input) {
    case "HTML":
        text = "HTML"
      break;
      case "CSS":
          text = "CSS"
        break;
      case "JavaScript":
            text = "JavaScript"
          break;
    default:
      text = "Unknown"
  }
  document.getElementsByTagName("h3")[0].innerHTML = text;
}
