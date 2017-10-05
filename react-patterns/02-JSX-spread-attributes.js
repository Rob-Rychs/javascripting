// JSX spread attributes

// Spread Attributes is a JSX feature. It’s syntactic sugar for passing all of an object’s properties as JSX attributes.

// These two examples are equivalent.

// 1. props written as attributes
<main className="main" role="main">{children}</main>

// 2. props "spread" from object
<main {...{className: "main", role: "main", children}} />
// Use this to forward props to underlying components.

const FancyDiv = props =>
  <div className="fancy" {...props} />
// Now, I can expect FancyDiv to add the attributes it’s concerned with as well as those it’s not.

<FancyDiv data-id="my-fancy-div">So Fancy</FancyDiv>

// output: <div className="fancy" data-id="my-fancy-div">So Fancy</div>
// Keep in mind that order matters. If props.className is defined, it’ll clobber the className defined by FancyDiv

<FancyDiv className="my-fancy-div" />

// output: <div className="my-fancy-div"></div>
// We can make FancyDivs className always “win” by placing it after the spread props ({...props}).

// my `className` clobbers your `className`
const FancyDiv = props =>
  <div {...props} className="fancy" />
// You should handle these types of props gracefully. In this case, I’ll merge the author’s props.className with the className needed to style my component.

const FancyDiv = ({ className, ...props }) =>
  <div
    className={["fancy", className].join(' ')}
    {...props}
  />