import React from 'react'


const ImageLinkForm = ({name, entries}) => {
    
    return(
        <div>
            <div className='white f3'>
                {`${name}, your current entrie count is...`}
            </div>
            <div className='white f3'>
                {entries}
            </div>
        </div>
    );
}

export default ImageLinkForm;
