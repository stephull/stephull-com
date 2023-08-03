const { DynamoDB, S3 } = require('aws-sdk');

const dynamodb = new DynamoDB.DocumentClient();
const s3 = new S3();

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  const sendDataToDynamoDB = async (data) => {
    const params = {
      TableName: "TimelinePicturePostData-stephull",
      Item: data
    };

    try {
      await dynamodb.put(params).promise();
    } catch (err) {
      console.error('Error saving to database:', err);
    }
  }

  const sendOptionalImageToS3 = async (data) => {
    try {

    } catch (err) {
      console.log('Error sending optional image to S3 bucket:', err);
    }
  }

  try {
    await sendDataToDynamoDB();
    await sendOptionalImageToS3();

    const ts = Date.now().toString();

    return {
      statusCode: 200,
      body: JSON.stringify({
        data: {
          createBlogPost: {
            id: ts,
            success: true,
            message: `Blog post for timeline successfully submitted at timestamp ${ts}`
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
