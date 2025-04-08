import { useField } from 'formik';
import styles from './RadioGroup.module.sass';
function RadioGroup ({ label, description, ...props }) {
  const [field] = useField(props);
  return (
    <div className={styles.radioBtnWrapper}>
      <label className={styles.value} htmlFor={props.id || props.name}>
        <input className={styles.inputRadio} {...field} {...props} />
        {label}
      </label>
      <span className={styles.description}>
        {description}
        {/* I am looking for Name, Logo or Tagline for my business, brend or
        product. */}
      </span>
    </div>
  );
}

export default RadioGroup;
