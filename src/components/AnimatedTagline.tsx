import { TypeAnimation } from "react-type-animation";

function Tagline() {
    return(
        <span className="animated-text-span">
        <TypeAnimation
            sequence={[
                1000,
                'Full-stack',
                1000,
                'WordPress',
                1000,
                'Backend',
                1000,
                'Cloud',
                1000,
                'DevOps',
                1000,
                'Software',
                3000
            ]}
            wrapper="span"
            speed={25}
            // style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
            preRenderFirstString={true}
            style={{ margin: 0 }}
            cursor={false}
        />
        </span>
    );
}

export default Tagline;