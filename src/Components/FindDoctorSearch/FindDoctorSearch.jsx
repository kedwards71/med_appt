import React, { useState } from "react";
import './FindDoctorSearch.css'


const FindDoctorSearch = () => {
    const [search,setSearch] = useState('');
    return(
        <>
            <div className="search-container">
                <img src="../assets/search.svg" alt="search-button" />
                <input type="search" value={search} name="search" id="search" onChange={(e)=>setSearch(e.target.value)}/>
            </div>
        </>
    )
}

export default FindDoctorSearch