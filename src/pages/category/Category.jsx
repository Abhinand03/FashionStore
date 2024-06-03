import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { useLocation } from 'react-router-dom'
import { catView} from '../../../service/allapi'
import ProCard from '../../components/Productcard/ProCard';

function Category() {
    const [cat, setCat] = useState("men");
    const [catlist,setcatlist]=useState([])
    const location = useLocation();
   
    useEffect(() => {
        if (location.state) {
            setCat(location.state);
        }
    }, [location.state]);

    useEffect(() => {
        const handleCategory = async () => {
            console.log(cat);
            const result = await catView(cat);
            setcatlist(result.data)

            

        };

        handleCategory();
    }, [cat]);
    

    console.log(catlist);

    return (
        <>
            <Header />
            <div className='text-center mt-4'>
                {
                    cat == "men" ?
                        <h1>Mens wears</h1> :
                        cat == "women" ? <h1>Womens wears</h1> :
                            <h1>kids wears</h1>
                }
            </div>

            <div className='d-flex justify-content-center'>
            {
                    catlist.map(items=>(
                       <ProCard product={items}/>
                    ))
                }




            </div>

        </>

    )
}

export default Category