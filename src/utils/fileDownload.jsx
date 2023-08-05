import axios from "axios";
import { 
  apiKeyApiGateway, 
  s3ResumeLink, 
  apiIdentify, 
  lambdaDownloadNotification
} from "../envConfig";

export const handleDownload = async (e) => {
    e.preventDefault();

    try {
      const address = (await axios.get(apiIdentify)).data.ip;
      const response = await axios.post(
        lambdaDownloadNotification,
        {
          id: Date.now().toString(),
          file: s3ResumeLink,
          addr: address
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKeyApiGateway
          }
        }
      );

      let responseBody = JSON.parse(response.data.body);
      let resData = responseBody.data.formDownloadInstance;
      if (resData.success) {
        console.log(resData);
      }
      
      const downloadLink = document.createElement('a');
      downloadLink.href = s3ResumeLink;
      downloadLink.click();
    } catch (err) {
      console.error(err);
    }
  }