const { DynamoDB, S3 } = require('aws-sdk');
const uuid = require('uuid');

const dynamodb = new DynamoDB.DocumentClient();
const s3 = new S3();

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  const sendDataToDynamoDB = async (data, mediaUrls) => {
    const { title, location, uploadDate } = data;
    
    const linkUrls = links.map((link) => {
      return link.url;
    });

    const params = {
      TableName: "TimelineBlogPostData-stephull",
      Item: {
        id: uuid.v5(),
        title,
        location,
        uploadDate,
        media: mediaUrls,
        links: linkUrls
      }
    };

    try {
      await dynamodb.put(params).promise();
    } catch (err) {
      console.error('Error saving to database:', err);
    }
  }

  const sendDataToS3 = async (data) => {
    const bucketName = "stephullcom-storage-ecac3f19172857-dev/public"; 
    const { media } = data;

    const uploadedMediaUrls = await Promise.all(
      media.map( async (file) => {
        const objectKey = `media/${uuid.v5()}`;
        const params = {
          Bucket: bucketName,
          Key: objectKey,
          Body: file
        };
        try {
          await s3.upload(params).promise();
          return `https://${bucketName}/${objectKey}`;
        } catch (err) {
          console.error('Error submitting image data to S3 bucket:', err);
        }
      })
    );

    return uploadedMediaUrls;
  }

  try {
    const mediaUrls = await sendDataToS3(event);
    await sendDataToDynamoDB(event, mediaUrls);

    const ts = Date.now().toString();

    return {
      statusCode: 200,
      body: JSON.stringify({
        data: {
          createPicturePost: {
            id: ts,
            success: true,
            message: `Blog post for timeline successfully submitted at timestamp ${ts}`,
            data: event
          }
        }
      })
    }
  } catch (err) {
    console.error('Error posting blog post to timeline:', err);

    return {
      statusCode: 500,
      body: JSON.stringify({
        errors: [
          {
            message: "An error occurred while processing the new blog post submission."
          }
        ]
      })
    }
  }
};
