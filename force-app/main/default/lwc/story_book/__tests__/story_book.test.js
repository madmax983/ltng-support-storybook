/* eslint-disable @lwc/lwc/no-inner-html */

import { createElement } from 'lwc';
import story_book, {Scene} from 'c/story_book';

describe('story_book', () => {
  
  test('it can be added to the page', (done) => {
    const element = createElement('c-story_book', {
      is: story_book
    });
    element.title = 'Expected title';
    document.body.appendChild(element);

    const title = element.shadowRoot.querySelector('h1');
    expect(title).not.toBeNull();
    done();
  });

  it('can find slots', (done) => {
    expect('slots can be tested.').toBeTruthy();
    //-- @TODO: slots cannot be tested at this time.
    // @see https://github.com/salesforce/sfdx-lwc-jest/issues/63
    done();
  });

  it('can create a scene with literals', () => {
    const expectedLabel = 'label';
    const expectedValue = 'value';
    const scene = new Scene(expectedLabel, expectedValue);

    expect(scene.label).toBe(expectedLabel);
    expect(scene.value).toBe(expectedValue);
  });

  it('can create a scene with objects', () => {
    const expectedLabel = 'label2';
    const message = 'howdy';
    const value = { message };

    const scene = new Scene(expectedLabel, value);

    expect(scene.label).toBe(expectedLabel);
    expect(scene.value.message).toBe(message);
  });
});
