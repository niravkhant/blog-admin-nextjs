import React from "react";

const CommonPopup = ({ handleClosePopup, titleMessage, actionButtonText, handleMainEvent }) => {
  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="fixed inset-0 w-full h-full bg-black bg-opacity-40">
        <div className="fixed inset-0 w-full h-full" />
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg mx-auto px-4">
          <div className="bg-white rounded-md shadow-lg px-4 py-6">
            <div className="flex items-center justify-end">
              <button className="p-2 text-gray-400 rounded-md hover:bg-gray-100" onClick={() => handleClosePopup}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="max-w-sm mx-auto space-y-3 text-center">
              <h2 className="text-lg font-medium text-gray-800">{titleMessage}</h2>
              <p className="text-sm text-gray-600">Are you sure?</p>
              <button
                onClick={handleMainEvent}
                className="w-50 mt-3 mr-3 py-3 px-4 font-medium text-sm text-center text-white bg-red-500 hover:bg-black/80 active:bg-indigo-700 rounded-lg ring-offset-2 ring-indigo-600 focus:ring-2"
              >
                {actionButtonText}
              </button>
              <button
                onClick={() => handleClosePopup}
                className="w-50 border mt-3 py-3 px-4 font-medium text-sm text-center text-black border-green-100 hover:bg-gray-400 active:bg-indigo-700 rounded-lg ring-offset-2 ring-indigo-600 focus:ring-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonPopup;
