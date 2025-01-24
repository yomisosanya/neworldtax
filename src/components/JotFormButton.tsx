// import { SyntheticEvent } from 'react';
// import { useRef } from 'react';
import data from '../res/jotform.json'


export default function JotFormButton(){

    const siteId: string = 'jotform'
    const btnId: string = `${siteId}-btn`;
    const modalId: string = `${siteId}-modal`;
    // const iframeRef = useRef({width: '0', height: '0'});

    // const handleLoad = (event: SyntheticEvent) => {
    //     if(iframeRef && iframeRef.current){
    //         iframeRef.current.width = data.width;
    //         iframeRef.current.height = data.height;
    //     }
    // };

    return (
        <>
        {/* launch button */}
        <button
            id={`${btnId}-launch`}
            key={`${btnId}-launch-key`}
            type='button'
            className='btn btn-outline-primary'
            data-bs-toggle='modal'
            data-bs-target={`#${modalId}`}
            style={{marginRight: '1em'}}
        >
            Intake Form 
        </button>

        {/* modal window */}
        <div
            id={`${modalId}`}
            key={`${modalId}-key`}
            className="modal fade"
            aria-labelledby=""
        >
            <div>
                {/* close button */}
                <button
                    id={`${btnId}-close`}
                    key={`${btnId}-close-key`}
                    type='button'
                    className='btn-close'
                    aria-label='Close'
                    data-bs-dismiss='modal'
                />
            </div>
            <div
                id={`${modalId}-container`}
                key={`${modalId}-container-key`}
            >
                <h1
                    id={`${modalId}-label`}
                    key={`${modalId}-label-key`}
                >
                    {data.label}
                </h1>
                <iframe
                    id={`${modalId}-body`}
                    key={`${modalId}-body-key`}
                    className='modal-body'
                    src={data.src}
                    title={data.title}
                    // width='100%'
                    // height='100%'
                    // ref={iframeRef}
                    // onLoad={handleLoad}
                >
                </iframe>
            </div>
        </div>
        </>
    );
}