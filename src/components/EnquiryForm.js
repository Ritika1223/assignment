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

function emptySendMail() {
  // Stub for sending mail
}

export default function EnquiryForm({ setShowEnquiry }) {
  const [step, setStep] = useState(1);
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
  const [progress, setProgress] = useState(33);
  const totalSteps = 3;

  function handleChange(e, idx, isPickup) {
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
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  }
  function addLocation(isPickup) {
    if (isPickup) {
      setForm({ ...form, Pickup_Location: [...form.Pickup_Location, ""] });
    } else {
      setForm({ ...form, Drop_Location: [...form.Drop_Location, ""] });
    }
  }
  function removeLocation(idx, isPickup) {
    if (isPickup) {
      const arr = form.Pickup_Location.filter((_, i) => i !== idx);
      setForm({ ...form, Pickup_Location: arr.length ? arr : [""] });
    } else {
      const arr = form.Drop_Location.filter((_, i) => i !== idx);
      setForm({ ...form, Drop_Location: arr.length ? arr : [""] });
    }
  }
  function handleNext() {
    if (step < totalSteps) {
      setStep(step + 1);
      setProgress((step + 1) * 100 / totalSteps);
    }
  }
  function handlePrev() {
    if (step > 1) {
      setStep(step - 1);
      setProgress((step - 1) * 100 / totalSteps);
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
    emptySendMail();
    alert("Enquiry submitted! We'll contact you soon.");
    setStep(1);
    setProgress(33);
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
  }

  return (
    <form
      className="mt-6 bg-white bg-opacity-90 backdrop-blur-lg rounded-xl shadow-xl p-6 max-w-xl w-full mx-auto text-sm"
      onSubmit={handleSubmit}
    >
      {/* Progress Bar */}
      <div className="modal-body pt-0">
      <h6 class="text-center">Bus Hire - Submit Your Details</h6>

        <div
          style={{ width: `${progress}%` }}
          className="bg-gradient-to-r from-orange-500 to-blue-700 h-full transition-all duration-300"
        ></div>
      </div>
      {/* Step 1 */}
      {step === 1 && (
        <div className="space-y-4 animate-fade">
          <div>
            <label className="block mb-1 font-semibold text-blue-700">Select Destination</label>
            <select
              name="Destination"
              className="form-select w-full border-blue-400 rounded-lg focus:ring-orange-400"
              required
              value={form.Destination}
              onChange={e => setForm(f => ({ ...f, Destination: e.target.value, packageLocal: "", packageOutstation: "" }))}
            >
              <option value="" disabled>Select Destination</option>
              {destinations.map((d) => (
                <option value={d.value} key={d.value}>{d.label}</option>
              ))}
            </select>
          </div>
          {form.Destination === "Local Run" && (
            <div>
              <label className="block mb-1 font-semibold text-blue-700">Select Package</label>
              <select
                name="packageLocal"
                className="form-select w-full border-blue-400 rounded-lg focus:ring-orange-400"
                value={form.packageLocal}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select Package</option>
                {localPackages.map(pkg => <option key={pkg}>{pkg}</option>)}
              </select>
            </div>
          )}
          {form.Destination === "Outstation Run" && (
            <div>
              <label className="block mb-1 font-semibold text-blue-700">Select Package</label>
              <select
                name="packageOutstation"
                className="form-select w-full border-blue-400 rounded-lg focus:ring-orange-400"
                value={form.packageOutstation}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select Package</option>
                {outstationPackages.map(pkg => <option key={pkg}>{pkg}</option>)}
              </select>
            </div>
          )}
          <div>
            <label className="block mb-1 font-semibold text-blue-700">Select Bus Type</label>
            <select
              name="Vehicle_Type"
              className="form-select w-full border-blue-400 rounded-lg focus:ring-orange-400"
              value={form.Vehicle_Type}
              onChange={e => setForm(f => ({ ...f, Vehicle_Type: e.target.value, Bus: "" }))}
              required
            >
              <option value="" disabled>Select Bus Type</option>
              {busTypes.map(t => <option key={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <label className="block mb-1 font-semibold text-blue-700">Select Bus</label>
            <select
              name="Bus"
              className="form-select w-full border-blue-400 rounded-lg focus:ring-orange-400"
              value={form.Bus}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select Bus</option>
              {(busOptions[form.Vehicle_Type] || []).map(b => <option key={b}>{b}</option>)}
            </select>
          </div>
        </div>
      )}
      {/* Step 2 */}
      {step === 2 && (
        <div className="space-y-4 animate-fade">
          <div>
            <label className="block mb-1 font-semibold text-blue-700">Travel Date & Time</label>
            <input
              type="datetime-local"
              name="Travel_Date"
              className="form-input w-full border-blue-400 rounded-lg focus:ring-orange-400"
              value={form.Travel_Date}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-blue-700">Pickup Location(s)</label>
            {form.Pickup_Location.map((loc, i) => (
              <div key={i} className="flex mb-2 gap-2 items-center">
                <input
                  type="text"
                  name="Pickup_Location[]"
                  value={loc}
                  onChange={e => handleChange(e, i, true)}
                  className="form-input flex-1 border-blue-400 rounded-lg focus:ring-orange-400"
                  placeholder="Enter Pickup Location"
                  required
                />
                {form.Pickup_Location.length > 1 && (
                  <button
                    type="button"
                    className="p-1 bg-orange-100 rounded hover:bg-orange-200"
                    onClick={() => removeLocation(i, true)}
                  >
                    <span className="text-orange-700 text-xl font-bold">-</span>
                  </button>
                )}
                <button
                  type="button"
                  className="p-1 bg-blue-100 rounded hover:bg-blue-200"
                  onClick={() => addLocation(true)}
                >
                  <span className="text-blue-700 text-xl font-bold">+</span>
                </button>
              </div>
            ))}
          </div>
          <div>
            <label className="block mb-1 font-semibold text-blue-700">Drop-off Location(s)</label>
            {form.Drop_Location.map((loc, i) => (
              <div key={i} className="flex mb-2 gap-2 items-center">
                <input
                  type="text"
                  name="Drop_Location[]"
                  value={loc}
                  onChange={e => handleChange(e, i, false)}
                  className="form-input flex-1 border-blue-400 rounded-lg focus:ring-orange-400"
                  placeholder="Enter Drop-off Location"
                  required
                />
                {form.Drop_Location.length > 1 && (
                  <button
                    type="button"
                    className="p-1 bg-orange-100 rounded hover:bg-orange-200"
                    onClick={() => removeLocation(i, false)}
                  >
                    <span className="text-orange-700 text-xl font-bold">-</span>
                  </button>
                )}
                <button
                  type="button"
                  className="p-1 bg-blue-100 rounded hover:bg-blue-200"
                  onClick={() => addLocation(false)}
                >
                  <span className="text-blue-700 text-xl font-bold">+</span>
                </button>
              </div>
            ))}
          </div>
          <div>
            <label className="block mb-1 font-semibold text-blue-700">Drop-off Date & Time</label>
            <input
              type="datetime-local"
              name="Drop_Time"
              className="form-input w-full border-blue-400 rounded-lg focus:ring-orange-400"
              value={form.Drop_Time}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      )}
      {/* Step 3 */}
      {step === 3 && (
        <div className="space-y-4 animate-fade">
          <div>
            <label className="block mb-1 font-semibold text-blue-700">Name</label>
            <input
              type="text"
              name="Name"
              className="form-input w-full border-blue-400 rounded-lg focus:ring-orange-400"
              value={form.Name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-blue-700">Email</label>
            <input
              type="email"
              name="Email"
              className="form-input w-full border-blue-400 rounded-lg focus:ring-orange-400"
              value={form.Email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-blue-700">Phone</label>
            <input
              type="tel"
              name="Phone"
              className="form-input w-full border-blue-400 rounded-lg focus:ring-orange-400"
              value={form.Phone}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-blue-700">Message</label>
            <textarea
              name="message"
              className="form-input w-full border-blue-400 rounded-lg focus:ring-orange-400"
              rows={3}
              value={form.message}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
      )}
      {/* Nav Buttons */}
      <div className="flex justify-between mt-6">
        {step > 1 ? (
          <button
            type="button"
            className="px-4 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 shadow"
            onClick={handlePrev}
          >Previous</button>
        ) : <div></div>}
        {step < totalSteps ? (
          <button
            type="button"
            className="px-4 py-2 bg-orange-500 text-white font-bold rounded hover:bg-orange-600 shadow"
            onClick={handleNext}
          >Next</button>
        ) : (
          <button
            type="submit"
            className="px-4 py-2 bg-blue-700 text-white font-bold rounded hover:bg-blue-800 shadow"
          >Send Enquiry</button>
        )}
      </div>
    </form>
  );
}
