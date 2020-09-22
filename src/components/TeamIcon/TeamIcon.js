import React, { useEffect, useState } from 'react';
import MiIcon from '../../assets/images/mi.jpg';
import CskIcon from '../../assets/images/csk.jpg';
import DcIcon from '../../assets/images/dc.jpg';
import RrIcon from '../../assets/images/rr.png';
import KkrIcon from '../../assets/images/kkr.jpg';
import KxipIcon from '../../assets/images/kxip.jpg';
import RcbIcon from '../../assets/images/rcb.jpg';
import SrhIcon from '../../assets/images/srh.jpg';

function TeamIcon(props) {

    const [teamIcon, setTeamIcon] = useState();

    useEffect(() => {
        switch(props.team){
            case 'mi':
                setTeamIcon(MiIcon);
                break;
            
            case 'csk':
                setTeamIcon(CskIcon);
                break;
            
            case 'dc':
                setTeamIcon(DcIcon);
                break;
                
            case 'rr':
                setTeamIcon(RrIcon);
                break;
                
            case 'kkr':
                setTeamIcon(KkrIcon);
                break;
                
            case 'kxip':
                setTeamIcon(KxipIcon);
                break;
                
            case 'srh':
                setTeamIcon(SrhIcon);
                break;
                
            case 'rcb':
                setTeamIcon(RcbIcon);
                break;
        }
    },[]);

    return (
        <img src={teamIcon} style={props.dimensions} />
    );
}

export default TeamIcon;