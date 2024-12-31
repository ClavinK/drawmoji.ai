import React, {useState} from 'react';
// import "./App.css";
import { usePopper } from 'react-popper';

const PaintbrushPopup = () => {
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const [arrowElement, setArrowElement] = useState(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        modifiers: [{ name: 'arrow', options: { element: arrowElement} }],
    });

    return (
        <>
            <button type="button" ref={setReferenceElement}>
                Reference
            </button>

            <div ref={setPopperElement} style={styles.popper} {...attributes.popper}>
                Popper
                <div ref={setArrowElement} style={styles.arrow} />
            </div>
        </>
    );
};

function Popup() {
    return (
        <PaintbrushPopup />
    )
}

export default Popup;