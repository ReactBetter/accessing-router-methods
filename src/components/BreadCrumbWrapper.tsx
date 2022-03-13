import { Link } from 'react-router-dom';
import { RouteComponentProps, withRouter } from "../utils/router-v5";
import './BreadCrumb.css';

type Props = {
    router: RouteComponentProps;
};

export const BreadCrumb = ({ router }: Props) => {
    const { location } = router;

    const crumbs = location.pathname.split('/').filter(x => x);

    const getFullPath = (crumbIndex: number) => {
        let path = '';
        for (let i = 0; i <= crumbIndex; i++) {
            path = path + `/${crumbs[i]}`;
        }
        return path;
    }

    return location.pathname === '/' ? null : (
        <div className="breadcrumb">
            <Link to="/" className="crumb">Home</Link>
            {crumbs.map((crumb, i) => (
                <Link key={`${crumb}-${i}`} to={getFullPath(i)} className="crumb">{crumb}</Link>
            ))}
        </div>
    );
}

export default withRouter(BreadCrumb);
