import React, { useEffect, useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './ReviewForm.css'

const ReviewForm = () => {
    const [doctors,setDoctors] = useState([]);
    const [showModal,setShowModal] = useState(false);

    const getAllDoctors = () =>{
        fetch('https://api.npoint.io/9a5543d36f1460da2f63')
        .then(res => res.json())
        .then(data => {
            setDoctors(data);

        }).catch(err => console.log(err))
    }

    const handleFormSubmit = (e) =>{
        e.preventDefault();

    }
    useEffect(()=>{
        getAllDoctors();
    },[])


    return (
        <>
            <div className="review-container">

            <h1>Reviews</h1>
                <table className="review-table">
                    <tr className="review-headers">
                        <th>Serial Number</th>
                        <th>Doctor Name</th>
                        <th>Doctor Speciality</th>
                        <th>Provide Feedback</th>
                        <th>Review Given</th>
                    </tr>
                    {doctors.map((doctor, index) =>{
                        return(
                            <tr className="review-data">
                                <td>{index+1}</td>
                                <td>{doctor.name}</td>
                                <td>{doctor.speciality}</td>
                                <td>
                                    <Popup
                                    style={{backgroundColor:'#FFF'}}
                                    trigger={<button className="btn btn-primary">
                                        Feedback
                                    </button>}
                                    modal
                                    open={showModal}
                                    onClose={()=> setShowModal(false)}
                                    >
                                        {(close) => (
                                            <form className="doctorReview"onSubmit={handleFormSubmit} >
                                                <div className="doctorInformation">
                                                    <h3>How did {doctor.name} do?</h3>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="reviewerName">Name</label>
                                                    <input type="text" placeholder="Name Here" id="reviewerName" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="reviewerComments">Review</label>
                                                    <textarea placeholder="Let us know how you feel..." />
                                                </div>
                                                <div className="form-group">
                                                <div className="stars">

                                                    <input type="radio" name="rating" id="star5" value={5} />
                                                    <label for="star5">&#9733;</label>
                                                    <input type="radio" name="rating" id="star4" value={4} />
                                                    <label for="star4">&#9733;</label>
                                                    <input type="radio" name="rating" id="star5" value={3} />
                                                    <label for="star3">&#9733;</label>
                                                    <input type="radio" name="rating" id="star4" value={2} />
                                                    <label for="star2">&#9733;</label>
                                                    <input type="radio" name="rating" id="star5" value={1} />
                                                    <label  style={{color:"green"}} for="star1">&#9733;</label>
                                                </div>

                                                </div>
                                                <div className="form-group">
                                                    <button className="btn btn-success" type="submit">Submit</button>
                                                </div>
                                            </form>
                                        )}
                                    </Popup>
                                </td>
                                <td>Review</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        </>
    )
}

export default ReviewForm;