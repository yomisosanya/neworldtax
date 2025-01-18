import data from '../res/wordart.json'

export default function PageWordArt(){

    return (
        <div>
            <img
                src={data.src}
                alt={data.alt}
                role='img'
                width='600'
                height='400'
            />
        </div>
    );
} 