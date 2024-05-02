import { isMobile } from 'react-device-detect';

import { ReactComponent as DesktopLogo } from "../images/separated-desktop-logo.svg";
import { ReactComponent as MobileLogo } from "../images/separated-mobile-logo.svg";

import AnimatedTagline from "./AnimatedTagline";

import "./Logo.scss";

function Logo() {
        return ( 
            <div className='logo-container'>
                {
                    (isMobile ? (
                        <MobileLogo title="Mathew Norman" aria-label='Mathew Norman' />
                    ) : (
                        <DesktopLogo title="Mathew Norman" aria-label='Mathew Norman' />
                    ))
                }
                {/* <MobileLogo title="Mathew Norman" aria-label='Mathew Norman' /> */}
                <div className='separator'></div>
                <div className='tag-line'><AnimatedTagline /> Engineer</div>
            </div>
        );
}

export default Logo;