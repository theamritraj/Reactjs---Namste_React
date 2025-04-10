const heading = React.createElement('h1', 
  { id:"title"},
   "Namaste Everyone! i am using React");

  const heading2 = React.createElement(
    'h2',{},"This is second Heading"
  );
  const container = React.createElement(
    "div",
    {id:"container"},
    [heading,heading2]
  );
  console.log(heading);
  


const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root 


//async defer 
root.render(container);
 
