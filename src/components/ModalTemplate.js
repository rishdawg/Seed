import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Col } from 'reactstrap';

class ModalTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
          <Col sm="4" xs="10" className="portfolio-item">
            <a className="portfolio-link" onClick={this.toggle} data-toggle="modal">
              <div className="caption">
                <div className="caption-content">
                  <i className="fa fa-search-plus fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid rounded-circle center-block" src={this.props.image} alt=""/>
              &nbsp;
            </a>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>{this.props.name}</ModalHeader>
              <ModalBody>
                {this.props.description}
              </ModalBody>
              <ModalFooter>
                {this.props.title}
              </ModalFooter>
            </Modal>
          </Col>
    );
  }
}

export default ModalTemplate;
