import React , {useState} from 'react'
import { Modal, Button, Table, Form, Col,Row } from 'react-bootstrap';

const Tax = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

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
                <tr>
                  <td>01</td>
                  <td>GST</td>
                  <td>56</td>
                  <td>No</td>
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
                <tr>
                  <td>02</td>
                  <td>GST</td>
                  <td>56</td>
                  <td>No</td>
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
                <tr>
                  <td>03</td>
                  <td>GST</td>
                  <td>56</td>
                  <td>No</td>
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
              </tbody>
            </Table>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title id="modalTopTitle">Add Tax</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="g-2">
              <Col xs={12} className="mb-2">
                <Form.Label>Tax Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Tax Name"
                  autoComplete="off"
                />
              </Col>
              <Col xs={12} className="mb-2">
                <Form.Label>Tax Amount</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Tax Amount"
                  autoComplete="off"
                />
              </Col>
              <Col xs={12} className="mb-2">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder=""
                  style={{ height: '60px' }}
                />
              </Col>
              <Col xs={12}>
                <Form.Label>Status</Form.Label>
                <div className="col">
                  <Form.Check
                    inline
                    label="Active"
                    type="radio"
                    name="status"
                    id="statusActive"
                    checked
                  />
                  <Form.Check
                    inline
                    label="Inactive"
                    type="radio"
                    name="status"
                    id="statusInactive"
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

export default Tax;