import exportPdf from '../../constants/exportPdf';

const ExportPdf = ({ children, filename }) => {
  const handleClick = (header, widths, data) => {
    exportPdf(header, widths, data, filename);
  };
  return children(handleClick);
};

export default ExportPdf;
