const ClockTime = () => {
  let date = new Date();
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <p>
            This is the current time: {date.toLocaleDateString()} -
            {date.toLocaleTimeString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClockTime;
