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
                                    trigger={<button className="btn btn-primary">
                                        Feedback
                                    </button>}
                                    modal
                                    open={showModal}
                                    onClose={()=> setShowModal(false)}
                                    >
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