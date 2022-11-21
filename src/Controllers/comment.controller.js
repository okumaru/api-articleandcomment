exports.getAll = async (req, res) => {
  try {
    res.send("get all comment");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getOneById = async (req, res) => {
  try {
    res.send("get one comment by id");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.add = async (req, res) => {
  try {
    res.send("add comment");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateById = async (req, res) => {
  try {
    res.send("update comment by id");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteById = async (req, res) => {
  try {
    res.send("delete comment by id");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
