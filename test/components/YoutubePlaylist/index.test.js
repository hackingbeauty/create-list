import React              from 'react';
import { mount, shallow } from 'enzyme';
import { expect }         from 'chai';
import YoutubePlaylist    from '../../../src/index';

describe('<YoutubePlaylist />', function() {

  it('should display the right placeholder if set', function() {
    const component = mount(<YoutubePlaylist
                              placeholder='Whatever I want' />);
    expect(component.find('.placeholder').text()).to.equal('Whatever I want');
  });

  it('should display a default placeholder', function() {
    const component = mount(<YoutubePlaylist />);
    expect(component.find('.placeholder').text()).to.equal('Add to List');
  });

});