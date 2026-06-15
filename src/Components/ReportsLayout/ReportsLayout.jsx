import React from "react";
import './ReportsLayout.css';

const ReportsLayout = () => {
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
                    <tr className="report-data">
                        <td>DoctorIndex</td>
                        <td>DoctorName</td>
                        <td>DoctorSpeciality</td>
                        <td><button className="btn btn-primary">View Report</button></td>
                        <td><button className="btn btn-primary">Download Report</button></td>
                    </tr>
                </table>
            </div>
        </>
    )
}

export default ReportsLayout