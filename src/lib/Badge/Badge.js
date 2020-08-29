import React from 'react';

class Badge extends React.Component {
    render() {
        return (
            <span className="rounded-full bg-green-300 uppercase px-2 py-1 text-xs text-indigo-lightest font-bold mr-3">{ this.props.children }</span>
        );
    }
}

export default Badge;