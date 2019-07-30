import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'geometric',
          id: 1
        },
        {
          title: 'symbols',
          id: 2
        },
        {
          title: 'objects',
          id: 3
        }
      ]
    }
  }

  render() {
    const { sections } = this.state;
    return (
      <div className='directory'>
        {
          sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps} />
          ))
        }
      </div>
    );
  }
}

export default Directory;