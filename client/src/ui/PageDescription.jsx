function PageDescription({ title, description }) {
  return (
    <div className="flex flex-col items-center space-y-4">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default PageDescription;
