import React from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
} from 'reactstrap';

class AddFoodModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      category: 'appetizer',
      description: '',
      image: 'https://picsum.photos/318/272',
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onCategoryChange = this.onCategoryChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onImageChange = this.onImageChange.bind(this);
  }

  onNameChange(e) {
    this.setState({ name: e.target.value });
  }

  onCategoryChange(e) {
    this.setState({ category: e.target.value });
  }

  onDescriptionChange(e) {
    this.setState({ description: e.target.value });
  }

  onImageChange(e) {
    this.setState({ image: e.target.value });
  }

  render() {
    return (
      <Modal
        isOpen={this.props.isAddModalOpen}
        toggle={this.props.toggleAddModal}
      >
        <ModalHeader toggle={this.props.toggleAddModal}>Add Dish</ModalHeader>
        <ModalBody>
          <Form onSubmit={this.handleAdd}>
            <FormGroup>
              <Label>name</Label>
              <Input type="text" onChange={(e) => this.onNameChange(e)} />
            </FormGroup>
            <FormGroup>
              <Label>category</Label>
              <Input type="select" onChange={(e) => this.onCategoryChange(e)}>
                <option>appetizer</option>
                <option>maincourse</option>
                <option>dessert</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label>description</Label>
              <Input
                type="textarea"
                onChange={(e) => this.onDescriptionChange(e)}
              />
            </FormGroup>
            <FormGroup>
              <Label>image</Label>
              <Input type="text" onChange={(e) => this.onImageChange(e)} />
            </FormGroup>
            <Button
              onClick={() =>
                this.props.handleAdd({
                  name: this.state.name,
                  category: this.state.category,
                  description: this.state.description,
                  image: this.state.image,
                })
              }
            >
              Submit
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    );
  }
}

export default AddFoodModal;
