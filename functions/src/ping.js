exports.handler = function(event, context, callback){
  console.log( JSON.stringfy(event, null, 4) )
  callback(null,  { statusCode: 200,
                    body: JSON.stringify(event)
  });
}

