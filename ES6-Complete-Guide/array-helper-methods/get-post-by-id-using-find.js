// looking through an array to return a specific object based on property value

// example url: "forum.com/posts/4"
const posts = [
  { id: 1, title: 'Did you know' },
  { id: 2, title: 'They say I\'m cool' },
  { id: 3, title: 'Check this' },
  { id: 4, title: 'Peeps this' },
  { id: 5, title: 'Read me' },
  { id: 6, title: 'For real doe' }
];

// normally const postId = getIdFromURL(); here we'll just hard code it

const postId = 4;

const returnedPost = posts.find(post => post.id === postId);

returnedPost;