// ====== PRZYKŁADOWE DANE TESTOWE - DO ZASTĄPIENIA WŁASNYMI DANYMI Z DOKUMENTU ======
const quizData = [
    {
      "ID": "Q1",
      "Pytanie": "Jaki mechanizm komunikacji międzyprocesowej wymaga otwarcia w sposób komplementarny (tzn. jeden proces otwiera do zapisu, a drugi do odczytu)?",
      "Typ": "Wielokrotny Wybór",
      "Opcje": [
        "potok",
        "pamięć współdzielona",
        "potok nazwany",
        "sygnały"
      ],
      "PrawidłoweOdp": ["potok nazwany"]
    },
    {
      "ID": "Q2",
      "Pytanie": "W wyniku wykonania poniższego programu: if (fork()==0) { printf(\"Y\"); } else { wait(); printf(\"X\"); } na konsoli zostanie wyświetlone:",
      "Typ": "Wielokrotny Wybór",
      "Opcje": ["XY", "X", "YX", "Y"],
      "PrawidłoweOdp": ["YX"]
    },

    {
      "ID": "Q3(2024)",
      "Pytanie": "Czy poniższa implementacja bariery synchronizacyjnej jest poprawna i może być użyta wielokrotnie?\n\ncnt = 0\nbarrier(n) {\n    m.lock();\n    cnt++;\n    if (cnt < n) c.wait(m);\n    else {\n        c.broadcast();\n        cnt=0;\n    }\n    m.unlock();\n}",
      "Typ": "Wielokrotny Wybór",
      "Opcje": [
        "Nie może być użyta wielokrotnie, ponieważ licznik cnt jest resetowany po wybudzeniu wątków, które mogą już rozpocząć drugą turę synchronizacji",
        "Nie jest poprawna, ponieważ może dojść do zakleszczenia",
        "Jest poprawna, jeżeli nie będzie fałszywych wybudzeń (spurious wakeups)",
        "Może być użyta wielokrotnie, ponieważ wartość licznika na końcu pojedynczej tury osiąga wartość 0"
      ],
      "PrawidłoweOdp": [
        "Jest poprawna, jeżeli nie będzie fałszywych wybudzeń (spurious wakeups)", "Może być użyta wielokrotnie, ponieważ wartość licznika na końcu pojedynczej tury osiąga wartość 0"
      ]
    },
    {
      "ID": "Q4",
      "Pytanie": "Wątki podczas pracy możemy synchronizować korzystając z:",
      "Typ": "Wielokrotny Wybór",
      "Opcje": [
        "semaforów nazwanych",
        "zmiennych warunkowych",
        "semaforów nienazwanych",
        "muteksów"
      ],
      "PrawidłoweOdp": [
        "zmiennych warunkowych",
        "muteksów",
        "semaforów nazwanych",
        "semaforów nienazwanych"
      ]
    },

    {
      "ID": "Q5",
      "Pytanie": "Poniższe wywołanie read(x, buf, y); spowoduje:",
      "Typ": "Wielokrotny Wybór",
      "Opcje": [
        "odczytanie x bajtów z deskryptora y",
        "zawsze wystąpienie błędu",
        "odczyt y bajtów z deskryptora x",
        "odczytanie z deskryptora x napisu buf"
      ],
      "PrawidłoweOdp": [
        "odczyt y bajtów z deskryptora x"
      ]
    },

    {
      "ID": "Q5(2024)",
      "Pytanie": "Jaki mechanizm komunikacji międzyprocesowej wymaga otwarcia w sposób komplementarny (tzn. jeden proces otwiera do zapisu, a drugi do odczytu)?",
      "Typ": "Wielokrotny Wybór",
      "Opcje": [
        "potok nazwany",
        "pamięć współdzielona",
        "sygnały",
        "potok nienazwany"
      ],
      "PrawidłoweOdp": ["potok nazwany"]
    },

    {
        "ID": "Q6",
        "Pytanie": "Poniższe wywołanie open(\"/do/nothing\", O_WRONLY, 0640); spowoduje:",
        "Typ": "Wielokrotny Wybór",
        "Opcje": [
            "otworzenie pliku do zapisu",
            "utworzenie pliku jeżeli go nie było",
            "zawsze wystąpienie błędu",
            "zmianę praw dostępu do pliku na 0640"
        ],
        "PrawidłoweOdp": [
            "otworzenie pliku do zapisu",
        ]
    },

    {
      "ID": "Q7",
      "Pytanie": "Procesy zombie powstają:",
      "Typ": "Wielokrotny Wybór",
      "Opcje": [
        "podczas tworzenia procesów potomnych",
        "po zakończeniu procesu potomnego a przed wywołaniem funkcji wait w procesie macierzystym",
        "podczas wykonywania funkcji exec",
        "po wywołaniu funkcji exec a przed zakończeniem procesu potomnego"
      ],
      "PrawidłoweOdp": [
        "po zakończeniu procesu potomnego a przed wywołaniem funkcji wait w procesie macierzystym"
      ]
    },

    {
      "ID": "Q8",
      "Pytanie": "Anonimowe odwzorowanie w pamięci realizowane funkcją mmap():",
      "Typ": "Wielokrotny Wybór",
      "Opcje": [
        "wypełnia blok pamięci zerami",
        "umożliwia dostęp do zawartości pliku w pojedynczym procesie",
        "w trybie dzielonym umożliwia tworzenie bloku pamięci współdzielonej",
        "w trybie prywatnym jest po prostu alokacją pamięci"
      ],
      "PrawidłoweOdp": [
        "wypełnia blok pamięci zerami",
        "w trybie dzielonym umożliwia tworzenie bloku pamięci współdzielonej",
        "w trybie prywatnym jest po prostu alokacją pamięci"
      ]
    },

    {
      "ID": "Q8(2024)",
      "Pytanie": "Nazwany blok pamięci dzielonej:",
      "Typ": "Wielokrotny Wybór",
      "Opcje": [
        "może być dostępny tylko do odczytu",
        "może być dołączony do przestrzeni adresowej procesu funkcją mmap",
        "powstaje jako plik w katalogu /dev/shm",
        "jest przechowywany na dysku RAM (dysk w pamięci)"
      ],
      "PrawidłoweOdp": [
        "może być dołączony do przestrzeni adresowej procesu funkcją mmap",
        "powstaje jako plik w katalogu /dev/shm",
        "jest przechowywany na dysku RAM (dysk w pamięci)",
        "może być dostępny tylko do odczytu"
      ]
    },

    {
      "ID": "Q9",
      "Pytanie": "Funkcja pause:",
      "Typ": "Wielokrotny Wybór",
      "Opcje": [
        "wstrzymuje proces na określoną argumentem liczbę sekund",
        "czeka na odbiór dowolnego sygnału",
        "wstrzymuje proces do momentu wciśnięcia klawisza Enter",
        "blokuje odbiór sygnałów"
      ],
      "PrawidłoweOdp": ["czeka na odbiór dowolnego sygnału"]
    },

    {
      "ID": "Q9(2024)",
      "Pytanie": "Zmienne warunkowe (conditional variables)",
      "Typ": "Wielokrotny Wybór",
      "Opcje": [
        "muszą być stosowane łącznie z muteksami",
        "pozwalają na wybudzanie określonej liczby wątków",
        "zabezpieczają wątek przed fałszywymi wybudzeniami (spurious wakeups)",
        "pozwalają zrealizować uśpienie wątku na określoną liczbę sekund"
      ],
      "PrawidłoweOdp": [
        "muszą być stosowane łącznie z muteksami",
        "pozwalają zrealizować uśpienie wątku na określoną liczbę sekund"
      ]
    },

    {
      "ID": "Q10",
      "Pytanie": "Sekcja krytyczna:",
      "Typ": "Wielokrotny Wybór",
      "Opcje": [
        "obejmuje kod wykonywany przez co najwyżej 1 proces",
        "wymaga użycia bloku pamięci współdzielonej",
        "to miejsce, gdzie realizowane jest wzajemne wykluczanie procesów",
        "oznacza miejsce w pliku, gdzie założono blokadę"
      ],
      "PrawidłoweOdp": [
        "obejmuje kod wykonywany przez co najwyżej 1 proces",
        "to miejsce, gdzie realizowane jest wzajemne wykluczanie procesów"
      ]
    },

    {
      "ID": "Q11",
      "Pytanie": "Proces, który nie tworzy potoku (zwykłego), może uzyskać deskryptor do niego poprzez:",
      "Typ": "Wielokrotny Wybór",
      "Opcje": [
        "odczyt z pliku",
        "nazwę potoku",
        "dziedziczenie tablicy deskryptorów",
        "identyfikator potoku"
      ],
      "PrawidłoweOdp": ["dziedziczenie tablicy deskryptorów"]
    },

    {
      "ID": "Q12",
      "Pytanie": "Sekwencja operacji na semaforze wielowartościowym s: V(s) P(s)",
      "Typ": "Wielokrotny Wybór",
      "Opcje": [
        "może być blokująca, jeżeli semafor na początku był opuszczony",
        "nigdy nie będzie blokująca",
        "nie będzie blokująca tylko wtedy, gdy semafor na początku był podniesiony",
        "zawsze będzie blokująca"
      ],
      "PrawidłoweOdp": [
        "nigdy nie będzie blokująca",
      ]
    },

    {
      "ID": "Q13",
      "Pytanie": "Sekwencja operacji na semaforze s: P(s) V(s)",
      "Typ": "Wielokrotny Wybór",
      "Opcje": [
        "może być blokująca, jeżeli semafor na początku był opuszczony",
        "nie může być wykonana na semaforze binarnym",
        "nigdy nie będzie blokującdo",
        "nie będzie blokująca, gdy semafor na początku był podniesiony"
      ],
      "PrawidłoweOdp": [
        "nie będzie blokująca, gdy semafor na początku był podniesiony",
        "może być blokująca, jeżeli semafor na początku był opuszczony",

      ]
    },

    {
      "ID": "Q13(2024)",
      "Pytanie": "Współbieżny dostęp do pamięci współdzielonej:",
      "Typ": "Wielokrotny Wybór",
      "Opcje": [
        "wymaga podwójnego kopiowania między procesami a systemem operacyjnym (P1 → jądro → P2)",
        "jest najszybszym sposobem komunikacji między procesami",
        "może być realizowany bez synchronizacji w przypadku odczytów",
        "wymaga dodatkowej synchronizacji, gdy przynajmniej jeden z procesów wykonuje zapis"
      ],
      "PrawidłoweOdp": [
        "jest najszybszym sposobem komunikacji między procesami",
        "może być realizowany bez synchronizacji w przypadku odczytów",
        "wymaga dodatkowej synchronizacji, gdy przynajmniej jeden z procesów wykonuje zapis"
      ]
    },

    {
      "ID": "Q14",
      "Pytanie": "Funkcja read zwraca:",
      "Typ": "Wielokrotny Wybór",
      "Opcje": [
        "wartość większą od zera jeżeli udało się coś przeczytać",
        "-1 jeżeli wystąpił błąd podczas odczytu",
        "0 jeżeli dotrze do końca pliku",
        "tekst, który przeczytała z pliku"
      ],
      "PrawidłoweOdp": [
        "wartość większą od zera jeżeli udało się coś przeczytać",
        "-1 jeżeli wystąpił błąd podczas odczytu",
        "0 jeżeli dotrze do końca pliku"
      ]
    },

    {
      "ID": "Q14(2024)",
      "Pytanie": "Wzajemne wykluczanie procesów:",
      "Typ": "Wielokrotny Wybór",
      "Opcje": [
        "można osiągnąć stosując semafor binarny",
        "można osiągnąć stosując mutex z biblioteki POSIX Threads",
        "można osiągnąć stosując semafor wielowartościowy",
        "jest niezbędne przy dostępie do sekcji krytycznej"
      ],
      "PrawidłoweOdp": [
        "można osiągnąć stosując semafor binarny",
        "można osiągnąć stosując mutex z biblioteki POSIX Threads",
        "można osiągnąć stosując semafor wielowartościowy",
        "jest niezbędne przy dostępie do sekcji krytycznej"
      ]
    },

    {
      "ID": "Q15",
      "Pytanie": "Funkcja pause zawiesza proces, aż do:",
      "Typ": "Wielokrotny Wybór",
      "Opcje": [
        "odebrania przez proces wiadomości z potoku nazwanego",
        "momentu wywołania funkcji alarm",
        "otrzymania przez proces dowolnego sygnału",
        "odebrania przez proces wiadomości z potoku"
      ],
      "PrawidłoweOdp": ["otrzymania przez proces dowolnego sygnału"]
    },
    {
        "ID": "Q16",
        "Pytanie": "Proces, który nie tworzy potoku nazwanego może uzyskać deskryptor dostępu do niego:",
        "Typ": "Wielokrotny Wybór",
        "Opcje": [
            "odwołując się do swojego procesu macierzystego",
            "otwierając plik specjalny reprezentujący ten potok",
            "wysyłając sygnał do procesu potomnego",
            "nie może uzyskać dostępu do potoku"
        ],
        "PrawidłoweOdp": [
             "otwierając plik specjalny reprezentujący ten potok",
        ]
    },
    {
        "ID": "Q16(2024)",
        "Pytanie": "Funkcja systemowa lseek pozwala na:",
        "Typ": "Wielokrotny Wybór",
        "Opcje": [
            "ustawienie bieżącego wskaźnika pozycji tylko na końcu pliku",
            "przesunięcie wskaźnika pozycji względem bieżącej pozycji",
            "ustawienie bieżącego wskaźnika pozycji na dowolny bajt pliku",
            "ustawienie bieżącego wskaźnika pozycji tylko na początku lub na końcu pliku"
        ],
        "PrawidłoweOdp": [
             "przesunięcie wskaźnika pozycji względem bieżącej pozycji",
            "ustawienie bieżącego wskaźnika pozycji na dowolny bajt pliku",
        ]
    },
    {
        "ID": "Q17",
        "Pytanie": "Pobranie danych z potoku przez proces powoduje, że:",
        "Typ": "Wielokrotny Wybór",
        "Opcje": [
            "dane zostają usunięte z potoku",
            "proces, który zapisał te dane uzyskuje potwierdzenie pobrania danych",
            "potok zostaje zamknięty",
            "dane pozostają w potoku do momentu ich jawnego usunięcia"
        ],
        "PrawidłoweOdp": [
            "dane zostają usunięte z potoku",
        ]
    },
    {
        "ID": "Q18",
        "Pytanie": "Odwzorowanie w pamięci realizowane funkcją mmap() w trybie MAP_SHARED:",
        "Typ": "Wielokrotny Wybór",
        "Opcje": [
            "umożliwia tworzenie bloku pamięci współdzielonej",
            "tworzy specjalny plik w katalogu /dev/shm",
            "jest dziedziczone przez procesy potomne",
            "umożliwia realizację współdzielonego dostępu do pliku"
        ],
        "PrawidłoweOdp": [
              "umożliwia tworzenie bloku pamięci współdzielonej",
              "jest dziedziczone przez procesy potomne",
            "umożliwia realizację współdzielonego dostępu do pliku"
        ]
    },
    {
        "ID": "Q19",
        "Pytanie": "Który z deskryptorów łącza zwracanych przez funkcję pipe (pdesk) służy do odczytu, a który do zapisu danych?",
        "Typ": "Wielokrotny Wybór",
        "Opcje": [
            "pdesk[0] – deskryptor do odczytu; pdesk[1] – deskryptor do zapisu;",
            "pdesk[1] – deskryptor do odczytu; pdesk[0] – deskryptor do zapisu;",
            "jeden proces czyta i pisze do pdesk[0], a drugi proces czyta i pisze do pdesk[1]",
            "jeden proces czyta z pdesk[0] i pisze do pdesk[1], a drugi proces czyta z pdesk[1] i pisze do pdesk[0]"
        ],
        "PrawidłoweOdp": [
            "pdesk[0] – deskryptor do odczytu; pdesk[1] – deskryptor do zapisu;",
        ]
    },
    {
        "ID": "Q20",
        "Pytanie": "Usuwanie plików w systemie Unix umożliwia funkcja:",
        "Typ": "Wielokrotny Wybór",
        "Opcje": [
            "unlink",
            "ftruncate",
            "ferase",
            "erase",
            "delete"
        ],
        "PrawidłoweOdp": [
            "unlink",
        ]
    },
    {
        "ID": "Q21",
        "Pytanie": "Poniższy fragment kodu:\nclose(1); dup(fd);\npowoduje:",
        "Typ": "Wielokrotny Wybór",
        "Opcje": [
            "zastąpienie standardowego deskryptora wejścia deskryptorem fd",
            "zastąpienie standardowego deskryptora wyjścia deskryptorem fd",
            "przypisanie deskryptorowi fd numeru 1 w tablicy deskryptorów",
            "utworzenie nowego procesu (duplikatu) dołączonego do deskryptora 1"
        ],
        "PrawidłoweOdp": [
            "zastąpienie standardowego deskryptora wyjścia deskryptorem fd",
        ]
    },
    {
        "ID": "Q22",
        "Pytanie": "Przed zakończeniem programu, który wykonywał operacje na pliku, należy:",
        "Typ": "Wielokrotny Wybór",
        "Opcje": [
            "otworzyć plik (open)",
            "odłączyć plik (unlink)",
            "zaindeksować",
            "przyłączyć (link)",
            "zamknąć (close)"
        ],
        "PrawidłoweOdp": [
            "zamknąć (close)"
        ]
    },
    {
        "ID": "Q23",
        "Pytanie": "Aktywne oczekiwanie:",
        "Typ": "Wielokrotny Wybór",
        "Opcje": [
            "oznacza ciągłe sprawdzanie wystąpienia jakiegoś warunku",
            "może być wyeliminowane poprzez wykorzystanie sygnałów",
            "może być wyeliminowane poprzez wywołanie funkcji sleep",
            "jest zawsze objawem zakleszczenia"
        ],
        "PrawidłoweOdp": [
                         "oznacza ciągłe sprawdzanie wystąpienia jakiegoś warunku",
            "może być wyeliminowane poprzez wykorzystanie sygnałów",
        ]
    },
    {
        "ID": "Q24",
        "Pytanie": "Funkcja pause:",
        "Typ": "Wielokrotny Wybór",
        "Opcje": [
            "wstrzymuje proces na określoną argumentem liczbę sekund",
            "wstrzymuje proces do momentu wciśnięcia klawisza Enter",
            "blokuje odbiór sygnałów",
            "czeka na odbiór dowolnego sygnału"
        ],
       "PrawidłoweOdp": [
            "czeka na odbiór dowolnego sygnału"
        ]
    },
    {
        "ID": "Q25",
        "Pytanie": "Proces, który nie tworzy potoku (zwykłego), może uzyskać deskryptor do niego poprzez:",
        "Typ": "Wielokrotny Wybór",
        "Opcje": [
            "dziedziczenie tablicy deskryptorów",
            "nazwę potoku",
            "odczyt z pliku",
            "identyfikator potoku"
        ],
        "PrawidłoweOdp": [
            "dziedziczenie tablicy deskryptorów",
        ]
    },
    {
      "ID": "Q26",
      "Pytanie": "Poniższe wywołanie: open(\"/do/nothing\", O_RDONLY | O_CREAT, 0700); spowoduje:",
      "Typ": "Wielokrotny Wybór",
      "Opcje": [
        "zmianę praw dostępu do pliku na 0700",
        "zawsze wystąpienie błędu",
        "otworzenie pliku do odczytu",
        "utworzenie pliku jeżeli go nie było"
      ],
      "PrawidłoweOdp": ["utworzenie pliku jeżeli go nie było", "otworzenie pliku do odczytu"]
    },
    {
        "ID": "Q27",
        "Pytanie": "Wątek:",
        "Typ": "Wielokrotny Wybór",
        "Opcje": [
            "ma wspólny z innymi wątkami stos",
            "staje się „zombie” gdy żaden inny wątek nie wywołał funkcji pthread_join() na jego rzecz",
            "ma swój unikalny identyfikator procesu",
            "ma wspólną z innymi wątkami tablicę otwartych plików"
        ],
       "PrawidłoweOdp": [
            "staje się „zombie” gdy żaden inny wątek nie wywołał funkcji pthread_join() na jego rzecz",
                        "ma wspólną z innymi wątkami tablicę otwartych plików"

        ]
    },
    {
        "ID": "Q28",
        "Pytanie": "Jaka jest różnica w działaniu funkcji read w przypadku plików i potoków?",
        "Typ": "Wielokrotny Wybór",
        "Opcje": [
            "dane odczytywane z potoku to dane tekstowe o określonej długości, więc wykorzystywany bufor musi być zawsze tablicą znaków, natomiast w przypadku pliku odczytywane są dane binarne, które mogą być przechowywane w dowolnej tablicy",
            "nie ma żadnej różnicy",
            "dane z potoku odczytywane są tak jak z pliku, w kolejności w jakiej zostały zapisane, a po odczycie są usuwane z łącza"
        ],
        "PrawidłoweOdp": [
            "dane z potoku odczytywane są tak jak z pliku, w kolejności w jakiej zostały zapisane, a po odczycie są usuwane z łącza"
        ]
    },
    {
        "ID": "Q29",
        "Pytanie": "Poniższy kod odpowiada następującej komendzie powłoki:\nint fd;\n\nclose(1);\n\nfd = open(\"ls\", O_WRONLY | O_CREAT, 0644);\n\nexeclp(\"ps\", \"ps\", \"ax\", NULL);",
        "Typ": "Wielokrotny Wybór",
        "Opcje": [
            "ps ax > ls",
            "ps ax | ls",
            "ps ax >> ls",
            "ps ax < ls",
            "ls | ps ax"
        ],
        "PrawidłoweOdp": [
             "ps ax > ls",
        ]
    },
    {
        "ID": "Q31",
        "Pytanie": "Poniższy kod odpowiada następującej komendzie powłoki:\nint fd[2];\n\npipe(fd);\n\nif (fork()==0) {\n\n    close(0);\n\n    close(fd[1]);\n\n    dup(fd[0]);\n\n    execlp(\"ls\", \"ls\", NULL);\n\n} else {\n\n    close(1);\n\n    close(fd[0]);\n\n    dup(fd[1]);\n\n    execlp(\"tr\", \"tr\", \"a-z\", \"A-Z\", NULL);\n\n}",
        "Typ": "Wielokrotny Wybór",
        "Opcje": [
            "tr a-z A-Z > ls",
            "ls > tr a-z A-Z",
            "tr a-z A-Z | ls",
            "ls | tr a-z A-Z"
        ],
        "PrawidłoweOdp": [
            "tr a-z A-Z | ls",
        ]
    },
    {
        "ID": "Q32",
        "Pytanie": "W wyniku wykonania poniższego programu:\n\nprintf(\"Start\\n\");\n\nexecl(\"/bin/date\", \"date\", NULL);\n\nprintf(\"Koniec\\n\");\n\nna konsoli zostanie wyświetlone:",
        "Typ": "Wielokrotny Wybór",
        "Opcje": [
            "Tue Jan 18 20:10:20 CET 2020",
            "Start\nTue Jan 18 20:10:20 CET 2020",
            "Tue Jan 18 20:10:20 CET 2020\nKoniec",
            "Start\nTue Jan 18 20:10:20 CET 2020\nKoniec"
        ],
        "PrawidłoweOdp": [
            "Start\nTue Jan 18 20:10:20 CET 2020",
        ]
    },
    {
        "ID": "Q33",
        "Pytanie": "Co oznacza pusty wskaźnik na końcu listy parametrów wejściowych funkcji execlp?",
        "Typ": "Wielokrotny Wybór",
        "Opcje": [
            "adres powrotu z funkcji exec",
            "koniec listy argumentów",
            "nic – był wykorzystywany w poprzedniej wersji funkcji, a obecnie został zachowany aby utrzymać kompatybilność",
            "flagę mówiącą o nieblokowaniu tworzonego procesu"
        ],
        "PrawidłoweOdp": [
            "koniec listy argumentów",
        ]
    },
    {
        "ID": "Q34",
        "Pytanie": "Funkcja obsługi sygnału wykonywana jest:",
        "Typ": "Wielokrotny Wybór",
        "Opcje": [
            "współbieżnie z kodem programu głównego",
            "po dotarciu do procesu odpowiedniego sygnału, jeśli proces aktualnie nie wykonuje żadnej funkcji",
            "cyklicznie, po zajściu zdarzenia czasowego",
            "asynchronicznie, kiedy dociera do procesu odpowiedni sygnał"
        ],
        "PrawidłoweOdp": [
            "asynchronicznie, kiedy dociera do procesu odpowiedni sygnał"
        ]
    },
    {
        "ID": "Q35",
        "Pytanie": "Podaj liczbę procesów, które zostaną uruchomione w wyniku wykonania programu:\n\nif (fork() != 0);\n\nfork();\n\nif (fork() == 0)\n\n    execlp(\"ls\", \"ls\", NULL);",
        "Typ": "Wielokrotny Wybór",
        "Opcje": [
            "3",
            "8",
            "7"
        ],
       "PrawidłoweOdp": [
            "8",        ]
    }
];
// =======================================================================


