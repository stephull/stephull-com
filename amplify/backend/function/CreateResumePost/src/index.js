const { DynamoDB } = require('aws-sdk');

const dynamoDB = new DynamoDB.DocumentClient();

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  const sendDataToDynamoDB = async (data) => {
    const params = {
      TableName: "ResumeTextPosts-stephull",
      Item: data
    };

    try {
      await dynamoDB.put(params).promise();
    } catch (err) {
      console.error("Error saving to database:", err);
    }
  }

  try {
    await sendDataToDynamoDB(event);
  
    const ts = Date.now().toString();

    return {
      statusCode: 200,
      body: JSON.stringify({
        data: {
          createTextPost: {
            id: ts,
            success: true,
            message: "Text component for resume saved as new resume post."
          }
        }
      })
    }
  } catch (err) {
    console.error("Error handling text post for resume:", err);

    return {
      statusCode: 500,
      body: JSON.stringify({
        errors: [
          {
            message: "An error occurred while processing the text post for resume:"
          }
        ]
      })
    }
  }
};
