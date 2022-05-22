// import React, { useState } from 'react';
// import { Upload } from 'antd';
// import ImgCrop from 'antd-img-crop';
//
// const Demo = () => {
//     const [fileList, setFileList] = useState([]);
//
//     const onChange = ({ fileList }) => {
//         console.log(fileList,'fff')
//         setFileList(fileList);
//     };
//
//     // const onPreview = async file => {
//     //     let src = file.url;
//     //     // if (!src) {
//     //     //     src = await new Promise(resolve => {
//     //     //         const reader = new FileReader();
//     //     //         reader.onload = () => resolve(reader.result);
//     //     //         console.log(resolve,'gggg')
//     //     //     });
//     //     // }
//     //     const image = new Image();
//     //     image.src = src;
//     //     const imgWindow = window.open(src);
//     //     imgWindow.document.write(image.outerHTML);
//     //     console.log(src,'lllll')
//     // };
//
//     return (
//         <ImgCrop rotate>
//             <Upload
//                 listType="picture-card"
//                 fileList={fileList}
//                 onChange={onChange}
//             >
//                 {fileList.length < 5 && '+ Upload'}
//             </Upload>
//         </ImgCrop>
//     );
// };
//
// export default Demo;



import  {useState} from 'react';
import ImageUploading from 'react-images-uploading';
import style from "./upload.module.scss"
import {Upload} from "../../assets/imeges";

export function App() {
    const [images, setImages] = useState([]);
    const maxNumber = 69;

    const onChange = (imageList) => {
       setImages(imageList)
    };

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
                            className={style.btnUpload}
                        >
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
