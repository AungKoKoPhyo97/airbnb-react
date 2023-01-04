const Appbar = () => {
    const airbnb="https://companieslogo.com/img/orig/ABNB-4aaade0f.png?t=1633511992"
    return (
        <nav className="navbar">
            <img src={airbnb} className="airbnb" alt="airbnb" />
            <h1 className="title">airbnb</h1>
        </nav>
    )
};

export default Appbar;