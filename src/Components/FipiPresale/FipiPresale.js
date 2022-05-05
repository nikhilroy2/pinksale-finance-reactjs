import React from "react";
import "./FipiPresale.css";
function FipiPresale(props) {
  const social_list_object = [
    {
      id: 1,
      svg: (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth={2}
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx={12} cy={12} r={10} />
          <line x1={2} y1={12} x2={22} y2={12} />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      link: "#",
    },
    {
      id: 2,
      svg: (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth={2}
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
        </svg>
      ),
      link: "#",
    },
    {
      id: 3,
      svg: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M13 19.938A8.001 8.001 0 0 0 12 4a8 8 0 0 0-1 15.938V14H9v-2h2v-1.654c0-1.337.14-1.822.4-2.311A2.726 2.726 0 0 1 12.536 6.9c.382-.205.857-.328 1.687-.381.329-.021.755.005 1.278.08v1.9H15c-.917 0-1.296.043-1.522.164a.727.727 0 0 0-.314.314c-.12.226-.164.45-.164 1.368V12h2.5l-.5 2h-2v5.938zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
          </g>
        </svg>
      ),
      link: "#",
    },
    {
      id: 4,
      svg: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 448 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z" />
        </svg>
      ),
      link: "#",
    },
    {
      id: 5,
      svg: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 448 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M297.216 243.2c0 15.616-11.52 28.416-26.112 28.416-14.336 0-26.112-12.8-26.112-28.416s11.52-28.416 26.112-28.416c14.592 0 26.112 12.8 26.112 28.416zm-119.552-28.416c-14.592 0-26.112 12.8-26.112 28.416s11.776 28.416 26.112 28.416c14.592 0 26.112-12.8 26.112-28.416.256-15.616-11.52-28.416-26.112-28.416zM448 52.736V512c-64.494-56.994-43.868-38.128-118.784-107.776l13.568 47.36H52.48C23.552 451.584 0 428.032 0 398.848V52.736C0 23.552 23.552 0 52.48 0h343.04C424.448 0 448 23.552 448 52.736zm-72.96 242.688c0-82.432-36.864-149.248-36.864-149.248-36.864-27.648-71.936-26.88-71.936-26.88l-3.584 4.096c43.52 13.312 63.744 32.512 63.744 32.512-60.811-33.329-132.244-33.335-191.232-7.424-9.472 4.352-15.104 7.424-15.104 7.424s21.248-20.224 67.328-33.536l-2.56-3.072s-35.072-.768-71.936 26.88c0 0-36.864 66.816-36.864 149.248 0 0 21.504 37.12 78.08 38.912 0 0 9.472-11.52 17.152-21.248-32.512-9.728-44.8-30.208-44.8-30.208 3.766 2.636 9.976 6.053 10.496 6.4 43.21 24.198 104.588 32.126 159.744 8.96 8.96-3.328 18.944-8.192 29.44-15.104 0 0-12.8 20.992-46.336 30.464 7.68 9.728 16.896 20.736 16.896 20.736 56.576-1.792 78.336-38.912 78.336-38.912z" />
        </svg>
      ),
      link: "#",
    },
  ];
  return (
    <div id="FipiPresale">
      <div className="fipipresale_wrapper">
        <div className="fipi_card">
          <div className="card_title">
            <div className="card_box">
              <div className="card_subBox">
                <img
                  style={{
                    height: "48px",
                    width: "48px",
                    alignSelf: "flex-start",
                  }}
                  src={require("../../Static/img/fipi.png")}
                  alt="img"
                />

                <div className="content_box">
                  <strong>$FiPi Presale</strong>
                  <div className="kyc_box">
                    <a
                      href="#"
                      className="custom_tooltip"
                      data-tooltip-text="Click to View KYC details"
                    >
                      KYC
                    </a>
                  </div>
                  <div className="audit_box">
                    <a
                      href="#"
                      className="custom_tooltip"
                      data-tooltip-text="Click to View audit details"
                    >
                      Audit
                    </a>
                  </div>
                  <ul className="social_list">
                    {social_list_object.map((v) => {
                      return (
                        <li key={v.id}>
                          <a className="social_link" href={v.link}>
                            {v.svg}
                          </a>
                        </li>
                      );
                    })}
                  </ul>

                  <p className="content_pera">
                    💎FiPi Presale💎 Whitelist contest > https://t.ly/vH9f
                    💰Auto-Investment App 🚀Proven profitable record 💹Monthly
                    DCA and rebalancing 🚨Forbes-Featured Advisory team >
                    https://t.ly/f47l ✅ULTRA LOW INITIAL MARKET CAP LESS THAN
                    $200k ✅REAL UTILITY TOKEN🔥 (Tier System, auto-buy
                    back+burn) ✅TEAM DOXXED/KYC ✅REGISTERED COMPANY FiPi
                    Limited ✅ 4 600 000 tokens burned ✅ No unlocked Tokens ✅
                    Marketing manager of king floki
                  </p>
                </div>
              </div>
            </div>

            <div className="card_box">
              <div className="fill_span">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx={8} cy={8} r={8} />
                </svg>
                Filled
              </div>
            </div>
          </div>

          <div className="card_body">
            <ul className="card_body_list">
              <li>
                <span>Presale Address</span>

                <a className="link_action_text" href="#">
                  0x66d117b2e8d0b59be335978df69273f513e719ec
                </a>
              </li>

              <li>
                <span>Token Name</span>

                <span>$FiPi</span>
              </li>

              <li>
                <span>Token Symbol</span>

                <span>FiPi</span>
              </li>

              <li>
                <span>Token Decimals</span>

                <span>9</span>
              </li>

              <li>
                <span>Token Address</span>

                <span>
                  <a href="#" className="link_action_text">
                    0xbB9524b540a907d3648B15C679437261FC443aa6
                  </a>
                  <small>(Do not send BNB to the token address!)</small>
                </span>
              </li>

              <li>
                <span>Total Supply</span>

                <span>208,460,915.08227 URF</span>
              </li>

              <li>
                <span>Tokens For Presale</span>

                <span>100,000,000 URF</span>
              </li>

              <li>
                <span>Tokens For Liquidity</span>

                <span>51,000,000 URF</span>
              </li>

              <li>
                <span>Soft Cap</span>

                <span>250 BNB</span>
              </li>

              <li>
                <span>Max Owner Receive</span>

                <span>490 BNB</span>
              </li>

              <li>
                <span>Amount Till Rebalance</span>

                <span>471.28061987094577 BNB</span>
              </li>

              <li>
                <span>Presale Start Time</span>

                <span>2022.05.01 15:00 (UTC)</span>
              </li>

              <li>
                <span>Presale End Time</span>

                <span>2022.05.04 15:00 (UTC)</span>
              </li>

              <li>
                <span>Listing On</span>

                <a className="link_action_text" href="#">
                  Pancakeswap
                </a>
              </li>

              <li>
                <span>Liquidity Percent</span>

                <span>51%</span>
              </li>

              <li>
                <span>Liquidity Unlocked Time</span>

                <a className="link_action_text" href="#">
                  2025.01.28 16:17 UTC (in 3 years)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FipiPresale;
