const articleModel = require("../Models/article.model");
const commentModel = require("../Models/comment.model");

/**
 *
 * @param {*} req
 * @param {*} res
 */
exports.getAll = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const paginationlimit = 10;
    const dataskip = (page - 1) * paginationlimit;
    const searchtitle = req.body.title;
    const searchstatus = req.body.status;
    let findSearch = {};

    if (searchtitle) {
      findSearch.title = searchtitle;
    }

    if (searchstatus) {
      findSearch.status = searchstatus;
    }

    const data = await articleModel
      .find(findSearch, null, {
        skip: dataskip,
        limit: paginationlimit,
      })
      .populate("comments")
      .then((res) => {
        return {
          articles: res,
          page_limit: paginationlimit,
          on_page: page,
        };
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
exports.getOneById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await articleModel
      .findOne({ _id: id })
      .populate("comments")
      .then((res) => {
        if (!res) throw new Error("Cannot find article with id " + id);
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
    const articledata = new articleModel({
      title: req.body.title,
      slug: req.body.slug,
      content: req.body.content,
      status: req.body.status,
    });

    const dataToSave = await articledata.save().catch(function (err) {
      throw new Error(err.message);
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
    // res.send("update article by id");
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const dataToUpdate = await articleModel
      .findByIdAndUpdate(id, updatedData, options)
      .then((res) => {
        if (!res) throw new Error("Cannot find article with id " + id);
        return res;
      });
    res.status(200).json(dataToUpdate);
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
    const data = await articleModel
      .findByIdAndDelete(id)
      .then((res) => {
        if (!res) throw new Error("Cannot find article with id " + id);
        return res;
      })
      .then((res) => {
        // Delete comment with article id
        commentModel.deleteMany({ article: id }, (err, res) => {
          if (err) throw new Error(err.message);
        });

        return res;
      });
    res.send(`Article with ${data.title} has been deleted..`);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
