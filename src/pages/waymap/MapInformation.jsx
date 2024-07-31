import { PiNumberCircleFiveFill } from 'react-icons/pi';
const MapInformation = () => {
  const findMap = () => {
    window.open(import.meta.env.VITE_NAVER_MAP_URL);
  };

  const watchMapApp = () => {
    window.open(import.meta.env.VITE_OPEN_NAVER_MAP_APP);
  };

  return (
    <div style={{ padding: '0 12px', marginTop: '5%' }}>
      <div className="mapinfo">
        <span className="name">카페유어무드</span>
        <div className="info_area">
          <span className="info">
            <PiNumberCircleFiveFill style={{ color: '#8936e0' }} />
            서울 강서구 양천로 36 1층
          </span>
          <span className="info">개화산역역 2번 출구에서 167M</span>
        </div>

        <div className="IaqcP">
          <div className="EbS3j">
            5호선 개화산역 2번출구 180M 이내 강서수요양병원 건너편 1층입니다.
            주차장이 없으며 가장 가까운 공영주차장은 개화산역 공영주차장 입니다.
          </div>
        </div>

        <div className="button_area">
          <button className="button" onClick={findMap}>
            길찾기
          </button>
          <button className="button" onClick={watchMapApp}>
            지도앱으로 보기
          </button>
        </div>
      </div>
    </div>
  );
};

export default MapInformation;
