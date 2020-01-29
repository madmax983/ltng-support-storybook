/**
 * More complex demo allowing multiple scenes to be tested.
 **/
import { LightningElement, api } from 'lwc';
import {Scene} from 'c/story_book';
// import { isObject } from 'util';

export default class Story_exampleComplex extends LightningElement {

  /**
   * Current scene we are working with
   * @type {Scene}
   */
  @api currentScene;

  /**
   * List of all scenes we have
   * @type {Scene[]}
   */
  @api allScenes = [
    new Scene('Wide Scene', {
      description: 'Wide component with a message',
      size: 'wide',
      message: `
I am the very model of a modern Major-General
I've information vegetable, animal, and mineral
I know the kings of England, and I quote the fights
Historical
From Marathon to Waterloo, in order categorical`
    }),
    new Scene('Empty Scene', {
      description: 'Description for the scene',
      message: null
    })
  ];

  connectedCallback() {
    this.currentScene = this.allScenes[0];
  }

  handleSceneChanged(sceneEvent) {
    this.currentScene = sceneEvent.detail;
  }
}