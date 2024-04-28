import { TypeAnimation } from "react-type-animation";

function Tagline() {
    return(
        <TypeAnimation
            sequence={[
                1000,
                'Full-stack',
                1000,
                'DevOps',
                1000,
                'Software',
                1000
            ]}
            wrapper="span"
            speed={25}
            // style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={0}
            preRenderFirstString={true}
            style={{ margin: 0 }}
        />
    );
}

export default Tagline;