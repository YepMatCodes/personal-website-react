import { isMobile } from 'react-device-detect';

import { ReactComponent as DesktopLogo } from "../images/separated-desktop-logo.svg";
import { ReactComponent as MobileLogo } from "../images/separated-mobile-logo.svg";

import "./Logo.css";

function Logo() {
    if (isMobile) {
        return ( 
            <div className='logo-container'>
                <MobileLogo title="Mathew Norman" aria-label='Mathew Norman' />
                <div className='separator'></div>
                <div className='tag-line'>Software Engineer</div>
            </div>
        );
    } else {
        return ( 
            <div className='logo-container'>
                <DesktopLogo title="Mathew Norman" aria-label='Mathew Norman' />
                <div className='separator'></div>
                <div className='tag-line'>Software Engineer</div>
            </div>
        );
    }
}

export default Logo;