import React, { useContext } from "react";
import postContext from "../context/post/postContext";
import { useNavigate } from "react-router-dom";
import { HiOutlinePencil } from "react-icons/hi";

const PostItem = (props) => {
  const context = useContext(postContext);
  const { deletePost } = context;
  const { post } = props;
  const navigate = useNavigate();

  const handleEdit = (id) => {
    console.log(id);
    navigate(`/admin/postform/${id}`);
  };
  return (
    <div className="container">
      <div className="card my-3">
        <div className="card-body">
          <div
            className="align-items-center"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div>
              <p
                style={{
                  fontSize: "24px",
                  marginBottom: "-.3rem",
                  marginLeft: "-0rem",
                }}
                className="card-title"
              >
                <b>Event Title:</b> {post.title}
              </p>
            </div>
            <div style={{ display: "flex", gap: "20px" }}>
              <div
                onClick={() => handleEdit(post._id)}
                style={{ cursor: "pointer" }}
              >
                <HiOutlinePencil size={20} />
              </div>
              <div>
                <i
                  style={{ cursor: "pointer" }}
                  className="fa fa-solid fa-trash mr-2"
                  onClick={() => {
                    deletePost(post._id);
                  }}
                ></i>
              </div>
            </div>
          </div>
          <div
            className="align-items-center"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div>
              <p
                style={{
                  fontSize: "18px",
                  marginTop: "1rem",
                  marginLeft: "-0rem",
                }}
                className="card-title"
              >
                <b>Type: </b>
                {post.type}
              </p>

              <p
                style={{
                  fontSize: "18px",
                  marginTop: "1rem",
                  marginLeft: "-0rem",
                }}
                className="card-text"
              >
                <b>No. of instructors: </b>
                {post.instructors}
              </p>
              <p
                style={{
                  fontSize: "18px",
                  marginTop: "1rem",
                  marginLeft: "-0rem",
                }}
                className="card-text"
              >
                <b>No. of participants: </b>
                {post.participants}
              </p>

              <p
                style={{
                  fontSize: "18px",
                  marginTop: "1rem",
                  marginLeft: "-0rem",
                }}
                className="card-text"
              >
                <b>Organizer: </b>
                {post.organizer}
              </p>

              <p
                style={{
                  fontSize: "18px",
                  marginTop: "1rem",
                  marginLeft: "-0rem",
                }}
                className="card-text"
              >
                <b>Event Start Date: </b>
                {post.startdate}
              </p>
              <p
                style={{
                  fontSize: "18px",
                  marginTop: "1rem",
                  marginLeft: "-0rem",
                }}
                className="card-text"
              >
                <b>Event End Date: </b>
                {post.enddate}
              </p>

              <p
                style={{
                  fontSize: "18px",
                  marginTop: "1rem",
                  marginLeft: "-0rem",
                }}
                className="card-text"
              >
                <b> Event Time: </b>
                {post.starttime}-{post.endtime}
              </p>

              <p
                style={{
                  fontSize: "18px",
                  marginTop: "1rem",
                  marginLeft: "-0rem",
                }}
                className="card-text"
              >
                <b>Description: </b>
                {post.description}
              </p>
              <p
                style={{
                  fontSize: "18px",
                  marginTop: "1rem",
                  marginLeft: "-0rem",
                }}
                className="card-text"
              >
                {/* <small
                  style={{
                    fontSize: "12px",
                    marginTop: "1rem",
                    marginLeft: "-0rem",
                  }}
                  className="text-muted"
                >
                  By <b>{post.organizer ? post.organizer : "Unknown"}</b>
                  &nbsp;on <b>{new Date(post.date).toGMTString()}</b>
                </small> */}
              </p>
            </div>
            <div>
              <img
                src={post.imageUrl}
                alt="im"
                style={{ height: "250px", width: "320px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
