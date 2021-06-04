import _ from "lodash"
import "./style.css"
import DharmaTaylor from './images/dharma-taylor-desktop.jpg'

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const imageDharmaTaylor = new Image();
  imageDharmaTaylor.src = DharmaTaylor

  // Teasting image appending... it works
  // element.appendChild(imageDharmaTaylor)

  return element;
}

document.body.appendChild(component());
