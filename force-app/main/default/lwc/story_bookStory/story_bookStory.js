/**
 * A story to demonstrate storybook stories.
 * Well isn't that meta.
 **/
import { LightningElement, api, track } from 'lwc'; // eslint-disable-line no-unused-vars

/**
 * @typedef {Object} LightningComboboxOption
 * @property {String} label -
 * @property {any} value -
 */

/**
 * @typedef {Event} StorybookEvent
 */

export default class Story_bookStory extends LightningElement {

  /**
   * Current Story
   * @type {any}
   */
  @api currentScene = {};
  
  /**
   * Stories we'll work with
   * @type {LightningComboboxOption[]}
   */
  @api scenes;

  connectedCallback() {
    /*
    pass a collection of options (label/value pairs)

    Scenes are scenarios with data
    that we could use in binding within our storybooks.
    */
    this.scenes = [
      { label: 'Scenario A', value: '' },
      { label: 'Scenario B', value: 'Second scenario message' },
      { label: 'Scenario C', value: 'Last message' }
    ];

    this.currentScene = this.scenes[0];
  }

  //-- handlers
  /**
   * Detect when the story has changed
   * @param evt {StorybookEvent}
   */
  handleSceneChanged(evt) {
    this.currentScene = evt.detail.value;
  }
}