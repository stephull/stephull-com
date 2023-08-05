const { DynamoDB, SES } = require('aws-sdk');

const dynamoDB = new DynamoDB.DocumentClient();
const ses = new SES();

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  const sendDataToDynamoDB = async (data) => {
    const params = {
      TableName: 'formDownload-stephull',
      Item: data
    };

    try {
      await dynamoDB.put(params).promise();
    } catch (err) {
      console.error('Error saving to database:', err);
    }
  }

  const sendNotificationViaSES = async (data) => {
    const toOwnerEmailParams = {
      Source: 'info@stephull.com',
      Destination: {
        ToAddresses: ['shullender0907@gmail.com']
      },
      Message: {
        Subject: {
          Data: 'Resume download from stephull.com detected!'
        },
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: `
              <html>
                <head>
                  <meta charset="utf-8" />
                </head>
                <body>
                  <p>
                    A user from this address: ${data.addr} has recently downloaded your resume file, as provided here: ${data.file}!
                  </p>
                  <p>
                    If you are curious of this location, learn more here: ${data.addr + `.ip-address-location.com`}
                  </p>
                  <p>
                    That's all. Thank you!
                  </p>
                </body>
              </html>
            `
          }
        }
      }
    }

    try {
      await ses.sendEmail(toOwnerEmailParams).promise();
    } catch (err) {
      console.error('Error sending email:', err);
    }
  }

  try {
    await sendDataToDynamoDB(event);
    await sendNotificationViaSES(event);

    const ts = Date.now().toString();

    return {
      statusCode: 200,
      body: JSON.stringify({
        data: {
          formDownloadInstance: {
            id: ts,
            success: true,
            message: 'Download instance created at timestamp ' + ts
          }
        }
      })
    }
  } catch (err) {
    console.error('Error handling download:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({
        errors: [
          {
            message: "An error occurred while processing form download."
          }
        ]
      })
    }
  }
};
