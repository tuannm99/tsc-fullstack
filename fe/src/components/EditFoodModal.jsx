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

class EditFoodModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      food: {},
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onCategoryChange = this.onCategoryChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onImageChange = this.onImageChange.bind(this);
  }

  componentDidMount() {
    this.setState({ food: { ...this.state.food, ...this.props.food } });
  }

  onNameChange(e) {
    this.setState({ food: { ...this.state.food, name: e.target.value } });
  }

  onCategoryChange(e) {
    this.setState({ food: { ...this.state.food, category: e.target.value } });
  }

  onDescriptionChange(e) {
    this.setState({
      food: { ...this.state.food, description: e.target.value },
    });
  }

  onImageChange(e) {
    this.setState({ food: { ...this.state.food, image: e.target.value } });
  }

  render() {
    return (
      <Modal
        isOpen={this.props.isEditModalOpen}
        toggle={this.props.toggleEditModal}
      >
        <ModalHeader toggle={this.props.toggleEditModal}>Edit Dish</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label>name</Label>
              <Input
                type="text"
                defaultValue={this.props.food.name}
                onChange={(e) => this.onNameChange(e)}
              />
            </FormGroup>
            <FormGroup>
              <Label>category</Label>
              <Input
                type="select"
                defaultValue={this.props.food.category}
                onChange={(e) => this.onCategoryChange(e)}
              >
                <option>appetizer</option>
                <option>maincourse</option>
                <option>dessert</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label>description</Label>
              <Input
                type="textarea"
                defaultValue={this.props.food.description}
                onChange={(e) => this.onDescriptionChange(e)}
              />
            </FormGroup>
            <FormGroup>
              <Label>image</Label>
              <Input
                type="text"
                defaultValue={this.props.food.image}
                onChange={(e) => this.onImageChange(e)}
              />
            </FormGroup>
            <Button
              onClick={() =>
                this.props.handleEdit(this.state.food._id, this.state.food)
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

export default EditFoodModal;
