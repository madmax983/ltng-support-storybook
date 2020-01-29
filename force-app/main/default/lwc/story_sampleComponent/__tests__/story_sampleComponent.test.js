/* eslint-disable @lwc/lwc/no-inner-html */

import { createElement } from 'lwc';
import story_sampleComponent from '../story_sampleComponent';

describe('story_sampleComponent', () => {
  it('can be instantiated', (done) => {
    const element = createElement('c-story_sampleComponent', {
      is: story_sampleComponent
    });
    document.body.appendChild(element);

    expect(element.children.length).toBeGreaterThan(0);

    done();
  });

  it('has message if message is sent', (done) => {
    const expectedMessage = 'ABCDEFG';
    const expectedLabel = 'cucas';
    const element = createElement('c-story_sampleComponent', {
      is: story_sampleComponent
    });
    element.message = expectedMessage;
    element.label = expectedLabel;
    document.body.appendChild(element);

    const targetDiv = element.shadowRoot.querySelector('div');
    expect(targetDiv.innerHTML).toContain(expectedMessage);

    done();
  });

  it('does not have message if message is not sent', (done) => {
    const element = createElement('c-story_sampleComponent', {
      is: story_sampleComponent
    });
    document.body.appendChild(element);

    const expectedMessage = '- No message sent -';
    const targetDiv = element.shadowRoot.querySelector('div');
    expect(targetDiv.innerHTML).toContain(expectedMessage);

    done();
  });
});