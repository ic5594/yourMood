import { useSelector } from 'react-redux';

const useSetMenu = (index) => {
  const path = useSelector((state) => state.menu.path); //redux path

  const setMenu = index < 3;
  const yourmoodInstaUrl =
    'https://www.instagram.com/cafeyourmood/';

  const yourmoodKakaoCh = 'https://pf.kakao.com/_DnRlxj';


  return {
    path,
    setMenu,
    yourmoodInstaUrl,
    yourmoodKakaoCh
  }
}

export default useSetMenu

