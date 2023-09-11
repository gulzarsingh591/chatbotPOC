import axios from 'axios';
import { useState } from 'react';

import React, { Component } from 'react';

function FileUpload() {

    const [selectedFile, setSelectedFile] = useState(null);
    // state = {
    //     selectedFile: null
    // }; 

    const onFileChange = event => {
        setSelectedFile(event.target.files[0]);
    };

    const onFileUpload = () => {
        const formData = new FormData();
        formData.append(
            "file",
            selectedFile
            //selectedFile.name
        );
        fetch("http://ai-knowledge-base-api.eastus.cloudapp.azure.com:5002/api/v1/kb/process/document", {
            // content-type header should not be specified!
            method: 'POST',
            body: formData,
        })
            .then(response =>{ 
                response.json()
                console.log(response)
                // Do something with the successful response
                //fileData();
                return (
                    <div>
                        <h2>File Details:</h2>
                        <p>File Name: {selectedFile.name}</p>
                        <p>File Type: {selectedFile.type}</p>
                        <p>
                            Last Modified:{" "}
                            {selectedFile.lastModifiedDate.toDateString()}
                        </p>
                        <p>
                            Summary:{" "}
                            {response.summary}
                        </p>
    
                    </div>
                );
            })
            .then(success => {
               
            })
            .catch(error => console.log(error)
            );
        // axios.post("http://ai-knowledge-base-api.eastus.cloudapp.azure.com:5002/api/v1/kb/process/document", {body:formData})
        //       .then(function (response) {
        //         console.log("response is: "+response);
        //         //setFieldsData(response.data.data);
        //       })
        //       .catch(function (response) {
        //         console.log("response is: "+response);
        //       });

        console.log(selectedFile);

        //  axios.post("api/uploadfile", formData);
    };

    // const fileData = () => {
    //     if (selectedFile) {
    //         return (
    //             <div>
    //                 <h2>File Details:</h2>
    //                 <p>File Name: {selectedFile.name}</p>
    //                 <p>File Type: {selectedFile.type}</p>
    //                 <p>
    //                     Last Modified:{" "}
    //                     {selectedFile.lastModifiedDate.toDateString()}
    //                 </p>

    //             </div>
    //         );
    //     }
    //     // else {
    //     //     return (
    //     //         <div>
    //     //             <br />
    //     //             <h4>Choose before Pressing the Upload button</h4>
    //     //         </div>
    //     //     );
    //     // }
    // };

    return (
        <div>
            <h3>
                Please upload file for Knowledge base
            </h3>
            <div>
                <input type="file" onChange={onFileChange} />
                <button onClick={onFileUpload}>
                    Upload!
                </button>
            </div>
            {/* {fileData()} */}
        </div>
    );
}

export default FileUpload;