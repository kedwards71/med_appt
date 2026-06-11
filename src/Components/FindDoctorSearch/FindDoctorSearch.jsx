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
            const experienceSearchContainer = document.createElement('div');
            experienceSearchContainer.id = 'experienceSearchContainer';

            const doctorSearch = document.createElement('input');
            doctorSearch.id = 'experienceDoctorSearch';
            doctorSearch.type = 'number';
            doctorSearch.step = 1;
            doctorSearch.min = 1;
            doctorSearch.max = 30;

            const numberSearchButton = document.createElement('button');
            numberSearchButton.textContent = 'Search';
            numberSearchButton.onclick = () => {
                while(experienceSearchContainer.firstChild){
                    experienceSearchContainer.removeChild(experienceSearchContainer.firstChild)
                }
                alert(`Looking for doctors with atleast ${doctorSearch.value} years of experience`);
            }

            experienceSearchContainer.appendChild(doctorSearch);
            experienceSearchContainer.appendChild(numberSearchButton);

            const container = document.querySelector('.search-container')
            container.append(experienceSearchContainer);

        } else if (category === 'speciality') {
            const specialitySearchContainer = document.createElement('div');
            specialitySearchContainer.id = 'specialitySearchContainer';

            const doctorSearch = document.createElement('input');
            doctorSearch.id = 'specialityDoctorSearch';
            doctorSearch.placeholder = 'Search by speciality';

            const doctorSearchInputResults = document.createElement('div');
            doctorSearchInputResults.id = 'doctorSearchInputResults';
            doctorSearchInputResults.hidden = true;
            doctorSearch.onfocus = () => {
                document.querySelector('#doctorSearchInputResults').hidden = false;
            };
            doctorSearch.onblur = () => {
                document.querySelector('#doctorSearchInputResults').hidden = true;
            };
            doctorSearch.onchange = (e) => {
                alert(e.target.value);
            }
            for (let speciality of specialities){
                const doctorSearchResultItem = document.createElement('div');
                doctorSearchResultItem.id = 'doctorSearchResultItem';
                doctorSearchResultItem.onmousedown = () => {
                    while(specialitySearchContainer.firstChild)
                    {
                        specialitySearchContainer.removeChild(specialitySearchContainer.firstChild);
                    }

                    alert(`Looking for doctors that are ${speciality}`);
                } 
                const span = document.createElement('span');
                span.textContent = speciality;
                doctorSearchResultItem.appendChild(span);
                doctorSearchInputResults.appendChild(doctorSearchResultItem);
            }
            specialitySearchContainer.appendChild(doctorSearch);
            specialitySearchContainer.appendChild(doctorSearchInputResults);

            const container = document.querySelector('.search-container');
            container.appendChild(specialitySearchContainer);
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