let currentQuestionIndex = 0;
let userAnswers = []; 

const quizArea = document.getElementById('quiz-area');
const navContainer = document.getElementById('nav-container'); 
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const showResultsBtn = document.getElementById('show-results-btn');
const resultArea = document.getElementById('result-area');
const scoreText = document.getElementById('score-text');
const shuffleBtn = document.getElementById('shuffle-btn'); 
const reviewBtn = document.getElementById('review-btn'); 
const returnBtn = document.getElementById('return-btn'); 
const reviewArea = document.getElementById('review-area'); 

// Funkcja do ukrywania wszystkich kontenerów głównych
function hideAllViews() {
    quizArea.classList.add('hidden');
    reviewArea.classList.add('hidden');
    resultArea.classList.add('hidden');
    navContainer.classList.add('hidden'); 
    returnBtn.classList.add('hidden'); 
}

// Funkcja do przetasowania elementów tablicy
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Funkcja, która uruchamia przetasowanie testów
function shuffleQuiz() {
    hideAllViews();
    currentQuestionIndex = 0; 
    userAnswers = []; 
    
    // --- NOWA LOGIKA: RANDOIMZACJA ODPOWIEDZI I PRZECHOWYWANIE KOLEJNOŚCI ---
    quizData.forEach(q => {
        let optionsCopy = [...q.Opcje]; // Tworzymy kopię opcji
        shuffleArray(optionsCopy);      // Przetasowanie opcji
        q.CurrentOpcje = optionsCopy;   // Dodajemy przetarsowaną kolejność do obiektu pytania
    });
    // --- KONIEC NOWEJ LOGIKI ---

    // Randoimzacja pytań
    shuffleArray(quizData); 
    
    displayQuestion(); 
}

