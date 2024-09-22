import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Perks from "../Perks.jsx";

export default function PlacesPage() {
  const { action } = useParams();
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [photoLink, setPhotoLink] = useState("");
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState("");
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setMaxGuests] = useState("");

  function inputHeader(text) {
    return <h2 className="text-2xl mt-4">{text}</h2>;
  }

  function inputDescription(text) {
    return <p className="text-gray-500 text-sm">{text}</p>;
  }

  function preInput(header, description) {
    return (
      <>
        {inputHeader(header)}
        {inputDescription(description)}
      </>
    );
  }

  return (
    <div>
      {action !== "new" && (
        <div className="text-center">
          <Link
            className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full"
            to={"/account/places/new"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Add new place
          </Link>
        </div>
      )}
      {action === "new" && (
        <div>
          <form>
            {preInput(
              "Title",
              "Title for your place. It will be displayed to all"
            )}
            <input
              type="text"
              placeholder="title for example: My lovely apartment"
              value={title}
              onChange={(ev) => setTitle(ev.target.value)}
            />
            {preInput("Address", "Address to this place")}
            <input
              type="text"
              placeholder="address"
              value={address}
              onChange={(ev) => setAddress(ev.target.value)}
            />
            {preInput("Photos", "Add photos of the property")}
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Add using link ......jpg"
                value={photoLink}
                onChange={(ev) => setPhotoLink(ev.target.value)}
              />
              <button className="bg-gray-300 p-2 rounded-2xl flex-grow min-w-[100px]">
                Add photo
              </button>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-2">
              <button className="border bg-transparent rounded-2xl p-8 text-gray-600 flex gap-1 justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
                  />
                </svg>
                Upload
              </button>
            </div>
            {preInput("Description", "Description of the the place")}
            <textarea
              value={description}
              onChange={(ev) => setDescription(ev.target.value)}
            />
            {preInput("Perks", "Select all that apply")}
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2 mt-2">
              <Perks selceted={perks} onChange={setPerks} />
            </div>
            <div>
              {preInput("Extra Info", "House rules, etc")}
              <textarea value={extraInfo} onChange={ev => setExtraInfo(ev.target.value)}/>
            </div>
            <div>
              {preInput(
                "Check in and check out timings and max guests",
                "Enter the check in and check out timings, make sure to have enough time to clean the rooms between guests. Enter max guests."
              )}
              <div className="grid sm:grid-cols-3 gap-2">
                <div>
                  <h3 className="mt-1 -mb-1">Check in time</h3>
                  <input type="text" placeholder="14:00" 
                    value={checkIn}
                    onChange={ev => setCheckIn(ev.target.value)}
                  />
                </div>
                <div>
                  <h3 className="mt-1 -mb-1">Check out time</h3>
                  <input type="text" placeholder="12:00" 
                    value={checkOut}
                    onChange={ev => setCheckOut(ev.target.value)}
                  />
                </div>
                <div>
                  <h3 className="mt-1 -mb-1">Maximum number of guests</h3>
                  <input type="number" placeholder="4" 
                    value={maxGuests}
                    onChange={ev => setMaxGuests(ev.target.value)}
                  />
                </div>
              </div>
            </div>
            <button className="primary my-4">Save</button>
          </form>
        </div>
      )}
    </div>
  );
}
