import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

// ...............Modal here ..............
import ConnectModal from "../../Components/ConnectModal/ConnectModal";
// ...............Modal here ..............End
function Base(props) {
  return (
    <div id="Base">
      <Header></Header>
      {props.children}
      <Footer></Footer>
      <ConnectModal></ConnectModal>
    </div>
  );
}

export default Base;
