import React, { useState } from 'react'
import { FileUploader } from "react-drag-drop-files"
import loader from "../Images/spinner2.gif"
import { base_url } from "../constants"
import URLUploader from './urlUploader';
import axios from 'axios';

const fileTypes = ["csv", "docx", "pdf", "mp3", "mp4"];

function DragDrop() {
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [summary, setSummary] = useState(null);
  const handleChange = (file) => {
    setIsLoading(true);
    setFile(file);
    const formData = new FormData();
    formData.append(
      "file",
      file
      //selectedFile.name
    );
    axios.post(base_url + "process/document", formData)
      .then(response => {
        //  response.json()
        console.log(response)
        setIsLoading(false);
        setSummary(response.data.summary)
      })
      .catch(error => {
        console.log(error)
        setIsLoading(false);
      }
      );
  };

  const fileData = () => {
    if (file) {
      return (
        <div>
          {/* <h4>File Details:</h4> */}
          <span className='outerSpan'><b>File Name: </b>
            <span className='innerSpan'>{file.name}</span></span>
          <br />
          {/* <h6>File Type: {file.type}</h6> */}
          {/* <h6>
            Last Modified:{" "}
            {file.lastModifiedDate.toDateString()}
          </h6> */}
          <span className='outerSpan'><b>
            Summary:{" "}</b>
            <div className='spanDiv'><span className='innerSpan'>{summary}</span></div>
          </span>

        </div>
      );
    }
  };

  return (<>
    <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
    <URLUploader />
    {isLoading ? <img src={loader} width={30} height={30} className='centerImg' /> : (summary ? fileData() : null)}
  </>
  );
}

export default DragDrop;