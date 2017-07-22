import { JSDOM } from 'jsdom';

const exposedProperties = ['window', 'navigator', 'document'];
const defaultHtml = '<!doctype html><html><body><div id="content"></div></body></html>';
const dom = new JSDOM(defaultHtml, {});
const win = dom.window;
const doc = dom.window.document;

global.document = doc;
global.window = win;
global.navigator = {
  userAgent: 'node.js'
};

Object.keys(win).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = win[property];
  }
});
