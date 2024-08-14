const Event = require("../models/Event");

exports.getEvents = async (req, res) => {
  Event.find().then((events) => {
    return res.status(200).json({
      events,
    });
  });
};

exports.getEvent = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res.status(400).json({ message: "id must be provided" });
  }
  Event.findById(id).then((event) => {
    return res.status(200).json({
      event,
    });
  });
};

exports.createEvent = async (req, res) => {
  try {
    const {
      title,
      type,
      instructors,
      participants,
      description,
      organizer,
      imageUrl,
      startdate,
      enddate,
      starttime,
      endtime,
    } = req.body;
    // if there are errors, return bad request and the errors
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() });
    // }
    const posts = new Event({
      title,
      description,
      type,
      instructors,
      participants,
      organizer,
      imageUrl,
      startdate,
      enddate,
      starttime,
      endtime,
    });
    const savedPosts = await posts.save();

    return res.json(savedPosts);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server error occured");
  }
};
exports.deleteEvent = async (req, res) => {
  try {
    let event = Event.findById(req.params.id);
    if (!event) {
      res.send("No event found");
    } else {
      event = await Event.findByIdAndDelete(req.params.id);
      res.status(200).json({ Success: "Successfully deleted" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

exports.updateEvent = async (req, res) => {
  try {
    let event = Event.findById(req.params.id);
    const data = req.body;
    if (!event) {
      res.status(404).send("No service");
    } else {
      const updatedEvent = await Event.findByIdAndUpdate(req.params.id, data);
      res
        .status(201)
        .json({ message: "event updated successfully", event: updatedEvent });
    }
  } catch (err) {
    res.status(500).send("Internal server error");
  }
};
