// Redirects to a specified URL.

// Use window.location.href or window.location.replace() to redirect to url. Pass a second argument to simulate a link click (true - default) or an HTTP redirect (false).

const redirect = (url, asLink = true) =>
  asLink ? window.location.href = url : window.location.replace(url);

// redirect('https://google.com')