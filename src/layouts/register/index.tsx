import { Row, Col, Image } from "antd";
import {FC} from 'react';

import { RegisterLayoutInterface } from "./types";
const regitserLayout: FC<RegisterLayoutInterface> = (props: any) => {
    const { children } = props;
    return (
        <div className='Register'>
            <h2>Welcome to the registration screen</h2>
            <Row
                className="register__wrapper"
                justify={"space-between"}
                align={"middle"}
            >
                <Col className='a' span={11}>
                    <Image
                        className='image'
                        src={'/assets/images/register.png'}
                        preview={false}
                        alt="group"
                    />
                </Col>
                <Col className='registrationDetail' span={13}>
                    <div className='registrationlogo'>
                        <h3>REGISTRATION FORM</h3>
                           {/* <img    
              src={'/assets/images/register.png'}
              crossOrigin={
                process.env.REACT_APP_ENV === "local" ? undefined : "anonymous"
              }
              alt="group"
            /> */}
                    </div>
                    <div className='registrationbody'>{children}<h3>REGISTRATION BODY</h3></div>
                </Col>
            </Row>
        </div>
    )
}

export default regitserLayout;