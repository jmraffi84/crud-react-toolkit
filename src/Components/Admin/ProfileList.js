import React, { useState } from 'react'
import "./profilelist.css"
import { useSelector, useDispatch } from 'react-redux';
import { faTrashCan, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { removeUsers, updateUsers } from '../features/userprofilelist';
import { useParams } from 'react-router-dom';

const ProfileList = () => {
    const dispatch = useDispatch();
    const { userId } = useParams();

    const userList = useSelector((state) => state.userList.value);
    const [txt, setTxt] = useState('');
    const addText = (userListId) => {
        // dispatch({ type: updateUsers, value: { text: txt } })
        dispatch(updateUsers({ id: userId, text: txt }))
        setTxt('');
        // console.log(setTxt(''))
    }


    // console.log(userList);
    return (
        <>
            <h1 className='mt-3' >List of users</h1>
            <hr />


            <table className="table table-light mx-5">
                <thead>
                    <tr>
                        <th scope="col">S No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Profession</th>
                        <th scope="col">Location</th>
                    </tr>
                </thead>
                <tbody>

                    {userList.length && userList.map((user, index) => (

                        <tr key={user.id}>
                            <th scope="row">{index + 1}</th>

                            <td>{user.name}</td>
                            <td>{user.profession}</td>
                            <td>{user.location}</td>
                            {/* <span title="Completed / Not Completed" >
                                <FontAwesomeIcon icon={faCircleCheck} />
                            </span> */}
                            <span title='Edit'>
                                <FontAwesomeIcon icon={faPen} onClick={addText} />
                            </span>
                            <span title='Delete' >
                                <FontAwesomeIcon icon={faTrashCan} onClick={() => dispatch(removeUsers(userList.id))} />
                            </span>
                        </tr>
                    ))}


                </tbody>

            </table>

        </>
    )
}

export default ProfileList;