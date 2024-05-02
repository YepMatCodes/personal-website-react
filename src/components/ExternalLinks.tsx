import { useState } from 'react';

import './ExternalLinks.css';

// Import icons
import { IconFolder as IconSocialOpen, IconFolderOpen as IconSocialClose} from '@tabler/icons-react';
import { IconBrandGithub, IconBrandLinkedin, IconBrandInstagram, IconCamera } from '@tabler/icons-react';

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
                    <a href="https://github.com/themathewnorman" className='social-icon-button'> <IconBrandGithub /> </a>
                    <a href="https://linkedin.com/in/mathewnorman" className='social-icon-button'> <IconBrandLinkedin /> </a>
                    <a href="https://instagram.com/mathews.wildlife" className='social-icon-button'> <IconBrandInstagram /> </a>
                    <a href="https://mathews.pics" className='social-icon-button'> <IconCamera /> </a>

                </div>
            }
            
        </div>
    );
}

export default ExternalLinks;