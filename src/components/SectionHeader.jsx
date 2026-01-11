const SectionHeader = ({ title, subtitle }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-semibold text-gray-900">
      {title}
    </h2>
    {subtitle && (
      <p className="text-sm text-gray-500 mt-1">
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionHeader;
