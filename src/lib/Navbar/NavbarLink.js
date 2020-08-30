import React from 'react';

class NavbarLink extends React.Component {
    getTextColor() {
        return 'text-white';
    }

    render() {
        return (
            <a className={"cursor-pointer block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4 " + this.getTextColor(this.props.textColor)}>
                { this.props.children }
            </a>
        );
    }
}

export default NavbarLink;