import Button from '@/components/Button';
import Toast from '@/components/Toast';

import * as style from './app.css';

const Home = () => {
    return (
        <main className={style.container}>
            <div className={style.contentsWarpper}>
                <iframe
                    className={style.contents}
                    width='1280'
                    height='720'
                    src='https://www.youtube-nocookie.com/embed/fcTIVHvN5cs?si=b7Fj_WgO9mDz_wYM&amp;controls=0&autoplay=1'
                    title='YouTube video player'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    frameBorder='0'
                    allowFullScreen
                />
            </div>

            <Toast delay={2000}>
                <a href='https://www.youtube.com/watch?v=fcTIVHvN5cs&embeds_referring_euri=http%3A%2F%2Flocalhost%3A3000%2F&feature=emb_title'>
                    <Button text='자세히 보기' />
                </a>
            </Toast>
        </main>
    );
};

export default Home;
