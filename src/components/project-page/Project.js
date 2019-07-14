const Project = ({ link, img, title }) => {
  return (
    <div className="d-flex flex-column align-items-center mx-1 px-3">
      <a className="css-link-container" href={link}>
        <img className="img-fluid css-proj-image" src={img} />
        <div className="css-proj-overlay">
          <div class="css-proj-title">{title}</div>
        </div>
      </a>
    </div>
  );
};

export default Project;
