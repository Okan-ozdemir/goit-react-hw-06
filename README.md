# Telefon Rehberi Uygulaması

Bu proje, React ve Redux kullanılarak geliştirilmiş modern bir telefon rehberi uygulamasıdır.

## Özellikler

- Kişi ekleme ve silme
- Kişi arama
- Form doğrulama
- Veriler local storage'da saklanır
- Modern and responsive tasarım

## Kullanılan Teknolojiler

- React
- Redux Toolkit
- Redux Persist
- Formik & Yup
- Vite

## Kurulum

1. Projeyi klonlayın:
```bash
git clone [repo-url]
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

## Proje Yapısı

```
src/
  ├── components/         # React bileşenleri
  │   ├── ContactsForm/  # Kişi ekleme formu
  │   ├── ContactsList/  # Kişi listesi
  │   └── SearchBox/     # Arama kutusu
  ├── redux/             # Redux yapılandırması
  │   ├── store.js      # Redux store
  │   ├── contactsSlice.js  # Kişiler slice
  │   └── filtersSlice.js   # Filtreler slice
  ├── App.jsx           # Ana uygulama bileşeni
  └── main.jsx         # Uygulama giriş noktası
```

## Kullanım

1. "İsim" ve "Numara" alanlarını doldurarak yeni kişi ekleyin
2. Arama kutusunu kullanarak kişileri filtreleyebilirsiniz
3. Kişileri silmek için "Sil" butonunu kullanın
4. Veriler otomatik olarak tarayıcının local storage'ında saklanır

## Geliştirici Notları

- Formik ve Yup ile form yönetimi ve doğrulama
- Redux Toolkit ile durum yönetimi
- Redux Persist ile verilerin kalıcı saklanması
- Modern CSS özellikleri ve responsive tasarım
