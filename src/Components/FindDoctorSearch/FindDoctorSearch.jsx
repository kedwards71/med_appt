import React, { useState } from "react";
import './FindDoctorSearch.css'
import {useNavigate} from 'react-router-dom';

const FindDoctorSearch = () => {
    const [search,setSearch] = useState('');
    const [doctorResultHidden, setDoctorResultHidden] = useState(true);
    const navigate = useNavigate();


    return(
        <div className="container">
            <center>
                <div className="search-container">
                    <div className="search-box">
                        <input type="search" name="search-bar" id="search-bar" placeholder="..." />
                    </div>
                </div>
            </center>
        </div>
    )
}

export default FindDoctorSearch