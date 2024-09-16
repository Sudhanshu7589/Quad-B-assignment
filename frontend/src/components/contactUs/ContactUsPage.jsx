import React from "react"
import ContactDetails from "./ContactDetails"
import ContactForm from "./ContactForm"



const Contact = () => {
  return (
    <div>
      <div className="mx-auto flex  justify-between text-black bg-slate-200 flex-row">
        {/* Contact Details */}
        <div className="w-[40%]">
          <ContactDetails />
        </div>

        {/* Contact Form */}
        <div className="w-[60%]">
          <ContactForm/>
        </div>
      </div>
    </div>
  )
}

export default Contact