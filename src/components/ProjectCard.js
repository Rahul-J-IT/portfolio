import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,git }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <a style={{color:"white"}} href={git}><div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
        </a>
      </div>
    </Col>
  )
}
