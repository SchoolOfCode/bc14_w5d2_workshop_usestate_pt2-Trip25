/*import React into file
-Create a new functional component called Input that will return JSX (we'll come back to the specifics of this in the next part).
-Export that function as a default export.
-In that Input component's function, return an <input type="text" onChange={()=>""}> element in JSX; you'll use this later to take in some text.
*/

import React from 'react';

function Input({changeFunction}) {
    return <input type="text" onChange={changeFunction} />;
}

export default Input;