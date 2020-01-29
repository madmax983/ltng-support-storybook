/**
 * A single storybook story for use in a storybook.
 **/

import { LightningElement, api, track } from 'lwc'; // eslint-disable-line no-unused-vars

const SIZE_SMALL = 'SMALL';
const SIZE_MEDIUM = 'MEDIUM';
const SIZE_LARGE = 'LARGE';

export {
  SIZE_SMALL,
  SIZE_MEDIUM,
  SIZE_LARGE
}

export default class Story_book extends LightningElement {

  /**
   * Label for the storybook story
   * @type {string}
   **/
  @api title;

  /**
   * Description for the story
   * @type {LightningElement[]}
   */
  @api description;

  /**
   * Width of the storybook story
   * @type {String} - [SMALL|MEDIUM|LARGE|:css]
  */
  @api width;

  /**
   * Height of the storybook story
   * @type {String} - [String:css]
  */
  @api height;

  /** whether to include a border for the component */
  @api border;

  get storyBookClasses() {
    let borderedClass = '';
    if ((''+this.border).toUpperCase()==='TRUE') {
      borderedClass = 'bordered';
    }
    return `slds-box slds-theme_default storybook ${borderedClass}`;
  }

  get sandboxStyle() {
    let styleCSS = '';
    // styleCSS += ` width: ${this.width};`;
    if (this.width) {
      switch(this.width.toUpperCase()) {
        case SIZE_SMALL: styleCSS += 'width: 30em;'; break;
        case SIZE_MEDIUM: styleCSS += 'width: 48em;'; break;
        case SIZE_LARGE: styleCSS += 'width: 64em;'; break;
        default: styleCSS += `width: ${this.width};`;
      }
    }
    console.log('width:' + this.width);
    console.log('styleCSS:' + styleCSS);
    styleCSS += ' height: 300px;';
    return styleCSS;
  }

  get sandboxStyle2() {
    let styleCSS = '';
    if (this.width) {
      switch(this.width.toUpperCase()) {
        case SIZE_SMALL: styleCSS += 'width: 30em;'; break;
        case SIZE_MEDIUM: styleCSS += 'width: 48em;'; break;
        case SIZE_LARGE: styleCSS += 'width: 64em;'; break;
        default: styleCSS += `width: ${this.width};`;
      }
    }
    if (this.height) {
      switch(this.height.toUpperCase()) {
        default: styleCSS += `height: ${this.height};`;
      }
    }
    return styleCSS;
  }

  /** 
   * The actual test is passed to the unnamed <slot />
   */
}

/**
 * Defines a scene within the storybook
 */
export class Scene {
  /**
   * The label of the scene (used in scene selector)
   * @type {String}
   */
  label;

  /**
   * The data we should bind to for this scene
   * @type {any}
   */
  value;

  /**
   * Constructor
   * @param {String} label 
   * @param {any} value 
   */
  constructor(label, value) {
    this.label = label;
    this.value = value;
  }
}
