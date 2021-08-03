import styles from '../styles/Home.module.css'

const Ticket = (props) => {

    return (
        <div className={styles.card}>
            <h2 className={styles.card}>{props.name}</h2>
            <p className={styles.card}>{props.description}</p>
        </div>
    );
}
export default Ticket