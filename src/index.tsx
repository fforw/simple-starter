import React from "react"
import {createRoot, Root} from 'react-dom/client';
import {Test} from "./components/Test";
import {Foo} from "./model";

window.onload = () => {
    const root: Root = createRoot(document.getElementById("root"));

    const a : Foo = { id: "7f3ddf4c-239f-44c2-a41d-83d76322f80b", name: "Foo #1", num: 123}

    root.render(<>
        <h1>Test</h1>
        <Test type={ a }>

        </Test>
    </>)
}

