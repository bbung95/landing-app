import Button from '@/components/Button';
import TimeWatch from '@/components/TimeWatch/TimeWatch';
import Toast from '@/components/Toast';

import * as style from './app.css';

const youtubeLink = process.env.NEXT_PUBLIC_YOUTUE_URL;
const link = process.env.NEXT_PUBLIC_LINK;

const Home = () => {
    return (
        <main className={style.container}>
            <div className={style.contentsInfo}>
                <p className={style.description}>
                    판매자의 신뢰를 상승시키는 유튜브 채널 운영 전략
                </p>

                <div className={style.subDescription}>무료 강의 종료까지</div>
                <TimeWatch />
            </div>
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
            <div className={style.subContentsInfo}>
                🎁
                <p className={style.subDescription}>
                    강의를 끝까지 시청하시면 <strong className={style.highlight}>특별 선물</strong>
                    이 등장합니다.
                </p>
            </div>

            <Toast delay={1000 * 60}>
                <a href={link}>
                    <Button text='할인 쿠폰 사용하기' />
                </a>
            </Toast>
        </main>
    );
};

export default Home;
