

function PageFooter(){

    return (
        <>
        <footer className="fixed-bottom">
        <ul className="list-group list-group-horizontal justify-content-center">
            <li className="list-group-item">
                <address>
                    <span className="adr" >
                        <span className="street-address" >35 Broad Street,</span>
                        <span className="locality" > Staten Island,</span>
                        <abbr className="region" title="New York" > NY</abbr>
                        <span className="postal-code" > 10304</span>
                    </span>
                </address>
            </li>
            <li className="list-group-item"><address><a href="tel:+5555555555">555-555-5555</a></address></li>
            <li className="list-group-item">Fax</li>
            <li className="list-group-item">
                <address><a href="mailto:help@neworldtax.com" >help@neworldtax.com</a></address>
            </li>
        </ul>
        </footer>
        </>
    );
}

export default PageFooter;