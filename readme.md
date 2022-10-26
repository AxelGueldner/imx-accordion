# imx-accordion
infomax pattern library: standard accordion module

## Installing
Currently it is only possible to install imx-accordion as a npm package:
```shell
$ npm install imx-neos -g
```

## Preparation
In order to use imx-accordion, following steps are necessary:

### 1. Markup Structure
An Accordion consists of a main node that contains a wrapper node for each accordion item. The item itself is made up of a title element and a content element. The title element will be the clickable HTMLElement that opens and closes the accordion item:
```html
// html
<div data-imxaccordion>
  <div data-imxaccordion_item>
    <h2 data-imxaccordion_title>This is the clickable headline</h2>
    <div data-imxaccordion_content>This is the content wrapper</div>
  </div>
</div>
```

You can use these given data attributes to identify main node, items, titles and content wrapper for imx-accordion:
+ data-imxaccordion – the main node of your Accordion
+ data-imxaccordion_item – an item node
+ data-imxaccordion_title – the title of an item
+ data-imxaccordion_content – the content of an item

### 2. Import the JavaScript Module
After the installation inside the project, you will need to import imx-accordion inside your javascript/typescript code:
```javascript
// javascript
import {default as imx_accordion} from './node_modules/imx-accordion/lib/index.js';
```

### 3. Import the CSS Styles
There are some styles that are needed for imx-accordion to work. You can simply import the CSS File in your project:
```javascript
// css
@import 'node_modules/imx-accordion/lib/index.css';
```

## Basic Usage
Basicly imx-accordion is a generator for Accordion Objects.

### Global Call
The most simple way to use imx-accordion is to globaly call the create function:

```javascript
// javascript
const accordionCollection = imx_accordion.create();
```

```typescript
// typescript
const accordionCollection : Accordion[] = imx_accordion.create();
```

This will return you an Array that contains Accordion Objects.

### Specific HTMLElement
It is also possible to create an Accordion on a specific HTMLElement. For this you can call the function createOnSpecificNode:

```javascript
// javascript
const myAccordionObject = imx_accordion.createOnSpecificNode(document.getElementById('myAccordionId'));
```

```typescript
// typescript
const myAccordionObject : Accordion = imx_accordion.createOnSpecificNode(document.getElementById('myAccordionId'));
```

## Configuration
There are allready some config options you can use to individualize your Accordions:

label     | type    | description
---- | ---- | ----
autoClose | boolean | if true - any open item will be closed when the user opens another item
initialOpen | Numbers[] | we can pass an array that contains the indexes of the items that should initially be open
initialOpen | 'all' | we can also simply state that all items should be open by passing the string value 'all'
useMockStyles | boolean | to get the Accordion quickly up and running, we can use the optional mock styles for some standard visuals
itemClass | string | if we dont want to use the data attributes to mark accordion items, we can also define a css class that is used to look up items
titleClass | string | if we dont want to use the data attributes to mark title nodes, we can also define a css class that is used to look them up
contentClass | string | if we dont want to use the data attributes to mark content nodes, we can also define a css class that is used to look them up

### Inline Configuration
We can provide a configuration by using a json string as value for the data attribute of the main node:
```html
// html
<div data-imxaccordion="{ "autoClose":false, "initialOpen":[0], "useMockStyles":true }"> … </div>
```

### Configuration inside the script
We can also pass a config inside of our script.

```javascript
// javascript
const accordionCollection = imx_accordion.create({
  useMockStyles : true,
  initialOpen : 'all',
  autoClose : false
});

const myAccordionObject = imx_accordion.createOnSpecificNode(document.getElementById('myAccordionId'), {
  useMockStyles : true,
  initialOpen : 'all',
  autoClose : false
});
```

```typescript
// typescript
const accordionCollection : Accordion[] = imx_accordion.create({
  useMockStyles : true,
  initialOpen : 'all',
  autoClose : false
});
const myAccordionObject : Accordion = imx_accordion.createOnSpecificNode(document.getElementById('myAccordionId'), {
  useMockStyles : true,
  initialOpen : 'all',
  autoClose : false
});
```

**Note** if we use both, the inline configuration will allways overwrite the script configuration

## Authors

* **Axel Güldner@infomax**