import { PopupModal } from "react-calendly";
import { useState } from "react";


// interface Props {
//     user: string;
// };

interface State{
    isOpen: boolean;
};

export default function CalendlyButton(){
    const [state, setState] = useState<State>({isOpen: false});
    const layout = {'background-color': '#0099ff', 'display': 'inline-flex'};
    return (
        <>
          <button
            id='calendly-schedule-button'
            className='btn btn-primary'
            style={layout}
            onClick={() => setState({isOpen: true})}
           >
            Schedule Appointment
          </button>
          <PopupModal
            url="https://calendly.com/contactlesstax"
            onModalClose={() => setState({isOpen: false})}
            open={state.isOpen}
            rootElement={document.getElementById('root') as HTMLElement}
          />
        </>
    );
}
