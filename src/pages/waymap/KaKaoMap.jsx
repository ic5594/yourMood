import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';

const KaKaoMap = () => {
  const level = 3;

  const mapData = { lat: 37.572712, lng: 126.807901 };
  return (
    <div className="kakaomap">
      <Map
        center={mapData}
        style={{ width: 'auto', height: '300px', borderRadius: '5px' }}
        level={level}
      >
        <MapMarker position={mapData} style={{ border: 'tranparent' }} />
        <CustomOverlayMap position={mapData} yAnchor={1}>
          <div className="customoverlay">
            <a
              href="https://map.naver.com/p/entry/place/1402987851?c=12.93,0,0,0,dh"
              target="_blank"
              rel="noreferrer"
            >
              <span className="title">💛Yourmood💛</span>
            </a>
          </div>
        </CustomOverlayMap>
      </Map>
    </div>
  );
};

export default KaKaoMap;
