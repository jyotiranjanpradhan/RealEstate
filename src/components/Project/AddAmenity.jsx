import React, { useEffect, useRef, useState } from "react";
import {
  apiFetchAddAmenity,
  apiFetchGetAmenity,
} from "../../services/Project/apiAddAmenity";

const AddAmenity = () => {
  const [amenityTitles, setAmenityTitles] = useState([]);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageRef = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const file = imageRef.current.files[0];

    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", file);
    console.log("Form Data:");
    try {
      const response = await apiFetchAddAmenity(formData);
    } catch (error) {
      console.error("Error uploading data:", error);
    }
  };

  useEffect(() => {
    const fetchAmenities = async () => {
      try {
        const titles = await apiFetchGetAmenity();
        setAmenityTitles(titles);
      } catch (error) {
        console.error("Error fetching amenities:", error);
      }
    };

    fetchAmenities();
  }, []);

  return (
    <>
      <div className="container-xxl flex-grow-1 container-p-y">
        <div className="card-header d-flex justify-content-between align-items-center py-2">
          <h5>
            <span className="text-muted fw-light">Project /</span> Add Amenity
          </h5>
          <div className="mb-2 text-end">
            <a
              href="javascript: history.go(-1)"
              className="ms-2 btn btn-primary btn-sm waves-effect waves-light"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-original-title="Back to list"
            >
              <span className="mdi mdi-keyboard-backspace"></span>
            </a>
          </div>
        </div>
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center bg-label-primary py-2">
            <h5 className="mb-0">Amenity Master :</h5>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <form onSubmit={onSubmit}>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="form-floating form-floating-outline">
                        <select
                          className="form-control"
                          required
                          ref={titleRef}
                        >
                          <option value="" disabled>
                            Select an option
                          </option>
                          {amenityTitles.map((data,index) => (
                            <option key={index} value={data.id}>
                              {data.name}
                            </option>
                          ))}
                        </select>
                        <label>Title</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating form-floating-outline">
                        <textarea
                          name="Description"
                          className="form-control"
                          rows="2"
                          placeholder="Description"
                          style={{ height: "65px" }}
                          required
                          ref={descriptionRef}
                        ></textarea>
                        <label>Description</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating form-floating-outline">
                        <input
                          type="file"
                          className="form-control"
                          id="basic-default-upload-file"
                          required
                          ref={imageRef}
                        />
                        <label htmlFor="basic-default-upload-file">File</label>
                      </div>
                    </div>
                  </div>
                  <button className="btn btn-primary ms-auto waves-effect waves-light mt-2">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddAmenity;
