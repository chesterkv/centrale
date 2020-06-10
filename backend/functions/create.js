const uuid = require('uuid');
const DynamoDB = require('aws-sdk/clients/dynamodb');

module.exports.handle = async event => {
    console.log(event.body)
    const data = JSON.parse(event.body);

    if (!process.env.tableName) {
        throw new Error('env.tableName must be defined');
    }
    const dynamoDb = new DynamoDB.DocumentClient();

    const item = {
        type: 'Movie',
        uuid: uuid.v1(),
        name: 'blade runner',
        CreatedAt : Date.now()
    }

    await dynamoDb.put({
        TableName: process.env.tableName,
        Item: item,
    }).promise();

    return {
        statusCode: 200,
        body: JSON.stringify(item),
    }
}

