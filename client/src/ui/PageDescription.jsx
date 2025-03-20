function PageDescription({ title, description }) {
  return (
    <div className="mb-6 flex flex-col space-y-1">
      <h2 className="text-2xl">{title}</h2>
      <p className="italic">{description}</p>
    </div>
  );
}

export default PageDescription;
