import React from 'react';
import PropTypes from 'prop-types';

class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showNavbar: false
        };
    }

    hideNavbar() {
        this.setState({
            showNavbar: !this.state.showNavbar
        });
    }

    getBackground(bg = 'primary') {
        if (bg === 'primary') {
            return 'bg-blue-500';
        } else if (bg === 'success') {
            return 'bg-teal-500';
        } else if (bg === 'warning') {
            return 'bg-orange-500';
        } else if (bg === 'danger') {
            return 'bg-red-500';
        }
    }

    render() {
        return (
            <nav className={"shadow " + this.getBackground(this.props.bg)}>
                <div className="container mx-auto p-4 flex flex-wrap items-center md:flex-no-wrap">
                    <div className="flex lg:w-auto w-1/2 items-center flex-shrink-0 text-white mr-6">
                        {this.props.logo}
                    </div>
                    <div className="w-1/2 flex justify-end lg:hidden">
                        <button
                            onClick={() => this.hideNavbar()}
                            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                            {this.props.hambuger ?
                                this.props.hambuger :
                                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <title>Menu</title>
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                                </svg>
                            }
                        </button>
                    </div>
                    <div className="hidden lg:flex justify-between w-full items-center">
                        {this.props.children}
                    </div>
                </div>
                <div className="lg:hidden w-full container mx-auto">
                    <div
                        className={this.state.showNavbar ? 'block opacity-100 translate-x-0 transform ease-in-out transition-all duration-300 p-4' : 'hidden transform h-0 opacity-0 ease-in-out transition-all duration-300 translate-y-full'}>
                        {this.props.children}
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;