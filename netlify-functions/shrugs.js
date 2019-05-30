const querystring = require('querystring');

exports.handler = async (event, context) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    const params = querystring.parse(event.body);
    const text = params.text;
    const command = params.command;

    return {
        statusCode: 200,
        body: `¯\\_('-')_/¯`
    }
}