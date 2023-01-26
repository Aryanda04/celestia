import React from "react";
import semproImage from "../assets/images/sempro.jpeg";
import swal from "sweetalert";

const Greeting = () => {
  return (
    <div>
      <div className="content">
        <h4>Selamat Telah Menyelesaikan Seminar Proposal (1/99)</h4>
        <img
          src={semproImage}
          alt="Seminar Proposal"
          className="center-image"
          onClick={() => {
            swal({
              title: "Good job!",
              text: "Claim Your Prize Now!",
              icon: "success",
              button: "Slayyy!",
            });
          }}
        />
        <h4>Click the pict</h4>

        <footer className="footer">
          Dari Saya untuk Saya, Siapa bilang untuk Kamu!
        </footer>
      </div>
    </div>
  );
};

export default Greeting;
