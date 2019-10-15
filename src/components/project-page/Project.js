import ProjectModal from "./ProjectModal";

const Project = ({ link, mainImg, imgSet, title }) => {
  return (
    <div className="d-flex flex-column align-items-center mx-1 px-3 css-proj-item">
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
        className="css-link-container"
      >
        <img className="img-fluid css-proj-image" src={mainImg} />
        <div className="css-proj-overlay">
          <div className="css-proj-title">{title}</div>
        </div>
      </button>

      <ProjectModal title={title} imgSet={imgSet} />
    </div>
  );
};

export default Project;
