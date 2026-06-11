import React, { useState } from "react";
import './FindDoctorSearch.css'
import {useNavigate} from 'react-router-dom';

const initSpeciality = [
    'Dentist', 'Gynecologist/obstetrician', 'General Physician', 'Dermatologist', 'Ear-nose-throat (ent) Specialist', 'Homeopath', 'Ayurveda'
]

const initRatings = [
    '⭐⭐⭐⭐⭐','⭐⭐⭐⭐','⭐⭐⭐','⭐⭐','⭐'
]

const initCategories = [
    'Name', 'Ratings', 'Experience', 'Speciality'
]

const FindDoctorSearch = () => {
    const [doctorResultHidden, setDoctorResultHidden] = useState(true);
    const [searchDoctor, setSearchDoctor] = useState('');
    const [specialities, setSpecialities] = useState(initSpeciality);
    const [ratings,setRatings] = useState(initRatings);
    const [name,setName] = useState('');
    const [experience,setExperience] = useState(0);
    const [categories,setCategories] = useState(initCategories);
    const navigate = useNavigate();

    const handleDoctorSelect = (category) => {
        
    }
    const handleCategorySelect = (category) => {
        category = category.toLowerCase();
        alert(category + ' chosen');
        if(category === 'name' ){
            const nameSearchContainer = document.createElement('div');
            nameSearchContainer.id = 'nameSearchContainer';

            const doctorSearch = document.createElement('input');
            doctorSearch.id = 'nameDoctorSearch';
            doctorSearch.placeholder = 'Enter name Here';

            const nameSearchButton = document.createElement('button');
            nameSearchButton.textContent = 'Search'
            nameSearchButton.onclick= () => {
                    while(nameSearchContainer.firstChild)
                    {
                        nameSearchContainer.removeChild(nameSearchContainer.firstChild);
                    }
                alert(`Looking for doctors with '${doctorSearch.value}' in their name`)
            };
            nameSearchContainer.appendChild(doctorSearch);
            nameSearchContainer.appendChild(nameSearchButton);
            
            const container = document.querySelector('.search-container');
            container.appendChild(nameSearchContainer);
        } else if (category === 'ratings') {
            const ratingSearchContainer = document.createElement('div');
            ratingSearchContainer.id = 'ratingSearchContainer';

            const doctorSearch = document.createElement('input');
            doctorSearch.id = 'ratingDoctorSearch';
            doctorSearch.placeholder = 'Search by rating';
            
            const doctorSearchInputResults = document.createElement('div');
            doctorSearchInputResults.id='doctorSearchInputResults';
            doctorSearchInputResults.hidden = true;
            doctorSearch.onfocus =() => {
                document.querySelector('#doctorSearchInputResults').hidden = false;
            };
            doctorSearch.onblur =() => {
                document.querySelector('#doctorSearchInputResults').hidden = true;
            };
            doctorSearch.onchange = (e) =>{
                alert(e.target.value);
            } 
            
            for (let rating of ratings)
            {
                const doctorSearchResultItem = document.createElement('div');
                doctorSearchResultItem.id='doctorSearchResultItem';
                doctorSearchResultItem.onmousedown=() =>{
                    while(ratingSearchContainer.firstChild)
                    {
                        ratingSearchContainer.removeChild(ratingSearchContainer.firstChild);
                    }

                    alert(`Looking for doctors with at least ${rating.length} stars`);
                } 
                const span = document.createElement('span');
                span.textContent = rating;
                doctorSearchResultItem.appendChild(span);
                doctorSearchInputResults.appendChild(doctorSearchResultItem);
            }
            ratingSearchContainer.appendChild(doctorSearch);
            ratingSearchContainer.appendChild(doctorSearchInputResults);

            const container = document.querySelector('.search-container');
            container.appendChild(ratingSearchContainer);

        } else if (category === 'experience') {

        } else if (category === 'speciality') {

        }
    }


    return(
        <div className="container">
            <center>
                <div className="search-container">
                    <div className="search-box">
                        <input type="search" name="search-bar" id="search-bar" onFocus={() => setDoctorResultHidden(false)} onBlur={() => setDoctorResultHidden(true)} value={searchDoctor} onChange={(e) => setSearchDoctor(e.target.value)} placeholder="..." />
                        <div className="input-results" hidden={doctorResultHidden}>
                            {
                                categories.map(category => 
                                    <div className="input-result-item" key={category} onMouseDown={() =>handleCategorySelect(category)} >
                                        <span>Icon</span>
                                        <span>{category}</span>
                                        <span>CATEGORY</span>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </center>
        </div>
    )
}

export default FindDoctorSearch