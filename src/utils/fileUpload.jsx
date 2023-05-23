import { Amplify, Storage, API } from 'aws-amplify';
import { DataStore } from '@aws-amplify/datastore';
import { Content, ContentType } from "../models/index";
import awsconfig from '../aws-exports';

const fileUpload = async (file, fileTitle) => {  
  Amplify.configure(awsconfig);
  Amplify.configure({
    Auth: {
      identityPoolId: awsconfig.aws_cognito_identity_pool_id,
      region: awsconfig.aws_cognito_region
    },
    Storage: {
      AWSS3: { 
        bucket: awsconfig.aws_user_files_s3_bucket,
        region: awsconfig.aws_user_files_s3_bucket_region 
      }
    }
  });

  const getContentType = (type) => {
    return (type.includes("video"))
      ? ContentType.VIDEO
      : (type.includes("image"))
        ? ContentType.IMAGE : undefined;
  }

  try {
    const uploadContentUrl = `uploads/${Date.now()}-${file.name}`;
    const { key: fileUrl } = await Storage.put(
      uploadContentUrl, 
      file, 
      { 
        level: "public",
        region: awsconfig.aws_project_region,
        contentType: file.type,
        identityId: awsconfig.aws_cognito_identity_pool_id
      }
    );

    console.log("CHECKINGGGG");

    const fileType = getContentType(file.type);
    const newRecord = { 
      type: fileType,
      title: fileTitle,
      blogtimelineID: null,
      mediatimelineID: null,
      source: fileUrl 
    };

    // step 1
    const apiResponse = await API.post(
      'stephullcom', 
      '/Content', 
      { body: newRecord }
    );

    // step 2
    const createdItem = await DataStore.save(
      new Content(newRecord)
    );

    console.log("File upload successful:", apiResponse, "::", createdItem);
  } catch (err) {
    console.error("Error uploading file:", err);
  }
}

export default fileUpload;