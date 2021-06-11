import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

export default function Modal({show, onClose, children}) {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
    }, [])

    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
    }

    const modalContent = show ? (
        <div className={"absolute top-0 left-0 w-full h-full flex justify-center items-center"}>
            <div className={"fixed w-screen h-screen  top-0 left-0 bg-gray-300 opacity-50 "} onClick={handleCloseClick}>

            </div>
            <div className={"w-1/2 h-1/2 fixed inset-1/4 bg-white rounded-lg z-10 "}>
                <div className={"absolute -top-3 -right-3 flex justify-center align-center"}>
                    <a className={"w-8 h-8 rounded-full border-2 text-center bg-white text-gray-600 text-base font-bold"}
                       onClick={handleCloseClick}
                    >X</a>
                </div>
                {children}
            </div>
        </div>
    ) : null;

    if (isBrowser) {
        return ReactDOM.createPortal(
            modalContent,
            document.getElementById("modal-root")
        );
    } else {
        return null;
    }
}