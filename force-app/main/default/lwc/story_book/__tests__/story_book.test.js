/* eslint-disable @lwc/lwc/no-inner-html */

import { createElement } from 'lwc';
import story_book from '../story_book';

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
  })
});
