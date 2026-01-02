const http = require("http");
const { URL } = require("url");

const bodyParser = require("./helpers/bodyParser");
const routes = require("./routes");

const server = http.createServer((request, response) => {
  const parsedUrl = new URL(`http://localhost:3000${request.url}`);

  console.log(
    `Request Method: ${request.method} | EndPoint: ${parsedUrl.pathname} |`
  );

  let { pathname } = parsedUrl;
  let id = null;

  const splitEndPoint = pathname.split("/").filter(Boolean);
  console.log(splitEndPoint);

  if (splitEndPoint.length > 1) {
    pathname = `/${splitEndPoint[0]}/:id`;
    id = splitEndPoint[1];
  }

  const route = routes.find(
    (routeObject) =>
      routeObject.endpoint === pathname && routeObject.method === request.method
  );

  if (route) {
    request.query = Object.fromEntries(parsedUrl.searchParams);
    request.params = { id };

    response.send = (statusCode, body) => {
      response.writeHead(statusCode, { "Content-type": "text/html" });
      response.end(JSON.stringify(body));
    };
    if (["POST", "PUT", "PATCH"].includes(request.method)) {
      bodyParser(request, () => route.handler(request, response));
    } else {
      route.handler(request, response);
    }
  } else {
    response.writeHead(404, { "Content-type": "text/html" });
    response.end(`Cannot ${request.method} ${parsedUrl.pathname}`);
  }
});

server.listen(3000, () => {
  console.log(" 🔥 server started at http://localhost:3000");
});
