// Style Component

// This is a Proxy component applied to the practices of style.

// Say we have a button. It uses classes to be styled as a “primary” button.

<button type="button" className="btn btn-primary">
{/* We can generate this output using a couple single-purpose components. */}

const PrimaryBtn = props =>
  <Btn {...props} primary />

const Btn = ({ className, primary, ...props }) =>
  <button
    type="button"
    className={classnames(
      "btn",
      primary && "btn-primary",
      className
    )}
    {...props}
  />
{/* It can help to visualize this. */}

PrimaryBtn()
  ↳ Btn({primary: true})
    ↳ Button({className: "btn btn-primary"}, type: "button"})
      ↳ '<button type="button" class="btn btn-primary"></button>'
{/* Using these components, all of these result in the same output. */}

<PrimaryBtn />
<Btn primary />
<button type="button" className="btn btn-primary" />
{/* This can be a huge boon to style maintenance. It isolates all concerns of style to a single component. */}
