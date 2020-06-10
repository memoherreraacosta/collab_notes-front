import React from "react";
import { Button, Form} from 'react-bootstrap';
import S3 from 'react-aws-s3';

const config = {
    bucketName: 'a01632704',
    region: 'us-east-2',
    accessKeyId: 'AKIAJQDQ5GG2OTRZAFWA',
    secretAccessKey: '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'
}

const ReactS3Client = new S3(config);

class Upload extends React.Component {
    constructor(){
        super();
    }
    upload(e){
        console.log(e.target.files[0]);
        ReactS3Client.uploadFile(e.target.files[0], e.target.files[0].name)
        .then((data)=>{
            console.log(data.location);
        })
        .catch((err)=>{
            alert(err)
        })
    }
    render(){
        return(
            <div>
                <h3>
                    aws upload
                </h3>
                <input 
                type="file"
                onChange={this.upload}
                />
            </div>
        )
    }
}

export default Upload;
