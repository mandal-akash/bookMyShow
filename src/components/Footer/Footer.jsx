import React from "react";

const Footer = () => {
  return (
    <div className="footer bg-[#333338] h-[100vh]">
      <div className="text-white  font-semibold flex justify-around items-center space-y-5">
        <div className="flex space-x-5">
          <h1 className="text-xl">List your Show</h1>
          <p className="text-lg">
            Got a show, event, activity or a great experience? Partner with us &
            get listed on BookMyShow
          </p>
        </div>
        <button className="bg-[#EC5E71]  p-4 rounded-sm">Contact today!</button>
      </div>
      <footer></footer>
    </div>
  );
};

export default Footer;
