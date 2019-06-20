import React from 'react';

export default function FileUploader(props) {

    return (
        <form className="file-uploader" method="post" action="" encType="multipart/form-data">
            <div className="up-control">
                {
                    props.state === "none"
                    ?
                    <label htmlFor="file-uploader-1" className="up-label">
                        Drag and drop files here or
                        <a className="btn">Browse files</a>
                    </label>
                    :
                    <label htmlFor="file-uploader-1" className="up-label">
                        {props.files.length} files have been selected
                    </label>
                }
                <input id="file-uploader-1" className="up-input"
                    type="file" name="files[]"
                    data-multiple-caption="{count} files selected" multiple
                />
                {
                    props.files.length > 0 && <button type="submit">Upload</button>
                }
            </div>
        </form>
            )
        }
