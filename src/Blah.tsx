function TopBanner() {
  const newLocal = './joe.jpg';
  return (
    <>
      <div className="row">
        <div className="col-3">
          <h1>Spencer's brother's movie collection</h1>
        </div>

        <div className="col">
          <img src={newLocal} alt="Pic of Brother" />
        </div>
      </div>
    </>
  );
}

export default TopBanner;
