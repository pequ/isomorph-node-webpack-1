import React, { Component, PropTypes } from 'react';
import connect from 'connect-alt';

import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import { Link } from 'react-router';
import { IntlMixin } from 'react-intl';

import { replaceParams } from 'utils/localized-routes';


@connect(({ users: { collection } }) => ({ collection }))
class Users extends Component {

  static propTypes = { collection: PropTypes.array.isRequired }

  static contextTypes = {
    flux: PropTypes.object.isRequired,
    messages: PropTypes.object.isRequired
  }

  i18n = IntlMixin.getIntlMessage

  componentWillMount() {
    const { flux } = this.context;

    flux.getActions('helmet').update({ title: this.i18n('users.page-title') });
    flux.getActions('users').index();
  }

  handleRemove(index) {
    const { flux } = this.context;
    flux.getActions('users').remove(index);
  }

  renderUser = (user, index) => {
    const profileRoute = replaceParams(
      this.i18n('routes.profile'),
      { seed: user.seed }
    );

    return (
      <tr className='user--row' key={ index }>
        <td>{ user.email }</td>
        <td className='text-center'>
          <Link to={ profileRoute }>Profile</Link>
        </td>
        <td className='text-center'>
          <Button
            onClick={ () => this.handleRemove(index) }>
            X
          </Button>
        </td>
      </tr>
    );
  }

  render() {
    const { collection } = this.props;

    return (
      <div>
        <Grid>
          <Row className='show-grid'>
            <Col xs={ 12 } md={ 12 }>
             <h1 className='text-center'>
                      { this.i18n('users.title') }
                    </h1>
                    <Table responsive>
                      <thead>
                        <tr>
                          <th> { this.i18n('users.email') } </th>
                          <th colSpan='2'> { this.i18n('users.actions') } </th>
                        </tr>
                      </thead>
                      <tbody>
                        { collection.map(this.renderUser) }
                      </tbody>
                    </Table>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }

}

export default Users;
