const { DynamoDB } = require('aws-sdk');
const dynamodb = new DynamoDB.DocumentClient();

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  try {
    const result = await dynamodb.scan({
      TableName: "TimelinePicturePostData-stephull"
    }).promise();

    return {
      statusCode: 200,
      body: result.Items
    }
  } catch (err) {
    console.error(err);

    return {
      statusCode: 500,
      body: JSON.stringify({
        errors: [
          {
            message: "An error occurred while fetching picture posts."
          }
        ]
      })
    }
  }
};
