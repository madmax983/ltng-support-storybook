/**
 * A story to demonstrate storybook stories.
 * Well isn't that meta.
 **/
import { LightningElement, api, track } from 'lwc'; // eslint-disable-line no-unused-vars
import { Scene } from 'c/story_book';

// require("../_types/StorybookTypes")

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
   * @type {Scene[]}
   */
  @api scenes;

  connectedCallback() {
    /*
    pass a collection of options (label/value pairs)

    Scenes are scenarios with data
    that we could use in binding within our storybooks.
    */
    this.scenes = [
      new Scene('Scenario A', '' ),
      new Scene('Scenario B', 'Second scenario message'),
      new Scene('Scenario C',
        {
          something: {
            very: {
              deep: {
                message: 'All we are is dust in the wind. Dude.'
              }
            }
          },
          toString: () => {
            return `Also works with objects.`;
          }
        }
      )
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