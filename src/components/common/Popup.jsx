import React from "react";

const Popup = (props) => {

  return (
    <div
      className="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
      style={{ background: "rgba(0, 0, 0, 0.5)" }}
      id="modal-id"
    >
      <div className="absolute bg-black opacity-80 inset-0 z-0" />
      <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
        <button className="close-btn rounded-md hover:bg-gray-100 w-8 h-8 leading-3 absolute right-3 top-2 text-4xl" onClick={props.handleClose}>
          &times;
        </button>
        <div className="">
          {/*body*/}
          <div className="text-center p-5 flex-auto justify-center">
            <div className="popupicon w-16 h-16 overflow-hidden mx-auto">
              <img className="w-full h-full object-contain" src={props.image} alt="popup icon" />
            </div>
            <h2 className="text-xl font-bold py-4 text-black ">{props.popupMainTitle}</h2>
            <p className="text-sm text-gray-600 px-8">{props.popupDescriptionText}</p>
          </div>
          {/*footer*/}
          <div className="p-3 mt-2 text-center space-x-4 md:block">
            <button
              onClick={props.handleActionClick}
              className="mb-2 md:mb-0 bg-black border px-5 py-2 font-semibold leading-7 text-white rounded-md hover:bg-black/80 hover:shadow-lg"
            >
              {props.actionButtonName}
            </button>
            <button
              onClick={props.handleClose}
              className="mb-2 md:mb-0 bg-white px-5 py-2 font-semibold leading-7 shadow-sm tracking-wider border text-gray-600 rounded-md hover:shadow-lg hover:bg-gray-100"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;

// how to call this component

// <Popup
//   isOpen={isOpen}
//   image={"images/delete_icon.svg"}
//   popupMainTitle={"Are You Sure ?"}
//   popupDescriptionText={"Do you really want to delete your account? This process cannot be undone"}
//   actionButtonName={"Delete"}
//   handleActionClick={handleActionClick}
//   handleClose={handleClose}
// />;
