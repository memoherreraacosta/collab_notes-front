import React from "react";
import { Button, Form} from 'react-bootstrap';
import S3 from 'react-aws-s3';

const Upload = () => {

    const sendFile = () => {
        console.log("hereee")
        const config = {
            bucketName: 'a01632704',
            region: 'eu-east-2',
            accessKeyId: 'AKIAJQDQ5GG2OTRZAFWA',
            secretAccessKey: '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',
            s3Url: 'https://a01632704.s3.us-east-2.amazonaws.com/'
        }
     
        const ReactS3Client = new S3(config);
        
        const filename = 'myimage.png';
        ReactS3Client
        .uploadFile(filename)
        .then(response => console.log(response))
        .catch(err => console.error(err))
    }

    return (
        <div>
           <>
               <button onClick={console.log("dsdsdsd")}>Upload your notes files</button>

           </>
        </div>
            
    );
};

export default Upload;
