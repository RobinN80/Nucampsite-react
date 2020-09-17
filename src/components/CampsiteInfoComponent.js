import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

function RenderCampsite({ campsite }) {
  return (
    <div className="col-md-5 m-1">
      <Card>
        <CardImg top src={campsite.image} alt={campsite.name} />
        <CardBody>
          <CardTitle>{campsite.name}</CardTitle>
          <CardText>{campsite.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function CampsiteInfo(props) {
  if (props.campsite) {
    return (
      <div className="container">
        <div className="row">
          <RenderCampsite campsite={props.campsite} />
          <RenderComments comments={props.campsite.comments} />
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

function RenderComments({ comments }) {
  console.log(comments);
  if (comments) {
    return (
      <div className="col-md-5 m-1">
        <h4>Comments</h4>
        <p>
          {comments.map((comment) => (
            <div>
              <p>
                "{comment.text}" - {comment.author}-
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(Date.parse(comment.date)))}
              </p>
            </div>
          ))}
        </p>
      </div>
    );
  }
}

export default CampsiteInfo;
