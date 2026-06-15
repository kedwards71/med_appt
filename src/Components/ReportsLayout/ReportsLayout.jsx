import React, { useEffect, useState } from "react";
import './ReportsLayout.css';
import ExamplePdf from '../../assets/patient_report.pdf'

const ReportsLayout = () => {
    const [doctors,setDoctors] = useState([]);
    const [showModal,setShowModal] = useState(false);

    const getAllDoctors= () => {
        fetch('https://api.npoint.io/9a5543d36f1460da2f63')
        .then(res => res.json())
        .then(data => {
            setDoctors(data);
        })
    }

    useEffect(()=>{
        getAllDoctors();
    },[])
    return (
        <>
            <h1>Reports</h1>
            <div className="report-container">
                <table className="report-table">
                    <tr className="report-headers">
                    <th>Serial Number</th>
                    <th>Doctor Name</th>
                    <th>Doctor Speciality</th>
                    <th>View Report</th>
                    <th>Download Report</th>
                    </tr>
                    {doctors.map((doctor,index) => {
                        return(

                            <tr className="report-data">
                                <td>{index+1}</td>
                                <td>{doctor.name}</td>
                                <td>{doctor.speciality}</td>
                                <td><a href={ExamplePdf} target="_blank"><button className="btn btn-primary">View Report</button></a></td>
                                <td><a href={ExamplePdf} download={ExamplePdf}><button className="btn btn-primary">Download Report</button></a></td>
                            </tr>

                        )
                    })}
                </table>
            </div>
        </>
    )
}

export default ReportsLayout