import ImageUploading from 'react-images-uploading';
import style from "./upload.module.scss"
import {Upload} from "../../assets/imeges";

export function App({onChange,images}) {
    // const [images, setImages] = useState([]);
    const maxNumber = 69;

    return (
        <div className="App">
            <ImageUploading
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
            >
                {({
                      imageList,
                      onImageUpload,
                      isDragging,
                      dragProps,
                  }) => (
                    <div className="upload__image-wrapper">
                        {imageList.map((image, index) => (
                            <div key={index} className="image-item">
                                <img src={image['data_url']} alt="" width="100" />
                            </div>
                        ))}
                        <button
                            style={isDragging ? { color: 'red' } : undefined}
                            onClick={onImageUpload}
                            {...dragProps}
                            className={style.btnUpload}>

                            <div className={style.overlay}>
                                <Upload title={''}/>
                                <span className={style.text}>Upload image</span>
                            </div>
                        </button>
                        &nbsp;
                    </div>
                )}
            </ImageUploading>
        </div>
    );
}
