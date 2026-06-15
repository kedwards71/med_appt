import React, { useEffect, useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './ReviewForm.css'

const ReviewForm = () => {
    const [doctors,setDoctors] = useState([]);
    const [showModal,setShowModal] = useState(false);
    const [rating,setRating] = useState(0);
    const [name, setName] = useState('');
    const [message,setMessage] = useState('');
    const [doctorId,setDoctorId] = useState(-1);
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
        setRating(number);

    }



    const handleFormSubmit = (e) =>{
        e.preventDefault();
        const messageBlock = document.querySelector(`#review${doctorId}`);
        messageBlock.textContent = message;
        for(let i = 0; i < rating; i++)
        {
            messageBlock.textContent += ' ' + '⭐';
        }
        const reviewButton = document.querySelector(`#reviewbtn${doctorId}`);
        reviewButton.disabled = true;
        reviewButton.style.backgroundColor = 'grey';
        reviewButton.textContent = 'Review Given';
        const btnGroup = document.querySelector(`#btnGroup${doctorId}`);
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('btn-danger');
        deleteButton.textContent = 'Delete Review';
        deleteButton.onclick = () => {
            reviewButton.textContent ='FeedBack';
            reviewButton.style.backgroundColor = '';
            messageBlock.textContent = '';
            btnGroup.removeChild(deleteButton);
        }
        btnGroup.appendChild(deleteButton);
        setDoctorId(-1);
        setRating(0);
        setName('');
        setMessage('');
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
                                <td id={`btnGroup${index}`}>
                                    <Popup
                                    style={{backgroundColor:'#FFF'}}
                                    trigger={<button className="btn btn-primary" id={`reviewbtn${index}`}>
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
                                                    <input type="text" value={name} placeholder="Name Here" id="reviewerName" onChange={(e) =>setName(e.target.value)} required />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="reviewerComments">Review</label>
                                                    <textarea placeholder="Let us know how you feel..." value={message} onChange={(e)=>setMessage(e.target.value)} required/>
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
                                                <div className="form-group" >
                                                    <button className="btn btn-success" type="submit" onClick={()=>setDoctorId(index)}>Submit</button>
                                                </div>
                                            </form>
                                        )}
                                    </Popup>
                                </td>
                                <td id={`review${index}`}></td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        </>
    )
}

export default ReviewForm;