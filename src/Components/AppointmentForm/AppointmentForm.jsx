import React, {useState} from 'react'

const AppointmentForm = ({doctorName, doctorSpeciality, onSubmit}) => {
    const [name, setName] = useState ('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [date,setDate] = useState('');
    const [selectedSlot, setSelectedSlot] = useState(null);

    const handleFormSubmit = (e) => {
        e.preventDefault();
       onSubmit({name, phoneNumber, date, selectedSlot});
        localStorage.setItem('doctorData',JSON.stringify({name:`${doctorName}`, speciality:`${doctorSpeciality}`}));
        const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
        localStorage.setItem(storedDoctorData?.name,JSON.stringify({
            name:`${name}`,
            phoneNumber:`${phoneNumber}`,
            date:`${date}`,
            slot:`${selectedSlot}`
        }))
        setName('');
        setPhoneNumber('');
        setDate('');
        setSelectedSlot('');
    }

    const handleSlotSelection = (slot) => {
        setSelectedSlot(slot);
    }



    return(
        <form onSubmit={handleFormSubmit} className="appointment-form">
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required/>
            </div>
            <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input type="tel" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required/>
            </div>
            <div className="form-group">
                <label htmlFor="date">Date:</label>
                <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className="form-group">
                <select name="" id="time-slots" value={selectedSlot} className="time-slots" onChange={(e) => handleSlotSelection(e.target.value)}>
                    <option value="">Select a time slot</option>
                    <option value="8:00-9:00">8:00-9:00</option>
                    <option value="9:00-10:00">9:00-10:00</option>
                    <option value="10:00-11:00">10:00-11:00</option>
                    <option value="11:00-12:00">11:00-12:00</option>
                    <option value="12:00-1:00">12:00-1:00</option>
                    <option value="1:00-2:00">1:00-2:00</option>
                </select>
            </div>
            <button type="submit">Book Now</button>
        </form>
    )
}

export default AppointmentForm;