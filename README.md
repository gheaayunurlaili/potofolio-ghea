# Portfolio Ghea Ayu Nurlaili

Website statis (HTML, CSS, JavaScript murni). Tanpa instalasi dan tanpa build.

## 1. Struktur folder
```
ghea-portfolio/
├── index.html   (isi halaman)
├── style.css    (tampilan, warna, font)
├── script.js    (menu, tema, animasi)
├── vercel.json  (pengaturan Vercel)
└── images/      (foto-profil.jpg + gambar lain)
```

## 2. Menjalankan secara lokal
Klik dua kali `index.html`. Selesai.

## 3. Mengganti nama dan deskripsi
Buka `index.html`, cari komentar `EDIT`, lalu ubah teks di dekatnya (bagian hero, About Me, project).

## 4. Mengganti email dan tautan sosial
Di bagian Contact (`id="contact"`), ganti `href="#contact"` menjadi:
- Email: `mailto:emailkamu@gmail.com`
- Instagram: `https://instagram.com/usernamekamu`
- GitHub: `https://github.com/usernamekamu`

Lalu hapus `aria-disabled="true"` dan tulisan "(segera diisi)".

## 5. Mengganti foto profil
Timpa `images/foto-profil.jpg` dengan fotomu (nama file sama).

## 6. Mengganti screenshot project
Simpan screenshot asli sebagai `images/si-laundry.png` dan `images/rental-ff.png`. Placeholder otomatis hilang. Foto bunga/traveling untuk About Me: `images/about-bunga.jpg` dan `images/about-travel.jpg`.
Isi juga teknologi Rental Akun FF dan tambahkan tombol Live Demo/GitHub bila tautannya sudah ada.

## 7. Mengubah warna dan font
Warna: bagian `:root` paling atas di `style.css`. Font: ubah `--script` dan `--sans`, serta link Google Fonts di `<head>` `index.html`.

## 8. Mengunggah ke GitHub
1. Buat repository baru di github.com (misal `ghea-portfolio`).
2. Klik **Add file → Upload files**, seret semua isi folder (termasuk `images`), lalu **Commit changes**.
3. GitHub Pages: **Settings → Pages → Deploy from a branch → main / (root) → Save**.

## 9. Menghubungkan ke Vercel
1. Masuk ke vercel.com dengan akun GitHub.
2. **Add New → Project**, pilih repository.
3. Framework Preset: **Other**. Kosongkan Build Command. Klik **Deploy**.

## 10. Deploy ulang
Ubah file, upload/commit ke GitHub. Vercel dan GitHub Pages memperbarui situs otomatis dalam beberapa menit.
