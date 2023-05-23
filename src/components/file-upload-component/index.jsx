import React from 'react';
import uploadFile from '../../utils/fileUpload';

import PageContainer from '../page-container';
import colors from '../../constants/colors';

const FileUploadComponent = () => {
    const [submittedFile, setSubmittedFile] = React.useState(null);
    const [submittedTitle, setSubmittedTitle] = React.useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let res = await uploadFile(submittedFile, submittedTitle);
        console.log("GREEEEN", res.data);
    }

    const handleFileOnChange = (e) => {
        let f = e.target.files[0];
        console.log(f);
        setSubmittedFile(f);
    }

    const handleTitleOnChange = (e) => {
        let t = e.target.value;
        console.log(t);
        setSubmittedTitle(t);
    }

    return (
        <PageContainer edits={{ 
            backgroundColor: colors.brightBlue
        }}>
            <form onSubmit={handleSubmit}>
                <p style={{ marginTop: '-0.25em' }}>
                    File upload to S3
                </p>
                <input 
                    type="file" 
                    onChange={handleFileOnChange}
                    style={{ color: colors.snowWhite }} 
                />
                <br/>
                <input 
                    type="text" 
                    placeholder="Title of content"
                    onChange={handleTitleOnChange} 
                />
                <br/>
                <button type="submit">Upload File</button>
            </form>
        </PageContainer>
    )
}

export default FileUploadComponent;