# reactjs-tailwind

React-tailwind is a UI framework based on tailwindcss.

## Installation 
To install reactjs-tailwind run ``npm install reactjs-tailwind``.

## Components

### Navbar

```
import { Navbar, NavbarContainer, NavbarLink, Button } from 'reactjs-tailwind';

<Navbar logo={<p>ReactJS Tailwind</p>}>
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
```