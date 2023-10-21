import React from 'react';
// import clsx from 'clsx';
// import styles from './scss.module.css';
import scss from './app.module.scss';
import Link from '@docusaurus/Link';

export default function App(screenshotSrc): JSX.Element {
    return (
        <div>
            <div className={scss.app} style={{backgroundImage: `url('img/city.jpeg')`}}>
                <div className={scss.appInfo}>
                    <div className={scss.appHead}>
                        <div>
                            <a onClick={() => gtag_report_conversion("https://apps.apple.com/app/myservers/id6466196656")}><img src="img/newMyServer1024.png" className={scss.appIcon}></img></a>
                        </div>
                        <div>
                            <h1>MyServers</h1>
                            <h3>一个App监控管理个人所有的服务器和应用</h3>
                        </div>
                    </div>
                    {/* <br></br> */}
                    <br></br>
                    
                    <div>
                        <a href='https://apps.apple.com/app/myservers/id6466196656'><img src="img/appstore.png" className={scss.appStore}></img></a>
                    </div>
                </div>

                <div className={scss.screenshotDiv}>
                    <img className={`${scss.iphoneImg} ${scss.screenshot1}`} src="img/service.jpg"></img>
                    <img className={`${scss.iphoneImg} ${scss.screenshot2}`} src="img/app.jpg"></img>
                </div>
            </div>

            <div className={scss.downloadImg}>
                <img src="img/myserverDownload.png"></img>
                <span>扫码下载App</span>
            </div>
        </div>
    );
}