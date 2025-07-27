import React, { useState } from "react";

const doctorsData = [
    {
        id: 1,
        name: "Dr. Priya Sharma",
        specialization: "Dermatologist",
        experience: 8,
        rating: 4.5,
        fee: 500,
        location: "Delhi",
        img: "https://static.vecteezy.com/system/resources/previews/024/585/338/large_2x/3d-happy-cartoon-doctor-cartoon-doctor-on-transparent-background-generative-ai-png.png",
    },
    {
        id: 2,
        name: "Dr. Rahul Mehta",
        specialization: "Cardiologist",
        experience: 15,
        rating: 4.8,
        fee: 700,
        location: "Mumbai",
        img: "https://tse4.mm.bing.net/th/id/OIP.Srf55T_2PYQsKWpGZMI9MwHaHa?pid=Api&P=0&h=220",
    },
    {
        id: 3,
        name: "Dr. Anjali Verma",
        specialization: "Pediatrician",
        experience: 12,
        rating: 4.7,
        fee: 600,
        location: "Bangalore",
        img: "https://tse1.mm.bing.net/th/id/OIP.Y72I8XIj0KCPHr0E-8_XpAHaHa?pid=Api&P=0&h=220",
    },
    // Add more doctors if needed
];

function FindDoctors() {
    const [searchTerm, setSearchTerm] = useState("");
    const [specializationFilter, setSpecializationFilter] = useState("");
    const [locationFilter, setLocationFilter] = useState("");

    const filteredDoctors = doctorsData.filter((doctor) => {
        const matchesSearch =
            doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
            doctor.location.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesSpecialization = specializationFilter
            ? doctor.specialization === specializationFilter
            : true;

        const matchesLocation = locationFilter
            ? doctor.location === locationFilter
            : true;

        return matchesSearch && matchesSpecialization && matchesLocation;
    });

    return (
        <div style={styles.page}>
            <h1 style={styles.title}>Find Doctors</h1>

            <div style={styles.filters}>
                <input
                    type="text"
                    placeholder="Search by name, specialty, or location"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={styles.searchInput}
                />

                <select
                    value={specializationFilter}
                    onChange={(e) => setSpecializationFilter(e.target.value)}
                    style={styles.select}
                >
                    <option value="">All Specializations</option>
                    <option value="Dermatologist">Dermatologist</option>
                    <option value="Cardiologist">Cardiologist</option>
                    <option value="Pediatrician">Pediatrician</option>
                </select>

                <select
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                    style={styles.select}
                >
                    <option value="">All Locations</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Bangalore">Bangalore</option>
                </select>
            </div>

            {/* Doctor List */}
            <div style={styles.doctorList}>
                {filteredDoctors.length === 0 ? (
                    <p style={{ color: "#ccc" }}>No doctors found matching your criteria.</p>
                ) : (
                    filteredDoctors.map((doctor) => (
                        <div key={doctor.id} style={styles.doctorCard}>
                            <img
                                src={doctor.img}
                                alt={doctor.name}
                                style={styles.doctorImage}
                            />
                            <div style={styles.doctorInfo}>
                                <h3>{doctor.name}</h3>
                                <p style={styles.specialization}>{doctor.specialization}</p>
                                <p>{doctor.experience} years experience</p>
                                <p>Rating: {doctor.rating} ⭐</p>
                                <p>Consultation Fee: ₹{doctor.fee}</p>
                            </div>
                            <button style={styles.bookButton}>Book Appointment</button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

const styles = {
    page: {
        backgroundColor: "#000", 
        minHeight: "100vh",
        width: "100%",
        padding: "2rem",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#fffacd", 
    },
    title: {
        textAlign: "center",
        fontSize: "2rem",
        marginBottom: "2rem",
        color: "#fffacd",
    },
    filters: {
        display: "flex",
        gap: "1rem",
        marginBottom: "2rem",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    searchInput: {
        padding: "10px",
        fontSize: "1rem",
        flex: "1 1 300px",
        backgroundColor: "#121212",
        color: "#fffacd",
        border: "1px solid #444",
        borderRadius: "4px",
    },
    select: {
        padding: "10px",
        fontSize: "1rem",
        flex: "1 1 150px",
        backgroundColor: "#121212",
        color: "#fffacd",
        border: "1px solid #444",
        borderRadius: "4px",
    },
    doctorList: {
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
    },
    doctorCard: {
        display: "flex",
        alignItems: "center",
        border: "1px solid #444",
        borderRadius: "8px",
        padding: "1rem",
        gap: "1rem",
        backgroundColor: "#121212",
    },
    doctorImage: {
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        objectFit: "cover",
    },
    doctorInfo: {
        flex: 1,
        color: "#fffacd",
    },
    specialization: {
        fontWeight: "600",
        color: "#00baf2",
    },
    bookButton: {
        padding: "10px 20px",
        backgroundColor: "#00baf2",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
};

export default FindDoctors;
