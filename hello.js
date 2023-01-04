// import { startCase } from 'lodash';
const packageName = 'lodash'
const { startCase } = await import(packageName)
const el = document.createElement('h1');
const words = "hello, world";
const text = document.createTextNode(startCase(words));
el.appendChild(text);

document.body.appendChild(el);