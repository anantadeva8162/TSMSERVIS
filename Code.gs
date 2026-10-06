const SPREADSHEET_ID = "1wKk0eJ-iB3i1OB5c97ccatff7UkNheQwGJDLQIqxLE4";
const SHEET_NAME = "Data";

function doGet() {
  return HtmlService.createTemplateFromFile("Index")
    .evaluate()
    .setTitle("Data Peserta Servis Gratis - SMKN 1 Doko")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function simpanData(data) {
  try {
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = ss.getSheetByName(SHEET_NAME);

    if (!sheet) sheet = ss.insertSheet(SHEET_NAME);

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp",
        "Nama",
        "Merk / Type",
        "Nomor Polisi",
        "Nomor WhatsApp"
      ]);

      sheet.getRange(1, 1, 1, 5)
        .setFontWeight("bold")
        .setBackground("#111827")
        .setFontColor("#ffffff");

      sheet.setFrozenRows(1);
    }

    const nama = String(data.nama || "").trim();
    const merkType = String(data.merkType || "").trim();
    const nomorPolisi = String(data.nomorPolisi || "").trim().toUpperCase();
    const whatsapp = String(data.whatsapp || "").trim().replace(/[\s\-]/g, "");

    if (!nama || !merkType || !nomorPolisi || !whatsapp) {
      throw new Error("Semua kolom wajib diisi.");
    }

    if (!/^(08|628)[0-9]{8,13}$/.test(whatsapp)) {
      throw new Error("Nomor WhatsApp tidak valid. Contoh: 081234567890");
    }

    sheet.appendRow([
      new Date(),
      nama,
      merkType,
      nomorPolisi,
      whatsapp
    ]);

    sheet.autoResizeColumns(1, 5);

    return {
      success: true,
      message: "Pendaftaran berhasil dikirim."
    };

  } catch (error) {
    return {
      success: false,
      message: error.message
    };
  }
}
