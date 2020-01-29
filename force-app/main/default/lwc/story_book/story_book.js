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
   * Size of the storybook story
   * @type {String} - [SMALL|MEDIUM|LARGE]
  */
  @api size;

  /** whether to include a border for the component */
  @api border;

  get storyBookClasses() {
    let sizeClass = '';
    if (this.size) {
      switch(this.size.toUpperCase()) {
        case SIZE_SMALL: sizeClass = 'small'; break;
        case SIZE_MEDIUM: sizeClass = 'medium'; break;
        case SIZE_LARGE: sizeClass = 'large'; break;
        default: break;
      }
    }

    let borderedClass = '';
    if (this.border) {
      borderedClass = 'bordered';
    }
    return `slds-box slds-theme_default storybook ${sizeClass} ${borderedClass}`;
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
