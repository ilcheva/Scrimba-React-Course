import logo from '../logo.svg';

function NavBar() {
    return (
        <nav className="header">
            <img src={logo} className="App-logo" alt="logo" />
            <h3 className="logo-title">ReactFacts</h3>
            <h4 className="title">React Course - Project 1</h4>
        </nav>
    )
}

export default NavBar;


