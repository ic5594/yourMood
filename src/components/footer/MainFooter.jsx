import Logo from '@/assets/images/Logo.jpg';

const MainFooter = () => {
  const kakaochUrl = `https://pf.kakao.com/_DnRlxj`;
  const instargram = `https://www.instagram.com/cafeyourmood/`;

  return (
    <footer>
      <div className="footer_area">
        <div className="logo">
          <img src={Logo} alt="main logo" />
          Yourmood
        </div>
        <div className="info">
          <p>
            <strong>유어무드</strong> 02-2662-7999
          </p>
          <p>
            <strong>위치</strong> 서울 강서구 양천로 36 1층
          </p>
          <a href="mailto:cafeyourmood@naver.com" style={{ color: 'black' }}>
            <strong>Email</strong> cafeyourmood@naver.com
          </a>
          <p onClick={() => window.open(kakaochUrl)}>
            <strong>KakaoCh</strong> &nbsp;
            {kakaochUrl}
          </p>
          <p
            onClick={() => window.open(instargram)}
            style={{ wordBreak: 'break-all' }}
          >
            <strong>Instagram</strong> {instargram}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
