const uuid = require('uuid');
const DynamoDB = require('aws-sdk/clients/dynamodb');

module.exports.handle = async event => {
    console.log(event.body)
    const data = JSON.parse(event.body);

    if (!process.env.tableName) {
        throw new Error('env.tableName must be defined');
    }
    const dynamoDb = new DynamoDB.DocumentClient();

    var result = await dynamoDb.get({
      TableName: process.env.tableName,
      Key: {
          type: 'user',
          name: data.name_user,
      },
    }).promise();

    var ratings_new=result.ratings;
    ratings_new[data.name_movie]=data.rating;
    result.ratings=ratings_new;

    await dynamoDb.updateItem(result, functin(err,data){
      if (err) console.log(err,err.stack);
      else console.log(data)
    });

    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Credentials': 'true',
          },
        body: JSON.stringify(result),
    }
}
