

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    return {
        statusCode: 200,
        body: ({
            message: "If you're reading this, it means I'm alive!!!",
            event: event
        })
    }
};
