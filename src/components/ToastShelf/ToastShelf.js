import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ data, handleDismiss }) {
  return (
    <ol className={styles.wrapper}>
      {data.map(({ id, variant, text }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast id={id} variant={variant} handleDismiss={handleDismiss}>
            {text}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
