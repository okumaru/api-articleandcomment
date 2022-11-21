const articleModel = require("../Models/article.model");
const commentModel = require("../Models/comment.model");

/**
 *
 * @param {*} req
 * @param {*} res
 */
exports.getAll = async (req, res) => {
  try {
    res.send("get all comment");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 *
 * @param {*} req
 * @param {*} res
 */
exports.getOneById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await commentModel.findById(id).then((res) => {
      if (!res) throw new Error("Cannot find comment with id " + id);
      return res;
    });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 *
 * @param {*} req
 * @param {*} res
 */
exports.add = async (req, res) => {
  try {
    value = req.body.value;
    articleid = req.body.article;
    const commentdata = new commentModel({
      value: req.body.value,
      article: articleid,
    });

    const dataToSave = await commentdata.save().then((resinsert) => {
      // Do update article comments data
      return articleModel
        .findByIdAndUpdate(
          articleid,
          {
            $push: {
              comments: {
                _id: resinsert._id,
                value: value,
                article: articleid,
              },
            },
          },
          { new: true, useFindAndModify: false }
        )
        .then((article) => {
          // Validating is article exist or not
          if (!article)
            throw new Error(
              "Comment successfully saved to database, but cannot find article with id " +
                articleid
            );

          return article;
        });
    });
    res.status(200).json(dataToSave);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 *
 * @param {*} req
 * @param {*} res
 */
exports.updateById = async (req, res) => {
  try {
    res.send("update comment by id");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 *
 * @param {*} req
 * @param {*} res
 */
exports.deleteById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await commentModel
      .findByIdAndDelete(id)
      .then((res) => {
        if (!res) throw new Error("Cannot find comment with id " + id);
        return res;
      })
      .then((comment) => {
        // Update data article comments
        return articleModel.findByIdAndUpdate(
          comment.article,
          {
            $pullAll: {
              comments: [{ _id: id }],
            },
          },
          { new: true }
        );
      });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
