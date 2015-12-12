import React, { Component, PropTypes } from 'react';
import connect from 'connect-alt';

import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import { Link } from 'react-router';

import { IntlMixin } from 'react-intl';

import { replaceParams } from 'utils/localized-routes';


@connect(({ sections: { collection } }) => ({ collection }))
class Sections extends Component {

  static propTypes = { collection: PropTypes.array.isRequired }

  static contextTypes = {
    flux: PropTypes.object.isRequired,
    messages: PropTypes.object.isRequired
  }

  i18n = IntlMixin.getIntlMessage

  componentWillMount() {
    const { flux } = this.context;

    flux.getActions('sections').index();
  }

  handleRemove(index) {
    const { flux } = this.context;
    flux.getActions('sections').remove(index);
  }

  renderSection = (section, index) => {
    const sectionRoute = replaceParams(
      this.i18n('routes.section'),
      { id: section.id }
    );

    return (
      <div className='user--row' key={ index }>
          <Link to={ sectionRoute }>Profile</Link>
          <Button
            onClick={ () => this.handleRemove(index) }>
            x
          </Button>
      </div>
    );
  }

  render() {
    const { collection } = this.props;

    return (
      <div>
        <Grid>
          <Row className='show-grid'>
            <Col xs={ 12 } md={ 12 }>
              { collection.map(this.renderSection) }
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }

}

export default Sections;
