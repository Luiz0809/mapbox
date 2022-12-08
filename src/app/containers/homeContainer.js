import React, { Component } from 'react'

import Header from '../components/header'
import Map from '../components/map'

class Home extends Component {
  render(){
    return(
      <div>
        
        <Map
          container='map'
          style='mapbox://styles/mapbox/traffic-night-v2'
          zoom={18}
          classNameStyle='mapContainer'
          accessToken='pk.eyJ1IjoibHVmZmUwODA5IiwiYSI6ImNsYjByazkxOTFtNHkzdWp1Z3l1NWNucWcifQ.jGd6V5HzpJXj675-WOJgVQ'
        />
      </div>
    )
  }
}

export default Home
