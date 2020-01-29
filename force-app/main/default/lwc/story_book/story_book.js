/**
 * A single storybook story for use in a storybook.
 **/

import { LightningElement, api, track } from 'lwc'; // eslint-disable-line no-unused-vars

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
   * The actual test is passed to the unnamed <slot />
   */
}

