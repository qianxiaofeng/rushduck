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
        <div className={"w-full h-full absolute inset-0 flex justify-center items-center"}>
            <div className={"w-full h-full  absolute inset-0 bg-gray-300 opacity-50 "} onClick={handleCloseClick}>

            </div>
            <div className={"w-4/5 h-4/5 bg-white rounded-lg z-10 relative"}>
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