import React  from 'react';
import {render} from "react-dom";
import './assets/index.css';
import Input from "./lib/Forms/Input";
import Navbar from "./lib/Navbar/Navbar";
import NavbarContainer from "./lib/Navbar/NavbarContainer";
import NavbarLink from "./lib/Navbar/NavbarLink";

import './assets/index.css';
import Button from "./lib/Button/Button";

function App() {
    return (
        <div>
            <Navbar bg={"primary"} logo={<p>ReactJS Tailwind</p>}>
                <NavbarContainer>
                    <NavbarLink>Home</NavbarLink>
                    <NavbarLink>Docs</NavbarLink>
                    <NavbarLink>About</NavbarLink>
                </NavbarContainer>
                <NavbarContainer>
                    <NavbarLink>
                        <Button type={"danger"}>Download Now</Button>
                    </NavbarLink>
                    <NavbarLink>Sign Up</NavbarLink>
                </NavbarContainer>
            </Navbar>
        </div>
    );
}

render(<App />, document.getElementById("root"));
