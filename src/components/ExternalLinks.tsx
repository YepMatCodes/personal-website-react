import { useState } from 'react';

import './ExternalLinks.css';

// Import icons
import { IconFolder as IconSocialOpen, IconFolderOpen as IconSocialClose} from '@tabler/icons-react';
import { IconBrandGithub, IconBrandLinkedin, IconBrandInstagram } from '@tabler/icons-react';

function ExternalLinks() {
    const [showSocialIcons, setShowDiv] = useState<boolean>(false);

    // Toggle social icon display
    const handleButtonClick = () => {
        setShowDiv(!showSocialIcons); // Toggle the state
    };

    return (
        <div id='social-popout-container' className={ showSocialIcons ? 'popout-active' : ''}>
            <button id='social-popout-button' className={ showSocialIcons ? 'popout-active' : ''} onClick={handleButtonClick}>
                {   
                    (!showSocialIcons ? ( <IconSocialOpen /> ) : ( <IconSocialClose /> ))
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