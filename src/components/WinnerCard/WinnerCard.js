import React from 'react';
import { GoLocation } from 'react-icons/go';
import TeamIcon from '../TeamIcon/TeamIcon';

function WinnerCard(props) {
    return (
        <div className="card" style={{ boxShadow: '5px 5px rgb(55, 0, 60)', width: 291.52 }}>
            <div className="container">
                <div className="row" style={{ paddingLeft: 10, marginTop: 2, fontSize: 13 }}>
                    <span style={{ color: 'rgb(55, 0, 60)' }}><strong>IPL-2020:</strong></span>
                    <span>&nbsp;Match-1</span>
                    {props.matchType === "post" ?
                        <span style={{ fontSize: 9, color: 'gray', marginTop: 3, marginLeft: 75 }}>September 20th, 2020</span>
                        : null}
                </div>
                <div className="row" style={{ paddingLeft: 5 }}>
                    <GoLocation />
                    <span style={{ fontSize: 9, color: 'gray' }}>Dubai International Cricket Stadium</span>
                </div>
                <div className="row">
                    <div>
                        <TeamIcon team="mi" dimensions={{ width: 75, height: 55 }} />
                    </div>
                    {props.matchType === "post" ?
                        <React.Fragment>
                            <div style={{ textAlign: 'center', display: 'flex' }}>
                                <div style={{ lineHeight: 0.7, paddingTop: 15, marginRight: 5 }}>
                                    <span style={{ fontSize: 10, fontWeight: 600 }}>176/8</span><br />
                                    <span style={{ fontSize: 9, fontWeight: 300 }}>20 overs</span>
                                </div>
                                <div style={{ lineHeight: 0.8, border: '1px solid black', marginTop: 15, marginBottom: 10, marginRight: 5, paddingRight: 10, paddingLeft: 10 }}>
                                    <span style={{ fontSize: 10, fontWeight: 700 }}>MI Won</span><br />
                                    <span style={{ fontSize: 10, fontWeight: 700 }}>By 5 runs</span>
                                </div>
                                <div style={{ lineHeight: 0.7, paddingTop: 15 }}>
                                    <span style={{ fontSize: 10, fontWeight: 600 }}>176/8</span><br />
                                    <span style={{ fontSize: 9, fontWeight: 300 }}>20 overs</span>
                                </div>
                            </div>
                        </React.Fragment>
                        :
                        <div style={{ textAlign: 'center', fontSize: 11, paddingTop: 10, marginRight: 12, marginLeft: 12 }}>
                            <span style={{ fontWeight: 600 }}>September 20th, 2020</span><br /><span style={{ color: 'gray' }}>7 PM, IST</span>
                        </div>
                    }
                    <div>
                        <TeamIcon team="csk" dimensions={{ width: 75, height: 55 }} />
                    </div>
                </div>
                <div className="row" style={{ marginBottom: 5, marginTop: 5 }}>
                    <div style={{ border: '1px solid black', marginRight: 'auto', marginLeft: 'auto', width: '90%', fontWeight: 600 }}>
                        <div style={{ fontSize: 11, textAlign: 'center' }}>CricGurus Projection</div>
                        <div style={{ fontSize: 10, paddingRight: 10, paddingLeft: 10 }}><span>60%</span> <span style={{ float: 'right' }}>40%</span></div>
                        <div style={{ marginRight: 5, marginLeft: 5 }}>
                            <div className="progress" style={{ height: '0.5rem' }}>
                                <div className="progress-bar bg-success" role="progressbar" style={{ width: '60%' }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                <div className="progress-bar bg-danger" role="progressbar" style={{ width: '40%' }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div style={{ fontSize: 10, paddingRight: 10, paddingLeft: 10 }}><span>MI</span> <span style={{ float: 'right' }}>CSK</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WinnerCard;