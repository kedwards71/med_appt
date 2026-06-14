import React, { useEffect, useState } from "react";
import './ReviewForm.css'

const ReviewForm = () => {
    const [doctors,setDoctors] = useState([]);

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
                                <td>{index}</td>
                                <td>{doctor.name}</td>
                                <td>{doctor.speciality}</td>
                                <td><button className="btn btn-primary">Feedback</button></td>
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