// Funkcja do wyświetlania poprawnej odpowiedzi (w trybie testu)
function showAnswer(event) {
    const currentQ = quizData[currentQuestionIndex];
    const correctAnswers = currentQ.PrawidłoweOdp;
    const optionLabels = quizArea.querySelectorAll('.option-list label');

    optionLabels.forEach(label => {
        const checkbox = label.querySelector('input');
        if (correctAnswers.includes(checkbox.value)) {
            label.classList.add('correct-answer-highlight');
        }
        checkbox.disabled = true;
    });

    event.target.classList.add('hidden');
}

// Funkcja do wyświetlania bieżącego pytania (TRYB TESTU)
function displayQuestion() {
    hideAllViews();
    quizArea.classList.remove('hidden');
    navContainer.classList.remove('hidden'); 
    quizArea.innerHTML = '';
    
    if (currentQuestionIndex < quizData.length) {
        const currentQ = quizData[currentQuestionIndex];
        const questionBox = document.createElement('div');
        questionBox.className = 'question-box';
        
        // Numer i tekst pytania
        const questionTitle = document.createElement('h3');
        questionTitle.textContent = `${currentQuestionIndex + 1}. ${currentQ.Pytanie}`;
        questionBox.appendChild(questionTitle);
        
        // Lista opcji
        const optionsList = document.createElement('div');
        optionsList.className = 'option-list';

        // Używamy przetabowanej kolejności, jeśli istnieje, lub oryginalnej
        const optionsToRender = currentQ.CurrentOpcje || currentQ.Opcje; 

        optionsToRender.forEach((optionText) => { 
            const label = document.createElement('label');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.name = `q${currentQ.ID}`;
            checkbox.value = optionText;
            
            // Odtwarzanie zaznaczenia
            const savedAnswers = userAnswers[currentQuestionIndex] || [];
            if (savedAnswers.includes(optionText)) {
                checkbox.checked = true;
            }

            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(optionText));
            optionsList.appendChild(label);
        });

        questionBox.appendChild(optionsList);
        
        // Przycisk "Pokaż odpowiedź"
        const showAnswerBtn = document.createElement('button');
        showAnswerBtn.textContent = 'Pokaż odpowiedź';
        showAnswerBtn.className = 'show-answer-btn';
        showAnswerBtn.addEventListener('click', showAnswer);
        questionBox.appendChild(showAnswerBtn);

        quizArea.appendChild(questionBox);
        
        // --- LOGIKA WIDOCZNOŚCI PRZYCISKÓW NAWIGACYJNYCH W #nav-container ---
        
        if (currentQuestionIndex > 0) {
            prevBtn.classList.remove('hidden');
        } else {
            prevBtn.classList.add('hidden');
        }
        
        if (currentQuestionIndex < quizData.length - 1) {
            nextBtn.classList.remove('hidden');
            showResultsBtn.classList.add('hidden');
        } else {
            nextBtn.classList.add('hidden');
            showResultsBtn.classList.remove('hidden');
        }

    } else {
        showResults();
    }
}

