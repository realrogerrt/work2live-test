import React, { useState } from 'react';
import Octicon, { Pencil } from "@primer/octicons-react";
import Reviews from './Reviews';


export default function Hotel(h) {
    const [edit, setEdit] = useState(false);

    const handleShow = () => {
        setEdit(!edit);
    }
    
    const {name, description} = h;
    
    let reviews = <span></span>;
    let classSize = "col-md-3 mb-5";
    if (edit) {
        reviews = <Reviews {...h} />;
        classSize = "col-md-12 mb-5";
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
            </div>
         {reviews}
         </div>
    )
}