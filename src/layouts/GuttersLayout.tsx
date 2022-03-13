import { BreadCrumb, Footer, Header } from '../components';
import './GuttersLayout.css';

type Props = {
    children: React.ReactNode;
    title: string;
};

export const GuttersLayout = ({ children, title }: Props) => {
    return (
        <div className="gutters-layout">
            <Header title={title} />
            <div className="content">
                <BreadCrumb />
                {children}
            </div>
            <Footer />
        </div>
    );
}
