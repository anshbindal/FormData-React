import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotifications: "",
  });

  function handleForm(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }
  function submitHandler(event) {
    event.preventDefault();

    console.log("Finally printing the value of Form Data:");
    console.log(formData);
  }

  return (
    <div className="w-fll md:max-w-[50%] mx-auto shadow p-8">
      <form className="space-y-2" onSubmit={submitHandler}>
        <label
          htmlFor="firstName"
          className="text-sm font-medium leading-6 text-gray-900 mb-2"
        >
          First Name
        </label>

        <input
          type="text"
          name="firstName"
          id="firstName"
          onChange={handleForm}
          value={formData.firstName}
          placeholder="Ram"
          className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
        />

        <label
          htmlFor="lastName"
          className="text-sm font-medium leading-6 text-gray-900"
        >
          Last Name
        </label>

        <input
          type="text"
          name="lastName"
          id="lastName"
          onChange={handleForm}
          value={formData.lastName}
          placeholder="Dass"
          className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
        />

        <label
          htmlFor="Email"
          className="text-sm font-medium leading-6 text-gray-900"
        >
          Email Address
        </label>

        <input
          type="text"
          name="email"
          id="Email"
          onChange={handleForm}
          value={formData.email}
          placeholder="Email@gmail.com"
          className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
        />

        <label
          htmlFor="Country"
          className="text-sm font-medium leading-6 text-gray-900"
        >
          Country
        </label>
        <select
          name="country"
          id="Country"
          value={formData.country}
          onChange={handleForm}
          className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
        >
          <option>India</option>
          <option>USA</option>
          <option>Canada</option>
        </select>
        <label
          htmlFor="streetAddress"
          className="text-sm font-medium leading-6 text-gray-900 mb-2"
        >
          Street Address
        </label>
        <br />
        <input
          type="text"
          name="streetAddress"
          id="streetAddress"
          placeholder="B-25C"
          value={formData.streetAddress}
          onChange={handleForm}
          className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
        />
        <label
          htmlFor="city"
          className="text-sm font-medium leading-6 text-gray-900 mb-2"
        >
          City
        </label>
        <br />
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Patna"
          value={formData.city}
          onChange={handleForm}
          className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
        />

        <br />
        <label
          htmlFor="state"
          className="text-sm font-medium leading-6 text-gray-900 mb-2"
        >
          State / Province
        </label>
        <br />
        <input
          type="text"
          name="state"
          id="state"
          placeholder="Bihar"
          value={formData.state}
          onChange={handleForm}
          className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
        />

        <br />
        <label
          htmlFor="postalCode"
          className="text-sm font-medium leading-6 text-gray-900 mb-2"
        >
          Postal Code
        </label>
        <br />
        <input
          type="text"
          name="postalCode"
          id="postalCode"
          placeholder="110077"
          value={formData.postalCode}
          onChange={handleForm}
          className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 "
        />
        <fieldset>
          <legend className="mb-2">By Email</legend>

          <div className="flex">
            <div className="flex h-6 items-center">
              <input
                id="comments"
                name="comments"
                type="checkbox"
                checked={formData.comments}
                onChange={handleForm}
                className="h-4 w-4 rounded"
              />
            </div>

            <div className="ml-3 text-sm leading-6">
              <label
                htmlFor="comments"
                className="text-sm font-medium leading-6 text-gray-900 mb-2"
              >
                Comments
              </label>
              <p className="text-gray-500">
                Get notified when someones posts a comment on a posting.
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="flex h-6 items-center">
              <input
                id="candidates"
                name="candidates"
                type="checkbox"
                checked={formData.candidates}
                onChange={handleForm}
                className="h-4 w-4 rounded"
              />
            </div>

            <div className="ml-3 text-sm leading-6">
              <label
                htmlFor="candidates"
                className="text-sm font-medium leading-6 text-gray-900 mb-2"
              >
                Candidates
              </label>
              <p className="text-gray-500">
                Get notified when a candidate applies for a job.
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="flex h-6 items-center">
              <input
                id="offers"
                name="offers"
                type="checkbox"
                checked={formData.offers}
                onChange={handleForm}
                className="h-4 w-4 rounded"
              />
            </div>

            <div className="ml-3 text-sm leading-6">
              <label
                htmlFor="offers"
                className="text-sm font-medium leading-6 text-gray-900 mb-2"
              >
                Offers
              </label>
              <p className="text-gray-500 mb-4">
                Get notified when a candidate accepts or rejects an offer.
              </p>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>Push Notifications</legend>
          <p className="mb-3">
            These are delivered via SMS to your mobile phone.
          </p>
          <div className="flex  items-center">
            <input
              type="radio"
              id="pushEverything"
              name="pushNotifications"
              value="Everything"
              onChange={handleForm}
              className="h-4 w-4"
            />

            <label
              htmlFor="pushEverything"
              className="ml-3 font-medium leading-6 text-gray-900"
            >
              Everything
            </label>
          </div>

          <div className="flex  items-center">
            <input
              type="radio"
              id="pushEmail"
              name="pushNotifications"
              value="Same as email"
              onChange={handleForm}
              className="h-4 w-4"
            />

            <label
              htmlFor="pushEmail"
              className="ml-3 font-medium leading-6 text-gray-900"
            >
              Same as email
            </label>
          </div>

          <div className="flex  items-center">
            <input
              type="radio"
              id="pushNothing"
              name="pushNotifications"
              value="No Push Notifications"
              onChange={handleForm}
              className="h-4 w-4"
            />

            <label
              htmlFor="pushNothing"
              className="ml-3 font-medium leading-6 text-gray-900"
            >
              No Push Notifications
            </label>
          </div>
        </fieldset>

        <button className="bg-blue-500 text-white font-bold rounded py-2 px-4">
          Save
        </button>
      </form>
    </div>
  );
}

export default App;
