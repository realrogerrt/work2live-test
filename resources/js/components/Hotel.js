import React, { useState } from 'react';
import Octicon, { Pencil } from "@primer/octicons-react";
import ViewHotel from './ViewHotel';


export default function Hotel(h) {
    const [edit, setEdit] = useState(false);

    const handleClose = () => setEdit(false);
    const handleShow = () => setEdit(true);
    
    const {name, description} = h;
    
    let vh = <span></span>;
    let classSize = "col-md-3";
    if (edit) {
        vh = <ViewHotel {...h} />;
        classSize = "col-md-12";
    }
   
    return (
        <div className={classSize}>
            <div className="card">
                <div className="card-header d-flex justify-content-between">
                    {name} {edit}
                    <button onClick={handleShow}>
                        <Octicon icon={Pencil} />
                    </button>
                </div>
                <div className="card-body text-truncate">
                    {description}
                </div>
               {vh}
            </div>
         </div>
    )
}