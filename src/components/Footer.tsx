import './Footer.css';

type Props = {
    imgsrc: string;
    msg: string;
    link: string;
}

const FooterCard = ({ imgsrc, msg, link }: Props) => (
    <a className="footer-card" href={link} target="_blank" rel='noreferrer'>
        <img src={imgsrc} alt={imgsrc} style={{ width: '25%' }} />
        <p>{msg}</p>
    </a>
)

export const Footer = () => (
    <div className="footer">
        <FooterCard imgsrc="/youtube.png" msg="Subscribe On YouTube!" link="https://www.youtube.com/watch?v=CM3b6-udXU4?sub_confirmation=1" />
        <FooterCard imgsrc="/discord.png" msg="Join The Discord!" link="https://discord.gg/Q7BbYEeASE" />
    </div>
);
