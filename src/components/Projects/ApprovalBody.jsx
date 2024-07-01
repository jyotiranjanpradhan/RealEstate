import React,{useState} from 'react'
import { Modal, Button, Table, Form, Col, Row } from 'react-bootstrap';

const ApprovalBody = () => {
    const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  return (
    <>
     <div className="container-xxl flex-grow-1 container-p-y">
      <h5 className="mb-1">
        <span className="text-muted fw-light">Project /</span> Approval Body
      </h5>
      <div className="mb-2 text-end">
        <Button variant="primary" onClick={handleShowModal}>
          <span>
            <i className="mdi mdi-plus me-0 me-sm-1"></i>
          </span> Approval
        </Button>
      </div>
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center bg-label-primary py-2">
          <h5 className="mb-0">Approval Body :</h5>
        </div>
        <div className="text-nowrap p-3">
          <div className="table-responsive">
            <Table bordered id="all_request_table">
              <thead className="table-secondary">
                <tr>
                  <th>SL No</th>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>jyoti Ranjan Pradhan</td>
                  <td>No</td>
                  <td>
                    <Button variant="text-primary btn-sm small py-1 px-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
                      <i className="mdi mdi-pencil-outline"></i>
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>jyoti Ranjan Pradhan</td>
                  <td>No</td>
                  <td>
                    <Button variant="text-primary btn-sm small py-1 px-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
                      <i className="mdi mdi-pencil-outline"></i>
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>jyoti Ranjan Pradhan</td>
                  <td>No</td>
                  <td>
                    <Button variant="text-primary btn-sm small py-1 px-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
                      <i className="mdi mdi-pencil-outline"></i>
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>jyoti Ranjan Pradhan</td>
                  <td>No</td>
                  <td>
                    <Button variant="text-primary btn-sm small py-1 px-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
                      <i className="mdi mdi-pencil-outline"></i>
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Add Approval Body</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Col>
                <Form.Group controlId="formApprovalName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <Form.Label>Status</Form.Label>
                <div>
                  <Form.Check
                    type="radio"
                    id="statusActive"
                    name="status"
                    label="Active"
                    checked
                  />
                  <Form.Check
                    type="radio"
                    id="statusInactive"
                    name="status"
                    label="Inactive"
                  />
                </div>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary">Save</Button>
        </Modal.Footer>
      </Modal>
    </div>   
    </>
  )
}

export default ApprovalBody;