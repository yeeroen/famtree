import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

export default props => {

    return (
        <div className="profile-document">
            <div className="profile-document__title">{props.fileName}</div>
            <div className="profile-document__download">
                <a href="http://localhost:3000/" alt="">Bekijk</a>
                <span>|</span>
                <a href="http://localhost:3000/" alt="">Download</a>
            </div>
            {/* <Lightbox 
                mainSrc={'//nha.blob.core.windows.net/scans/BS%20Geboorte/Haarlemmermeer/1899/NL-HlmNHA_G_HAM_1899_0077.jpg'}
                    /> */}
        </div>
    )
    

}