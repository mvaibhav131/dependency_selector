import React, { useState } from "react";
// import GirmitiIcon from "../assets/Chatak_Logo.png";
// import ChatakIcon from "../assets/CHATAK.svg";
// import PathOrangeIcon from "../assets/Path.png";
// import PathWhiteIcon from "../assets/WPath.png";
// import MenuIcon from "../assets/menu.png";
// import MenuWhiteIcon from "../assets/Wmenu.png";
import { useNavigate, useLocation } from "react-router-dom";
// import PingIcon from "../assets/ping.png";
// import GrayPingIcon from "../assets/grayPing.png";
// import { pingInfo } from "../Store/actions";
import { useDispatch } from "react-redux";
// import { LABELS } from "../globalConstants/globalVariable";
import { FaTabletAlt, FaStackExchange, FaChevronDown, FaChevronRight } from "react-icons/fa";
import { MdPrivacyTip } from 'react-icons/md';
import { BiSolidUserRectangle, BiSort } from 'react-icons/bi';
import { ImMail } from 'react-icons/im';
import { GiDatabase } from 'react-icons/gi';
import { GrServer } from 'react-icons/gr';
import { HiMiniBellAlert } from 'react-icons/hi2';
import { MdAdminPanelSettings, MdPolicy, MdHealthAndSafety, MdAppSettingsAlt } from 'react-icons/md';
import { FaGhost } from 'react-icons/fa';
import { AiFillWarning, AiFillWindows } from 'react-icons/ai'


const Sidebar = () => {
//   const dispatch = useDispatch();

  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpandedPing, setIsExpandedPing] = useState(false);
  const [isDashboardSelected, setIsDashboardSelected] = useState(false);
  const [isSettingsSelected, setIsSettingsSelected] = useState(false);
  const [isMenuSelected, setIsMenuSelected] = useState(false);
  const [isOptionOneSelected, setIsOptionOneSelected] = useState(false);
  const [isOptionTwoSelected, setIsOptionTwoSelected] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
    setIsSettingsSelected(false);
    setIsDashboardSelected(false);
    setIsMenuSelected(false);
  };

  const handleDashboardClick = () => {
    setIsDashboardSelected(!isDashboardSelected);
    // navigate("/Dashboard");
  };

