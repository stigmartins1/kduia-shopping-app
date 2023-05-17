/* https://react.dev/learn/responding-to-events
Event handlers will also catch events from any children your component might have. 
We say that an event “bubbles” or “propagates” up the tree: it starts with where the
event happened, and then goes up the tree.

This <div> contains two buttons. Both the <div> and each button have their own onClick
handlers. Which handlers do you think will fire when you click a button? */

export default function EventPropagationStop() {
  return (
    <div
      className="Toolbar"
      onClick={() => {
        alert("You clicked on the toolbar!");
      }}
    >
      <h2>This is the EventPropagation component</h2>
      <button onClick={() => alert("Playing!")}>Play Movie</button>
      <button onClick={() => alert("Uploading!")}>Upload Image</button>
    </div>
  );
}
