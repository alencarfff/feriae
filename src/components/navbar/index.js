import React, { Component } from 'react';
import { Link } from 'gatsby';
import HamburgerMenu from "../hamburger-menu/index";
import "./style.scss";

class Navbar extends Component {
    state = { isMenuOpen: false, siteTitle: "", links: [] }
    
    componentDidMount(){
        const { siteTitle, links } = this.props.props;

        this.setState({ siteTitle, links })
    }

    toggleMenu = () => {
        const { isMenuOpen } = this.state;
        this.setState({ isMenuOpen: !isMenuOpen });
    }

    closeMenu = () => {
        this.setState({ isMenuOpen: false })
    }

    render() {
        const { siteTitle, links } = this.state;
        return (
            <header className="navbar">
                <nav className="navbar-inner">
                    <h1><Link className="link" to="/">{siteTitle}</Link></h1>
                    
                    <div 
                        onClick={this.toggleMenu}
                        style={{
                            width: 0,
                            border: 0,
                            background: 'none',
                            height: 0
                        }}> 
                        <HamburgerMenu isOpen={this.state.isMenuOpen} />
                    </div>
                    
                    {this.state.isMenuOpen && <div className="overlay" onClick={this.closeMenu}></div>}
                    {links && <ul className={this.state.isMenuOpen ? "link-list open" : "link-list"}>
                        {links.map(link => (<li key={link.id}><Link to={link.href}>{link.title}</Link></li>))}
                    </ul>}
                </nav>
            </header>
        );
    }
};

export default Navbar;