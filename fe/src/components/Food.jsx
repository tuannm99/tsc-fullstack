import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Row,
} from 'reactstrap';
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineDelete,
  AiFillEdit,
} from 'react-icons/ai';
import AddFoodModal from './AddFoodModal';
import EditFoodModal from './EditFoodModal';
import foodApi from '../api/foodApi';

class Food extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: [],
      food: {},
      isAddModalOpen: false,
      isEditModalOpen: false,
    };

    this.handlePasswordChange = this.handleFavouriteChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.toggleAddModal = this.toggleAddModal.bind(this);
    this.toggleEditModal = this.toggleEditModal.bind(this);
  }

  componentDidMount() {
    foodApi
      .getAll()
      .then((data) => {
        this.setState({ foods: [...data] });
      })
      .catch((e) => console.log(e));
  }

  componentDidUpdate() {
    console.log('Food did update', this.state.foods);
  }

  toggleAddModal() {
    this.setState({
      isAddModalOpen: !this.state.isAddModalOpen,
    });
  }

  toggleEditModal(food) {
    this.setState({
      isEditModalOpen: !this.state.isEditModalOpen,
      food: { ...food },
    });
  }

  handleEdit(id, editedFood) {
    delete editedFood._id;
    foodApi
      .update(id, editedFood)
      .then((data) => {
        const newFoods = this.state.foods.map((food) => {
          return food._id === data._id ? data : food;
        });
        this.setState({
          foods: [...newFoods],
          isEditModalOpen: !this.state.isEditModalOpen,
        });
      })
      .catch((e) => console.log(e.response.data));
  }

  handleAdd(food) {
    foodApi
      .add(food)
      .then((data) => {
        this.setState({
          foods: [...this.state.foods, data],
          isAddModalOpen: !this.state.isAddModalOpen,
        });
      })
      .catch((e) => console.log(e.response.data));
  }

  handleFavouriteChange(id) {
    const editedFoods = this.state.foods.map((food) =>
      food.id === id ? { ...food, favourite: !food.favourite } : food
    );
    this.setState({ foods: editedFoods });
  }

  handleDelete(id) {
    foodApi
      .remove(id)
      .then((data) => {
        console.log('food deleted!', data);
      })
      .catch((e) => console.log(e.response.data));
    const foods = this.state.foods.filter((food) => food._id !== id);
    this.setState({ foods });
  }

  render() {
    return (
      <>
        <div className="container">
          <Button color="primary" onClick={this.toggleAddModal}>
            Add
          </Button>
          <AddFoodModal
            foods={this.state.foods}
            handleAdd={this.handleAdd}
            toggleAddModal={this.toggleAddModal}
            isAddModalOpen={this.state.isAddModalOpen}
          />
          {this.state.isEditModalOpen && (
            <EditFoodModal
              food={this.state.food}
              handleEdit={this.handleEdit}
              toggleEditModal={this.toggleEditModal}
              isEditModalOpen={this.state.isEditModalOpen}
            />
          )}
          <div className="row align-items-start ">
            {this.state.foods.map((food) => {
              return (
                <div key={food._id} className="col-4 md-1">
                  <Card>
                    <CardImg
                      className="mb-3"
                      alt="Card image cap"
                      src={food.image}
                      top
                      style={{ minHeight: '300px', maxHeight: '300px' }}
                    />
                    <CardBody>
                      <CardTitle tag="h5">{food.name}</CardTitle>
                      <CardSubtitle className="mb-2 text-muted" tag="h6">
                        {food.category}
                      </CardSubtitle>
                      <CardText>{food.description}</CardText>
                      <Row>
                        <Col>
                          <Favourite
                            favourite={food.favourite}
                            onClick={() => this.handleFavouriteChange(food._id)}
                          />
                        </Col>
                        <Col>
                          <div
                            style={{ cursor: 'pointer' }}
                            onClick={() => this.toggleEditModal(food)}
                          >
                            <AiFillEdit />
                          </div>
                        </Col>
                        <Col>
                          <div
                            style={{ cursor: 'pointer' }}
                            onClick={() => this.handleDelete(food._id)}
                          >
                            <AiOutlineDelete />
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

const Favourite = ({ favourite, onClick }) => {
  return (
    <>
      {favourite ? (
        <div
          style={{
            color: 'red',
            cursor: 'pointer',
          }}
          onClick={onClick}
        >
          <AiFillHeart />
        </div>
      ) : (
        <div
          style={{
            color: 'red',
            cursor: 'pointer',
          }}
          onClick={onClick}
        >
          <AiOutlineHeart />
        </div>
      )}
    </>
  );
};

export default Food;
