import {
    LogoutOutlined,
    MessageOutlined,
    NotificationOutlined,
    UserOutlined,
  } from "@ant-design/icons";
  import { Avatar, Dropdown,  MenuProps } from "antd";
  import Search from "antd/es/input/Search";
  import "./Dashboard.css";

  import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout, selectCurrentUser } from "@/redux/features/userSlice";
  
  const CustomHeader = () => {
    const { user } = useAppSelector(selectCurrentUser);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
  
    const handleLogout = () => {
      dispatch(logout());
      navigate("/");
    };
  
    const items: MenuProps["items"] = [
      {
        key: "1",
        label: (
          <div
            className="flex justify-between px-4 py-2 gap-4 rounded-lg transition-all duration-300  hover:text-lightBlue"
            onClick={() => navigate("/")}
          >
            <UserOutlined />
            <p>Home</p>
          </div>
        ),
      },
      {
        key: "2",
        label: (
          <div
            className="flex justify-between px-4 py-2 gap-4 rounded-lg transition-all duration-300  hover:text-rose-500"
            onClick={handleLogout}
          >
            <LogoutOutlined className=" hover:text-white" />
            <p>Logout</p>
          </div>
        ),
      },
    ];
  
    return (
      <div className="flex items-center justify-between ">
        <div className="md:flex md:justify-center md:items-end hidden">
          <Search placeholder="Search Dashboard " allowClear />
        </div>
        <div className="flex items-center ">
          <MessageOutlined className="header-icon hidden md:block" />
          <NotificationOutlined className="header-icon hidden md:block" />
          <Dropdown menu={{ items }} placement="bottomRight">
            <Avatar
              style={{
                backgroundColor: "hsl(233, 100%, 69%)",
                verticalAlign: "middle",
                cursor: "pointer",
              }}
              size={36}
              gap={4}
            >
              {user?.name[0]}
            </Avatar>
  
          </Dropdown>
        </div>
      </div>
    );
  };
  
  export default CustomHeader;
  