import React, { useEffect, useState } from 'react';
import DoctorsProfile from '../../Components/DoctorsProfie/DoctorsProfile';

const DoctorsInfo = () => {

    const [doctors,setDoctors] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/doctors')
        .then(res=>res.json())
        .then(data=>setDoctors(data))
    },[])


    return (
        <div>
            {doctors?.map((data)=><DoctorsProfile key={data?._id} doctor={data}/>)}
        </div>
    );
};

export default DoctorsInfo;