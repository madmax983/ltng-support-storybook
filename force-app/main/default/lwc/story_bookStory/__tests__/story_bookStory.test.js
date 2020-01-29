/* eslint-disable @lwc/lwc/no-inner-html */

/** JEST Test for story_bookStory/__tests__/story_bookStory **/
import { createElement } from 'lwc';
import story_bookStory from 'c/story_bookStory';

describe('c-story_bookStory', () => {

  //-- boilerplate DOM reset
  afterEach(() => {
    while (document.body.firstChild){
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('can be added to the document', () => {
    const element = createElement('c-story_bookStory', { is:story_bookStory });
    document.body.appendChild(element);
    expect(element).not.toBe(null);

    //-- because the scene selector is set to 1,
    //-- the expected scene should be set to 'second message..';
    //-- also verifies the handler
    const expectedScene = 'Second scenario message';
    expect(element.currentScene).toBe(expectedScene);

    expect(element.scenes).not.toBeNull();
    expect(element.scenes.length).toBe(3);
  });

  it('has scenes', (done) => {
    const element = createElement('c-story_bookStory', { is:story_bookStory });
    document.body.appendChild(element);
    expect(element).not.toBe(null);

    return Promise.resolve().then(() => {
      let storyBooks=element.shadowRoot.querySelectorAll('c-story_book');
      let firstStory = storyBooks[0];
      let firstStoryTitle = firstStory.shadowRoot.querySelector('h1').innerHTML;
      expect(firstStoryTitle).toBe('Use Scene Selector...');

      let secondStory = storyBooks[1];
      let secondStoryTitle = secondStory.shadowRoot.querySelector('h1').innerHTML;
      expect(secondStoryTitle).toBe(element.scenes[0].label);

      done();
    });

  });
});