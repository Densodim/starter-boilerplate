import React, { Component } from "react";
import { Avatar, Drawer, Divider } from "antd";
import {
  MobileOutlined,
  MailOutlined,
  UserOutlined,
  CompassOutlined,
  GlobalOutlined,
  HomeOutlined,
  BankOutlined,
} from "@ant-design/icons";

export class UserView extends Component {
  render() {
    const { data, visible, close } = this.props;

    if (!data) return null; // Если данных нет, ничего не рендерим

    return (
      <Drawer width={300} placement="right" onClose={close} closable={false} open={visible}>
        <div className="text-center mt-3">
          <Avatar size={80} icon={<UserOutlined />} />
          <h3 className="mt-2 mb-0">{data.name}</h3>
          <span className="text-muted">@{data.username}</span>
        </div>
        <Divider dashed />
        <div>
          <h6 className="text-muted text-uppercase mb-3">Account details</h6>
          <p>
            <UserOutlined />
            <span className="ml-3 text-dark">ID: {data.id}</span>
          </p>
          <p>
            <BankOutlined />
            <span className="ml-3 text-dark">Company: {data.company.name}</span>
          </p>
        </div>
        <div className="mt-5">
          <h6 className="text-muted text-uppercase mb-3">CONTACT</h6>
          <p>
            <MobileOutlined />
            <span className="ml-3 text-dark">{data.phone}</span>
          </p>
          <p>
            <MailOutlined />
            <span className="ml-3 text-dark">{data.email || "-"}</span>
          </p>
          <p>
            <CompassOutlined />
            <span className="ml-3 text-dark">
              {data.address.street}, {data.address.city}
            </span>
          </p>
          <p>
            <HomeOutlined />
            <span className="ml-3 text-dark">Zip: {data.address.zipcode}</span>
          </p>
        </div>
        <div className="mt-5">
          <h6 className="text-muted text-uppercase mb-3">Website</h6>
          <p>
            <GlobalOutlined />
            <a href={`http://${data.website}`} target="_blank" rel="noopener noreferrer" className="ml-3 text-dark">
              {data.website}
            </a>
          </p>
        </div>
      </Drawer>
    );
  }
}

export default UserView;
