import React, {Component} from 'react';
import {Button, Col, DatePicker, Form, Input, message, Row} from 'antd';
import {ROW_GUTTER} from 'constants/ThemeConstant';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {FETCH_USER_REQUEST} from "../../../../redux/constants/User";

class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            email: '',
            username: '',
            phone: '',
            website: '',
            address: '',
            city: '',
            postcode: '',
        };
    }


    componentDidMount() {
        // Получаем userId из URL и диспатчим экшн
        const {match} = this.props;
        const userId = match.params.id;
        this.props.fetchUser(userId); // Диспатчим экшн для загрузки данных


        // console.log(this.props.user);
    }

    static getDerivedStateFromProps(nextProps, nextState) {
        // Обновляем состояние только если данные пользователя изменились
        if (nextProps.user !== nextState.prevUser) {
            return {
                prevUser: nextProps.user,
                name: nextProps.user?.name || '',
                email: nextProps.user?.email || '',
                username: nextProps.user?.username || '',
                phone: nextProps.user?.phone || '',
                website: nextProps.user?.website || '',
                address: nextProps.user?.address?.street || '',
                city: nextProps.user?.address?.city || '',
                postcode: nextProps.user?.address?.zipcode || '',
            };
        }
        return null;
    }

    handleInputChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    render() {
        const {loading} = this.props;
        const {name, email, username, phone, website, address, city, postcode} = this.state;
        console.log('name', name);

        if (loading) {
            return <div>Loading...</div>;
        }

        const onFinish = values => {
            console.log('save')

            const key = 'updatable';
            message.loading({content: 'Updating...', key});
            setTimeout(() => {
                this.setState({
                    name: values.name,
                    email: values.email,
                    username: values.username,
                    phone: values.phone,
                    website: values.website,
                    address: values.address,
                    city: values.city,
                    postcode: values.postcode,
                });
                message.success({content: 'Done!', key, duration: 2});
                this.props.history.push(`/app/pages/user-list`);
            }, 1000);

        };

        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
        };

        return (
            <div className="mt-4">
                <Form
                    name="basicInformation"
                    layout="vertical"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    initialValues={
                        {
                            'name': name,
                            'email': email,
                            'username': username,
                            'phoneNumber': phone,
                            'website': website,
                            'address': address,
                            'city': city,
                            'postcode': postcode
                        }
                    }
                >
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={16}>
                            <Row gutter={ROW_GUTTER}>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Name"
                                        name="name"
                                        rules={[{required: true, message: 'Please input your name!'}]}
                                    >
                                        <Input
                                            name="name"
                                            value={name}
                                            onChange={this.handleInputChange}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Username"
                                        name="username"
                                        rules={[{required: true, message: 'Please input your username!'}]}
                                    >
                                        <Input
                                            name="username"
                                            value={username}
                                            onChange={this.handleInputChange}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Email"
                                        name="email"
                                        rules={[{
                                            required: true,
                                            type: 'email',
                                            message: 'Please enter a valid email!'
                                        }]}
                                    >
                                        <Input
                                            name="email"
                                            value={email}
                                            onChange={this.handleInputChange}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item label="Date of Birth" name="dateOfBirth">
                                        <DatePicker className="w-100"/>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item label="Phone Number" name="phone">
                                        <Input
                                            name="phone"
                                            value={phone}
                                            onChange={this.handleInputChange}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item label="Website" name="website">
                                        <Input
                                            name="website"
                                            value={website}
                                            onChange={this.handleInputChange}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={24}>
                                    <Form.Item label="Address" name="address">
                                        <Input
                                            name="address"
                                            value={address}
                                            onChange={this.handleInputChange}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item label="City" name="city">
                                        <Input
                                            name="city"
                                            value={city}
                                            onChange={this.handleInputChange}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item label="Post code" name="postcode">
                                        <Input
                                            name="postcode"
                                            value={postcode}
                                            onChange={this.handleInputChange}
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Button type="primary" htmlType="submit">
                                Save Change
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.users.user,
    loading: state.users.loading,
});

const mapDispatchToProps = (dispatch) => ({
    fetchUser: (id) => dispatch({type: FETCH_USER_REQUEST, payload: id}),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditProfile));
