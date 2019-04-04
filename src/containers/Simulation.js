import React, { useState, useEffect, Fragment } from 'react'

import Card from '@material-ui/core/Card';
import Chart from '../components/Chart';
import DataSet from '../charts/Data';

import _ from 'lodash';

const Simulation = (props) => {

  var data = [
    {'age': 7, 'seriousness':3.8},
    {'age': 16, 'seriousness':4.3},
    {'age': 18, 'seriousness':1.5},
    {'age': 19, 'seriousness':3.2},
    {'age': 17, 'seriousness':2.8},
    {'age': 17, 'seriousness':3.5},
    {'age': 11, 'seriousness':3.6},
    {'age': 17, 'seriousness':2.4},
    {'age': 14, 'seriousness': 4.1},
    {'age': 5, 'seriousness': 3.5},
    {'age': 8, 'seriousness': 3.2},
    {'age': 13, 'seriousness': 2.3},
    {'age': 19, 'seriousness': 2.1},
    {'age': 21, 'seriousness': 2.1},
    {'age': 17, 'seriousness': 3.3},
    {'age': 12, 'seriousness': 1.9},
    {'age': 19, 'seriousness': 1.6},
    {'age': 17, 'seriousness': 1},
    {'age': 18, 'seriousness': 2.4},
    {'age': 11, 'seriousness': 3.7},
    {'age': 12, 'seriousness': 3.2},
    {'age': 8, 'seriousness': 2.8},
    {'age': 16, 'seriousness': 1.7},
    {'age': 17, 'seriousness': 2.8},
    {'age': 19, 'seriousness': 3.7},
    {'age': 10, 'seriousness': 3},
    {'age': 17, 'seriousness': 2.9},
    {'age': 13, 'seriousness': 1.8},
    {'age': 15, 'seriousness': 3.5},
    {'age': 7, 'seriousness': 2.6},
    {'age': 15, 'seriousness': 3.5},
    {'age': 4, 'seriousness': 3.5},
    {'age': 19, 'seriousness': 2.5},
    {'age': 10, 'seriousness': 3.5},
    {'age': 20, 'seriousness': 3},
    {'age': 19, 'seriousness': 3.4},
  ];

  var groupAge = _.groupBy(data, 'age')
  var groupSeriousness = _.groupBy(data, 'seriousness');

  var ages = _.map(_.keys(groupAge), function(e) {
    return _.reduce(groupAge[e], function(r, o) {
      return r.count += +o.seriousness, r
    }, {age: e, count: 0, sum: groupAge[e].length})
  })

  var seriousness = _.map(_.keys(groupSeriousness), function(e) {
    return _.reduce(groupSeriousness[e], function(r, o) {
      return r.count += +o.seriousness, r
    }, {age: e, count: 0, sum: groupSeriousness[e].length})
  })

  //const [currentPerson, updatePerson] = useState(person)
  const [age1, setAge1] = useState(0);

  useEffect(() => {
    // console.log(age1)
  });



  return (
    <div>
      <Card>
        <h2>Policy Development Simulator</h2>

        {DataSet.map(item => {

          // console.log(item)
          return <div style={{padding:'1.5em'}}>

            {/* <h3>{item.chart}</h3> */}
            <Chart ages={ages} seriousness={seriousness} selectedAge={age1} />
            {/* {console.log('banana', item)} */}
          </div>
        })}
      </Card>
    </div>
  );
}

export default Simulation;
