import {useState} from 'react';

const useModal = () => {
    const [isShowingModal, setIsShowing] = useState(false);

    function toggleModal() {
        setIsShowing(!isShowingModal);
    }

    return {
        isShowingModal,
        toggleModal,
    }
};

export default useModal;