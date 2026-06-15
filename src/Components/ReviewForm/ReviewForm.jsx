import React, { useEffect, useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './ReviewForm.css'

const ReviewForm = () => {
    const [doctors,setDoctors] = useState([]);
    const [showModal,setShowModal] = useState(false);
    const [reviewInformation,setReviewInformation] = ({
        email:'',
        doctor:''

    })

    const getAllDoctors = () =>{
        fetch('https://api.npoint.io/9a5543d36f1460da2f63')
        .then(res => res.json())
        .then(data => {
            setDoctors(data);

        }).catch(err => console.log(err))
    }

    const handleRatings = (number) => {
        for(let i = 0; i < 5; i++){
            const star = document.querySelector(`.star${i+1}`);
            if(number === i+1 || i+1 < number)
                 star.style.color = 'gold';
            else
                star.style.color ='grey';
        }

    }

    const handleFormSubmit = (e) =>{
        e.preventDefault();
        alert();

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
                                                    <input type="text" placeholder="Name Here" id="reviewerName" required />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="reviewerComments">Review</label>
                                                    <textarea placeholder="Let us know how you feel..." required/>
                                                </div>
                                                <div className="form-group">
                                                <div className="stars">

                                                    <label className="star5" onClick={()=>handleRatings(5)}>&#9733;</label>
                                                    <label className="star4" onClick={()=>handleRatings(4)}>&#9733;</label>
                                                    <label className="star3" onClick={()=>handleRatings(3)}>&#9733;</label>
                                                    <label className="star2" onClick={()=>handleRatings(2)}>&#9733;</label>
                                                    <label className="star1" onClick={()=>handleRatings(1)}>&#9733;</label>
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