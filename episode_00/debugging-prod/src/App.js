import React, { Component } from 'react';
import { connect } from 'react-redux';

import { requestData } from './store';

class App extends Component {
  componentDidMount() {
    this.refreshData();
  }

  refreshData = () => {
    const { requestData } = this.props;
    requestData();
  }

  render() {
    const { loading, items } = this.props;
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">Debugging In Production</a>
        </nav>
        <main className="container">
          <div className="center">
            {
              loading ? (
                <div className="spinner-border m-2" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                <>
                  <button onClick={this.refreshData} type="button" className="m-2 btn btn-primary">Refresh Data</button>
                  <ul className="list-group list-items">
                    {
                      items.map(item => (
                      <li key={item.id} className="list-group-item">{item.title}</li>
                    ))
                    }
                  </ul>
                </>
              )
            }
          </div>
        </main>
      </div>
    );
  }
}

export default connect(({ loading, items }) => ({
  loading,
  items
}), {
  requestData
})(App);
