const source = require("rfr");
const MarkdownIt = require("markdown-it");

const md = new MarkdownIt();
const { Blog } = source("models");

const BlogPostController = {
  get(req, res) {
    Promise.resolve(
      Blog.find({ url: req.params.post }) // 0
    ).then((values) => {
      const foundPost = values[0];

      res.render("post", {
        title: foundPost.title,
        date: foundPost.date.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric"
        }),
        body: md.render(foundPost.body)
      });
    }).catch((err) => {
      console.log(err);
      res.redirect("/404");
    });
  }
};

module.exports = BlogPostController;