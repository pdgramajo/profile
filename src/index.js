import { join } from "lodash";

const component = () => {
    var element = document.createElement('div');

    element.innerHTML = join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());