exports.getAll = async (req, res) => {
  try {
    res.send("get all article");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getOneById = async (req, res) => {
  try {
    res.send("get one article by id");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.add = async (req, res) => {
  try {
    res.send("add article");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateById = async (req, res) => {
  try {
    res.send("update article by id");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteById = async (req, res) => {
  try {
    res.send("delete article by id");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
