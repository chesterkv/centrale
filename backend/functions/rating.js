const uuid = require('uuid');
const DynamoDB = require('aws-sdk/clients/dynamodb');

module.exports.handle = async event => {
    console.log(event.body)
    const data = JSON.parse(event.body);

    const body = JSON.parse(event.body);
    const name_user = body.name_user;
    const name_movie= body.name_movie;
    const rating = body.rating;
    
    const film = (await Util.DocumentClient.get({
      TableName: articlesTable,
      Key: { slug },
    }).promise()).Item;
    if (!article) {
      return Util.envelop(`Article not found: [${slug}]`, 422);
    }

    // Ensure article is authored by authenticatedUser
    if (article.author !== authenticatedUser.username) {
      return Util.envelop('Article can only be updated by author: ' +
        `[${article.author}]`, 422);
    }

    // Apply mutations to retrieved article
    ['title', 'description', 'body'].forEach(field => {
      if (articleMutation[field]) {
        article[field] = articleMutation[field];
      }
    });
    await Util.DocumentClient.put({
      TableName: articlesTable,
      Item: article,
    }).promise();

    const updatedArticle = (await Util.DocumentClient.get({
      TableName: articlesTable,
      Key: { slug },
    }).promise()).Item;

    return Util.envelop({
      article: await transformRetrievedArticle(
        updatedArticle, authenticatedUser),
    });
  },
