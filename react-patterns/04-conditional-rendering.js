// Conditional rendering

// You can’t use regular if/else conditions inside a component definition. The conditional (ternary) operator is your friend.

// if

{condition && <span>Rendered when `truthy`</span> }

// unless

{condition || <span>Rendered when `falsey`</span> }

// if-else (tidy one-liners)

{condition
  ? <span>Rendered when `truthy`</span>
  : <span>Rendered when `falsey`</span>
}

// if-else (big blocks)

{condition ? (
  <span>
    Rendered when `truthy`
  </span>
) : (
  <span>
    Rendered when `falsey`
  </span>
)}
