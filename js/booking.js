// Booking form and search logic
// Search Appointment Logic
async function findAppointment(name, phone) {
  const q = query(collection(db, "appointments"), 
            where("clientName", "==", name), 
            where("phone", "==", phone));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    renderEditForm(doc.data(), doc.id);
  });
}
// ...other booking logic...
