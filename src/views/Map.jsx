import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: 'auto',
  height: '100%'
};

const center = {
  lat: 40.74749577613356,
  lng: 72.35957134170593
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCIuhJElVEhGVPYptJbkrWxEy4lKzEoOA8"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        id="google__map"
        center={center}
        className="asas"
        zoom={17}
        // onLoad={onLoad}
        // onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}
 
export default Map;
