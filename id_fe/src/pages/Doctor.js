import React from "react";
import "./bubble.css";

const PatientCard = ({ id, name, age, gender }) => {
    return (
        <div className="patient-card"
            style={{
                backgroundColor: "lightgray",
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "10px",
                margin: "10px",
                cursor: "pointer",
                width: '200px',
                height: 'auto',
                marginTop: '20px'
            }}
        >
            <p>ID: {id}</p>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Gender: {gender}</p>
        </div>
    );
};

export default () => {
    const patients = [
        {
            id: 253,
            name: "Dao Viet Anh",
            age: 25,
            gender: "Female",
        },
        {
            id: 279,
            name: "Nguyen Dang Ha",
            age: 24,
            gender: "Male",
        },
        {
            id: 354,
            name: "Nguyen Do Duong",
            age: 35,
            gender: "Male",
        },
        {
            id: 377,
            name: "Nguyen Viet Bac",
            age: 40,
            gender: "Male",
        },
    ];

    return (
        <div style={{ marginTop: "20px", marginLeft: "40px" }}>
            <div style={{ position: "relative" }}>
                <div
                    style={{
                        position: "relative",
                        background: "#0D99FF",
                        padding: "10px",
                        borderRadius: "10px",
                        width: "fit-content",
                    }}
                >
                    <p style={{ color: "white", fontWeight: "bold", display: "inline" }}>
                        Personal information
                    </p>
                </div>
                <div style={{ marginTop: "10px", display: "flex" }}>
                    <div style={{ marginTop: "0px", marginLeft: "20px" }}>
                        <p>Name:</p>
                        <p>Gender:</p>
                        <p>Date of birth:</p>
                        <p>Province/city:</p>
                        <p>Doctor id:</p>
                        <p>ID number:</p>
                        <p>Phone number:</p>
                        <p>Email:</p>
                    </div>
                    <div style={{ marginTop: "0px", marginLeft: "60px" }}>
                        <p>Doctor Lo Anh Duc</p>
                        <p>Male</p>
                        <p>01/02/1995</p>
                        <p>Hanoi</p>
                        <p>19021243</p>
                        <p>034101007845</p>
                        <p>0328919074</p>
                        <p>ducla@hanoihospital.com</p>
                    </div>
                </div>

                <div
                    style={{
                        marginTop: "20px",
                        position: "relative",
                        background: "#0D99FF",
                        padding: "10px",
                        borderRadius: "10px",
                        width: "fit-content",
                    }}
                >
                    <p
                        style={{ color: "white", fontWeight: "bold", display: "inline" }}
                    >
                        Patient management
                    </p>
                </div>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {patients.map((patient) => (
                    <PatientCard
                        key={patient.id}
                        id={patient.id}
                        name={patient.name}
                        age={patient.age}
                        gender={patient.gender}
                    />
                ))}
            </div>
        </div>
    );
};
