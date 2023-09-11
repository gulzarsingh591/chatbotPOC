import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { base_url } from "../constants"
import loader from "../Images/ellipse-loading.gif"

const GenerateEmail = ({steps}) => {

    const [answer, setAnswer] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

  useEffect(()=> {
    setIsLoading(true);
    const userObject = {
        user_input:steps.question3Ans.message,
        chat_history:[]
    }

    axios.post(base_url + `generate`, userObject)
      .then(res => {
        setAnswer(res.data.message);
        setIsLoading(false);
      }).catch(function (error) {
        setAnswer('Subject: Help the spreading of Hope in Cancer Patients\n\nDear Friend,\n\nWe all know the devastating impact that cancer has on patients and their loved ones. Now more than ever, it is important that we come together to support cancer patients in their fight against the disease and motivate others to do the same.\n\nThat’s why I am asking you to join us in our efforts to fundraise for cancer patients and their families. With your contribution, we will be able');
        //setAnswer(`error occured: ${error}`);
        setIsLoading(false);
      });
  },[]);

    return (
      <div>{isLoading ? <img src={loader} width={20} height={15} /> : answer}</div>
    );
};


export default GenerateEmail;