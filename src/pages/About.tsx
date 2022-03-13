import { Link } from 'react-router-dom';
import { GuttersLayout } from "../layouts";

export const About = () => (
    <GuttersLayout title="About Us">
        <h2>React. Everyday.</h2>
        <p className="article">
            This isn't a tutorial. We don't make code you copy and paste into your
            projects. You're better than that. You deserve more than that.
        </p>
        <p className="article">
            We want to elevate you. As a software engineer, you deserve to know what's
            actually making your code tick. Don't just learn <strong>how</strong> to
            build your projects; learn <strong>why</strong> to use one method over
            another.
        </p>
        <h2>Improve. Everything.</h2>
        <p className="article">
            Do you know what else you deserve? A better t-shirt. A better coffee mug.
            Look, I know someone threw a crappy, cheap shirt at you for getting their
            credit card. It's not your fault. But you can do better.
        </p>
        <p className="article">
            Be bold. Tell the world that you are a Front-End GIANT, and you will not
            be silenced! <Link to="/about/shop">Check out our merch shop</Link> and wear something you can be proud
            of.
        </p>
        <h2>React Better. Always.</h2>
        <img src="/small-banner.jpg" alt="React Better" />
    </GuttersLayout>
);
