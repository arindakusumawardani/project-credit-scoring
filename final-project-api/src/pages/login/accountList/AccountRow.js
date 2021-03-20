import React from "react";
import {Button} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencilAlt, faTrash} from "@fortawesome/free-solid-svg-icons";


const AccountRow = ({data, number, onUpdate, onDelete}) => {
    return (
        <tr>
            <td>{number}</td>
            <td>{data.username}</td>
            <td>{data.fullName}</td>
            <td>{data.email}</td>
            <td>

                {data.isVerified ?
                    "Verified" : "Not Verified"
                }
            </td>
            <td>
                {data.active ?
                    "Active" : "Not Active"
                }
            </td>
            {/*<td>{data.profilePicture}</td>*/}
            <td>{data.roles[0].name}</td>
            <td>
                <Button onClick={onUpdate} href={`/customer/${data.id}/edit`} style={{background:"#e42256"}}>
                    <FontAwesomeIcon icon={faPencilAlt}/>
                </Button>{' '}
                <Button onClick={onDelete} style={{background:"#e42256"}}>
                    <FontAwesomeIcon icon={faTrash}/>
                </Button>
            </td>
        </tr>
    )
}

export default AccountRow;