import { useState } from 'react'

const images = [
    'https://archive.org/download/DarkGreyRedMaterialDesign4KWallpaper/Dark-Grey-Red-Material-Design-4K-Wallpaper.jpg',
    'https://images.hdqwalls.com/download/orange-black-material-design-8k-62-1920x1080.jpg',
    'https://i.pinimg.com/originals/27/a8/3a/27a83ad0cd2d79cd34a82158407d8670.jpg'
];

export default function ImageGallery() {
    let imageURL = images;
    const[index, setIndex] = useState(0);

    function handleNext() {
        setIndex(index === imageURL.length - 1 ? 0 : index + 1);
    }

    function handlePrevious() {
        setIndex(index === 0 ? imageURL.length - 1 : index - 1);
    }
    
    return(
        <div>
            <img key={index} src={imageURL[index]} alt={index + 1} width={300} height={300} />
            <br/>
            <button onClick={handleNext}>Siguiente</button>
            <button onClick={handlePrevious}>Anterior</button>
        </div>
    );
}