"use client";
import { useState } from "react";
import axios from "axios";
import style from "@/styles/Other.module.css";
import Image from "next/image";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { BASE_URL } from "@/utils/constants";


const FileuploadExtra = () => {
  const [file, setFile] = useState(null);
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [isLoading, setIsLoading]= useState(false);

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onFileUpload = () => {
    const formData = new FormData();
    formData.append("file", file);
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/upload-general`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          setUploadPercentage(parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total)));
        },
      })
      .then((response) => {
        console.log(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("There was an error uploading the file!", error);
      });
  };
  return (
    <div className={`${style["section-upload"]}`}>
      <header className={`${style["section-upload-body"]}`}>
        <div className={`${style["fileuploadinputmain"]}`}>
          <div className={`${style["fileuploadheader"]}`}>
            <div className={`${style["headerimagediv"]}`}>
              <Image className={`${style["commonimageclass"]}`} src="/images/icons/uploadicon.svg" alt="upload" width={0} height={0} />
            </div>
            <p className={`${style["textpara"]}`}>Browse File to upload!</p>
          </div>
          <label htmlFor="uploadfile" className={`${style["fileuploadfooter"]}`}>
            <div className={`${style["footericondiv"]}`}>
              <Image className={`${style["commonimageclass"]}`} src="/images/icons/documenticon.svg" alt="icon" width={0} height={0} />
            </div>
            <p className={`${style["infolabel"]}`}>{file?.name || "Not Selected File"}</p>
            <div className={`${style["footericondiv"]}`}>
              <Image className={`${style["commonimageclass"]}`} src="/images/icons/deleteicon.svg" alt="delete" width={0} height={0} />
            </div>
          </label>
          <input id="uploadfile" className={`${style["hiddenfileinput"]}`} onChange={onFileChange} type="file" />
        </div>

        <div className={`${style["buttondiv"]}`}>
          <button className={`${style["uploadbtn"]}`} onClick={onFileUpload}>
            Submit
          </button>
        </div>

        {file && uploadPercentage > 0 && (
          <div className={style["circular-progress-container"]}>
            <CircularProgressbar
              value={uploadPercentage}
              text={`${uploadPercentage}%`}
              styles={buildStyles({
                textColor: "#000",
                pathColor: "#4caf50",
                trailColor: "#f3f3f3",
              })}
            />
          </div>
        )}
      </header>
    </div>
  );
};

export default FileuploadExtra;
