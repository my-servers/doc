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
                            <img src="img/newMyServer1024.png" className={scss.appIcon} alt="myservers logo"></img>
                        </div>
                        <div>
                            <span className={scss.title}>MyServers</span>
                            <span className={scss.title3}>一个App监控管理个人所有的服务器和应用</span>
                        </div>
                    </div>
                    {/* <br></br> */}
                    <br></br>
                    
                    <div>
                        <a href='https://apps.apple.com/app/myservers/id6466196656' onClick={() => gtag_report_conversion("https://apps.apple.com/app/myservers/id6466196656")}>
                            <img src="img/appstore.png" className={scss.appStore}  alt="myservers download url 下载链接"></img>
                            </a>
                    </div>
                </div>

                <div className={scss.screenshotDiv}>
                    <img className={`${scss.iphoneImg} ${scss.screenshot1}`} src="img/service.webp"  alt="myservers service screenshot 服务截图"></img>
                    <img className={`${scss.iphoneImg} ${scss.screenshot2}`} src="img/app.webp" alt="myservers app screenshot 应用截图"></img>
                </div>
            </div>

            <div className={scss.downloadImg}>
                <img src="img/myserverDownload.png" alt="myservers download url 扫码下载地址"></img>
                <span>扫码下载App</span>
            </div>
        </div>
    );
}