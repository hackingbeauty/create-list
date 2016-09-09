import React              from 'react';
import { mount, shallow } from 'enzyme';
import { expect }         from 'chai';
import CreateList    from '../../../src/CreateList';

describe('<CreateList />', function() {

  it('should display the right placeholder if set', function() {
    const component = mount(<CreateList
                              placeholder='Whatever I want' />);
    expect(component.find('.placeholder').text()).to.equal('Whatever I want');
  });

  it('should display a default placeholder', function() {
    const component = mount(<CreateList />);
    expect(component.find('.placeholder').text()).to.equal('Add to List');
  });

  it('should display a list of playlists', function() {

  });

  it('should display a default message if there are no playlists', function() {

  });

});