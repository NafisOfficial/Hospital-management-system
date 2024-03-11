import React from 'react';
import { useQuery } from 'react-query';

const useDoctorsInfo = () => {

    const {refetch,data: doctors=[]} = useQuery({
        queryFn: async () =>{
            const res = await fetch("http://localhost:5000/doctors")
            return res.json();
        },
        queryKey: ["doctors"]
    })

    return [refetch,doctors];
};

export default useDoctorsInfo;