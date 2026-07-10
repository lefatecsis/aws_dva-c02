exports.handler = async (event) => { let count = 0; for(let i=0; i<10000000; i++) { count += i; } return { statusCode: 200, result: count }; };
