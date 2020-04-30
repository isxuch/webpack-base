import _ from 'lodash';
import './style.css';
import Icon from './icon.jpg';
import printMe from './print.js';
function component() {
    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    var btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);
    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());