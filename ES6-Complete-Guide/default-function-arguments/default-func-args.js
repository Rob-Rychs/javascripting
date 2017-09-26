// es5
function makeAjaxRequest(url, method) {
  if (!method) {
    method = 'GET';
  }
  
  //logic to make the request
}
makeAjaxRequest('google.com');
makeAjaxRequest('google.com', 'GET');

// es6 eith default values for function arguments
function makeAjaxRequest(url, method = 'GET') {
  return method;
  //logic to make the request
}
makeAjaxRequest('google.com');
makeAjaxRequest('google.com', 'POST');
// use undefined to get default 'GET' value
makeAjaxRequest('google.com', undefined);
// use null to cancel argument
makeAjaxRequest('google.com', null);

