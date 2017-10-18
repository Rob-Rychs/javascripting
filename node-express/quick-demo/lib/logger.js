export default function diyLogger(request, response, next) {
  const start = +new Date();
  const stream = process.stdout;
  const { url, method } = request;
  const { statusCode } = response;
  response.on('finish', function () {
    const time = new Date() - start;
    console.log(`${method} ${url} ${statusCode} ${time} ms`);
  });
  next();
}
