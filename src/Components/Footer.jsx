import React from "react";

const Footer = () => {
  return (
    <footer className="bg-red-400 ">
      <div className="mx-auto container py-10">
        <div className="flex justify-between">
          <h4 className="text-3xl">The Footer</h4>
          <ul>
            <li>
              <h5 className="text-lg font-bold">Navigations</h5>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">About </a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <div>
            <h5 className="text-lg font-bold">Contacts</h5>
            <p>Monipur, Mirpur-2, Dhaka-1216</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
