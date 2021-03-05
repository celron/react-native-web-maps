import React, { Component } from 'react';
import { OverlayView } from 'react-google-maps-api';

class MapViewOverlayView extends Component {
  render() {
    return <OverlayView{...this.props} />;
  }
}

export default MapViewOverlayView;
