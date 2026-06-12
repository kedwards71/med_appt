import React, { useState } from "react";
import './FindDoctorSearch.css'
import {useNavigate} from 'react-router-dom';
import categoryLogo from '../../assets/category-svgrepo-com.svg';
import searchLogo from '../../assets/search.svg';

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
    const [categories,setCategories] = useState(initCategories);
    const navigate = useNavigate();

    const removeEle = (ele) => {
        while(ele.firstChild){
            ele.removeChild(ele.firstChild);
        }
    }
    const handleDoctorSelect = (category,catValue) => {
        setSearchDoctor(catValue);
        setDoctorResultHidden(true);
        navigate(`/instant-consultation?${category}=${catValue}`);
        window.location.reload();
    }

    const handleCategorySelect = (category) => {
        const searchBar = document.querySelector("#search-bar");
        searchBar.hidden = true;
        category = category.toLowerCase();
        if(category === 'name' ){
            const nameSearchContainer = document.createElement('div');
            nameSearchContainer.id = 'catSearchContainer';

            const doctorSearch = document.createElement('input');
            doctorSearch.id = 'catDoctorSearch';
            doctorSearch.placeholder = 'Enter name Here';

            const nameSearchButton = document.createElement('button');
            nameSearchButton.textContent = 'Search'
            nameSearchButton.onclick= () => {
                removeEle(nameSearchContainer);
                searchBar.hidden = false;
                handleDoctorSelect(category,doctorSearch.value);
            };
            nameSearchContainer.appendChild(doctorSearch);
            nameSearchContainer.appendChild(nameSearchButton);
            
            const container = document.querySelector('.search-container');
            container.appendChild(nameSearchContainer);
        } else if (category === 'ratings') {
            const ratingSearchContainer = document.createElement('div');
            ratingSearchContainer.id = 'catSearchContainer';

            const doctorSearch = document.createElement('input');
            doctorSearch.id = 'catDoctorSearch';
            doctorSearch.placeholder = 'Search by rating';
            
            const doctorSearchInputResults = document.createElement('div');
            doctorSearchInputResults.id='catSearchInputResults';
            doctorSearchInputResults.hidden = true;
            doctorSearch.onfocus =() => {
                document.querySelector('#catSearchInputResults').hidden = false; 
            };
            doctorSearch.onblur =() => {
                document.querySelector('#catSearchInputResults').hidden = true;
            };
            doctorSearch.onchange = (e) =>{
                alert(e.target.value);
            } 
            
            for (let rating of ratings)
            {
                const doctorSearchResultItem = document.createElement('div');
                doctorSearchResultItem.id='catSearchResultItem';
                doctorSearchResultItem.onmousedown=() =>{
                    removeEle(ratingSearchContainer);
                    searchBar.hidden = false;
                    handleDoctorSelect(category,rating.length);
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
            experienceSearchContainer.id = 'catSearchContainer';

            const doctorSearch = document.createElement('input');
            doctorSearch.id = 'catDoctorSearch';
            doctorSearch.type = 'number';
            doctorSearch.step = 1;
            doctorSearch.min = 1;
            doctorSearch.max = 120;
            doctorSearch.value = 1;

            const numberSearchButton = document.createElement('button');
            numberSearchButton.textContent = 'Search';
            numberSearchButton.onclick = () => {
                removeEle(experienceSearchContainer);
                searchBar.hidden = false;
                handleDoctorSelect(category,doctorSearch.value);
            }

            experienceSearchContainer.appendChild(doctorSearch);
            experienceSearchContainer.appendChild(numberSearchButton);

            const container = document.querySelector('.search-container')
            container.append(experienceSearchContainer);

        } else if (category === 'speciality') {
            const specialitySearchContainer = document.createElement('div');
            specialitySearchContainer.id = 'catSearchContainer';

            const doctorSearch = document.createElement('input');
            doctorSearch.id = 'catDoctorSearch';
            doctorSearch.placeholder = 'Search by speciality';

            const doctorSearchInputResults = document.createElement('div');
            doctorSearchInputResults.id = 'catSearchInputResults';
            doctorSearchInputResults.hidden = true;
            doctorSearch.onfocus = () => {
                document.querySelector('#catSearchInputResults').hidden = false;
            };
            doctorSearch.onblur = () => {
                document.querySelector('#catSearchInputResults').hidden = true;
            };
            doctorSearch.onchange = (e) => {
                alert(e.target.value);
            }
            for (let speciality of specialities){
                const doctorSearchResultItem = document.createElement('div');
                doctorSearchResultItem.id = 'catSearchResultItem';
                doctorSearchResultItem.onmousedown = () => {
                    removeEle(specialitySearchContainer);
                    searchBar.hidden=false
                    handleDoctorSelect(category,speciality);
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
            <centered>
            <h1>Find a doctor and Consult instantly</h1>
                <div className="search-container">
                    <div className="search-box">
                        <input type="search" name="search-bar" id="search-bar" onFocus={() => setDoctorResultHidden(false)} onBlur={() => setDoctorResultHidden(true)} value={searchDoctor} onChange={(e) => setSearchDoctor(e.target.value)} placeholder="Select a category" />
                        <div className="input-results" hidden={doctorResultHidden}>
                            {
                                categories.map(category => 
                                    <div className="input-result-item" key={category} onMouseDown={() =>handleCategorySelect(category)} >
                                        <span><img src={categoryLogo} className="catLogo" alt="Logo"/></span>
                                        <span>{category}</span>
                                        <span>CATEGORY</span>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </centered>
        </div>
    )
}

export default FindDoctorSearch