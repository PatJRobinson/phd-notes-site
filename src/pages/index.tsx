import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

type LinkCard = {
  title: string;
  description: string;
  href: string;
  meta: string;
};

const primaryLinks: LinkCard[] = [
  {
    title: 'Current model',
    description:
      'The active thesis centre, research questions, concepts, arguments, workflows, and known unstable areas.',
    href: '/compiled/current-model',
    meta: 'Start here',
  },
  {
    title: 'Research questions',
    description:
      'Four linked questions covering working understanding, system boundaries, safety/security, and assurance over change.',
    href: '/compiled/rqs',
    meta: 'Thesis spine',
  },
  {
    title: 'Wiki index',
    description:
      'A neutral explanatory layer for ROS 2-style robotics, integration, assurance, and practice concepts.',
    href: '/wiki',
    meta: 'Concept terrain',
  },
];

const researchThreads: LinkCard[] = [
  {
    title: 'Rotifer paper',
    description:
      'Executable assumption tracing, Nav2 evidence, and the boundary of the current paper claim.',
    href: '/compiled/workflows/rotifer-paper',
    meta: 'Active output',
  },
  {
    title: 'Safety/security workflow',
    description:
      'RQ3 framing, argument map, evidence route, source provenance, and explicit nonclaims.',
    href: '/compiled/workflows/safety-security',
    meta: 'RQ3 focus',
  },
  {
    title: 'Interviews and methodology',
    description:
      'Empirical planning around integrators, visibility, responsibility, local knowledge, and change.',
    href: '/compiled/workflows/interviews-and-methodology',
    meta: 'Method route',
  },
  {
    title: 'Concept index',
    description:
      'Compiled definitions for the concepts currently doing work in the thesis argument.',
    href: '/compiled/concepts',
    meta: 'Vocabulary',
  },
  {
    title: 'Arguments index',
    description:
      'Candidate thesis moves, grouped by research question and by current paper/workflow needs.',
    href: '/compiled/arguments',
    meta: 'Claims',
  },
  {
    title: 'Evidence layer',
    description:
      'Compiled evidence pages for interviews, Rotifer traces, Nav2, DDS/ROS 2, and concept maps.',
    href: '/compiled/evidence',
    meta: 'Source-facing',
  },
];

const rqSummaries = [
  {
    label: 'RQ1',
    title: 'Working understandings',
    href: '/compiled/rqs/rq1',
  },
  {
    label: 'RQ2',
    title: 'System boundaries',
    href: '/compiled/rqs/rq2',
  },
  {
    label: 'RQ3',
    title: 'Safety/security across interfaces',
    href: '/compiled/rqs/rq3',
  },
  {
    label: 'RQ4',
    title: 'Assurance over change',
    href: '/compiled/rqs/rq4',
  },
];

function Card({title, description, href, meta}: LinkCard): ReactNode {
  return (
    <Link className={styles.card} to={href}>
      <span className={styles.cardMeta}>{meta}</span>
      <Heading as="h3" className={styles.cardTitle}>
        {title}
      </Heading>
      <p>{description}</p>
    </Link>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="PhD Notes"
      description="Compiled PhD research notes on ROS 2-style robotics integration, system boundaries, safety/security, and assurance.">
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <p className={styles.kicker}>Compiled research notes and wiki</p>
            <Heading as="h1" className={styles.title}>
              ROS 2-style robotics integration, assurance, and practice.
            </Heading>
            <p className={styles.subtitle}>
              A working research site for a PhD on how integrators construct
              system behaviour, boundaries, safety/security concerns, and
              assurance evidence across modular robotics systems.
            </p>
            <div className={styles.heroActions}>
              <Link className={styles.primaryAction} to="/compiled/current-model">
                Read the current model
              </Link>
              <Link className={styles.secondaryAction} to="/compiled/rqs">
                Browse research questions
              </Link>
            </div>
          </div>
          <aside className={styles.heroPanel} aria-label="Research focus">
            <span className={styles.panelLabel}>Current centre</span>
            <p>
              Integration is treated as the site where system behaviour,
              boundaries, deployment context, practitioner knowledge, and
              assurance conditions are constructed and maintained.
            </p>
            <Link to="/compiled/workflows/thesis-core">Open thesis core</Link>
          </aside>
        </section>

        <section className={styles.section} aria-labelledby="orientation">
          <div className={styles.sectionHeader}>
            <Heading as="h2" id="orientation">
              Orientation
            </Heading>
            <p>
              Use these entry points to move from the live thesis model to
              question-specific pages and the lower-level wiki.
            </p>
          </div>
          <div className={styles.primaryGrid}>
            {primaryLinks.map((link) => (
              <Card key={link.href} {...link} />
            ))}
          </div>
        </section>

        <section className={styles.band} aria-labelledby="research-questions">
          <div className={styles.sectionHeader}>
            <Heading as="h2" id="research-questions">
              Research Questions
            </Heading>
            <p>
              The questions build from integrator understanding and boundaries
              toward safety/security concerns and claims that must survive
              change.
            </p>
          </div>
          <div className={styles.rqGrid}>
            {rqSummaries.map((rq) => (
              <Link key={rq.label} className={styles.rqItem} to={rq.href}>
                <span>{rq.label}</span>
                <strong>{rq.title}</strong>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.section} aria-labelledby="active-work">
          <div className={styles.sectionHeader}>
            <Heading as="h2" id="active-work">
              Active Work
            </Heading>
            <p>
              Current writing routes, evidence clusters, and concept maps are
              compiled here from the underlying notes archive.
            </p>
          </div>
          <div className={styles.threadGrid}>
            {researchThreads.map((link) => (
              <Card key={link.href} {...link} />
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
