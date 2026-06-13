import React from "react";
import './ReviewForm.css'

const ReviewForm = () => {
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
                    <tr className="review-data">
                        <td>DoctorID</td>
                        <td>DoctorName</td>
                        <td>DoctorSpeciality</td>
                        <td><button className="btn btn-primary">Feedback</button></td>
                        <td>Review</td>
                    </tr>
                </table>
            </div>
        </>
    )
}

export default ReviewForm;