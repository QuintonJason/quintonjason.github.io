import React from "react";

class BlogPostTemplate extends React.Component {
  componentDidMount() {
    this.renderCodePenEmbeds();
  }

  componentDidUpdate() {
    this.renderCodePenEmbeds();
  }

  renderCodePenEmbeds() {
    if (!this.postContent) return;

    const embeds = this.postContent.querySelectorAll(
      "p.codepen[data-slug-hash][data-user]"
    );

    embeds.forEach(embed => {
      if (embed.getAttribute("data-codepen-rendered") === "true") return;

      const slug = embed.getAttribute("data-slug-hash");
      const user = embed.getAttribute("data-user");

      if (!slug || !user) return;

      const defaultTab = embed.getAttribute("data-default-tab") || "result";
      const themeId = embed.getAttribute("data-theme-id") || "default";
      const penTitle = embed.getAttribute("data-pen-title") || "CodePen Embed";

      const wrapper = document.createElement("div");
      wrapper.className = "codepen-embed-wrapper";

      const iframe = document.createElement("iframe");
      iframe.className = "codepen-embed";
      iframe.setAttribute(
        "src",
        `https://codepen.io/${user}/embed/${slug}?default-tab=${encodeURIComponent(
          defaultTab
        )}&theme-id=${encodeURIComponent(themeId)}&embed-version=2`
      );
      iframe.setAttribute("title", penTitle);
      iframe.setAttribute("scrolling", "no");
      iframe.setAttribute("frameBorder", "no");
      iframe.setAttribute("loading", "lazy");
      iframe.setAttribute("allowtransparency", "true");
      iframe.setAttribute("allowfullscreen", "true");

      wrapper.appendChild(iframe);
      embed.parentNode.replaceChild(wrapper, embed);
    });
  }

  render() {
    const post = this.props.data.markdownRemark;

    return (
      <div className="blog_single">
        <h1>{post.frontmatter.title}</h1>
        <div
          ref={node => {
            this.postContent = node;
          }}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    );
  }
}

export default BlogPostTemplate;

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
