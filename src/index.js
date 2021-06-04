import _ from "lodash"
import printMe from './print.js'
import DharmaTaylor from './images/dharma-taylor-desktop.jpg'
import "./style.css"

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const imageDharmaTaylor = new Image();
  imageDharmaTaylor.src = DharmaTaylor
  // Testing image appending... it works
  // element.appendChild(imageDharmaTaylor)

  const button = document.createElement('button');
  button.innerHTML = "Click me!";
  button.onclick = printMe;
  element.appendChild(button);

  return element;
}

document.body.appendChild(component());
