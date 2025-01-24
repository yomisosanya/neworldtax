

function PageFooter2(){

    return (
        <>
        <footer
            id='footer'
            className="fixed-bottom page"
            style={{margin: '1em'}}
        >
        <ul className="list-group list-group-horizontal justify-content-center">
            <li className="list-group-item">
                <address>
                    <span className="adr" >
                        <span className="street-address" ><strong>35 Broad Street,</strong></span>
                        <span className="locality" ><strong> Staten Island,</strong></span>
                        <abbr className="region" title="New York" ><strong> NY</strong></abbr>
                        <span className="postal-code" ><strong> 10304</strong></span>
                    </span>
                </address>
            </li>
            <li className="list-group-item"><address><a href="tel:+9172542372">(917) 254-2372</a></address></li>
            <li className="list-group-item">Fax</li>
            <li className="list-group-item">
                <address><a href="mailto:help@neworldtax.com" >ny@neworldtax.com</a></address>
            </li>
        </ul>
        </footer>
        </>
    );
}

export default PageFooter2;