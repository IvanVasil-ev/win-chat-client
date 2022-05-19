import { useSelector } from 'react-redux';

import warnIcon from '../../../assets/warning.png';
import { Portal } from '../Portal/Portal';
import { RootState } from '../../../store';
import { Header } from '../Header/Header';
import { Button } from '../../common';
import { setModal } from '../../../store/application/application';
import { useActions } from '../../../hooks';
import styles from './Modal.module.scss';

export const Modal = () => {
  const {
    modalMessage, modalStatus,
  } = useSelector((state: RootState) => state.application);
  const { handleModal } = useActions({
    handleModal: setModal,
  });

  if (!modalStatus) {
    return null;
  }

  return (
    <Portal selector="modal">
      <div className={styles.modalPopover}>
        <div className={styles.modalContainer}>
          <Header />
          <div className={styles.modalContent}>
            <div className={styles.modalMessageWrapper}>
              <img
                src={warnIcon}
                alt=""
                className={styles.modalIcon}
              />
              <span>{modalMessage}</span>
            </div>
            <div className={styles.buttonWrapper}>
              <div />
              <Button onClick={() => handleModal({ status: false })}>Ok</Button>
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
};
