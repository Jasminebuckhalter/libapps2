import React, { Component } from 'react'
import List from './List'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import {Redirect} from 'react-router-dom'


class Dash extends Component {
  render() {
    
    // console.log(this.props);
    const { notes, auth, notifications } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />
    
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <List notes={notes} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications notifications={notifications} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    notes: state.firestore.ordered.notes,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'notes', limit: 4, orderBy: ['createdAt', 'desc']},
    { collection: 'notifications', limit: 3, orderBy: ['time', 'desc']}
  ])
)(Dash)