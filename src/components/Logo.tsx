import { isMobile } from 'react-device-detect';

import { ReactComponent as DesktopLogo } from "../images/logo.svg";
import { ReactComponent as MobileLogo } from "../images/logo-mobile.svg";

import "./Logo.css";

function Logo() {
    if (isMobile) {
        return ( <MobileLogo /> );
    } else {
        return ( <DesktopLogo /> );
    }
}

export default Logo;