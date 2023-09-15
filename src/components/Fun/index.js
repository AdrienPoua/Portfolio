import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import styles from './styles.module.scss';

export default function Index({ title, badge }) {
  return (
    <Card
      className={styles.card}
      style={{ width: '15rem' }}
    >
      <Card.Img
        variant='top'
        src='https://plus.unsplash.com/premium_photo-1683309565422-77818a287060?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {badge.map((item, index) => (
          <Badge
            key={index}
            pill
            variant='primary'
            className={styles.badge}
          >
            {item}
          </Badge>
        ))}
      </Card.Body>
    </Card>
  );
}

