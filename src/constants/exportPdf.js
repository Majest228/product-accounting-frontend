import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const exportPdf = (header, widths, data, filename) => {
  const structure = {
    content: [
      {
        layout: 'lightHorizontalLines',
        table: {
          headerRows: 1,
          widths,
          body: [header, ...data],
        },
      },
    ],
  };
  pdfMake.createPdf(structure).download(filename);
};
export default exportPdf;
