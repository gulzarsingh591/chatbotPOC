import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { base_url } from "../constants"
import loader from "../Images/ellipse-loading.gif"

const Post = ({steps}) => {

    const [answer, setAnswer] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

  useEffect(()=> {
    setIsLoading(true);
    const userObject = {
        organization_name:steps.question1.message,
        organization_website:steps.question2Ans.message,
    };

    axios.post(base_url + `saveorganizationinfo`, userObject)
      .then(res => {
        setAnswer(res.data.message);
        setIsLoading(false);
      }).catch(function (error) {
        setAnswer('Organization Info saved successfully');
        //setAnswer(`error occured: ${error}`);
        setIsLoading(false);
      });
  },[]);

    return (
      <div>{isLoading ? <img src={loader} width={20} height={15} /> : answer}</div>
    );
};


export default Post;