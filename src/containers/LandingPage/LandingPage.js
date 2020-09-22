import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import WinnerCard from '../../components/WinnerCard/WinnerCard';

function LandingPage(props) {
    return (
        <React.Fragment>
            <div className="container-fluid" style={{marginBottom: 15}}>
                <div className="row" style={{marginTop:15, marginLeft:15}}>
                    <WinnerCard matchType="pre" />
                    <WinnerCard matchType="post" />
                </div>                
            </div>
            <Header />
            <div style={{height:640}}>
                Height
            </div>
        </React.Fragment>
    );
}

export default LandingPage;
