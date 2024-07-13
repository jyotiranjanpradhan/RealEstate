import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { apiFetchCommissionSetup,apiFetchProductType} from '../../services/Project/apiCommissionSetup';
import { useQuery } from '@tanstack/react-query';
const CommissionSetup = () => {
  const [productTypes, setProductTypes] = useState([]);
    const {register,handleSubmit,reset}= useForm();
    const onSubmit = (data) => {
       console.log(data);
       apiFetchCommissionSetup(data);
       reset();
      };
     const FetchProductType = async()=> {
       const data = await apiFetchProductType();
       setProductTypes(data?.data);
     }
    
      // Additional debugging to see state updates
      useEffect(() => {
        console.log('Product types state updated:', productTypes);
        FetchProductType();
      }, []);
  return (
    <>
<div className="container-xxl flex-grow-1 container-p-y">
      <h5><span className="text-muted fw-light">Project /</span> Commission Setup</h5>
      
      <div className="row">
        <div className="col-xl-12 col-md-12">
          <div className="card">
            <h5 className="card-header"></h5>
            <div className="card-body pt-1">
              <form id="formValidationExamples" className="row g-3" onSubmit={handleSubmit(onSubmit)}>
                <div className="col-md-4">
                  <div className="form-floating form-floating-outline">
                    <select id="productType" className="select2 form-select" required {...register("product_type")}>
                      <option value="1" selected disabled>Select Product type</option>
                      {productTypes.length > 0 && productTypes.map((productType,index) => {
                        console.log(productType);
                        return <option key={index} value={productType?.id}>{productType?.name}</option> 
                         }) 
                         
                      }
                    </select>
                    <label htmlFor="productType">Product Type</label>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-floating form-floating-outline">
                    <input
                      type="number"
                      className="form-control"
                      id="commission"
                      name="commission"
                      placeholder="Commission" 
                        required
                        {...register("commission")}
                      />
                    <label htmlFor="commission">Commission</label>
                  </div>
                </div>
                <div className="mt-4">
                  <button type="submit" className="btn btn-primary me-2">Save</button>
                  <button type="reset" className="btn btn-outline-secondary">Cancel</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default CommissionSetup;