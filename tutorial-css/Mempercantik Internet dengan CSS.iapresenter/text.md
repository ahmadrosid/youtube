# 
### Mempercantik 
# Internet
#### Dengan CSS

/assets/annie-spratt-kDo57E2qOE4-unsplash.jpg
background: true

---
### 
#### ---
## Seperti apa itu CSS?

---
# 
## 
## 
```css
p {
  font-size: 20px;
}
```

---
## 
## 
```
p {
  font-size: 20px;
}
a {
  color: blue;
}
``` 

---
### ---
## Kenapa kita perlu CSS?

---

/assets/first-web.png
size: contain
x: right

# 
# 
# 
# Web Jaman Dulu

---

/assets/first-css.webp
size: contain

# 
#  
# 
## Web + CSS Jaman Dulu

---


/assets/old-youtube.png
size: contain

# 
# 
# 
# YouTube Jaman Dulu

---

	### 
	#### 
	- 17 Desember 1996, W3C menerbitkan standar pertama untuk CSS.
	- Setelah 2 Tahun kemudian 1998 CSS-2 di terbitkan.
	- 1999 CSS-3 di terbitkan.
	- Tahun 2002 browser sudah bisa menggunakan spesifikasi full CSS.
	- Web browser terus improve kemampuan CSS.

---
### --
## Web Jaman Sekarang

---

/assets/Screenshot 2022-11-22 at 22.19.20.png
size: contain

---

/assets/Screenshot 2022-11-22 at 22.19.38.png
size: contain

---

### ---
### Menambahkan CSS ke Halaman Web

---

# 
#### 
#### ---
	Dengan Link
```
<link rel="stylesheet" type="text/css" href="file.css" />
```

---
###  
#### ---
	Di halaman HTML
```
<style>
  body {
    color: red;
  }
</style>
```

---
### 
###   
#### ---
	Dalam tag HTML
```
<div style="background-color: yellow">
   ...
</div>
```

---

### Pengenalan
# Dasar CSS

---

### Selector
####   
```
p {
  color: pink;
}
```

---

### Class
####   
```
.title {
  color: black;
}
```
```
<h1 class="title">Roger</h1>
```

---

### ID
####   
```
#card {
  background-color: yellow;
}
```
```
<div id="card">
   ...
</div>
```

---

#### Menggabungkan Selector
####   
```
p.user-name {
  color: yellow;
}
```
```
<p class="username">
   ...
</div>
```

---

#### Multiple Selector
####   
```
.card {
  width: 300px;
}
.user-name {
  color: yellow;
}
```
```
<p class="card user-name"></div>
```

---

#### Selector + ID
####   
```
#card {
  width: 300px;
}
.user-name {
  color: yellow;
}
```
```
<p id="card" class="user-name"></div>
```

---

#### Selector Group
####   
```
#card, 
.user-name {
  color: yellow;
}
```
```
<div id="card">
  <p class="user-name">...</p>
</div>
```

---

#### Selector Group
####   
```
p span {
  color: red;
}
```
```
<span> Hello! </span>
<p>
  My name is:
  <span> Jhon </span>
</p>
```

---

#### Selector Group Strict
####   
```
p > span {
  color: blue;
}
```
```
<span> Hello! </span>
<p>
  My dog name is:
  <span> Roger </span>
  <strong>
    <span> Uncle </span>
  </strong>
</p>
```

---

### ---
## Praktik 

---

/assets/Screenshot 2022-11-23 at 00.26.53.png
size: contain

---

### Selesai
## Terimakasih
#### Jangan lupa *Subscribe!*

