import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
// import scss from './app.module.scss';
import Link from '@docusaurus/Link';

export default function App(screenshotSrc): JSX.Element {
    return (
        <div className={styles.app} style={{backgroundImage: `url('img/city.jpeg')`}}>
            <div className={styles.screenshotDiv}>
                <img className={styles.screenshot1} src="img/service.jpg"></img>
                <img className={styles.screenshot2} src="img/app.jpg"></img>
            </div>

            <div className={styles.appInfo}>
                <div className={styles.appHead}>
                    <div>
                        <img src="img/newMyServer1024.png" className={styles.appIcon}></img>
                    </div>
                    <div>
                        <h1>MyServers</h1>
                        <h3>一个App监控管理个人所有的服务器和应用</h3>
                    </div>
                </div>
                <br></br>
                <br></br>
                
                <div>
                    <a href="https://apps.apple.com/app/myservers/id6466196656"><img src="img/appstore.png" className={styles.appStore}></img></a>
                </div>

            </div>
        </div>
    );
}