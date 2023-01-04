import '../css/imagegrid.css';

const ImageGrid = () => {
    const image1 = "https://api.time.com/wp-content/uploads/2018/03/digital-nomad-remote-work-travel.jpg";
    const image2 = "https://motuslearning.com/wp-content/uploads/2022/01/shutterstock-1041475570-1.jpg";
    const image3 = "https://motuslearning.com/wp-content/uploads/2022/01/102763770-1024x768.jpg";
    const image4 = "https://wwwnc.cdc.gov/travel/images/hiker-ocean-extreme.jpg";
    const image5 = "https://www.traveloffpath.com/wp-content/uploads/2021/08/restriction-free-travel.jpg.webp";
    const image6 = "https://www.traveloffpath.com/wp-content/uploads/2022/09/couple-walking-in-St-Lucia-beach.jpg.webp";
    const image7 = "https://www.traveloffpath.com/wp-content/uploads/2022/06/Piha-beach-which-is-located-at-the-West-Coast-in-AucklandNew-Zealand..jpg.webp";
    const image8 = "https://api.time.com/wp-content/uploads/2018/02/taking-photo-in-car.jpg?quality=85&w=800";
    const image9 = "https://expertvagabond.com/wp-content/uploads/travel-jobs-for-working-abroad-768x512.jpg.webp";
    const image10 = "https://parade.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTkwNTc2MDAxNjMzMDM1Mzg5/travel-instagram-captions.webp";

    return (

        <div className="image_grid">
            <img src={image1} alt="image1" className="image1" />
            <img src={image2} alt="image2" className="image2" />
            <img src={image3} alt="image3" className="image3" />
            <img src={image4} alt="image4" className="image4" />
            <img src={image5} alt="image5" className="image5" />
            <img src={image6} alt="image6" className="image6" />
            <img src={image7} alt="image7" className="image7" />
            <img src={image8} alt="image8" className="image8" />
            <img src={image9} alt="image9" className="image9" />
            <img src={image10} alt="image10" className="image10" />
        </div>
    )
};

export default ImageGrid;