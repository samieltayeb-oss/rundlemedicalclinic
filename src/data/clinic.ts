export const clinicData = {
  name: "Rundle Medical Clinic",
  address: {
    street: "3735 Rundlehorn Dr NE #12",
    city: "Calgary",
    province: "Alberta",
    postalCode: "T1Y 2K1", // Needs client verification if T1Y 2K1 or T1Y 2K7
    postalCodeVerified: false,
    googleMapsUrl: "https://maps.app.goo.gl/placeholder" // To be updated
  },
  contact: {
    phone: "403-457-5850",
    phoneDisplay: "(403) 457-5850",
    fax: "587-387-7018",
    faxDisplay: "(587) 387-7018"
  },
  hours: {
    weekdays: "09:00am - 08:00pm",
    saturday: "10:00am - 02:00pm", // Needs confirmation
    saturdayVerified: false,
    sunday: "Please call to confirm", // Unconfirmed
    sundayVerified: false
  },
  status: {
    acceptingNewPatients: true, // Requires verification before prominently displaying
    newPatientsVerified: false,
    walkInsAccepted: true
  }
};
