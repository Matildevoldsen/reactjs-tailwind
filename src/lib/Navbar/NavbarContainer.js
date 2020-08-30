import React from 'react';

class NavbarContainer extends React.Component {
    render() {
        return (
            <div>
                { this.props.children }
            </div>
        );
    }
}

export default NavbarContainer;