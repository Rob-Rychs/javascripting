// Proxy compponent

// (I’m not sure if this name makes sense) maybe try 'generic component'

// Buttons are everywhere in web apps. And every one of them must have the type attribute set to “button”

<button type="button">
{/* Writing this attribute hundreds of times is error prone. We can write a higher level component to proxy props to a lower-level button component. */}

const Button = props =>
  <button type="button" {...props}></button>
{/* We can use Button in place of button and ensure that the type attribute is consistently applied everywhere. */}

<Button />
 {/* outputs <button type="button"><button> */}

<Button className="CTA">Send Money</Button>
{/* outputs <button type="button" class="CTA">Send Money</button> */}