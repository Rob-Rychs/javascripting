// CONTAINER COMPONENT
class Posts extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [{ title: 'Hello, world!' }]
    };
  }
  render() {
    return <PostList posts={this.state.posts} />;
  }
}
// PRESENTATIONAL COMPONENT
const PostList = ({ posts }) => (
  <ul>
    { posts.map((post) => <li>{post.title}</li>) }
  </ul>
);