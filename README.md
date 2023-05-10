### Steps to Start 👇

**Node**: v19.4.0
**Npm**: v9.2.0

> npm install
> npm run dev

> npm run build

### Task:

Pewna firma telekomunikacyjna odezwała się z prośbą o stworzenie kalkulatora cen dla
ich usług.

Celem zadania jest zbudowanie widoku aplikacji, który pozwoli na sprawdzenie ceny
usług, które klient chciałby zamówić.

Wymagania:
Cena powinna byćwyliczana w momencie, gdy użytkownik doda na listę wybrane usługi
i wybierze rok, w którym miałyby one obowiązywać.

Kalkulator powinien miećdeklarację cennika dla lat 2023, 2024, 2025, umożliwić
klientowi jego modyfikację, dodanie kolejnych lat i usług.

Lista usług:
* Internet,
* Telewizja,
* Abonament telefoniczny,
* Dekoder 4K

Ceny usług mogą byćinne w zależności od wybranego roku. Obecnie o cenach
wiemy, że:

* Internet kosztuje 39zł w 2023, 49zł w 2024 i 59zł w 2025,
* Telewizja kosztuje 49zł w 2023, 49zł w 2024 i 59zł w 2025,
* Pakiet „Internet + telewizja” kosztuje mniej – 79zł w 2023, 89zł w 2024, 99zł w
2025,
* Pakiet „Internet + Abonament telefoniczny” w każdym roku kosztuje 64zł,
* Abonament telefoniczny kosztuje 29zł,
* Dekoder 4K kosztuje 29zł, a w pakiecie „Internet + telewizja” jest dostępny za
darmo.

Nie ma sensu, aby klient mógł zamówić„Dekoder 4K” bez zamawiania telewizji.
Zadbaj o to, żeby program wyliczał najbardziej korzystne rozwiązanie dla klienta.
Żadna zniżka nie aplikuje się dwa razy.

Widok aplikacji ma umożliwiaćwybór usługi z listy, możliwośćdodania ich na
listę i obliczaćcenę finalną wybranych usług.

Aplikację wykonaj przy użyciu technologii React. Zadbaj o wysoką czystośći
utrzymywalnośćkodu, stosując znane Ci dobre praktyki programowania.
