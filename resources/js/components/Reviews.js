import React, { useState } from "react";
import Octicon, { Comment, CloudUpload } from "@primer/octicons-react";
import { saveReview, reloadHotel } from "../utilities";



export default function Reviews(props) {
    
    const [review, setReview] = useState("");
    const [reviews, reloadReviewsState] = useState(props.reviews);
    
    const handleChange = (e) => {
        setReview(e.target.value);
    }
    
    const saveReviewCallBack = () => {
        
        if (review.length > 0) {
            console.log(`boutta save ${review}`);
            const payload = {
                'review': review,
                'hotel_id': props.id
            };
            saveReview(payload).then(s => {
                if (s.status == 200) {
                    setReview("");
                    reloadHotel(props.id).then(r => {
                        r.json().then(h => {
                            reloadReviewsState(h.reviews);
                        })
                    })
                } else {
                    alert("Couldnt Save");
                }
            }).catch(e => {
                console.log(e);
            })
        } else {
            alert("Cannot save empty review");
        }
    }
    const reviewsWells = reviews.map(r => {
        const user = r.user.name;
        const txt = r.review;
        const date = r.created_at;
        return (
            <div key={r.id}>
                <p>
                    {user} wrote on {date}:
                </p>
                <div className="alert alert-primary" role="alert">
                    {txt}
                </div>
            </div>
            
        );
    })
    return (
        <div className="card">
            <div className="card-header">
                Reviews
            </div>
            <div className="card-body">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <button>
                            <Octicon icon={Comment} />
                        </button>
                    </div>
                    <input onChange={handleChange} value={review} type="text" className="form-control" placeholder="Leave a new review" aria-label="review" aria-describedby="basic-addon1" />
                    <div className="input-group-append">
                        <button onClick={saveReviewCallBack}>
                            <Octicon icon={CloudUpload} />
                        </button>
                    </div>
                </div>
                {reviewsWells}
            </div>
        </div>
    )
}