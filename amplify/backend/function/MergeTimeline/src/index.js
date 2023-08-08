const getBlogs = require('../../GetBlogPost/src/index');
const getPictures = require('../../GetPicturePost/src/index');

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  try {
    const blogs = await getBlogs.handler(event).body;
    const pics = await getPictures.handler(event).body;

    const arr = [...blogs, ...pics].sort((a, b) => {
      return new Date(b.upload) - new Date(a.upload)
    });

    return {
      statusCode: 200,
      body: arr
    };

  } catch (err) {
    console.error(err);

    return {
      statusCode: 500,
      body: JSON.stringify({
        errors: [
          {
            message: "An error occurred attempting to merge all timeline posts into one."
          }
        ]
      })
    }
  }
};
