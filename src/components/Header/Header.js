import React from 'react';
import Logo from '../Logo/Logo';

const navItems = [
    'IPL 2020',
    'Dashboard',
    'Graphs',
    'Blogs'
];

function Header() {
    return (
        <div className="container-fluid" style={{position: 'sticky', top: 0, backgroundColor: '#37003c'}}>
            <div className="row" style={{height: 60}}>
                <div className="col-md-2 col-lg-2 col-sm-2" style={{paddingRight: 0, paddingLeft: 0}}>
                    <Logo />
                </div>
                <div className="col-md-10 col-lg-10 col-sm-10">
                    <div style={{display: 'flex', marginLeft: 100}}>
                        {navItems.map((elem, index) => <div key={index} style={{color: '#FFFFFF', marginRight: 100, marginTop: 17, fontWeight: 600, cursor: 'pointer'}}>{elem}</div>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;