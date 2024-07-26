const ImgNavigation = ({ item }) => {
  return (
    <>
      <div
        className="main_nav_area"
        style={{
          backgroundImage: `url(${item})`,
        }}
      />
    </>
  );
};
export default ImgNavigation;
