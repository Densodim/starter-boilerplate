import React, {Component} from "react";
import {Button, Card, message, Table, Tag, Tooltip} from "antd";
import {DeleteOutlined, EyeOutlined} from "@ant-design/icons";
import UserView from "./UserView";
import {connect} from "react-redux";
import {fetchUsersRequest} from '../../../../redux/actions/Users'

export class UserList extends Component {

    state = {
        userProfileVisible: false,
        selectedUser: null
    };

    componentDidMount() {
        this.props.fetchUsers();
    }

    // Переход на страницу редактирования профиля
    redirectToEditProfile = (userId) => {
        this.props.history.push(`/setting/edit-profile/${userId}`); // Навигация на страницу редактирования
    };

    handleUsernameClick = (userId) => {
        this.redirectToEditProfile(userId);
    };

    deleteUser = (userId) => {
        this.setState({
            users: this.state.users.filter((item) => item.id !== userId),
        });
        message.success({content: `Deleted user ${userId}`, duration: 2});
    };

    showUserProfile = (userInfo) => {
        this.setState({
            userProfileVisible: true,
            selectedUser: userInfo,
        });
    };

    closeUserProfile = () => {
        this.setState({
            userProfileVisible: false,
            selectedUser: null,
        });
    };

    render() {
        const {users, loading, error} = this.props;
        const {userProfileVisible, selectedUser} = this.state;

        if (loading) {
            return <p>Loading...</p>;
        }

        if (error) {
            return <p>{error}</p>;
        }

        const tableColumns = [
            {
                title: "User",
                dataIndex: "name",
                sorter: (a, b) => a.name.localeCompare(b.name),
                render: (_, record) => (
                    <a onClick={() => this.handleUsernameClick(record.id)}>{record.name}</a> // Добавляем обработчик клика по имени
                ),
            },
            {
                title: "Username",
                dataIndex: "username",
                sorter: (a, b) => a.username.localeCompare(b.username),
            },
            {
                title: "Phone",
                dataIndex: "phone",
                sorter: (a, b) => a.phone.localeCompare(b.phone),
            },
            {
                title: "Website",
                dataIndex: "website",
                render: (website) => (
                    <a href={`http://${website}`} target="_blank" rel="noopener noreferrer">
                        {website}
                    </a>
                ),
            },
            {
                title: "Company",
                dataIndex: "company",
                render: (company) => <Tag color="blue">{company.name}</Tag>,
                sorter: (a, b) => a.company.name.localeCompare(b.company.name),
            },
            {
                title: "",
                dataIndex: "actions",
                render: (_, elm) => (
                    <div className="text-right">
                        <Tooltip title="View">
                            <Button
                                type="primary"
                                className="mr-2"
                                icon={<EyeOutlined/>}
                                onClick={() => this.showUserProfile(elm)}
                                size="small"
                            />
                        </Tooltip>
                        <Tooltip title="Delete">
                            <Button
                                danger
                                icon={<DeleteOutlined/>}
                                onClick={() => this.deleteUser(elm.id)}
                                size="small"
                            />
                        </Tooltip>
                    </div>
                ),
            },
        ];

        return (
            <Card bodyStyle={{padding: "0px"}}>
                <Table columns={tableColumns} dataSource={users} rowKey="id"/>
                <UserView
                    data={selectedUser}
                    visible={userProfileVisible}
                    close={this.closeUserProfile}
                />
            </Card>
        );
    }
}


//  Redux
const mapStateToProps = (state) => ({
    users: state.users.users,
    loading: state.users.loading,
    error: state.users.error,
});

const mapDispatchToProps = (dispatch) => ({
    fetchUsers: () => dispatch(fetchUsersRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
