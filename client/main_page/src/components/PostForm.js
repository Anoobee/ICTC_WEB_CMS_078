import React, { useContext, useEffect, useState } from "react";
import postContext from "../context/post/postContext";
import ImageUploader from "./ImageUrl";
import { useNavigate, useParams } from "react-router-dom";

export default function PostForm(props) {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();

  // const [postData, setPostData] = useState([]);
  const [imageUrl1, setImageUrl1] = useState("");
  const context = useContext(postContext);
  const { post: postData, editPost, getPost, addPost } = context;
  const [clicked, setClicked] = useState(false);

  const [post, setPost] = useState({
    title: postData.title || "",
    type: postData.type || "",
    participants: postData.participants || "",
    instructors: postData.instructors || "",
    organizer: postData.organizer || "",
    description: postData.description || "",
    imageUrl: postData.imageUrl || "",
    startdate: postData.startdate || "",
    enddate: postData.enddate || "",
    starttime: postData.starttime || "",
    endtime: postData.endtime || "",
  });
  const dataFromChild = (data) => {
    setImageUrl1(data);
  };

  useEffect(() => {
    if (id) {
      getPost(id);
    }
  }, []);

  useEffect(() => {
    if (postData) {
      setPost(postData);
    }
  }, [postData]);

  const handleClick = (e) => {
    setClicked(true);
    e.preventDefault();
    if (!id) {
      addPost(
        post.title,
        post.type,
        post.participants,
        post.instructors,
        post.organizer,
        post.description,
        imageUrl1,
        post.startdate,
        post.enddate,
        post.starttime,
        post.endtime
      );
    } else {
      editPost(
        id,
        post.title,
        post.type,
        post.participants,
        post.instructors,
        post.organizer,
        post.description,
        imageUrl1,
        post.startdate,
        post.enddate,
        post.starttime,
        post.endtime
      );

      setPost({
        title: "",
        type: "",
        participants: "",
        instructors: "",
        organizer: "",
        description: "",
        startdate: "",
        enddate: "",
        starttime: "",
        endtime: "",
      });

      navigate("/admin/post");
    }

    setPost({
      title: "",
      type: "",
      participants: "",
      instructors: "",
      organizer: "",
      description: "",
      startdate: "",
      enddate: "",
      starttime: "",
      endtime: "",
    });
    props.showAlert("New Post Has been Added", "success");
  };

  const handleChange = (e) => {
    setClicked(false);
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white container rounded">
      <div className="mt-3 container">
        <br></br>
        <div className="text-center">
          <span
            style={{
              backgroundColor: "#00028d",
              borderRadius: "5px",
              fontSize: "2rem",
              color: "white",
              paddingRight: "1rem",
              paddingLeft: "1rem",
              paddingTop: "0.5rem",
              paddingBottom: "0.5rem",
            }}
            className="mb-2"
          >
            Fill Event Detail
          </span>
        </div>
        <hr></hr>
        <form>
          <div className="row g-3 mb-2">
            <div className="col">
              <label htmlFor="title" className="form-label mx-2">
                Event Title
              </label>
              <input
                type="text"
                onChange={handleChange}
                minLength={3}
                required
                className="form-control"
                value={post.title}
                id="title"
                name="title"
              />
            </div>
            <div className="col">
              <label htmlFor="type" className="form-label mx-2">
                Event Type
              </label>
              <input
                type="text"
                onChange={handleChange}
                minLength={3}
                required
                className="form-control"
                value={post.type}
                id="type"
                name="type"
              />
            </div>
          </div>

          <div className="row g-3 mb-2">
            <div className="col">
              <label htmlFor="instructors" className="form-label mx-2">
                Number Of Instructors
              </label>
              <input
                type="number"
                onChange={handleChange}
                className="form-control"
                id="instructors"
                value={post.instructors}
                name="instructors"
              />
            </div>
            <div className="col">
              <label htmlFor="participants" className="form-label mx-2">
                No. of Participants
              </label>
              <input
                type="number"
                onChange={handleChange}
                className="form-control"
                id="participants"
                value={post.participants}
                name="participants"
              />
            </div>
          </div>
          <div className="row g-3 mb-2">
            <div className="col" style={{ marginTop: "1.7rem" }}>
              <p style={{ marginTop: "2px" }}> Upload an image </p>
              <ImageUploader dataFromChild={dataFromChild} clicked={clicked} />
            </div>

            <div className="col" style={{ marginTop: "1.5rem" }}>
              <label htmlFor="organizer" className="form-label mx-2">
                Organizer
              </label>
              <input
                style={{ marginTop: "-1px" }}
                type="text"
                onChange={handleChange}
                minLength={3}
                required
                className="form-control"
                id="organizer"
                value={post.organizer}
                name="organizer"
              />
            </div>
          </div>

          <div className="row g-3 mb-4">
            {/* <div className="col" style={{marginTop:"1.7rem"}}>
            <p style={{marginTop:"2px"}}> Start Time </p>
            {/* <ImageUploader dataFromChild={dataFromChild} clicked={clicked}/> */}
            {/* </div> */}
            <div className="col" style={{ marginTop: "1.5rem" }}>
              <label htmlFor="startdate" className="form-label mx-2">
                Event Start Date
              </label>
              <input
                style={{ marginTop: "-1px" }}
                type="date"
                onChange={handleChange}
                minLength={3}
                required
                className="form-control"
                id="startdate"
                value={post.startdate}
                name="startdate"
              />
            </div>

            <div className="col" style={{ marginTop: "1.5rem" }}>
              <label htmlFor="enddate" className="form-label mx-2">
                Event End Date
              </label>
              <input
                style={{ marginTop: "-1px" }}
                type="date"
                onChange={handleChange}
                minLength={3}
                required
                className="form-control"
                id="enddate"
                value={post.enddate}
                name="enddate"
              />
            </div>
          </div>

          {/* <div className="row g-3 mb-3">
    <div className="col">
      <label htmlFor="date" className="form-label mx-2">
      Event Start Date
      </label>
      <input
        type="date"
        onChange={handleChange}
        className="form-control"
        value={post.startdate}
        id="startdate"
        name="startdate"
      />
    </div>
  </div>
  <div className="row g-3 mb-2 my-1.6">
    <div className="col">
      <label htmlFor="duration" className="form-label mx-2">
        Event End Date
      </label>
      <input
        type="date"
        onChange={handleChange}
        className="form-control"
        value={post.enddate}
        id="enddate"
        name="enddate"
      />
    </div>
  </div> */}

          <div className="row g-3 mb-5">
            {/* <div className="col" style={{marginTop:"1.7rem"}}>
            <p style={{marginTop:"2px"}}> Start Time </p>
            {/* <ImageUploader dataFromChild={dataFromChild} clicked={clicked}/> */}
            {/* </div> */}
            <div className="col" style={{ marginTop: "1.5rem" }}>
              <label htmlFor="starttime" className="form-label mx-2">
                Start Time
              </label>
              <input
                style={{ marginTop: "-1px" }}
                type="time"
                onChange={handleChange}
                minLength={3}
                required
                className="form-control"
                id="starttime"
                value={post.starttime}
                name="starttime"
              />
            </div>

            <div className="col" style={{ marginTop: "1.5rem" }}>
              <label htmlFor="endtime" className="form-label mx-2">
                End Time
              </label>
              <input
                style={{ marginTop: "-1px" }}
                type="time"
                onChange={handleChange}
                minLength={3}
                required
                className="form-control"
                id="endtime"
                value={post.endtime}
                name="endtime"
              />
            </div>
          </div>

          {/*   
  <div className="row g-3 mb-2 my-3">
            <div className="col">
              <label htmlFor="timeRange" className="form-label mx-2">
              
              </label>
              <input
                type="time"
                
                onChange={handleChange}
                className="form-control"
                value={post.timeRange}
                id="timeRange"
                name="timeRange"
                placeholder="Start Time - End Time (e.g., 10:00 AM - 2:00 PM)"
              />
            </div>
          </div> */}

          <div className=" mb-2 my-4">
            <label htmlFor="description" className="form-label mx-2">
              Description(Min length:5)
            </label>
            <textarea
              className="form-control"
              onChange={handleChange}
              minLength={5}
              required
              id="description"
              value={post.description}
              name="description"
              rows="3"
            ></textarea>
          </div>

          <button
            style={{
              backgroundColor: "#00028d",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            disabled={post.title?.length < 3 || post.description?.length < 5}
            className="btn btn-primary mt-2"
            onClick={handleClick}
            type="submit"
          >
            Submit
          </button>
          <hr></hr>
        </form>
      </div>
    </div>
  );
}
