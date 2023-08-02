const { SES, DynamoDB } = require('aws-sdk');

const dynamoDB = new DynamoDB.DocumentClient();
const ses = new SES();

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
module.exports.handler = async (event) => {
  const sendDataToDynamoDB = async (data) => {
    const params = {
      TableName: 'ContactSubmissionData-stephull',
      Item: data
    };

    try {
      await dynamoDB.put(params).promise();
    } catch (err) {
      console.error('Error saving to database:', err);
    }
  }

  const sendEmailToSES = async (data) => {
    const toUserEmailParams = {
      Source: "noreply@stephull.com",
      Destination: {
        ToAddresses: [data.emailAddress]
      },
      Message: {
        Subject: { Data: 'Thank you for reaching out!' },
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: `
              <html>
                <head>
                  <meta charset="utf-8" />
                  <style>
                    a {
                      color: "#015bd8"
                    }
                    b {
                      color: "#015bd8"
                    }
                    blockquote {
                      color: "#ee6a00"
                    }
                  </style>
                </head>
                <body>
                  <p>
                    Hello <b>${data.firstName}!</b> We will reach out within a reasonable time to discuss the following inquiry as given from email ${data.emailAddress}:
                  </p>
                  <blockquote>
                    ${data.inquiry}
                  </blockquote>
                  <p>
                    We appreciate the time you've taken to contact at this time. Thank you and have a great day.
                  </p>
                  <br />
                  <p>
                    Best,
                  </p>
                  <p>
                    Stephen
                  </p>
                  <br/>
                  <small>
                    <a href="https://stephull.com" target="_blank">
                      Back to the website
                    </a>
                  </small>
                </body>
              </html>
            `
          }
        }
      }
    };

    const toOwnerEmailParams = {
      Source: "info@stephull.com",
      Destination: {
        ToAddresses: ["shullender0907@gmail.com"]
      },
      Message: {
        Subject: {
          Data: `You have mail! From stephull.com`
        },
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: `
              <html>
                <head>
                  <meta charset="utf-8" />
                </head>
                <body>
                  <p>
                    ${data.firstName} ${data.lastName ?? ""} found you from the following: ${data.howYouFound}
                  </p>
                  <p>
                    The following inquiry was sent from ${data.firstName} via ${data.emailAddress}:
                  </p>
                  <blockquote>
                    ${data.inquiry}
                  </blockquote>
                  <span>
                    Remember to respond using this email only: ${data.emailAddress}, and address them as ${data.firstName} ${data.lastName ?? ""}
                  </span>
                </body>
              </html>
            `
          }
        }
      }
    }

    try {
      await ses.sendEmail(toUserEmailParams).promise();
      await ses.sendEmail(toOwnerEmailParams).promise();
    } catch (err) {
      console.error('Error sending email:', err);
    }
  }

  try {
    await sendDataToDynamoDB(event);
    await sendEmailToSES(event);

    const ts = Date.now().toString();

    return {
      statusCode: 200,
      body: JSON.stringify({
        data: {
          createFormContact: {
            id: ts,
            success: true,
            message: `Form submitted successfully at timestamp ${ts}.`
          }
        }
      })
    }
  } catch (err) {
    console.error('Error handling form data:', err);

    return {
      statusCode: 500,
      body: JSON.stringify({
        errors: [
          {
            message: "An error occurred while processing form submission."
          }
        ]
      })
    }
  }
}