const { DynamoDB, S3 } = require('aws-sdk');

const dynamodb = new DynamoDB.DocumentClient();
const s3 = new S3();

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  const sendDataToDynamoDB = async (data) => {
    const params = {
      TableName: "TimelineBlogPostData-stephull",
      Item: data
    };

    try {
      await dynamodb.put(params).promise();
    } catch (err) {
      console.error('Error saving to database:', err);
    }
  }

  const sendDataToS3 = async (data) => {
    //
    const params = {
      
    }
    
    try {
      await s3.upload
    } catch (err) {
      console.error('Error submitting image data to S3 bucket:', err);
    }
  }

  try {
    await sendDataToDynamoDB();
    await sendDataToS3();

    const ts = Date.now().toString();

    return {
      statusCode: 200,
      body: JSON.stringify({
        data: {
          createPicturePost: {
            id: ts,
            success: true,
            message: `Picture post for timeline successfully submitted at timestamp ${ts}`,
            data: event
          }
        }
      })
    }
  } catch (err) {
    console.error('Error posting picture post to timeline:', err);

    return {
      statusCode: 500,
      body: JSON.stringify({
        errors: [
          {
            message: "An error occurred while processing the new picture post submission."
          }
        ]
      })
    }
  }
};
