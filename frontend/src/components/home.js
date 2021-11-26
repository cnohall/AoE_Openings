import React, {Component, PropTypes } from 'react';
import queryString from 'query-string';
import DataTable from 'react-data-table-component';
import MetaSnapshotChart from './metaSnapshotChart.js';


class Home extends Component {
  render () {
    return (
      <div>
        <h1>Welcome to AoE Pulse!</h1> </br>
        <MetaSnapshotChart/>
        <div>
          <h2>Update (Nov 26, 2021)</h2>
          <p>
            Big rewrite of the database to improve scaling and responsiveness with up to 200x speedups for some of the biggest queries! I never expected to have >1M replays analyzed when I started this project.
          </p>
          <h2>Alpha release (Oct 5, 2021)</h2>
          <p>
            Initial release with 1 patch worth of data and 400k replays! Some queries take forever but the site all works at least.
          </p>
        </div>
      </div>
    )
  }
}

export default Home
