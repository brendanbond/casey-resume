import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'About Casey',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        A determined leader with the heart of a first year, Casey will never back down from a challenge and will always lead with integrity.
      </>
    ),
    to: '/about'
  },
  {
    title: 'Accomplishments',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Casey was the lead stakeholder and point of contact for all KYC verification for sellers globally. Additionally, he developed the quality framework for all Escalation Tier levels associated with Meta's Facebook Marketplace Seller Support, and became the lead stakeholder for all payment issues with sellers and buyers globally. 
      </>
    ),
    to: '/accomplishments'
  },
  {
    title: 'Project Management',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
       Although Casey began as one of the four founding members of the Customer Support team for Facebook Marketplace globally, he grew with the project and became the lead project manager for a multinational, diverse team of over 200 agents worldwide. 
      </>
    ),
    to: '/project-management'
  },
];

function Feature({Svg, title, description, to}) {
  return (
    <div className={clsx('col col--4')}>
      {/* <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div> */}
      <div className="text--center padding-horiz--md">
          <Link
            className="button button--secondary button--lg"
            to={to}>
            {title}
          </Link>
        <p style={{marginTop: '15px'}}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
