import React, { Component, PropTypes } from 'react';
import { IntlMixin } from 'react-intl';

class Sections extends Component {

  static contextTypes = {
    flux: PropTypes.object.isRequired,
    messages: PropTypes.object.isRequired
  }

  i18n = IntlMixin.getIntlMessage

  componentWillMount() {
    const { flux } = this.context;
    flux.getActions('helmet')
      .update({ title: this.i18n('sections.page-title') });
  }

  render() {
    return (
      <div>
        <h1>Sections</h1>
        <p>Coming soon...</p>
      </div>
    );
  }

}

export default Sections;
