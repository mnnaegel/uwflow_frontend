import React from 'react';

import { modalNameToModal } from 'constants/Modal';
import { ModalContext } from 'data/providers/ModalProvider';

import Modal from './Modal';

const ModalMountInner = ({ modalsById }) => (
  <>
    {modalsById.map((modalData) => (
      <Modal
        isOpen={modalData.isOpen}
        onRequestClose={modalData.props.onRequestClose}
        onAfterClose={modalData.props.onAfterClose}
        key={`${modalData.id}${modalData.modal}`}
      >
        {modalNameToModal[modalData.modal](modalData.props)}
      </Modal>
    ))}
  </>
);

const ModalMount = () => (
  <ModalContext.Consumer>
    {(context) => <ModalMountInner modalsById={context.modalsById} />}
  </ModalContext.Consumer>
);

export default ModalMount;
