import React , {useState,useEffect} from 'react'
import { Modal, Button, Table, Form, Col,Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { apiFetchTax,apiGetTax } from '../../services/Project/apiTax';


const Tax = () => {
  const [update,setUpdate]=useState(true);
  const [taxData,setTaxData]=useState([]);

  useEffect(()=>{
    const fetchTaxData = async () => {
      try {
        const data = await apiGetTax();
        setTaxData(data);
      } catch (error) {
        console.error("Error fetching tax data:", error);
      }
    };
    fetchTaxData();
  
  }   ,[update])


 

const {register,handleSubmit,reset}=useForm();

    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
const onSubmit=(data)=>{
  apiFetchTax(data);
  reset();
  handleCloseModal()
  setUpdate(!update);
}
console.log(taxData);
  return (
   <>
<div className="container-xxl flex-grow-1 container-p-y">
      <div className="card-header d-flex justify-content-between align-items-center py-2">
        <h5>
          <span className="text-muted fw-light">Projects /</span> Tax
        </h5>
        <div className="mb-2 text-end">
          <Button
            href="#"
            className="ms-2 btn btn-primary btn-sm waves-effect waves-light"
            onClick={handleShowModal}
          >
            <span className="mdi mdi-plus"></span> Tax
          </Button>
        </div>
      </div>

      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center bg-label-primary py-2">
          <h5 className="mb-0">Tax :</h5>
        </div>
        <div className="text-nowrap p-3">
          <div className="table-responsive">
            <Table bordered id="all_request_table">
              <thead className="table-secondary">


                <tr>
                  <th>SL No</th>
                  <th>Tax Name</th>
                  <th>Tax Amount</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              

              {
                taxData?.map((data,index)=>(
                <tr key={index}>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.amount}</td>
                  <td>{data.status ? 'True' : 'False'}</td>
                  <td>
                    <a
                      href=""
                      className="btn btn-text-primary btn-sm small py-1 px-2"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Edit"
                    >
                      <i className="mdi mdi-pencil-outline"></i>
                    </a>
                    <a
                      href=""
                      className="btn btn-text-danger btn-sm small py-1 px-2"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Delete"
                    >
                      <i className="mdi mdi-trash-can"></i>
                    </a>
                  </td>
                </tr>
              ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
      
        <Modal.Header closeButton>
          <Modal.Title id="modalTopTitle">Add Tax</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body>
          
            <Row className="g-2">
              <Col xs={12} className="mb-2">
                <Form.Label>Tax Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Tax Name"
                  autoComplete="off"
                  required
                  {...register("name")}
                />
              </Col>
              <Col xs={12} className="mb-2">
                <Form.Label>Tax Amount</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Tax Amount"
                  autoComplete="off"
                  {...register("amount")}
                />
              </Col>
              <Col xs={12} className="mb-2">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder=""
                  style={{ height: '60px' }}
                  {...register("description")}
                />
              </Col>
              <Col xs={12}>
                <Form.Label>Status</Form.Label>
                <div className="col">
                  <Form.Check
                    inline
                    value="true"
                    label="True"
                    type="radio"
                    name="status"
                    id="statusActive"
                    checked
                    required
                    {...register("status")}
                  />
                  <Form.Check
                    inline
                    value="false"
                    label="False"
                    type="radio"
                    name="status"
                    id="statusInactive"
                    {...register("status")}
                  />
                </div>
              </Col>
            </Row>
           <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" type="submit">Save</Button>
        </Modal.Footer>
        </Modal.Body>
        </Form>
       
      </Modal>
    </div>
   </>
  )
}

export default Tax;