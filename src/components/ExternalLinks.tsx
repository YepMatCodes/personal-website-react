import { useState } from 'react';

import './ExternalLinks.css';

// Import icons
import { IconBrandGithub, IconBrandLinkedin, IconBrandInstagram, IconCodeCircle as IconCodeOpen, IconCodeCircle2 as IconCodeClose } from '@tabler/icons-react';

function ExternalLinks() {
    const [showSocialIcons, setShowDiv] = useState<boolean>(false);

    // Toggle social icon display
    const handleButtonClick = () => {
        setShowDiv(!showSocialIcons); // Toggle the state
    };

    return (
        <div id='social-popout-container' className={ showSocialIcons ? 'popout-active' : ''}>
            <button id='social-popout-trigger' className={ showSocialIcons ? 'popout-active' : ''} onClick={handleButtonClick}>
                {   
                    (!showSocialIcons ? ( <IconCodeOpen /> ) : ( <IconCodeClose /> ))
                }
            </button>
            {
                showSocialIcons &&
                <div id='social-popout-icons'>
                    <button className='social-icon-button'> <IconBrandGithub /> </button>
                    <button className='social-icon-button'> <IconBrandLinkedin /> </button>
                    <button className='social-icon-button'> <IconBrandInstagram /> </button>
                </div>
            }
            
        </div>
    );
}

export default ExternalLinks;