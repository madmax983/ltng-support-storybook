/**
 * Way to select data to use for testing
 **/

import { LightningElement, api, track } from 'lwc'; // eslint-disable-line no-unused-vars
import { Scene } from 'c/story_book'; // eslint-disable-line no-unused-vars

/**
 * Storybook Event
 * 
 * @event CustomEvent#scene
 * @type {object}
 * @property {Scene} detail - the scene changed
 */

/**
 * Component to choose between a set of scenes.
 * 
 * @fires CustomEvent#scene - when the scene changes
 */
export default class Story_sceneSelector extends LightningElement {
  /**
   * {Label, Value} pairs that represent scenes
   * so we can test different scenarios.
   * @type {Scene[]]}
   */
  @api scenes;

  /**
   * The index of the scene to default to
   * (defaults to 0)
   * @type {Number}
   */
  @api sceneIndex = 0;

  /**
   * Handler for when the scene changed
   * @type {function}
   */
  @track handleSceneChanged;

  //-- private

  /**
   * Used to default the scene based on sceneIndex,
   * so the user doesn't have to choose when re-running.
   * This is the value used in the combobox so it defaults correctly.
   * @type {any}
   */
  @track defaultScene;

  /**
   * Internal representation of the scene information
   * so scenes can support objects while the combobox does not complain)
   */
  @track _sceneOptions;

  //-- handlers

  /**
   * Handle when the user chose a different story
   * @param {CustomEvent} evt 
   */
  handleSceneChange(evt) {
    evt.preventDefault();
 
    let newSceneIndex = parseInt(evt.target.value, 10);
    this.notifySceneChanged(newSceneIndex);
  }
 
  connectedCallback(){
    let _sceneOptions = [];
    if (Array.isArray(this.scenes) && this.scenes.length > 0) {

      //-- use a numeric string based index
      //-- because the combobox doesn't work well outside of strings...
      //-- we will use the index to then get the actual value
      this.scenes.forEach((scene, index) => {
        _sceneOptions.push({label:scene.label, value:''+index})
      });
 
      //-- pre select the index
      let sceneIndex = 0;
      if (0 <= this.sceneIndex && this.sceneIndex < this.scenes.length){
        sceneIndex = this.sceneIndex;
      }
      this.defaultScene = _sceneOptions[sceneIndex].value;
 
      //-- when binding the value, the combobox does not dispatch a change event
      this.notifySceneChanged(sceneIndex);
    }
    
    this._sceneOptions = _sceneOptions;
  }
 
  /**
   * Dispatch an event letting everyone know the scene has changed
   * @param {Integer} newSceneIndex - index of the new scene to use.
   * @fires CustomEvent:scene
   */
  notifySceneChanged(newSceneIndex) {
    if (this.scenes && 0 <= newSceneIndex && newSceneIndex < this.scenes.length) {
      let newSceneObject = this.scenes[newSceneIndex];
      const sceneChangeEvt = new CustomEvent('scene', { detail: newSceneObject });
      this.dispatchEvent(sceneChangeEvt);
    }
  }
}