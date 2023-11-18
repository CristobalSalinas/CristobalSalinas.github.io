const PortfolioButton = () => {
  return (
    <div className="flex items-center justify-center">
      <a
        style={{ backgroundColor: "#ffffff", color: "#000000", marginTop: 10 }}
        className="rounded px-4 py-2 text-center font-bold"
        href="/portfolio"
      >
        Ver mi portafolio
      </a>
    </div>
  );
};

export default PortfolioButton;
