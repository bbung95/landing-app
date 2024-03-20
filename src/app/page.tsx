import Button from '@/components/Button';
import Toast from '@/components/Toast';

import * as style from './app.css';

const youtubeLink = process.env.NEXT_PUBLIC_YOUTUE_URL;
const link = process.env.NEXT_PUBLIC_LINK;

const Home = () => {
    return (
        <main className={style.container}>
            <div className={style.contentsWarpper}>
                <iframe
                    className={style.contents}
                    width='1280'
                    height='720'
                    src={youtubeLink}
                    title='YouTube video player'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    frameBorder='0'
                    allowFullScreen
                />
            </div>

            <Toast delay={3000}>
                <a href={link}>
                    <Button text='자세히 보기' />
                </a>
            </Toast>
        </main>
    );
};

export default Home;
