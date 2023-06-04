import { SES, DynamoDB } from 'aws-sdk';

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
export async function handler(event) {
    try {
        console.log("Received event data\n" + JSON.stringify(event));
        const formData = JSON.parse(event.body);
        await sendDataToDynamoDB(formData);
        await sendEmailToSES(formData.emailAddress);
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Form submitted successfully'
            })
        }
    } catch (err) {
        console.error('Error handling form data:', err);
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: 'An error occurred while processing the form submission data'
            })
        }
    }
}

const dynamoDB = new DynamoDB.DocumentClient();
const sendDataToDynamoDB = async (data) => {
    const params = {
        TableName: 'ContactSubmissionData-stephull',
        Item: {
            ...data,
            id: Date.now().toString()
        }
    };
    
    try {
        await dynamoDB.put(params).promise();
    } catch (err) {
        console.error('Error saving to database:', err);
        throw err;
    }
}

const sendEmailToSES = async (email) => {
    const emailParams = {
        Source: "stephjkla0907@gmail.com",
        // change this later
        Destination: {
            ToAddresses: [email]
        },
        Message: {
            Subject: { Data: 'Thank you for submitting your form '},
            Body: {
                Text: {
                    Data: "Insert text here, from Stephen :-)"
                }
            }
        }
    }

    try {
        await (new SES()).sendEmail(emailParams).promise();
    } catch (err) {
        console.error('Error sending email:', err);
        throw err;
    }
}