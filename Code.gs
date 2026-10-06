const SPREADSHEET_ID = "1wKk0eJ-iB3i1OB5c97ccatff7UkNheQwGJDLQIqxLE4";
const SHEET_NAME = "Data";

function doGet() {
  return ContentService
    .createTextOutput("API DATA PESERTA SERVIS GRATIS SMKN 1 DOKO AKTIF")
    .setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
  try {
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = ss.getSheetByName(SHEET_NAME);

    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
    }

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

    const p = e.parameter || {};

    const nama = String(p.nama || "").trim();
    const merkType = String(p.merkType || "").trim();
    const nomorPolisi = String(p.nomorPolisi || "").trim().toUpperCase();
    const whatsapp = String(p.whatsapp || "").trim().replace(/[\s\-]/g, "");

    if (!nama || !merkType || !nomorPolisi || !whatsapp) {
      return jsonResponse(false, "Semua kolom wajib diisi.");
    }

    if (!/^(08|628)[0-9]{8,13}$/.test(whatsapp)) {
      return jsonResponse(false, "Nomor WhatsApp tidak valid.");
    }

    sheet.appendRow([
      new Date(),
      nama,
      merkType,
      nomorPolisi,
      whatsapp
    ]);

    sheet.autoResizeColumns(1, 5);

    return jsonResponse(true, "Pendaftaran berhasil disimpan.");

  } catch (error) {
    return jsonResponse(false, error.message);
  }
}

function jsonResponse(success, message) {
  return ContentService
    .createTextOutput(JSON.stringify({
      success: success,
      message: message
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
