const TextWrap = () => {
  const gotoIntroduction = () => {
    // routerGo('/introduction');
  };
  return (
    <div className="text_wrap">
      <div className="fr_view">
        <h1 style={{ textAlign: 'center', opacity: 0.85 }}>
          Your mood <br />
          coffee & desert
        </h1>
        <p
          type="button"
          onClick={gotoIntroduction}
          style={{ fontWeight: 300 }}
          className="btn"
        >
          SEE MORE
        </p>
      </div>
    </div>
  );
};

export default TextWrap;
