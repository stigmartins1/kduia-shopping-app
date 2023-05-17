/* https://react.dev/learn/responding-to-events
Event handlers receive an event object as their only argument. 
By convention, it’s usually called e, which stands for “event”.
You can use this object to read information about the event.
That event object also lets you stop the propagation. 
If you want to prevent an event from reaching parent components, 
you need to call e.stopPropagation() like this Button component does: */

function Button({ onClick, children }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
}

export default function EventPropagationStop() {
  return (
    <div
      className="Toolbar"
      onClick={() => {
        alert("You clicked on the toolbar!");
      }}
    >
      <h2>This is the EventPropagationStop component</h2>
      <Button onClick={() => alert("Playing!")}>Play Movie</Button>
      <Button onClick={() => alert("Uploading!")}>Upload Image</Button>
    </div>
  );
}
