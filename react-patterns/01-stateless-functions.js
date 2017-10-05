// Stateless Functions

// Stateless functions are a brilliant way to define highly reusable components. They don’t hold state; they’re just functions.

const Greeting = () => <div>Hi there!</div>
// They get passed props and context.

const Greeting = (props, context) =>
  <div style={{color: context.color}}>Hi {props.name}!</div>
// They can define local variables, where a function block is used.

const Greeting = (props, context) => {
  const style = {
    fontWeight: "bold",
    color: context.color,
  }

  return <div style={style}>{props.name}</div>
}
// But you could get the same result by using other functions.

const getStyle = context => ({
  fontWeight: "bold",
  color: context.color,
})

const Greeting = (props, context) =>
  <div style={getStyle(context)}>{props.name}</div>
// They can have defined defaultProps, propTypes and contextTypes.

Greeting.propTypes = {
  name: PropTypes.string.isRequired
}
Greeting.defaultProps = {
  name: "Guest"
}
Greeting.contextTypes = {
  color: PropTypes.string
}