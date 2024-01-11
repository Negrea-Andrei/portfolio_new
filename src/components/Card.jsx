import {Col} from "react-bootstrap"
export default function Card({title, description, imgURL}) {
  return (
    <Col sm={6} md={4}>
        <div className="proj-imgbx">
            <img src={imgURL} alt="proj-img"/>
            <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
        </div>
    </Col>
  );
}