//   const handleSettingsClick = () => {
//     setIsSettingsSelected(!isSettingsSelected);
//   };

  const handleMenuClick = () => {
    setIsMenuSelected(!isMenuSelected);
  };

  const handleClick = () => {
    // Code to execute when the div is clicked
    console.log("Div clicked!");
    setIsOptionOneSelected(!isOptionOneSelected);
    // navigate("/Device-Manufacturer");
  };

  const handlePingClick = () => {
    setIsExpandedPing(!isExpandedPing);
    // dispatch(pingInfo(!isExpandedPing));
  };

  const handleDeviceModelManagementClick = () => {
    // Code to execute when the div is clicked
    console.log("Div clicked!");
    setIsOptionTwoSelected(!isOptionTwoSelected);
    // navigate("/Device-Model-Management");
  };

  return (
    <div
      className={`h-full shadow-2xl text-white flex flex-col items-${isExpanded || isExpandedPing ? "" : "center"
        }  transition-all duration-500 ${isExpanded || isExpandedPing ? "w-[20%]" : "w-16"
        } shadow-xl fixed bg-white`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={isExpandedPing ? handleMouseEnter : handleMouseLeave}
    >
      <div className="mb-12">
        {isExpanded || isExpandedPing ? (
          <div className="flex flex-col">
            <div className="flex flex-row p-2 justify-end cursor-pointer">
              <img
                // src={isExpandedPing ? PingIcon : GrayPingIcon}
                alt="Home"
                height={20}
                width={20}
                onClick={handlePingClick}
              />
            </div>
            <div className="flex flex-row">
              <div className="flex flex-col pl-6 items-center overflow-hidden">
                <div>
                  {/* <img src={ChatakIcon} alt="Home" height={20} width={200} /> */}
                </div>
                <div className="py-2">
                  <span className="text-sm font-semibold sidebar-font text-black whitespace-nowrap">
text
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center pt-10">
            {/* <img src={GirmitiIcon} alt="Home" width={25} height={25} /> */}
          </div>
        )}
      </div>

      <div
        className={`mb-4 mx-2 py-2 cursor-pointer ${isDashboardSelected ? "bg-orange-500 rounded-sm" : ""
          }`}
        onClick={handleDashboardClick}
      >
        {isExpanded || isExpandedPing ? (
          <div className="flex flex-row items-center justify-start space-x-6 pl-4">
            {/* <img
              src={isDashboardSelected ? PathWhiteIcon : PathOrangeIcon}
              alt="Home"
              width={23}
              height={23}
            /> */}
            <span
              className=" text-base font-semibold sidebar-font"
              style={{ color: isDashboardSelected ? "white" : "#A9A9A9" }}
            >
text
            </span>
          </div>
        ) : (
          <div className="flex items-center mt-4 justify-center">
            {/* <img src={PathOrangeIcon} alt="Home" width={23} height={23} /> */}
          </div>
        )}
      </div>

      <div
        className={`mx-2 py-2 cursor-pointer ${isMenuSelected ? "bg-orange-500 rounded-sm" : ""
          }`}
        onClick={handleMenuClick}
      >
        {isExpanded || isExpandedPing ? (
          <div className="flex flex-row items-center justify-start space-x-6 pl-4">
            {/* <img
              src={isMenuSelected ? MenuWhiteIcon : MenuIcon}
              alt="MenuIcon"
              width={26}
              height={26}
            /> */}
            <span
              className="text-base font-semibold sidebar-font"
              style={{ color: isMenuSelected ? "white" : "#A9A9A9" }}
            >
text
            </span>
            <div className="pl-16">
              {isMenuSelected ? <FaChevronDown color="white" size={17} />
                :
                <FaChevronRight color="#A9A9A9" size={17} />
              }</div>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            {/* <img src={MenuIcon} alt="MenuIcon" width={23} height={23} /> */}
          </div>
        )}
      </div>

      {isMenuSelected && (
        <div className="flex flex-col border-l-2 mt-2 rounded-b-xl border-[#FF931E] ml-8 ">
          <div className="flex flex-col max-h-[345px] gap-y-[4px]">
            <div
              className="flex flex-row  cursor-pointer items-center"
              onClick={handleClick}
            >
              <div className="w-2 h-[2px] mt-[2px] bg-[#FF931E] mr-1"></div>
              <div>
                <AiFillWindows
                  color={
                    true
                      ? "#FF931E"
                      : "black"
                  }
                  size={17}
                />
              </div>
              <span
                className="font-semibold sidebar-font pl-1 "
                style={{
                  color:
true                      ? "#FF931E"
                      : "black",
                }}
              >
                text
              </span>
            </div>

            <div
              className="flex flex-row  cursor-pointer items-center"
              onClick={handleDeviceModelManagementClick}
            >
              <div className="w-2 h-[2px] bg-[#FF931E] mr-1"></div>
              <div className="mt-[3px]">
                <MdAppSettingsAlt
                  color={
true                      ? "#FF931E"
                      : "black"
                  }
                  size={17}
                />
              </div>
              <span
                className="font-semibold sidebar-font pl-1 "
                style={{
                  color:
true                      ? "#FF931E"
                      : "black",
                }}
              >
                text
              </span>
            </div>


            <div
              className="flex flex-row  cursor-pointer items-center"
            // onClick={handleDeviceModelManagementClick}
            >
              <div className="w-2 h-[2px] mt-[2px] bg-[#FF931E] mr-1"></div>
              <div className="mt-[3px]">
                <GrServer
                  color={"grey"
                  }
                  size={17}
                />
              </div>
              <span
                className="font-semibold sidebar-font pl-1"
                style={{
                  color: "grey"
                }}
              >
                text
              </span>
            </div>

            <div
              className="flex flex-row  cursor-pointer items-center"
              onClick={handleDeviceModelManagementClick}
            >
              <div className="w-2 h-[2px] mt-[2px] bg-[#FF931E] mr-1"></div>
              <div className="mt-[3px]">
                <MdPolicy
                  className="gray-icon"
                  size={17}
                />
              </div>
              <span
                className="font-semibold sidebar-font pl-1"
                style={{
                  color: "grey"
                }}
              >
                text
              </span>
            </div>


            <div
              className="flex flex-row  cursor-pointer items-center"
            // onClick={handleDeviceModelManagementClick}
            >
              <div className="w-2 h-[2px] mt-[2px] bg-[#FF931E] mr-1"></div>
              <div className="mt-[3px]">
                <MdAdminPanelSettings
                  className="gray-icon"
                  size={17}
                />
              </div>
              <span
                className="font-semibold sidebar-font pl-1"
                style={{
                  color: "grey"
                }}
              >
                text
              </span>
            </div>


            <div
              className="flex flex-row  cursor-pointer items-center"
            // onClick={handleDeviceModelManagementClick}
            >
              <div className="w-2 h-[2px] mt-[2px] bg-[#FF931E] mr-1"></div>
              <div className="mt-[3px]">
                <BiSolidUserRectangle
                  color={"grey"
                  }
                  size={17}
                />
              </div>
              <span
                className="font-semibold sidebar-font pl-1"
                style={{
                  color: "grey"
                }}
              >
               text              </span>
            </div>


            <div
              className="flex flex-row  cursor-pointer items-center"
            // onClick={handleDeviceModelManagementClick}
            >
              <div className="w-2 h-[2px] mt-[2px] bg-[#FF931E] mr-1"></div>
              <div className="mt-[3px]">
                <ImMail
                  color={"grey"
                  }
                  size={17}
                />
              </div>
              <span
                className="font-semibold sidebar-font pl-1"
                style={{
                  color: "grey"
                }}
              >
                text
                              </span>
            </div>


            <div
              className="flex flex-row  cursor-pointer items-center"
            // onClick={handleDeviceModelManagementClick}
            >
              <div className="w-2 h-[2px] mt-[2px] bg-[#FF931E] mr-1"></div>
              <div className="mt-[3px]">
                <HiMiniBellAlert
                  className="gray-icon"
                  size={17}
                />
              </div>
              <span
                className="font-semibold sidebar-font pl-1"
                style={{
                  color: "grey"

                }}
              >
                text
              </span>
            </div>


            <div
              className="flex flex-row  cursor-pointer items-center"
            // onClick={handleDeviceModelManagementClick}
            >
              <div className="w-2 h-[2px] mt-[2px] bg-[#FF931E] mr-1"></div>
              <div className="mt-[3px]">
                <GiDatabase
                  className="gray-icon"
                  size={17}
                />
              </div>
              <span
                className="font-semibold sidebar-font pl-1"
                style={{
                  color: "grey"
                }}
              >
                text
              </span>
            </div>


            <div
              className="flex flex-row  cursor-pointer items-center"
            // onClick={handleDeviceModelManagementClick}
            >
              <div className="w-2 h-[2px] mt-[2px] bg-[#FF931E] mr-1"></div>
              <div className="mt-[3px]">
                <BiSort
                  className="gray-icon"
                  size={17}
                />
              </div>
              <span
                className="font-semibold sidebar-font pl-1"
                style={{
                  color: "grey"
                }}
              >
                text
              </span>
            </div>


            <div
              className="flex flex-row  cursor-pointer items-center"
            // onClick={handleDeviceModelManagementClick}
            >
              <div className="w-2 h-[2px] mt-[2px] bg-[#FF931E] mr-1"></div>
              <div className="mt-[3px]">
                <AiFillWarning
                  className="gray-icon"
                  size={17}
                />
              </div>
              <span
                className="font-semibold sidebar-font pl-1"
                style={{
                  color: "grey"
                }}
              >
                text
              </span>
            </div>


            <div
              className="flex flex-row  cursor-pointer items-center"
            // onClick={handleDeviceModelManagementClick}
            >
              <div className="w-2 h-[2px] mt-[2px] bg-[#FF931E] mr-1"></div>
              <div className="mt-[3px]">
                <MdHealthAndSafety
                  className="gray-icon"
                  size={17}
                />
              </div>
              <span
                className="font-semibold sidebar-font pl-1"
                style={{
                  color: "grey",
                }}
              >
               text
              </span>
            </div>




            <div
              className="flex  cursor-pointer ml-3 items-center"
            // onClick={handleDeviceModelManagementClick}
            >
              <div className="mt-[3px]">
                <MdPrivacyTip
                  className="gray-icon"
                  size={17}
                />
              </div>
              <span
                className="font-semibold sidebar-font pl-1 "
                style={{
                  color: "grey",
                }}
              >
                text
              </span>
            </div>
          </div>

          {/* <div
            className="flex cursor-pointer pl-11"
            onClick={handleDeviceModelManagementClick}
          >
            <span
              className="font-semibold sidebar-font"
              style={{
                color: location.pathname == "/Device-Model-Management"
                  ? "#FF931E"
                  : "black",
              }}
            >
              {LABELS.DEVICE_MODEL_MANAGEMENT}
            </span>
          </div> */}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
