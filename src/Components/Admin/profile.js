import { React, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { allusers, addUsers } from '../features/userprofilelist';



function Profile() {
    const dispatch = useDispatch([{}]);

    const users = useSelector((state) => state.userList.value)
    console.log(users);
    const [name, setName] = useState(users.name)
    const [profession, setProfession] = useState(users.profession)
    const [location, setLocation] = useState(users.location)



    const handleInput = (e) => {
        e.preventDefault();
        dispatch(addUsers({ id: Date.now(), name, profession, location }));
        setName('');
        setProfession('');
        setLocation('');
    }


    return (
        <div className='container-fluid'>
            <form className='mt-5' onSubmit={handleInput}>
                <div className="form-group row mb-2">
                    <label for="name" class="col-sm-2 col-form-label">Name</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="formGroupExampleInput" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} />
                    </div>
                </div>
                <div className="form-group row mb-2">
                    <label for="profession" class="col-sm-2 col-form-label">Profession</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Profession" value={profession} onChange={(e) => setProfession(e.target.value)} />
                    </div>
                </div>
                <div className="form-group row mb-2">
                    <label for="location" class="col-sm-2 col-form-label">Location</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
                    </div>
                </div>
                <div className="form-group row mb-2">
                    <div class="col-sm-10 mb-2">
                        <button type="button" class="btn btn-primary btn-lg btn-block" onClick={() => dispatch(addUsers({ name, profession, location }))}>CREATE USERS</button>
                    </div>
                </div>
                <div className="form-group row mb-2">
                    <div class="col-sm-10 mb-2">
                        <NavLink to="/profilelist">
                            <button type="button" class="btn btn-outline-secondary">View Users List &larr; </button>
                        </NavLink>
                    </div>
                </div>
            </form>

        </div >
    )
}

export default Profile