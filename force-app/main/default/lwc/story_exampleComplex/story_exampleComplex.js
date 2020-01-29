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
      width: 'wide',
      height: '300px',
      message: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus vestibulum mattis ullamcorper velit sed. Tristique nulla aliquet enim tortor. Massa tincidunt dui ut ornare lectus sit amet est. Senectus et netus et malesuada fames. Pharetra et ultrices neque ornare aenean. Eget felis eget nunc lobortis mattis aliquam faucibus. Arcu bibendum at varius vel pharetra vel. Quis risus sed vulputate odio ut enim blandit volutpat. Vel eros donec ac odio tempor orci. Facilisis volutpat est velit egestas dui. Viverra nibh cras pulvinar mattis nunc sed blandit libero. Eu feugiat pretium nibh ipsum consequat nisl. Purus viverra accumsan in nisl nisi scelerisque.

Eu lobortis elementum nibh tellus molestie nunc. Dapibus ultrices in iaculis nunc sed. Nam at lectus urna duis convallis convallis tellus id interdum. Arcu risus quis varius quam quisque id diam. Egestas dui id ornare arcu odio ut sem nulla pharetra. Diam ut venenatis tellus in metus vulputate eu scelerisque. Quis viverra nibh cras pulvinar mattis. Eu tincidunt tortor aliquam nulla facilisi. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Faucibus a pellentesque sit amet. Varius sit amet mattis vulputate. Bibendum arcu vitae elementum curabitur vitae nunc. Dictum fusce ut placerat orci nulla pellentesque. Est lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet cursus sit amet dictum. Eu ultrices vitae auctor eu augue ut lectus arcu. Sodales neque sodales ut etiam sit amet nisl. Lacus sed viverra tellus in hac habitasse platea dictumst. Eu feugiat pretium nibh ipsum consequat. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu.

Morbi tempus iaculis urna id volutpat lacus laoreet. Diam quis enim lobortis scelerisque fermentum dui. Ut consequat semper viverra nam libero justo laoreet sit amet. Egestas congue quisque egestas diam in arcu cursus euismod quis. Sit amet nulla facilisi morbi tempus iaculis urna id. Fermentum leo vel orci porta non pulvinar. Enim tortor at auctor urna nunc id cursus metus aliquam. Morbi non arcu risus quis. Vel pretium lectus quam id leo in vitae turpis massa. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Nec tincidunt praesent semper feugiat nibh sed.

Tempus iaculis urna id volutpat lacus laoreet non. Neque convallis a cras semper auctor neque vitae tempus. Pharetra massa massa ultricies mi quis hendrerit. Scelerisque fermentum dui faucibus in ornare quam. Eget aliquet nibh praesent tristique magna sit amet purus gravida. Suscipit adipiscing bibendum est ultricies. Maecenas accumsan lacus vel facilisis. Fusce id velit ut tortor pretium. Arcu non sodales neque sodales ut etiam sit amet nisl. Gravida neque convallis a cras semper auctor. Sed vulputate odio ut enim blandit volutpat maecenas. Vel facilisis volutpat est velit egestas dui id ornare arcu. Interdum varius sit amet mattis vulputate.

Donec ultrices tincidunt arcu non sodales neque sodales ut. Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Vulputate enim nulla aliquet porttitor. Mi quis hendrerit dolor magna eget est lorem ipsum dolor. Cursus euismod quis viverra nibh cras pulvinar. Magna fringilla urna porttitor rhoncus dolor purus. Enim tortor at auctor urna nunc. Massa tempor nec feugiat nisl pretium fusce id velit. Rutrum tellus pellentesque eu tincidunt. In nibh mauris cursus mattis molestie a iaculis. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Curabitur gravida arcu ac tortor dignissim convallis. Nibh praesent tristique magna sit amet purus gravida quis. Ac turpis egestas integer eget aliquet nibh praesent tristique. Nunc eget lorem dolor sed viverra ipsum nunc.`
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