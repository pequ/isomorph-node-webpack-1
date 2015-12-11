import React, { Component, PropTypes } from 'react';
import connect from 'connect-alt';
import { Link } from 'react-router';
import { IntlMixin } from 'react-intl';

import imageResolver from 'utils/image-resolver';
import Spinner from 'components/shared/spinner';
import LangPicker from 'components/shared/lang-picker';

import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

// Load styles for the header
// and load the `react-logo.png` image
// for the `<img src='' />` element
let reactLogo;
if (process.env.BROWSER) {
  reactLogo = require('images/react-logo.png');
} else {
  reactLogo = imageResolver('images/react-logo.png');
}

@connect(({ requests: { inProgress }, session: { session } }) =>
  ({ inProgress, session }))
class Header extends Component {

  static propTypes = {
    inProgress: PropTypes.bool,
    session: PropTypes.object
  };

  static contextTypes = {
    locales: PropTypes.array.isRequired,
    messages: PropTypes.object.isRequired,
    flux: PropTypes.object.isRequired
  };

  i18n = IntlMixin.getIntlMessage;

  render() {
    const { inProgress, session } = this.props;
    const { locales: [ activeLocale ], flux } = this.context;

    return (
      <header className='app--header'>
        {/* Indicates a successful or positive action */}

        {/* Spinner in the top right corner */}
        <Spinner active={ inProgress } />

        <Navbar inverse>
          <Navbar.Header>
            {/* React Logo in header */}
            <Link to='/' className='navbar-brand'>
              <img src={ reactLogo } alt='react-logo' role='logo'/> React App
            </Link>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <li role='presentation'>
                <Link to={ this.i18n('routes.users') } role='button'>
                  { this.i18n('header.users') }
                </Link>
              </li>
              <li role='presentation'>
                <Link to={ this.i18n('routes.guides') } role='button'>
                  { this.i18n('header.guides') }
                </Link>
              </li>
              <li role='presentation'>
                <Link to={ this.i18n('routes.sections') } role='button'>
                  { this.i18n('header.sections') }
                </Link>
              </li>
              { session ?
                [
                  <li key={ 0 }>
                    <Link to={ this.i18n('routes.account') } role='button'>
                      { this.i18n('header.account') }
                    </Link>
                  </li>,
                  <li key={ 1 }>
                    <a href='#' onClick={ () => flux.getActions('session').logout() }>
                      { this.i18n('header.logout') }
                    </a>
                  </li>
                ] :
                <li>
                  <Link to={ this.i18n('routes.login') } role='button'>
                    { this.i18n('header.login') }
                  </Link>
                </li>
              }
            </Nav>
            <Nav pullRight>
              {/* LangPicker on the right side */}
              <LangPicker
                activeLocale={ activeLocale }
                onChange={ flux.getActions('locale').switchLocale } />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}

export default Header;
