import data from '../res/link.json'
import CalendlyButton from './CalendlyButton';



export default function PageNavBar(){
    // const path: string = './src/assets/';
    const media = data.media;

    return (
        <nav 
            className='card'
            style={{margin: '1em', paddingRight: '1em', backgroundColor: '#e8f8f5'}}
        >
            <menu
                style={{display: 'flex', justifyContent: 'flex-end'}}
            >
                <CalendlyButton />
                { media.map((item, index) => (
                    <li 
                        className="no-marker"
                        style={{marginLeft: '1em'}}
                        key={`link-item-${index}`}
                    >
                        <a
                            href={item.url}
                            target='_blank'
                        >
                            <img
                                // src={`${path}${item.name.toLowerCase()}.${item.type}`}
                                src={item.src}
                                width="40"
                                height="40"
                                role= 'img'
                                alt= {`${item.name} icon`}
                            />
                        </a>
                    </li>
                ))}
            </menu>
        </nav>
    );
}