// Funkcja zapisująca odpowiedź użytkownika
function saveAnswer() {
    const currentQ = quizData[currentQuestionIndex];
    const selectedCheckboxes = document.querySelectorAll(`input[name="q${currentQ.ID}"]:checked`);
    
    const selectedAnswers = Array.from(selectedCheckboxes).map(cb => cb.value);
    userAnswers[currentQuestionIndex] = selectedAnswers;
}

// Funkcja do powrotu do poprzedniego pytania
function previousQuestion() {
    saveAnswer(); 
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

// Funkcja do przejścia do następnego pytania
function nextQuestion() {
    saveAnswer();
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        displayQuestion();
    } else {
        showResults();
    }
}

// Funkcja obliczająca i wyświetlająca wyniki
function showResults() {
    saveAnswer(); 
    hideAllViews();
    resultArea.classList.remove('hidden');

    let correctAnswersCount = 0;

    for (let i = 0; i < quizData.length; i++) {
        const userSelected = userAnswers[i] || [];
        const correct = quizData[i].PrawidłoweOdp; 
        
        const isCorrect = userSelected.length === correct.length && 
                          userSelected.every(answer => correct.includes(answer));

        if (isCorrect) {
            correctAnswersCount++;
        }
    }

    scoreText.textContent = `Twój wynik: ${correctAnswersCount} / ${quizData.length}`;
}

