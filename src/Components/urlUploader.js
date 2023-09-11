import React,{ useState } from 'react'
import loader from "../Images/spinner2.gif"
import {base_url} from "../constants"
import { ReactTinyLink } from "react-tiny-link"
import axios from 'axios'

function URLUploader() {
  const [url, setURL] = useState('');
  const [isUploadSuccess, setIsUploadSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const uploadURL = () => {
    setIsLoading(true);    
    const payload = { "URL": url };
    axios.post(base_url+`process/URL`, payload)
      .then(res => {
        setIsLoading(false);
        setIsUploadSuccess(true);
      })
      .catch(error => {
        console.log(error)
        setIsLoading(false);
        setIsUploadSuccess(false);
      }
      );
  };


  return (<>
                <div style={{width:'350px',marginTop:'5px'}}>                    
                    <input
                      type="text"
                      value={url}
                      onChange={(e) => {
                        setURL(e.target.value)
                        setIsUploadSuccess(false)}
                      }
                      className="url-input-style"
                      placeholder="URL"
                    />
                    <input type="submit" value="Upload" style={{marginLeft:'5px'}} onClick={uploadURL} />
                  </div>
    {isLoading ? <img src={loader} width={30} height={30} className='centerImg' /> : 
    (isUploadSuccess?<ReactTinyLink
        cardSize="small"
        showGraphic={true}
        maxLine={2}
        minLine={1}
        //proxyUrl="https://cors-anywhere.herokuapp.com"
        url={url}
      />:null)}
  </>
  );
}

export default URLUploader;