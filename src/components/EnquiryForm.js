import React, { useState } from "react";

const destinations = [
  { label: "Local Run", value: "Local Run" },
  { label: "Outstation Run", value: "Outstation Run" },
];
const busTypes = [
  "AC Deluxe Buses",
  "AC Luxury Buses",
  "AC Sleeper Buses",
];
const localPackages = [
  "4hr/40km",
  "8hr/80km",
  "12hr/120km",
  "16hr/160km",
  "24hr/200km",
];
const outstationPackages = ["One Way", "Roundtrip"];
const busOptions = {
  "AC Deluxe Buses": [
    "AC Deluxe Bus 21 Seater (2+1)",
    "AC Deluxe Bus 27 Seater (2+2)",
    "AC Deluxe Bus 35 Seater (2+2)",
    "AC Deluxe Bus 41 Seater (2+2)",
    "AC Deluxe Bus 45 Seater (2+2)",
    "AC Deluxe Bus 49 Seater (2+2)",
    "AC Deluxe Bus 60 Seater (3+2)",
  ],
  "AC Luxury Buses": [
    "AC Luxury Bus 25 Seater (2+1)",
    "AC Luxury Bus 31 Seater (2+2)",
    "AC Luxury Bus 41 Seater (2+2)",
    "AC Luxury Bus 45 Seater (2+2)",
    "AC Luxury Bus 49 Seater (2+2)",
    "AC Luxury Bus 55 Seater (2+2)",
  ],
  "AC Sleeper Buses": [
    "AC Seater Sleeper Bus (2+2)",
    "AC Sleeper Bus (2+1)",
  ],
};

