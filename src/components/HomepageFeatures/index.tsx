import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '安全',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        为了确保客户端与服务端之间的交互安全可靠，我们采用对称加密传输的方式，同时对密钥进行<b>离线保存在本地</b>，以防止第三方获取数据。
      </>
    ),
  },
  {
    title: '开源',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        服务端插件代码<b>完全开源</b>
      </>
    ),
  },
  {
    title: '插件市场',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        所有的服务管理基于<b>插件化实现</b>，可扩展性高，开发门槛低，简单几行代码就能写一个管理的界面。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
