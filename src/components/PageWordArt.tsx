import data from '../res/wordart.json'

export default function PageWordArt(){

    return (
        <div>
            <img
                src={data.src}
                alt={data.alt}
                role='img'
                width='500'
                height='350'
            />
        </div>
    );
} 