// NOWA FUNKCJA: Wyświetla wszystkie pytania z poprawnymi odpowiedziami (TRYB PRZEGLĄDU)
function displayReviewMode() {
    hideAllViews();
    reviewArea.classList.remove('hidden');
    returnBtn.classList.remove('hidden'); 
    reviewArea.innerHTML = '<h2>Przegląd wszystkich pytań i poprawnych odpowiedzi:</h2>';

    quizData.forEach((q, qIndex) => {
        const reviewBox = document.createElement('div');
        reviewBox.className = 'review-question';
        
        // Pytanie
        const questionTitle = document.createElement('h4');
        questionTitle.textContent = `${qIndex + 1}. ${q.Pytanie}`;
        reviewBox.appendChild(questionTitle);

        // Lista opcji
        const optionsList = document.createElement('ul');

        // Używamy przetabowanej kolejności, jeśli istnieje, lub oryginalnej
        const optionsToRender = q.CurrentOpcje || q.Opcje;
        
        optionsToRender.forEach((optionText) => {
            const listItem = document.createElement('li');
            listItem.className = 'review-option';
            
            const isCorrect = q.PrawidłoweOdp.includes(optionText);

            listItem.textContent = optionText;
            if (isCorrect) {
                listItem.classList.add('review-correct');
            }
            optionsList.appendChild(listItem);
        });

        reviewBox.appendChild(optionsList);
        reviewArea.appendChild(reviewBox);
    });
}


// Dodanie słuchaczy zdarzeń do przycisków
nextBtn.addEventListener('click', nextQuestion);
prevBtn.addEventListener('click', previousQuestion); 
showResultsBtn.addEventListener('click', showResults);
shuffleBtn.addEventListener('click', shuffleQuiz); 
reviewBtn.addEventListener('click', displayReviewMode); 
returnBtn.addEventListener('click', displayQuestion); 

// Inicjalizacja: Wyświetlamy pierwsze pytanie po załadowaniu
displayQuestion();
