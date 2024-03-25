import Button from '@/components/Button';
// import TimeWatch from '@/components/TimeWatch/TimeWatch';
import Toast from '@/components/Toast';

import * as style from './app.css';

const youtubeLink = process.env.NEXT_PUBLIC_YOUTUE_URL;
const link = process.env.NEXT_PUBLIC_LINK;

const Home = () => {
    return (
        <main className={style.container}>
            <div className={style.contentsInfo}>
                <p className={style.title}>판매자의 신뢰를 상승시키는 유튜브 채널 운영 전략</p>

                <div className={style.description}>📍아래 강의는 예고없이 곧 종료됩니다.</div>
                {/* <div className={style.description}>무료 강의 종료까지</div>
                <TimeWatch /> */}
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
                <p className={style.description}>
                    강의를 끝까지 시청하시면 <strong className={style.highlight}>특별 선물</strong>
                    이 등장합니다.
                </p>
                <p className={style.subDescription}>
                    [특별선물]
                    <br />
                    1.&nbsp;&nbsp;&nbsp;&nbsp;강의에 나온 모든 스크립트와 자료
                    <br />
                    2.&nbsp;&nbsp;&nbsp;&nbsp;PD바운만의 유튜브 패키지
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
