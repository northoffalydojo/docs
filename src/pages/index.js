import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Easy to find documentation</>,
    imageUrl: 'http://northoffalydojo.com/wp-content/uploads/2022/08/undraw_file_searching_re_3evy.svg',
    description: (
      <>
        We've designed this site to make it as easy as possible for you to find quick answers to your questions.
      </>
    ),
  },
  {
    title: <>Can't find what you're looking for?</>,
    imageUrl: 'http://northoffalydojo.com/wp-content/uploads/2022/08/undraw_message_sent_re_q2kl.svg',
    description: (
      <>
        No problem. Just submit a request! 
      </>
    ),
  },
  {
    title: <>Make edits!</>,
    imageUrl: 'http://northoffalydojo.com/wp-content/uploads/2022/08/undraw_developer_activity_re_39tg.svg',
    description: (
      <>
        See a mistake? Or have a suggestion for an article? Make contributions in our Github repository!
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/what-is-north-offaly-dojo')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
