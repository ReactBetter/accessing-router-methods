import { Link } from 'react-router-dom';
import './Header.css';

type Props = {
    title: string;
}

export const Header = ({ title }: Props) => {
    const menuLinks = [
        { title: "Home", to: '/' },
        { title: "About Us", to: '/about' },
        { title: "Our Sponsor", to: '/sponsor' }
    ];

    return (
    <div className="header">
        <div className="content">
            <div className="nav">
                <div className="left">
                    <Link to="/">
                        <img src="/header_logo.png" alt="React Better" />
                    </Link>
                </div>
                <div className="right">
                    {menuLinks.map(menuItem => (
                        <Link key={menuItem.title} to={menuItem.to} className={title === menuItem.title ? 'active' : ''}>{menuItem.title}</Link>
                    ))}
                </div>
            </div>
            <div className="title">
                <h1>{title}</h1>
            </div>
        </div>
    </div>
)};
