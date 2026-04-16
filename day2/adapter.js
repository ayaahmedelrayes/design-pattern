
class PDFViewer {
  viewPDF(filename) {
    console.log(`Viewing PDF document: ${filename}`);
  }
}

class WordViewer {
  viewDOCX(filename) {
    console.log(`Viewing Word document: ${filename}`);
  }
}

// --- Bonus: New Viewer ---
class TextViewer {
  viewTXT(filename) {
    console.log(`Viewing Text document: ${filename}`);
  }
}

// --- Adapter ---
class DocumentAdapter {
  constructor() {
    this.pdfViewer = new PDFViewer();
    this.wordViewer = new WordViewer();
    this.textViewer = new TextViewer(); // Bonus
  }

  view(filename) {
    if (filename.endsWith(".pdf")) {
      this.pdfViewer.viewPDF(filename);
    } else if (filename.endsWith(".docx")) {
      this.wordViewer.viewDOCX(filename);
    } else if (filename.endsWith(".txt")) {
      this.textViewer.viewTXT(filename); // Bonus
    } else {
      console.log(`Unsupported file type: ${filename}`);
    }
  }
}

// --- Client Code ---
const viewer = new DocumentAdapter();
viewer.view("report.pdf");       // Viewing PDF document: report.pdf
viewer.view("resume.docx");      // Viewing Word document: resume.docx
viewer.view("notes.txt");        // Bonus: Viewing Text document: notes.txt
viewer.view("photo.png");        // Unsupported file type: photo.png