export default function EnquiryForm({ setShowEnquiry }) {
  const [step, setStep] = useState(1);
  const totalSteps = 3;
  const [form, setForm] = useState({
    Destination: "",
    packageLocal: "",
    packageOutstation: "",
    Vehicle_Type: "",
    Bus: "",
    Travel_Date: "",
    Pickup_Location: [""],
    Drop_Location: [""],
    Drop_Time: "",
    Name: "",
    Email: "",
    Phone: "",
    message: ""
  });

  const handleChange = (e, idx = null, isPickup = true) => {
    const { name, value } = e.target;
    if (name === "Pickup_Location[]") {
      const updated = [...form.Pickup_Location];
      updated[idx] = value;
      setForm({ ...form, Pickup_Location: updated });
    } else if (name === "Drop_Location[]") {
      const updated = [...form.Drop_Location];
      updated[idx] = value;
      setForm({ ...form, Drop_Location: updated });
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  };

  const addLocation = (isPickup) => {
    const key = isPickup ? "Pickup_Location" : "Drop_Location";
    setForm({ ...form, [key]: [...form[key], ""] });
  };

  const removeLocation = (idx, isPickup) => {
    const key = isPickup ? "Pickup_Location" : "Drop_Location";
    const updated = form[key].filter((_, i) => i !== idx);
    setForm({ ...form, [key]: updated.length ? updated : [""] });
  };

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", form);
    alert("Enquiry submitted! We'll contact you soon.");
    setStep(1);
    setForm({
      Destination: "",
      packageLocal: "",
      packageOutstation: "",
      Vehicle_Type: "",
      Bus: "",
      Travel_Date: "",
      Pickup_Location: [""],
      Drop_Location: [""],
      Drop_Time: "",
      Name: "",
      Email: "",
      Phone: "",
      message: ""
    });
    if (setShowEnquiry) setShowEnquiry(false);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl w-full mx-auto bg-white p-6 rounded-2xl shadow-xl text-sm border border-gray-100">
      <h2 className="text-lg font-semibold text-center mb-4 text-blue-700">🚌 Bus Hire Enquiry Form</h2>

      <div className="h-2 bg-gradient-to-r from-orange-400 to-blue-500 rounded-full mb-6" style={{ width: `${(step / totalSteps) * 100}%` }}></div>

      {step === 1 && (
        <div className="space-y-4">
          <Select label="Destination" name="Destination" value={form.Destination} onChange={e => setForm(f => ({ ...f, Destination: e.target.value, packageLocal: "", packageOutstation: "" }))} options={destinations.map(d => ({ label: d.label, value: d.value }))} />
          {form.Destination === "Local Run" && (
            <Select label="Package" name="packageLocal" value={form.packageLocal} onChange={handleChange} options={localPackages.map(p => ({ label: p, value: p }))} />
          )}
          {form.Destination === "Outstation Run" && (
            <Select label="Package" name="packageOutstation" value={form.packageOutstation} onChange={handleChange} options={outstationPackages.map(p => ({ label: p, value: p }))} />
          )}
          <Select label="Bus Type" name="Vehicle_Type" value={form.Vehicle_Type} onChange={e => setForm(f => ({ ...f, Vehicle_Type: e.target.value, Bus: "" }))} options={busTypes.map(b => ({ label: b, value: b }))} />
          <Select label="Bus" name="Bus" value={form.Bus} onChange={handleChange} options={(busOptions[form.Vehicle_Type] || []).map(b => ({ label: b, value: b }))} />
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <Input label="Travel Date & Time" type="datetime-local" name="Travel_Date" value={form.Travel_Date} onChange={handleChange} />
          <MultiInput label="Pickup Location(s)" name="Pickup_Location[]" values={form.Pickup_Location} onChange={handleChange} add={() => addLocation(true)} remove={i => removeLocation(i, true)} />
          <MultiInput label="Drop Location(s)" name="Drop_Location[]" values={form.Drop_Location} onChange={handleChange} add={() => addLocation(false)} remove={i => removeLocation(i, false)} />
          <Input label="Drop-off Date & Time" type="datetime-local" name="Drop_Time" value={form.Drop_Time} onChange={handleChange} />
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <Input label="Name" name="Name" value={form.Name} onChange={handleChange} />
          <Input label="Email" name="Email" type="email" value={form.Email} onChange={handleChange} />
          <Input label="Phone" name="Phone" type="tel" value={form.Phone} onChange={handleChange} />
          <div>
            <label className="block font-medium text-blue-700 mb-1">Message</label>
            <textarea name="message" rows={3} value={form.message} onChange={handleChange} className="w-full border border-blue-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-orange-300" />
          </div>
        </div>
      )}

      <div className="flex justify-between mt-6">
        {step > 1 ? (
          <button type="button" onClick={handlePrev} className="px-4 py-2 bg-blue-500 text-white font-semibold rounded shadow hover:bg-blue-600">Previous</button>
        ) : <div />}
        {step < totalSteps ? (
          <button type="button" onClick={handleNext} className="px-4 py-2 bg-orange-500 text-white font-semibold rounded shadow hover:bg-orange-600">Next</button>
        ) : (
          <button type="submit" className="px-4 py-2 bg-green-600 text-white font-semibold rounded shadow hover:bg-green-700">Submit Enquiry</button>
        )}
      </div>
    </form>
  );
}

// Components
function Select({ label, name, value, onChange, options }) {
  return (
    <div>
      <label className="block font-medium text-blue-700 mb-1">{label}</label>
      <select name={name} value={value} onChange={onChange} className="w-full border border-blue-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-orange-300" required>
        <option value="" disabled>Select {label}</option>
        {options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
      </select>
    </div>
  );
}

function Input({ label, type = "text", name, value, onChange }) {
  return (
    <div>
      <label className="block font-medium text-blue-700 mb-1">{label}</label>
      <input type={type} name={name} value={value} onChange={onChange} className="w-full border border-blue-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-orange-300" required />
    </div>
  );
}

function MultiInput({ label, name, values, onChange, add, remove }) {
  return (
    <div>
      <label className="block font-medium text-blue-700 mb-1">{label}</label>
      {values.map((val, idx) => (
        <div key={idx} className="flex items-center gap-2 mb-2">
          <input type="text" name={name} value={val} onChange={e => onChange(e, idx)} className="flex-1 border border-blue-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-orange-300" required />
          {values.length > 1 && <button type="button" onClick={() => remove(idx)} className="bg-red-100 text-red-600 rounded px-2 font-bold">−</button>}
          <button type="button" onClick={add} className="bg-green-100 text-green-600 rounded px-2 font-bold">+</button>
        </div>
      ))}
    </div>
  );
}
