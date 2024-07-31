import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';
import { useState } from 'react';
const WayMap = () => {
  const [level, setLevel] = useState(3);

  const mapData = { lat: 37.572712, lng: 126.807901 };

  return (
    <Map
      center={mapData}
      style={{ width: '400px', height: '300px', borderRadius: '5px' }}
      level={level}
    >
      <MapMarker position={mapData} style={{ border: 'tranparent' }}>
        <div className="name">Yourmood</div>
      </MapMarker>

      <button onClick={() => setLevel(level + 1)}>-</button>
      <button onClick={() => setLevel(level - 1)}>+</button>
    </Map>
  );
};

export default WayMap;
