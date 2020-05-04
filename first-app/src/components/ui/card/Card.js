import React from "react"

const UserCard = () => {

    const user = {
        firstName: 'Harper',
        lastName: 'Perez',
        avatarUrl: 'https://cosasdigitales.com/wp-content/uploads/2016/11/german-alvarez-cosas-digitales-3.jpg'
    };

    const formatName = user => `${user.firstName} ${user.lastName}`
    const displayAvartar = user => user.avatarUrl ? <img src={user.avatarUrl} alt="" /> : <img src='https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png' width='300' height='300' alt="" />

    return (
        <div className="Card">
            <h2>¡Hola, {formatName(user)}!</h2>
            {displayAvartar(user)}
        </div>
    )

}

export default UserCard