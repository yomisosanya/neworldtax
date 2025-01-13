import { PopupWidget } from "react-calendly";


export default function CalendlyWidget(){

    return (
        <div>
            <PopupWidget 
            url="https://calendly.com/contactlesstax"
            text="Schedule an appointment"
            textColor="#ffffff"
            rootElement={document.getElementById('page') as HTMLElement}
            >
            </PopupWidget>
        </div>
    );
}