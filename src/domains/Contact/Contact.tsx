import styles from './contact.module.css'

type Props = {
    title: string;
  }

const Contact:React.FC<Props> = ({title}: Props) => {
    return(
        <div className={styles.contact}>
            <h1>{title}</h1>
            <p>text</p>  
        </div>
    )
}

export default Contact;
