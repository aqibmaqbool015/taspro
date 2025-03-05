import React, { useState } from "react";
import './index.css'

const ImagePicker = ({ picture, imageChanged, ...props }) => {
    const [image, setImage] = useState();

    const handleImageChange = (e) => {
        const selectedImage = e.target.files?.[0];
        if (!selectedImage) return;

        if (imageChanged && typeof imageChanged === 'function') {
            imageChanged(selectedImage);
        }

        const reader = new FileReader();

        reader.onloadend = () => {
            setImage(reader.result);
        };

        reader.readAsDataURL(selectedImage);
    };

    return (
        <>
            <div className={props.profileContainer}>
                <label className={props.labelContainer}>
                    {image ? <img src={image} alt='Profile' /> : <div className='placeholder'>
                        <div className="text-center">
                            <img src={props.coverImage} className={props.placeholderImage} />
                        </div>
                        <p className={props.classnameText}>
                            {props.editText}
                        </p>
                    </div>}
                    <input type='file' accept='image/*' onChange={handleImageChange} />
                    <span className={props.spanImage}>
                        <img src={props.editIcon} />
                    </span>
                </label>
            </div>
        </>
    );
}

export default ImagePicker;
