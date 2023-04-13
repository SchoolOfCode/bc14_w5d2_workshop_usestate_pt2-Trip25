import React from 'react';

// function Item({text}) {
//     return <li>{text}</li>;
// }

// export default Item;


function Item({text, font}) {
    return <li style={{ fontFamily: font }}>{text}</li>;
  }
  
  export default Item;