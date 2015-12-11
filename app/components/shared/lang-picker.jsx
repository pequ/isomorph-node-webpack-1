import React, { Component, PropTypes } from 'react';
import { NavDropdown } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import cx from 'classnames';

class LangPicker extends Component {

  static propTypes = {
    activeLocale: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  }

  locales = ['fr', 'en']

  render() {
    const { onChange, activeLocale } = this.props;

    return (
      <NavDropdown eventKey={ 3 } title='Language'>
        { this.locales.map((locale, index) =>
          <MenuItem eventKey={ 3.1 }
                    key={ index }
                    className={ cx({ active: locale === activeLocale }) }
                    onClick={ () => onChange(locale) }>
            { locale }
          </MenuItem>
        ) }
      </NavDropdown>
    );
  }
}

export default LangPicker;
