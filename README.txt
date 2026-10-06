VERSI GITHUB PAGES + GOOGLE APPS SCRIPT + GOOGLE SHEETS
===========================================================

ALUR:
GitHub Pages
  ↓
index.html + JavaScript
  ↓
Google Apps Script Web App
  ↓
Google Spreadsheet

SPREADSHEET ID:
1wKk0eJ-iB3i1OB5c97ccatff7UkNheQwGJDLQIqxLE4

WEB APP URL YANG SUDAH DIPASANG DI index.html:
https://script.google.com/macros/s/AKfycbwrhhS7VFrOi__IJ9B7ADVOjv2_1me8pzOuMWoCM7xzF70d2YyseNo0hHiMiO6tn-me/exec

LANGKAH 1 - GOOGLE APPS SCRIPT
1. Buka Google Spreadsheet.
2. Extensions > Apps Script.
3. Ganti Code.gs dengan Code.gs dari paket ini.
4. Save.
5. Deploy > Manage deployments.
6. Jika deployment lama memakai kode lama, pilih Edit.
7. Buat New version.
8. Execute as: Me.
9. Who has access: Anyone.
10. Deploy.
11. Jika URL deployment berubah, salin URL baru.

LANGKAH 2 - GITHUB
1. Di repository TSMSERVISI, hapus/abaikan Index.html lama.
2. Upload index.html dari paket ini.
3. Pastikan nama file PERSIS:
   index.html
   (huruf i kecil)
4. Commit changes.

LANGKAH 3 - GITHUB PAGES
1. Repository > Settings.
2. Pages.
3. Build and deployment:
   Source: Deploy from a branch
   Branch: main
   Folder: / (root)
4. Save.
5. Tunggu 1-5 menit.
6. Buka:
   https://anantadeva8162.github.io/TSMSERVISI/

CATATAN PENTING:
- Code.gs JANGAN dimasukkan ke GitHub untuk menjalankan backend.
- Code.gs hanya dipasang di Google Apps Script.
- index.html dipasang di GitHub Pages.
- Jika Web App URL berubah, ubah nilai WEB_APP_URL di index.html.
- Sheet "Data" dibuat otomatis.
- Form menggunakan POST sehingga data peserta tidak ditaruh di URL browser.
