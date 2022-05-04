import React from "react";
import "./PresaleEnd.css";
import Countdown from "react-countdown";

function PresaleEnd(props) {
  // Random component
  const Completionist = () => <span>You are good to go!</span>;

  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <div className="dateCounter">
          <span>{days}</span>
          <span>{hours}</span>
          <span>{minutes}</span>
          <span>{seconds}</span>
        </div>
      );
    }
  };

  return (
    <div id="PresaleEnd">
      <div className="end_counter_wrapper">
        <p className="text_alert">Make sure the website is pinksale.finance!</p>

        <div className="end_presale">
          <strong>Presale Ends In</strong>
          <Countdown date={Date.now() + 7889231500} renderer={renderer} />
        </div>
        <div className="presale_range">
          <div className="range_position"></div>
        </div>
        <div className="range_info">
          <span>516.4057535879243 BNB</span>
          <span>250 BNB</span>
        </div>

        <form action="" method="post">
          <div className="form_control">
            <label htmlFor="" className="form_label">
              Amount
            </label>
            <input
              type="text"
              className="input_control"
              name=""
              placeholder="0.0"
              id=""
            />
            <button type="button" className="input_helper">
              MAX
            </button>
          </div>
          <div className="form_action">
            <button
              type="button"
              className="form_action_btn hidden_btn form_btn"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginRight: ".5rem" }}
              >
                <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" />
              </svg>
              Buy with BNB
            </button>
          </div>
        </form>
      </div>

      <div className="sale_info_wrapper">
        <ul className="sale_list">
          <li className="sale_list_item">
            <span>Status</span>

            <span className="status">inprogress</span>
          </li>

          <li className="sale_list_item">
            <span>Current Rate</span>

            <span>1 BNB = 188,082.849 URF</span>
          </li>

          <li className="sale_list_item">
            <span>Total Contributors</span>

            <span>751</span>
          </li>

          <li className="sale_list_item">
            <span>Your Purchased</span>

            <span>0 BNB</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PresaleEnd;
