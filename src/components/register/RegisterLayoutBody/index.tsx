import { Button, Form } from "antd";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import { LeftOutlined } from "@ant-design/icons";

const RegisterLayoutBody: any = (props : any) => {
     const navigate = useNavigate();
     const {title ,description , onSubmit} = props
    return (
        <div className='registercomponent'>
          <Form
            className="register-body__wrapper"
            name='basic'
            onFinish={onSubmit}
            >
            <div className="register-body__top">
            <div className="register-body__top--title">
              <h4 className="register-body__top--title--maintitle">
                {title}{" "}
              </h4>
              <div
                onClick={() => {      
                  navigate("/login");
                }}
                style={{ cursor: "pointer" }}
              >
                <LeftOutlined /> Back
              </div>
            </div>
            {description && (
              <div className="register-body__top--description">
                <p dangerouslySetInnerHTML={{ __html: description }} />
              </div>
            )}
          </div>      
          </Form>
        </div>
    )
}

export default RegisterLayoutBody;
