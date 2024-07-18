import React, {useEffect, useState} from 'react'
import { useForm } from 'react-hook-form';
import ReactQuill from 'react-quill'; // Import ReactQuill
import 'react-quill/dist/quill.snow.css';
import { htmlToText } from 'html-to-text';
import { apiFetchAddProduct } from '../../services/Project/apiAddProduct';
import { useProductSegmentDetails } from '../../hooks/Project/useProjectDetails';
import axios from 'axios';
import { apiFetchProductType } from '../../services/Project/apiCommissionSetup';
import { apiFetchGetAmenity } from '../../services/Project/apiAddAmenity';
import { useParams } from 'react-router-dom';


const AddProduct = () => {
  const [description, setDescription] = useState('');
  const {id}=useParams();
  const [productType, setProductType] = useState([]);
  const [productAmenity, setProductAmenity] = useState([]);
  const {register,handleSubmit,reset}=useForm();
  const { product_segment } = useProductSegmentDetails();
  console.log(product_segment);
  const modules = {
    toolbar: {
      container: '#snow-toolbar',
      handlers: {
      },
    },
  }; 
  const descriptiontext=htmlToText(description)
  const onSubmit = (data) => {
    const descriptionText = htmlToText(description);
    const formData = new FormData();

    // Append other form data
    Object.keys(data).forEach(key => {
      if (key !== 'layout_image') {
        formData.append(key, data[key]);
      }
    });

    // Append description text
    formData.append('description', descriptionText);

    // Append file input
    if (data.layout_image && data.layout_image[0]) {
      formData.append('layout_image', data.layout_image[0]);
    }
    if (id){
      formData.append('confirm_project_id', id);
    }

    apiFetchAddProduct(formData);
    console.log(data);
    reset();
  };
  const fetchProductType = async ()=> {
  try {
    const data = await apiFetchProductType();
    console.log(data);
    setProductType(data?.data);
  } catch (error) {
    console.log(error);
  }
 }

 // Fetching Amenities
 const fetchAmenity = async()=>{
  try {
    const data = await apiFetchGetAmenity()
    setProductAmenity(data);
  } catch (error) {
    console.log(error);
  }
 }
 useEffect(() => {
  fetchProductType();
  fetchAmenity();
  }, []);

  


  return (
    <>
         <div className="container-xxl flex-grow-1 container-p-y">
      <div className="card-header d-flex justify-content-between align-items-center py-2">
        <h5>
          <span className="text-muted fw-light">Project /</span> Add Product
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
          <h5 className="mb-0">Product :</h5>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="form-floating form-floating-outline">
                      <input type="text" className="form-control" placeholder="Product Name" 
                        required
                        {...register("name")}
                      />
                      <label>Product Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating form-floating-outline">
                      <input type="text" className="form-control" placeholder="Product Location" required
                        {...register("location")}/>
                      <label>Product Location</label>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-12">
                    <div className="form-floating-outline">
                      <select id="" className="select2 form-select" {...register("segment")}>
                        <option disabled selected value="">Project Segment</option>
                        {
                          product_segment?.map((segment,index)=><option value={segment?.id}>{segment?.name}</option>)
                        }
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-12">
                    <div className="form-floating-outline">
                      <select id="" className="select2 form-select" {...register("type")}>
                        <option disabled selected value="">Product type</option>
                        {
                          productType?.map((type,index)=><option value={type?.id}>{type?.name}</option>)
                        }
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating form-floating-outline">
                      <input type="text" className="form-control" placeholder="Product Variance" required
                        {...register("variance")}/>
                      <label>Product Variance</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating form-floating-outline">
                      <input type="number" className="form-control" placeholder="Product No.s" required
                        {...register("nos")} />
                      <label>Product No.s</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating form-floating-outline">
                      <input type="number" className="form-control" placeholder="Product Area" required
                        {...register("area")} />
                      <label>Product Area</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating form-floating-outline">
                      <input type="file" className="form-control" required
                        {...register("layout_image")} />
                      <label>Layout Image</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating form-floating-outline">
                      <input type="number" className="form-control" placeholder="Cost" required
                        {...register("cost")}/>
                      <label>Cost</label>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-12">
                    <div className="form-floating-outline">
                      <select id="" className="select2 form-select" {...register("amenity")}>
                        <option disabled selected value="">Product Amenity</option>
                        {
                          productAmenity?.map((type,index)=><option value={type?.id}>{type?.name}</option>)
                        }
                      </select>
                    </div>
                  </div>
                  <div className="col-12">
                    <label className="form-label">Project Description</label>
                    <div id="snow-toolbar">
                      <span className="ql-formats">
                        <select className="ql-font"></select>
                        <select className="ql-size"></select>
                      </span>
                      <span className="ql-formats">
                        <button className="ql-bold"></button>
                        <button className="ql-italic"></button>
                        <button className="ql-underline"></button>
                        <button className="ql-strike"></button>
                      </span>
                      <span className="ql-formats">
                        <select className="ql-color"></select>
                        <select className="ql-background"></select>
                      </span>
                      <span className="ql-formats">
                        <button className="ql-script" value="sub"></button>
                        <button className="ql-script" value="super"></button>
                      </span>
                      <span className="ql-formats">
                        <button className="ql-header" value="1"></button>
                        <button className="ql-header" value="2"></button>
                        <button className="ql-blockquote"></button>
                        <button className="ql-code-block"></button>
                      </span>
                    </div>
                    <div >
                    <ReactQuill
                      id="snow-editor"
                      value={description}
                      onChange={setDescription}
                      modules={modules}
                      className="mt-3"
                    />
                    </div>
                  </div>
                </div>
                <button className="btn btn-primary ms-auto waves-effect waves-light mt-2">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default AddProduct