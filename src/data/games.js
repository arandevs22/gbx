
const games = [
    {
        "id": 1,
        "reference": "go:gba01",
        "console": "Game Boy Advance",
        "genre": "shooter",
        "title": "Metal slug Advance",
        "year": "2004",
        "rom": "https://dl.dropboxusercontent.com/s/j532de5ynf16du9/Metal%20Slug%20Advance%20%28USA%29.gba",
        "sinopsis": "Ahora puedes tener toda la acción arcade 2D de Metal Slug en la palma de tu mano, porque Metal Slug Advance ha llegado a Game Boy Advance. A lo largo de cinco misiones llenas de acción, debes moverte a pie o en vehículos slug a través de terreno accidentado y bases submarinas. Tu objetivo es rescatar rehenes destruyendo enemigos y resolviendo acertijos estratégicos. Completar tus misiones se vuelve más fácil cuando recolectas más de 100 tipos de tarjetas electrónicas, que mejoran las habilidades de tu personaje."
    },
    {
        "id": 3,
        "reference": "go:gba03",
        "console": "Game Boy Advance",
        "genre": "plataforma",
        "title": "Castlevania: Aria Of Sorrow",
        "year": "2004",
        "rom": "https://dl.dropboxusercontent.com/s/22on75an2j5x6p2/Castlevania%20-%20Aria%20of%20Sorrow%20%28USA%29.gba",
        "sinopsis": "El año es 2035 y Soma Cruz está a punto de presenciar el primer eclipse solar del siglo XXI cuando de repente se desmaya, solo para despertar dentro de un castillo misterioso. Como Soma, debes navegar por los laberintos del castillo mientras te enfrentas a peligrosos monstruos a cada paso. ¡Pero cuidado, debes escapar antes de que el mal te consuma!"
    },
    {
        "id": 4,
        "reference": "go:gba04",
        "console": "Game Boy Advance",
        "genre": "peleas",
        "title": "Dragon Ball Z: Supersonic Warriors",
        "year": "2004",
        "rom": "https://dl.dropboxusercontent.com/s/ikbbudfpgnpmm0c/Dragon%20Ball%20Z%20-%20Supersonic%20Warriors%20%28USA%29.gba",
        "sinopsis": "¡Elige tu DBZ Dream Team y sacude el universo Dragon Ball Z con combates de vuelo libre! Bombardear a los oponentes con ataques de castigo en el suelo y en el aire. ¡Es una lucha atronadora de DBZ diferente a todo lo que hayas visto antes!"
    },
    {
        "id": 5,
        "reference": "go:gba05",
        "console": "Game Boy Advance",
        "genre": "rpg",
        "title": "Mario & Luigi: Superstar Saga",
        "year": "2003",
        "rom": "https://dl.dropboxusercontent.com/s/tmfx32nt4trf82x/Mario%20%26%20Luigi%20-%20Superstar%20Saga%20%28USA%29.gba",
        "sinopsis": "¡Una bruja malvada ha reemplazado el discurso justo de la princesa Peach con explosivos! Mario y Luigi deben volver a rescatarla, pero esta vez emplean la ayuda de Bowser, su enemigo jurado. Mario y Luigi deben aprender nuevos movimientos y combinar poderes para luchar contra los enemigos y acercarse al castillo de la bruja. Guíe a este grupo poco común a través de una gran cantidad de minijuegos como Border Jump y Mystery Carts. Combina los poderes de Mario y Luigi para lograr movimientos especiales en equipo. Sumérgete en este mundo brillante, caricaturesco y humorístico, completo con la música de éxito de los juegos anteriores de Mario."
    },
    {
        "id": 6,
        "reference": "go:gba06",
        "console": "Game Boy Advance",
        "genre": "plataforma",
        "title": "Super Mario Advance",
        "year": "2001",
        "rom": "https://dl.dropboxusercontent.com/s/hlyotjsru4i5ncm/Super%20Mario%20Advance%20%28USA%2C%20Europe%29.gba",
        "sinopsis": "Un relanzamiento actualizado de Super Mario Bros. 2 (la versión estadounidense de Yume Kōjō Doki Doki Panic, relanzado más tarde en Japón como Super Mario USA como título de lanzamiento de Game Boy Advance. Basado en gran medida en la versión de Super Mario All-Stars de el juego, también presenta una versión actualizada del juego de arcade original Mario Bros., que se puede jugar con hasta otros tres jugadores a través de un cable de enlace."
    },
    {
        "id": 7,
        "reference": "go:gba07",
        "console": "Game Boy Advance",
        "genre": "rpg",
        "title": "Fire Emblem: The Binding Blade",
        "year": "2002",
        "rom": "https://dl.dropboxusercontent.com/s/1ta96rmkv1pagdd/Fire%20Emblem%20-%20The%20Binding%20Blade%20%28T%29.gba",
        "sinopsis": "Fire Emblem: The Binding Blade es un juego de rol táctico japonés desarrollado por Intelligent Systems y publicado por Nintendo. El juego fue lanzado el 29 de marzo de 2002 en Japón, es el sexto juego de la serie Fire Emblem y el primero de los tres juegos de la serie que han aparecido en la computadora de mano Game Boy Advance de Nintendo. Fue el último juego de Fire Emblem que se lanzó exclusivamente en Japón hasta el lanzamiento de Fire Emblem: New Mystery of the Emblem. A The Binding Blade le siguió una precuela, Fire Emblem: The Blazing Blade, ambientada veinte años antes."
    },
    {
        "id": 8,
        "reference": "go:gba08",
        "console": "Game Boy Advance",
        "genre": "shooter",
        "title": "Contra Advance: The Alien Wars EX",
        "year": "2002",
        "rom": "https://dl.dropboxusercontent.com/s/aqacd9e3bikeqwo/Contra%20Advance%20-%20The%20Alien%20Wars%20EX%20%28USA%29.gba",
        "sinopsis": "En Contra Advance The Alien Wars EX™, acaba con enormes hordas de alienígenas, robots y monstruos para evitar que el malvado Halcón Rojo se apodere del mundo. Con todos los nuevos niveles y gráficos del éxito original de Super Nintendo®, la trepidante acción de disparos de Contra te mantendrá al borde de tu asiento."
    },
    {
        "id": 9,
        "reference": "go:gba09",
        "console": "Game Boy Advance",
        "genre": "plataforma",
        "title": "The Legend of Spyro: The Eternal Night",
        "year": "2007",
        "rom": "https://dl.dropboxusercontent.com/s/fxuxh5yaw3tl8bl/Legend%20of%20Spyro%2C%20The%20-%20The%20Eternal%20Night%20%28USA%29%20%28En%2CFr%29.gba",
        "sinopsis": "The Legend of Spyro: The Eternal Night es un juego de plataformas de acción en 3D que tiene lugar justo después de los eventos al final de The Legend of Spyro: A New Beginning. Los jugadores controlan a Spyro mientras busca a su amigo Cynder. Inicialmente, ha perdido todos sus diferentes poderes de aliento del primer juego, pero recupera gradualmente la capacidad de respirar fuego, hielo, tierra y electricidad. Una novedad en este juego es la capacidad de Spyro para ralentizar el tiempo usando su habilidad recién aprendida 'Dragon Time'."
    },
    {
        "id": 10,
        "reference": "go:gba10",
        "console": "Game Boy Advance",
        "genre": "plataforma",
        "title": "Crash of the Titans",
        "year": "2007",
        "rom": "https://dl.dropboxusercontent.com/s/omd6uo1gux7qarx/Crash%20of%20the%20Titans%20%28USA%29%20%28En%2CFr%29.gba",
        "sinopsis": "Crash of the Titans es el sexto juego de la serie Crash Bandicoot. El juego hace que el jugador explore niveles, recogiendo potenciadores para usar contra los enemigos y, por primera vez, use combos de lucha como puñetazos y patadas contra los enemigos. Cuando Crash derrota a un enemigo o destruye un objeto, se libera una sustancia mágica conocida como Mojo. Si el jugador recolecta suficiente Mojo, obtendrá una mejora de habilidad o un nuevo movimiento."
    },
    {
        "id": 11,
        "reference": "go:gba11",
        "console": "Game Boy Advance",
        "genre": "rpg",
        "title": "Summon Night: Swordcraft Story",
        "year": "2003",
        "rom": "https://dl.dropboxusercontent.com/s/qh027kwjeustbnf/Summon%20Night%20-%20Swordcraft%20Story%20%28USA%29.gba",
        "sinopsis": "Summon Night: Swordcraft Story es un juego de rol ambientado en el extraño mundo de Lyndbaum, una tierra sagrada vinculada a cuatro dimensiones mágicas desde las que los invocadores pueden invocar espíritus llamados Guardian Beasts para que cumplan sus órdenes."
    },
    {
        "id": 12,
        "reference": "go:gba12",
        "console": "Game Boy Advance",
        "genre": "deportes",
        "title": "FIFA 07",
        "year": "2006",
        "rom": "https://dl.dropboxusercontent.com/s/juiotjyqazpw4rd/FIFA%202007%20%23%20GBA.GBA",
        "sinopsis": "FIFA 07 (también conocido como FIFA Football 07 y FIFA 07 Soccer) es la edición 2006 de la serie de videojuegos simuladores de fútbol de EA Sports. Desarrollado por EA Canadá, es publicado por Electronic Arts."
    },
    {
        "id": 13,
        "reference": "go:gba13",
        "console": "Game Boy Advance",
        "genre": "rpg",
        "title": "Final Fantasy VI Advance",
        "year": "2006",
        "rom": "https://dl.dropboxusercontent.com/s/1v7zc4xqavxalcc/Final%20Fantasy%206%20Advance%20%23%20GBA.GBA",
        "sinopsis": "Final Fantasy VI Advance es más que un simple puerto del clásico SNES: todos los aspectos de los juegos han sido revisados y mejorados. Además, una gran cantidad de elementos nuevos se fusionaron a la perfección con el juego original, brindando sorpresas inesperadas para los fanáticos de toda la vida. Con nuevas mazmorras, nuevas clases de trabajo y otras características emocionantes, tanto los jugadores de la vieja escuela como los recién llegados pueden disfrutar de este título FINAL FANTASY que define el género en un formato portátil."
    },
    {
        "id": 14,
        "reference": "go:gba14",
        "console": "Game Boy Advance",
        "genre": "rpg",
        "title": "Final Fantasy IV Advance",
        "year": "2005",
        "rom": "https://dl.dropboxusercontent.com/s/fhe5te4xkgefhdg/Final%20Fantasy%204%20Advance%20%23%20GBA.GBA",
        "sinopsis": "Final Fantasy IV Advance se basa en gran medida en la versión WonderSwan Color. Algunos cambios incluyen la adición de retratos de personajes en cuadros de texto, la capacidad de cambiar de miembro del grupo, mayor dificultad y nuevas mazmorras con nuevos elementos y armas junto con nuevos jefes. El guión recibió una retraducción más fiel al material original. Se presenta Quicksave, que permite al jugador guardar la posición actual (sin importar dónde) en un archivo que se elimina al cargar."
    },
    {
        "id": 15,
        "reference": "go:gba15",
        "console": "Game Boy Advance",
        "genre": "rpg",
        "title": "Dragon Ball Z: Buu's Fury",
        "year": "2004",
        "rom": "https://dl.dropboxusercontent.com/s/6dxtoad2qpv90ok/Dragonball%20Z%20-%20Buu%27s%20Fury%20%23%20GBA.GBA",
        "sinopsis": "Dragon Ball Z: Buu's Fury es el tercer y último juego de la serie. Fue lanzado el 14 de septiembre de 2004 en América del Norte. El juego se centra en las partes finales de la serie Dragon Ball Z (temporada 7), es decir, las batallas con Majin Buu. El juego agregó varias nuevas incorporaciones a la serie. Primero, el juego agregó equipo, que podría equiparse a los personajes para alterar sus estadísticas y brindar otros beneficios. El juego también permitió a los jugadores asignar sus propios puntos de estadísticas, de los cuales tres se otorgaron por nivel. También se agregó la capacidad de bloquear manteniendo presionado el botón R, y también bloquear la energía manteniendo presionado el botón B mientras bloquea. Usar el bloque de energía drena lentamente el indicador de energía del usuario. Ambas técnicas reducen en gran medida la cantidad de daño que se recibe de los ataques. El juego también agregó varias otras características, como fusiones y la capacidad de transformarse en un Super Saiyan 3. Aunque se agregaron muchas características, se eliminó la capacidad de usar ataques de carga manteniendo presionado y soltando el botón A."
    },
    {
        "id": 16,
        "reference": "go:gba16",
        "console": "Game Boy Advance",
        "genre": "shooter",
        "title": "Tom Clancy's Splinter Cell",
        "year": "2003",
        "rom": "https://dl.dropboxusercontent.com/s/yv5jyaasy6cejzh/Tom%20Clancy%27s%20Splinter%20Cell%20%28USA%29%20%28En%2CFr%2CEs%29.gba",
        "sinopsis": "Se lanzaron versiones 2D del juego para Game Boy Advance y N-Gage (este último como Tom Clancy's Splinter Cell: Team Stealth Action), así como la versión para teléfonos móviles desarrollada por Gameloft. Una versión remasterizada de alta definición de Tom Clancy's Splinter Cell se lanzó para PlayStation 3 en septiembre de 2011. El éxito de la serie de juegos generó una serie de novelas escritas bajo el seudónimo de David Michaels."
    },
    {
        "id": 17,
        "reference": "go:gba17",
        "console": "Game Boy Advance",
        "genre": "plataforma",
        "title": "Sonic Advance",
        "year": "2001",
        "rom": "https://dl.dropboxusercontent.com/s/s6y5qpbecibhp44/0339%20-%20Sonic%20Advance%20%28E%29%28Lightforce%29.gba",
        "sinopsis": "Sonic Advance presenta cuatro personajes jugables y marca la primera aparición jugable de Amy Rose en un título 2D. El juego toma prestados elementos de los títulos originales de Sonic the Hedgehog para Sega Genesis, pero con el estilo artístico posterior a Dreamcast para los personajes que se introdujo en Sonic Adventure. El juego también incluye funciones multijugador y minijuegos."
    },
    {
        "id": 18,
        "reference": "go:gba18",
        "console": "Game Boy Advance",
        "genre": "peleas",
        "title": "Medabots AX: Metabee Version",
        "year": "2002",
        "rom": "https://dl.dropboxusercontent.com/s/5yvixb1s6brkpj6/1037%20-%20Medabots%20AX%20-%20Metabee%20Version%20%28E%29%28Rising%20Sun%29.gba",
        "sinopsis": "Medabots AX es un juego de lucha en 2D basado en Medarot G, lanzado solo en Norteamérica. Se lanzaron dos versiones, Metabee y Rokusho."
    },
    {
        "id": 19,
        "reference": "go:gba19",
        "console": "Game Boy Advance",
        "genre": "shooter",
        "title": "Mega Man & Bass",
        "year": "1998",
        "rom": "https://dl.dropboxusercontent.com/s/06dvk9aumvl7gxx/1046%20-%20MegaMan%20%26%20Bass%20%28E%29%28wC%29.gba",
        "sinopsis": "Mega Man & Bass es una entrada en la clásica serie Mega Man, con la opción de controlar a Mega Man o Bass, debido a que el Dr. Wily y el Dr. Light hacen una tregua para luchar contra King. El juego se lanzó originalmente solo en Japón, pero un puerto posterior de Game Boy Advance tuvo un lanzamiento internacional."
    },
    {
        "id": 20,
        "reference": "go:gba20",
        "console": "Game Boy Advance",
        "genre": "cartas",
        "title": "Yu-Gi-Oh! World Championship Tournament 2004",
        "year": "2004",
        "rom": "https://dl.dropboxusercontent.com/s/jowhm7lazz2opeh/1435%20-%20Yu-Gi-Oh%21%20-%20World%20Championship%20Tournament%202004%20%28E%29%28GBA%29.gba",
        "sinopsis": "¡Descubre quién es el mejor jugador de batallas de cartas en Yu-Gi-Oh! World Championship Tournament 2004. Construye tus cartas de monstruo, cartas de hechizo, cartas de trampa y cartas de invocación especial en tres mazos separados para diferentes estrategias de duelo. Puedes conquistar el torneo en solitario o unirte a un amigo en una batalla multijugador. Con más de 1000 cartas de juego y docenas de personajes populares de Yu-Gi-Oh! Serie de televisión, la emoción y la euforia del juego de cartas coleccionables Yu-Gi-Oh se captura con toda su fuerza."
    },
    {
        "id": 21,
        "reference": "go:gba21",
        "console": "Game Boy Advance",
        "genre": "plataforma",
        "title": "Kirby & the Amazing Mirror",
        "year": "2004",
        "rom": "https://dl.dropboxusercontent.com/s/2app7vsx3gmn2mj/Kirby%20%26%20The%20Amazing%20Mirror%20%28USA%29.gba",
        "sinopsis": "Una vez más, Kirby debe salvar al reino del mal. Pero esta vez necesitará refuerzos. Como Kirby, puedes llamar a uno de los cuatro alter egos para que te ayuden durante tu búsqueda. Cada personaje presenta nuevas habilidades de copia que van desde disparar flechas hasta movimientos cuerpo a cuerpo. Practica tus habilidades en nuevos juegos secundarios, como Crackity Hack y Speed Eaters. Además de nuevas habilidades y subjuegos, Kirby & the Amazing Mirror también presenta nuevos modos multijugador."
    },
    {
        "id": 22,
        "reference": "go:gba22",
        "console": "Game Boy Advance",
        "genre": "plataforma",
        "title": "Rayman: Hoodlums' Revenge",
        "year": "2005",
        "rom": "https://dl.dropboxusercontent.com/s/lmgmy1gv1kg2bio/1934%20-%20Rayman%20-%20Hoodlums%27%20Revenge%20%28E%29%28Endless%20Piracy%29.gba",
        "sinopsis": "Un derivado de la serie Rayman, Hoodlum's Revenge tiene lugar justo después de los eventos de Rayman 3: Hoodlum Havoc y por primera vez en la serie, además de los juegos multijugador, el amigo de Rayman, Globox, aparece como un personaje jugable."
    },
    {
        "id": 23,
        "reference": "go:gba23",
        "console": "Game Boy Advance",
        "genre": "plataforma",
        "title": "Super Mario Advance 4",
        "year": "2003",
        "rom": "https://dl.dropboxusercontent.com/s/i2233ziovaq8x25/Super%20Mario%20Advance%204%20-%20Super%20Mario%20Bros.%203%20%28USA%2C%20Australia%29%20%28Rev%201%29.gba",
        "sinopsis": "Super Mario Advance 4: Super Mario Bros. 3 se lanzó originalmente para Game Boy Advance y tuvo una expansión física en forma de una colección de tarjetas de e-Reader. Cuando el juego se relanzó en la consola virtual de Wii U, incluía el juego completo con todas las expansiones de nivel que se encuentran en World-e. Todos los niveles se incluyeron en esta versión, incluso los que solo se lanzaron en Japón."
    },
    {
        "id": 24,
        "reference": "go:gba24",
        "console": "Game Boy Advance",
        "genre": "shooter",
        "title": "007: Everything or Nothing",
        "year": "2003",
        "rom": "https://dl.dropboxusercontent.com/s/89wn01azjd69gjv/007%20-%20Everything%20or%20Nothing%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%29.gba",
        "sinopsis": "Regresando como James Bond está Pierce Brosnan, quien prestará su imagen y voz escaneadas cibernéticamente al personaje. El resto del elenco incluirá nuevas chicas Bond (Shannon Elizabeth y Heidi Klum), así como viejos y nuevos villanos Bond. El guión original llevará a los jugadores a lugares emocionantes en cuatro continentes, incluido el Valle de los Reyes en Egipto y el Barrio Francés de Nueva Orleans."
    },
    {
        "id": 25,
        "reference": "go:gba25",
        "console": "Game Boy Advance",
        "genre": "shooter",
        "title": "007: Nightfire",
        "year": "2002",
        "rom": "https://dl.dropboxusercontent.com/s/lhlt2ncdza14exm/007%20-%20NightFire%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%29.gba",
        "sinopsis": "007: Nightfire es un shooter en primera persona protagonizado por el agente secreto británico James Bond y una secuela de Agent Under Fire. El juego marcó la cuarta aparición de Pierce Brosnan como James Bond antes del estreno de su cuarta y última película de Bond Die Another Day. Su imagen apareció en el juego, pero no su voz, que fue proporcionada por Maxwell Caulfield. En general, hay muchas armas que el jugador puede llevar, incluidas granadas de varios tipos y otros tipos de explosivos. Además, hay numerosas cantidades de armas montadas que se encuentran a lo largo del juego. Al igual que con los juegos anteriores de James Bond, las armas que aparecen se basan en armas reales, pero con los nombres cambiados. Algunas armas aparecen en la versión de consola pero no en la de PC, y viceversa."
    },
    {
        "id": 26,
        "reference": "go:gba26",
        "console": "Game Boy Advance",
        "genre": "estrategia",
        "title": "Advance Wars",
        "year": "2001",
        "rom": "https://dl.dropboxusercontent.com/s/89ht4eu0v23adom/Advance%20Wars%20%28USA%29%20%28Rev%201%29.gba",
        "sinopsis": "El hecho de que esta batalla quepa en la palma de tu mano no significa que lo que está en juego sea pequeño. Por el contrario, esta lucha de todo o nada te hará acceder a pistolas, granadas, lanzadores y armamento de todo tipo. Los jugadores asumen el mando de un ejército que pretende recuperar un mundo que ha sido dividido por facciones en guerra. El mapa de batalla es esencialmente una cuadrícula, y mover unidades es como mover piezas de ajedrez en un tablero: cada una de las unidades puede moverse una cantidad específica de espacios dentro de esta cuadrícula y solo puede atacar a cierta distancia de enemigos específicos. Advance Wars presenta más de 115 mapas, un editor de mapas, juego mano a mano a través de un cable de enlace y un modo tutorial fácil de entender para principiantes."
    },
    {
        "id": 27,
        "reference": "go:gba27",
        "console": "Game Boy Advance",
        "genre": "estrategia",
        "title": "Advance Wars 2: Black Hole Rising",
        "year": "2003",
        "rom": "https://dl.dropboxusercontent.com/s/wmru67wphe4oteo/Advance%20Wars%202%20-%20Black%20Hole%20Rising%20%28USA%29.gba",
        "sinopsis": "¡En Advance Wars 2: Black Hole Rising trae a GBA una acción estratégica completamente nueva y una acción de lucha completamente nueva! Emocionante juego de estrategia por turnos que pondrá a prueba tu cerebro y tus reflejos, ¡en esta secuela del éxito original!"
    },
    {
        "id": 28,
        "reference": "go:gba28",
        "console": "Game Boy Advance",
        "genre": "beat em up",
        "title": "Astro Boy: Omega Factor",
        "year": "2003",
        "rom": "https://dl.dropboxusercontent.com/s/igq28jy6nawykew/Astro%20Boy%20-%20Omega%20Factor%20%28USA%29%20%28En%2CJa%2CFr%2CDe%2CEs%2CIt%29.gba",
        "sinopsis": "Únete a Astro, el superhéroe robótico con una mente humana, en una búsqueda para reunir la raza robótica con humanos. Astro usa sus siete súper habilidades para enfrentarse a personas como Atlas, Blue Knight y más de 40 personajes. El juego trae juegos 2D clásicos a Game Boy Advance junto con una historia original de siete episodios. Jugando como Astro Boy, aprenderás sobre la justicia, la compasión, el mal, el coraje y la historia de Astro Boy, todo mientras construye el factor Omega de Astro y fortalece su carácter y sus habilidades sobrehumanas."
    },
    {
        "id": 29,
        "reference": "go:gba29",
        "console": "Game Boy Advance",
        "genre": "beat em up",
        "title": "Baldur's Gate: Dark Alliance",
        "year": "2001",
        "rom": "https://dl.dropboxusercontent.com/s/yh99z2434zfg0gw/Baldur%27s%20Gate%20-%20Dark%20Alliance%20%28USA%29.gba",
        "sinopsis": "Baldur’s Gate ™: Dark Alliance ™ es una aventura de acción revolucionaria con una historia épica de intriga, alianzas feroces, efectos de hechizos explosivos y criaturas y entornos altamente detallados. Baldur’s Gate ™: Dark Alliance ™ es un punto de referencia de la tecnología y el juego."
    },
    {
        "id": 30,
        "reference": "go:gba30",
        "console": "Game Boy Advance",
        "genre": "beat em up",
        "title": "Batman Begins",
        "year": "2005",
        "rom": "https://dl.dropboxusercontent.com/s/x4i8ryy7n89e41y/Batman%20Begins%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.gba",
        "sinopsis": "Entra en las sombras del peligroso inframundo criminal de Gotham City como el legendario Caballero Oscuro de DC Comics en el videojuego Batman Beginstm. Dolgada para el día y la fecha de lanzamiento con la película de imágenes de Warner Bros., Batman Begins desafía a los jugadores a usar el miedo como su arma definitiva."
    },
    {
        "id": 31,
        "reference": "go:gba31",
        "console": "Game Boy Advance",
        "genre": "plataforma",
        "title": "Banjo-Kazooie: Grunty's Revenge",
        "year": "2003",
        "rom": "https://dl.dropboxusercontent.com/s/gb2p7sbof4md4cs/Banjo-Kazooie%20-%20Grunty%27s%20Revenge%20%28USA%2C%20Europe%29.gba",
        "sinopsis": "Gruntilda está de regreso, y depende de Banjo y Kazooie detener su plan maestro. En Banjo-Kazooie: Grunty's Revenge, jugarás como Banjo y lo seguirás a través de seis mundos llenos de pruebas y concursos. Algunos de los desafíos que debes superar incluyen resolver rompecabezas, evitar obstáculos y luchar contra diferentes enemigos. Derrota a tus enemigos usando la variedad de movimientos de combate de Banjo. También puede buscar ayuda de los médicos de brujas, que pueden transformar el banjo en un ratón, un tanque y otras criaturas."
    },
    {
        "id": 32,
        "reference": "go:gba32",
        "console": "Game Boy Advance",
        "genre": "rpg",
        "title": "Beyblade: G-Revolution",
        "year": "2004",
        "rom": "https://dl.dropboxusercontent.com/s/2x406gzdvs36rm5/Beyblade%20G-Revolution%20%28USA%29.gba",
        "sinopsis": "La revolución G está barriendo todo el mundo de Beyblade, y su trabajo es desafiar a los mejores Beybladers y recolectar piezas valiosas. Al igual que las entradas anteriores en la serie Beyblade, G-Revolution te permite enfrentar tu top giratoria contra otros en diferentes arenas. En tu búsqueda para convertirte en campeón mundial, puedes construir una variada colección de cuchillas, que puedes personalizar con el editor de Beyblade. Compite contra más de 16 personajes en una historia tomada directamente de la serie animada Beyblade G-Revolution."
    },
    {
        "id": 33,
        "reference": "go:gba33",
        "console": "Game Boy Advance",
        "genre": "rpg",
        "title": "Bomberman Tournament",
        "year": "2001",
        "rom": "https://dl.dropboxusercontent.com/s/zmf3ste1soa5xhw/Bomberman%20Tournament%20%28USA%2C%20Europe%29.gba",
        "sinopsis": "Un S.O.S. ¡De las señales de Cosmos de que el planeta Phantarion está en problemas! Tome su arsenal y prepárese para una acción sin parar mientras avanza a través de campos de batalla interactivos y asume hasta 4 jugadores en tiempo real. ¡Battle Opponents a través de 8 laberintos interactivos en el campo de batalla! ¡Asumir hasta 4 jugadores en Blastfests de múltiples jugadores! ¡Aventura de bombardeo rápida, furiosa y explosiva!"
    },
    {
        "id": 34,
        "reference": "go:gba34",
        "console": "Game Boy Advance",
        "genre": "rpg",
        "title": "Breath of Fire",
        "year": "1993",
        "rom": "https://dl.dropboxusercontent.com/s/87hvqrup598ntbc/Breath%20of%20Fire%20%28USA%29.gba",
        "sinopsis": "Reconocido por Capcom como su primer videojuego tradicional de roles, Breath of Fire sentaría el precedente para futuras entradas en la serie y presenta diseños de personajes del Jefe de Desarrollo de la Compañía Keiji Inafune, así como la música de los miembros de Capcom's Into-House Sound Team Alph Lyla. En 2001, el juego fue relanzado para el sistema de mano Game Boy Advance con nuevas características de guardado y mejoras gráficas menores, con la versión en inglés que se lanza en Europa por primera vez."
    },
    {
        "id": 35,
        "reference": "go:gba35",
        "console": "Game Boy Advance",
        "genre": "plataforma",
        "title": "Castlevania: Circle of the Moon",
        "year": "2001",
        "rom": "https://dl.dropboxusercontent.com/s/9hedqhnrcz8y7f6/Castlevania%20-%20Circle%20of%20the%20Moon%20%28USA%29.gba",
        "sinopsis": "Castlevania: Circle of the Moon es el primero de la serie que se basa en la estructura de acción/RPG de Castlevania: Sinfonía de la noche en lugar del estilo de acción basado en niveles de todos los juegos anteriores de Castlevania. El castillo de Drácula es un solo edificio continuo, y cuando Nathan descubre artefactos dentro de él, gana nuevas habilidades que le permiten explorar más. Si bien Nathan solo puede usar su látigo asesino como arma, puede encontrar y equipar diferentes tipos de armadura y accesorios que cambian sus estadísticas. Único de esta entrada en la serie es el sistema de configuración dual, donde una combinación de dos cartas le dará a Nathan habilidades mágicas únicas. Por ejemplo, equipar una tarjeta tipo fuego con una tarjeta de látigo le dará al asesino un atributo de fuego, mientras que la equipar con una tarjeta de invocación permitirá a Nathan convocar a un demonio de fuego para atacar a los enemigos en pantalla."
    },
    {
        "id": 36,
        "reference": "go:gba36",
        "console": "Game Boy Advance",
        "genre": "rpg",
        "title": "Breath of Fire II",
        "year": "1994",
        "rom": "https://dl.dropboxusercontent.com/s/ryjy5l4kdjm1zge/Breath%20of%20Fire%20II%20%28USA%29.gba",
        "sinopsis": "¡La increíble secuela del RPG Hit Breath of Fire más vendido está aquí! Eres el último miembro del clan Dragon, que lucha por librar al mundo de un mal creciente. Un elenco de compañeros inusuales y emocionantes se une a ti en tus aventuras a través de una maravillosa tierra llena de magia y misterio. Encontrarás extraños elementos místicos, monstruos memorables y ubicaciones exóticas en tu búsqueda para conquistar el mal. Hay estrategia y lanzamiento de hechizos en abundancia en las horas de acción convincente y aventura que te espera. ¡Breath of Fire II es lo último en la emoción de RPG!"
    },
    {
        "id": 37,
        "reference": "go:gba37",
        "console": "Game Boy Advance",
        "genre": "plataforma",
        "title": "Castlevania: Harmony of Dissonance",
        "year": "2002",
        "rom": "https://dl.dropboxusercontent.com/s/78x9qvvuqzho7uu/Castlevania%20-%20Harmony%20of%20Dissonance%20%28USA%29.gba",
        "sinopsis": "Casi cincuenta años ha pasado desde que Simon Belmont rescató la tierra de la maldición de Drácula. Ahora, el descendiente de Simon, Juste Belmont, debe adquirir las reliquias de Drácula para desentrañar la desaparición de su amiga de la infancia Lydie. Los misterios y el peligro encantadores del castillo esperan a todos los que se atreven a entrar."
    },
    {
        "id": 38,
        "reference": "go:gba38",
        "console": "Game Boy Advance",
        "genre": "plataforma",
        "title": "Crash Bandicoot: The Huge Adventure",
        "year": "2002",
        "rom": "https://dl.dropboxusercontent.com/s/1tnc30aoe5rwg10/Crash%20Bandicoot%20-%20The%20Huge%20Adventure%20%28USA%29.gba",
        "sinopsis": "Cansado de hacer una batalla sin cesar con los pandicoots entrometidos, el nefasto Dr. Neo Cortex encoge toda la tierra, y se estrella y coco junto con ella, al tamaño de una fruta Wumpa. Afortunadamente, Coco inventa una máquina para revertir los efectos, pero necesita cristales de todo el mundo para alimentarla. Crash debe recuperar los cristales para ayudar a devolver todo el planeta a su estado natural. Experimente la mayor aventura de Crash hasta el momento, con modos de juego que van desde las secuencias de combate de pelea de perros a la descripción de 3D hasta las secuencias de combate de pelea de perros. Abriendo a través de más de 20 niveles enormes y seis ubicaciones únicas para derrotar a Cortex y salvar el mundo."
    },
    {
        "id": 39,
        "reference": "go:gba39",
        "console": "Game Boy Advance",
        "genre": "plataforma",
        "title": "Crash Bandicoot 2: N-Tranced",
        "year": "2003",
        "rom": "https://dl.dropboxusercontent.com/s/8q46zekqg1jhtp1/Crash%20Bandicoot%202%20-%20N-Tranced%20%28USA%29.gba",
        "sinopsis": "Crash ha vuelto y está listo para enfrentarse a un nuevo villano nefasto. Después de los eventos de Crash Bandicoot: The enorme aventura, Tropy, con la ayuda de N. Trance, secuestra a Coco y Crunch, planeando lavarlos con cerebro al lado malvado. Ahora, Crash debe viajar al reino retorcido de N. Trance, Battle and Rescue Coco y Crunch, y finalmente derrotar a N. Trance y N. Tropy. Para lograr estos objetivos, debe usar todas las habilidades de Crash's Spin, Slide y Jumping en 24 niveles diferentes. A medida que avanzas en el juego, te encontrarás volando un helicóptero, esquí de agua y pilotando una nave espacial, todo en aras de salvar a tus amigos."
    },
    {
        "id": 40,
        "reference": "go:gba40",
        "console": "Game Boy Advance",
        "genre": "carreras",
        "title": "Crash Nitro Kart",
        "year": "2003",
        "rom": "https://dl.dropboxusercontent.com/s/3w5xnx89n5kn514/Crash%20Nitro%20Kart%20%28USA%29.gba",
        "sinopsis": "Crash Bandicoot regresa a la escena de karting con una gran cantidad de otros personajes de la serie Adventure, y esta vez tienen que preocuparse tanto por Neo Cortex y Emperor Velo. Velo ha llevado a la tripulación a un planeta remoto, obligado a competir por sus vidas contra Neo Cortex y sus muchos hacedores malvados."
    },
    {
        "id": 41,
        "reference": "go:gba41",
        "console": "Game Boy Advance",
        "genre": "peleas",
        "title": "Digimon: Battle Spirit",
        "year": "2001",
        "rom": "https://dl.dropboxusercontent.com/s/zymrsn1s84ubk4y/Digimon%20-%20Battle%20Spirit%20%28USA%29.gba",
        "sinopsis": "Digimon Battle Spirit es un juego de lucha publicado originalmente por Bandai y desarrollado por DIMPS para el sistema de mano Wonderswan Color Handheld bajo el nombre de Digimon Tamers: Battle Spirit. Más tarde fue portado a Game Boy Advance de Nintendo para lanzamientos internacionales en América del Norte y Europa dos años después."
    },
    {
        "id": 42,
        "reference": "go:gba42",
        "console": "Game Boy Advance",
        "genre": "peleas",
        "title": "Digimon: Battle Spirit 2",
        "year": "2002",
        "rom": "https://dl.dropboxusercontent.com/s/2bto1a6347ulys8/Digimon%20-%20Battle%20Spirit%202%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.gba",
        "sinopsis": "Es una secuela de Digimon: Battle Spirit. Puedes luchar con los personajes de la serie Digimon Frontier Anime. Desarrollado por dimps."
    },
    {
        "id": 43,
        "reference": "go:gba43",
        "console": "Game Boy Advance",
        "genre": "plataforma",
        "title": "Donkey Kong Country",
        "year": "2003",
        "rom": "https://dl.dropboxusercontent.com/s/l7nsg1yfqvniilh/Donkey%20Kong%20Country%20%28USA%29.gba",
        "sinopsis": "Donkey Kong Country es un juego de plataformas de desplazamiento lateral de desarrolladores británicos RARA en 1994. Presentó gráficos 3D revolucionarios pre-renderizados que le dan al juego un aspecto único en comparación con la mayoría de los otros juegos en las consolas en ese momento. Los dos personajes jugables presentados en el juego son el personaje titular, Donkey Kong y su sobrino, Diddy Kong. Juntos, los dos swing, trepan, saltan, nadan, la rueda de carreras, viajan animales y salen de los barriles en su camino para recuperar sus bannanas robadas del malvado rey K. Rool y su ejército de Kremling. La aventura lo lleva a través de una variedad de entornos y niveles diferentes que cambian continuamente el juego. Donkey Kong Country también ofrece muchas oportunidades para explorar con casi todos los niveles que tienen una multitud de áreas de bonificación coleccionables, atajos y ocultas."
    },
    {
        "id": 44,
        "reference": "go:gba44",
        "console": "Game Boy Advance",
        "genre": "plataforma",
        "title": "Donkey Kong Country 2",
        "year": "2004",
        "rom": "https://dl.dropboxusercontent.com/s/72mz35tg5b2xhur/Donkey%20Kong%20Country%202%20%28USA%29.gba",
        "sinopsis": "Donkey Kong Country 2 es una nueva versión del juego SNES Donkey Kong Country 2: Diddy's Kong Quest. Es el segundo juego de la serie de remakes de la trilogía country original para Game Boy Advance."
    },
    {
        "id": 45,
        "reference": "go:gba45",
        "console": "Game Boy Advance",
        "genre": "plataforma",
        "title": "Donkey Kong Country 3",
        "year": "2005",
        "rom": "https://dl.dropboxusercontent.com/s/4vaweyncjeizl7g/Donkey%20Kong%20Country%203%20%28USA%29.gba",
        "sinopsis": "Donkey Kong Country 3 ¡es la versión Game Boy Advance del juego SNES Donkey Kong Country 3 Dixie Kongs Double Trouble!. Aunque se desarrolla como un puerto, el juego tiene una banda sonora diferente compuesta por el veterano de la serie David Wise, nuevos minijuegos, mundos y diseño de mapas Overworld."
    },
    {
        "id": 46,
        "reference": "go:gba46",
        "console": "Game Boy Advance",
        "genre": "shooter",
        "title": "DOOM",
        "year": "1993",
        "rom": "https://dl.dropboxusercontent.com/s/noumu4cd1levyiw/Doom%20%28USA%2C%20Europe%29.gba",
        "sinopsis": "En el futuro, los humanos han abandonado la Tierra y se han establecido en toda la galaxia. En Marte, la Corporación Aeroespacial de la Unión ha establecido una instalación de residuos radiactivos y ha permitido a los militares realizar experimentos de teletransportación en las lunas cercanas de Deimos y Phobos. Hace horas, la base en Marte comenzó a recibir mensajes de angustia incoherentes de Phobos, mientras que Deimos ha desaparecido por completo. Con todos los intentos de establecer un contacto de contacto, usted y su equipo han sido enviados para investigar. A su llegada, asegura el perímetro cuando el resto de su equipo ingresa a las instalaciones. Mientras te pares, tu radio se cree con el sonido de los disparos, los huesos que se agrietan y los gritos que lloran la sangre y finalmente se callan. Solo, sin camino fuera del planeta ni medios para defenderse más que su pistola de confianza, solo hay una salida: hacia el complejo de la muerte y los horrores que te esperan. Si planea salir de aquí vivo, debe defenderse de las hordas de los imps demoníacos, los espectros inquietantes y sus no muertos, antiguos camaradas que esperan arrancarle la extremidad de la extremidad. ¡Entonces, toma la escopeta más cercana y sale de esta locura fragmentada!"
    },
    {
        "id": 47,
        "reference": "go:gba47",
        "console": "Game Boy Advance",
        "genre": "shooter",
        "title": "DOOM II: Hell on Earth",
        "year": "2002",
        "rom": "https://dl.dropboxusercontent.com/s/ajierihfg76o4th/Doom%20II%20%28USA%29.gba",
        "sinopsis": "Celebre el 25 aniversario de Doom con el relanzamiento de Doom II. Esta querida secuela de la innovadora Doom (1993) dio a los jugadores la brutal súper escopeta para soportar los demonios más mortales, y el infame jefe, el ícono del pecado."
    },
    {
        "id": 48,
        "reference": "go:gba48",
        "console": "Game Boy Advance",
        "genre": "shooter",
        "title": "Duke Nukem Advance",
        "year": "2002",
        "rom": "https://dl.dropboxusercontent.com/s/uuevhwpkj8le51g/Duke%20Nukem%20Advance%20%28USA%29.gba",
        "sinopsis": "Los científicos alienígenas han trazado a hacerse cargo de la tierra; Es el trabajo de Duke Nukem evitar que ejecuten su proyecto de ciencias malvadas. Duke usa su arsenal completo de armas y se está teletransportando a varios lugares del mundo para detener las amenazas alienígenas. Lo más importante, ¡los hará pagar!"
    },
    {
        "id": 49,
        "reference": "go:gba49",
        "console": "Game Boy Advance",
        "genre": "rpg",
        "title": "Final Fantasy Tactics Advance",
        "year": "2003",
        "rom": "https://dl.dropboxusercontent.com/s/mxcqlsbk5iwd90z/Final%20Fantasy%20Tactics%20Advance%20%28USA%29.gba",
        "sinopsis": "Squaresoft trae su popular franquicia de Final Fantasy a Game Boy Advance en forma de guerra estratégica. Final Fantasy Tactics Advance sigue la historia de un niño llamado Marche, que es transportado mágicamente desde su tranquila casa en el tiempo moderno a un reino extraño donde la magia y la aventura reinan supremas."
    },
    {
        "id": 50,
        "reference": "go:gba50",
        "console": "Game Boy Advance",
        "genre": "beat em up",
        "title": "Final Fight One",
        "year": "2001",
        "rom": "https://dl.dropboxusercontent.com/s/45b1bvk66nssvak/Final%20Fight%20One%20%28USA%29.gba",
        "sinopsis": "Classic Arcade Action se desabrocha en el sistema Game Boy Advance en Final Fight One. Hay problemas en Metro City. Los miembros de la pandilla Mad Gear han secuestrado a la hija del alcalde Jessica y el reloj está marcando. El alcalde, un ex luchador de la calle, llama a las grandes armas para ayudar, alistando al equipo de Iron Fist de Cody y Guy. Ahora, es una carrera contra el tiempo para recorrer la ciudad, derrotar a un ejército de los secuaces de la pandilla de los equipos locos y rescatar a Jessica antes de que sea demasiado tarde."
    },
    {
        "id": 51,
        "reference": "go:gba51",
        "console": "Game Boy Advance",
        "genre": "rpg",
        "title": "Fire Emblem: The Sacred Stones",
        "year": "2004",
        "rom": "https://dl.dropboxusercontent.com/s/4q56q11cuka23y3/Fire%20Emblem%20-%20The%20Sacred%20Stones%20%28USA%2C%20Australia%29.gba",
        "sinopsis": "En Fire Emblem: The Sacred Stones, debes ayudar a proteger a la nación de Renais de la invasión del Imperio Grado. Planifica tu estrategia, elige tus unidades y luego dirige a tus soldados a la batalla. Cuanta más experiencia ganen tus soldados, más podrás mejorar sus habilidades. Esta vez, tus soldados pueden ganar experiencia luchando contra nuevos monstruos en la Torre de Valni."
    },
    {
        "id": 52,
        "reference": "go:gba52",
        "console": "Game Boy Advance",
        "genre": "carreras",
        "title": "F-Zero: Maximum Velocity",
        "year": "2001",
        "rom": "https://dl.dropboxusercontent.com/s/7hsyinhs3zwjyn6/F-Zero%20-%20Maximum%20Velocity%20%28USA%2C%20Europe%29.gba",
        "sinopsis": "¡Todos los límites de velocidad galácticos están a punto de romperse! F-Zero Maximum Velocity ha llegado, y el futuro de las carreras nunca ha sido tan atractivo. Te esperan vehículos nuevos y pistas originales de Game Boy Advance, así que, ya seas un veterano de Super NES o un novato en las carreras, necesitarás algunas vueltas de práctica. E incluso si dominas el circuito de Grand Prix, aún tendrás que vencer a tus amigos hasta la línea de meta. Así es, fanáticos de las carreras: con el cable Game Link de Game Boy Advance pueden enfrentarse a hasta tres corredores rivales, ¡así que pisen el pedal a fondo y manténganse ocupados impulsando, chocando y saltando hacia la gloria intergaláctica!"
    },
    {
        "id": 53,
        "reference": "go:gba53",
        "console": "Game Boy Advance",
        "genre": "rpg",
        "title": "Golden Sun: The Lost Age",
        "year": "2002",
        "rom": "https://dl.dropboxusercontent.com/s/qldkobdyhovcmuw/Golden%20Sun%20-%20The%20Lost%20Age%20%28USA%2C%20Europe%29.gba",
        "sinopsis": "La historia de Golden Sun: The Lost Age comienza justo al final del primer juego. Los veteranos de Golden Sun se sorprenderán al saber que The Lost Age se juega desde el punto de vista del grupo perseguido mientras intentan encender los dos faros restantes, lo que desbloqueará el poder de la alquimia para el mundo, o lo hará. desbloquear la destrucción del mundo?"
    },
    {
        "id": 54,
        "reference": "go:gba54",
        "console": "Game Boy Advance",
        "genre": "rpg",
        "title": "Golden Sun",
        "year": "2002",
        "rom": "https://dl.dropboxusercontent.com/s/73szt1z0uy9hluh/Golden%20Sun%20%28USA%2C%20Europe%29.gba",
        "sinopsis": "Juego de rol de los creadores de Shining Force, que presenta una aventura llena de juegos aleatorios de batallas aleatorias que se ven absolutamente geniales en la pantalla pequeña de Game Boy Advance ... de hecho, este juego podría decirse que rivaliza con la mayoría de los RPG clásicos que han acabado en las consolas, como Dragon Warrior o la mencionada serie Final Fantasy, por ejemplo. Interpretas a Isaac, un joven espadachín residente de la ciudad de Vale, y al comienzo de la aventura se avecina una tormenta que obliga a Isaac a huir a un lugar seguro. Pero todos los aventureros virtuales saben que nunca es tan simple como eso, y eventualmente te lanzan al papel de salvador del mundo, haciéndote amigo de otros aventureros hábiles que se unirán a tu cruzada... hay fuerza en los números, como dice la frase."
    },
    {
        "id": 55,
        "reference": "go:gba55",
        "console": "Game Boy Advance",
        "genre": "shooter",
        "title": "Gunstar Super Heroes",
        "year": "2005",
        "rom": "https://dl.dropboxusercontent.com/s/zediy9thmqluf5u/Gunstar%20Super%20Heroes%20%28USA%29.gba",
        "sinopsis": "¡Tus enemigos tienen la intención de usar un poderoso cristal para resucitar al devastador Dios de la Ruina y depende de los Gunstar Heroes, Blue y Red para detenerlos! Desarrollado por el desarrollador aclamado por la crítica, Treasure, ¡este juego de acción de ritmo rápido llevará tu Game Boy Advance al límite!"
    },
    {
        "id": 56,
        "reference": "go:gba56",
        "console": "Game Boy Advance",
        "genre": "plataforma",
        "title": "Harry Potter and the Chamber of Secrets",
        "year": "2002",
        "rom": "https://dl.dropboxusercontent.com/s/60pe4w2zaubaynb/Harry%20Potter%20and%20the%20Chamber%20of%20Secrets%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CSv%2CNo%2CDa%29.gba",
        "sinopsis": "Harry Potter y la cámara secreta es la secuela de Harry Potter y la piedra filosofal para PC y Mac. Como precuela, se lanzaron cinco versiones diferentes de este juego para diferentes plataformas de juego. En esta versión, controlas a Harry en un juego de plataformas de acción y aventura. La diferencia más significativa con el juego anterior es que la jugabilidad es menos lineal, con Hogwarts convirtiéndose más en un mundo abierto. Puedes interactuar con personajes familiares de la película como Ron, Hermione y, por supuesto, Gilderoy Lockhart. Además, hay múltiples minijuegos y misiones secundarias."
    },
    {
        "id": 57,
        "reference": "go:gba57",
        "console": "Game Boy Advance",
        "genre": "plataforma",
        "title": "Harry Potter and the Prisoner of Azkaban",
        "year": "2004",
        "rom": "https://dl.dropboxusercontent.com/s/33p1cfqh7owa8rw/Harry%20Potter%20and%20the%20Prisoner%20of%20Azkaban%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CDa%29.gba",
        "sinopsis": "Harry Potter y el prisionero de Azkaban es la secuela de Harry Potter y la Cámara de los Secretos para PC y Mac, y presenta un juego similar de acción, aventura y plataformas. El jugador controla tanto a Harry como a sus amigos Ron y Hermione, mientras lanza hechizos, resuelve acertijos y lucha contra enemigos. Cuando no está comprometido en una misión específica, el castillo de Hogwarts se puede explorar libremente. Dispersos por todo Hogwarts, generalmente en áreas ocultas, se encuentran Frijoles de todos los sabores, Pasteles de calabaza y Pasteles de caldero, que funcionan como una especie de moneda. Se pueden intercambiar por tarjetas de coleccionista, contraseñas para retratos que conducen a áreas más secretas y potenciadores."
    },
    {
        "id": 58,
        "reference": "go:gba58",
        "console": "Game Boy Advance",
        "genre": "plataforma",
        "title": "Harry Potter and the Sorcerer's Stone",
        "year": "2001",
        "rom": "https://dl.dropboxusercontent.com/s/ys2wpzj3ygx9ysr/Harry%20Potter%20and%20the%20Sorcerer%27s%20Stone%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CSv%2CNo%2CDa%29.gba",
        "sinopsis": "Harry Potter y la piedra filosofal es el primer videojuego de Harry Potter para PlayStation y uno de varios juegos diferentes basados en el libro y la película. Esta versión es una aventura de acción en tres dimensiones, donde Harry debe completar una serie de desafíos para poder aprobar su primer año de estudios en el Colegio Hogwarts de Magia y Hechicería. La finalización exitosa de las tareas a menudo resulta en puntos de la casa para la casa Gryffindor de Harry y el fracaso en algunos puntos de deducción, por lo que la carrera por la Copa de la Casa puede permanecer abierta hasta el final."
    },
    {
        "id": 59,
        "reference": "go:gba59",
        "console": "Game Boy Advance",
        "genre": "rpg",
        "title": "Harvest Moon: More Friends of Mineral Town",
        "year": "2003",
        "rom": "https://dl.dropboxusercontent.com/s/ituaomur4wsj9t1/Harvest%20Moon%20-%20More%20Friends%20of%20Mineral%20Town%20%28USA%29.gba",
        "sinopsis": "Vive la vida sencilla como granjero en Harvest Moon: More Friends of Mineral Town. Este juego es similar al original Harvest Moon: Friends of Mineral Town, pero ahora puedes jugar como una chica que ha dejado la ciudad para seguir una vida en la granja. Participarás en el cultivo, la gestión del ganado, la búsqueda de un marido y la crianza de los hijos."
    },
    {
        "id": 60,
        "reference": "go:gba60",
        "console": "Game Boy Advance",
        "genre": "plataforma",
        "title": "The Incredible Hulk",
        "year": "2003",
        "rom": "https://dl.dropboxusercontent.com/s/pzbx5p1pizx9q43/Incredible%20Hulk%2C%20The%20%28USA%29.gba",
        "sinopsis": "Interpretas al Dr. Bruce Banner, cuya vida da un vuelco después de que un extraño accidente en el laboratorio transforma su ira en The Incredible Hulk, una enorme máquina de músculos verdes que es imparable una vez que se inicia."
    },
    {
        "id": 61,
        "reference": "go:gba61",
        "console": "Game Boy Advance",
        "genre": "peleas",
        "title": "The King of Fighters EX2: Howling Blood",
        "year": "2003",
        "rom": "https://dl.dropboxusercontent.com/s/uf1zri7gsjaqph5/King%20of%20Fighters%20EX2%2C%20The%20-%20Howling%20Blood%20%28Europe%29.gba",
        "sinopsis": "The King of Fighters EX2: Howling Blood es un juego de lucha lanzado por Playmore, MMV y Sun-Tec para Gameboy Advance. Está basado en The King of Fighters 2000 y es la secuela de The King of Fighters EX. También fue portado para N-Gage como The King of Fighters Extreme."
    },
    {
        "id": 62,
        "reference": "go:gba62",
        "console": "Game Boy Advance",
        "genre": "rpg",
        "title": "Kingdom Hearts: Chain of Memories",
        "year": "2004",
        "rom": "https://dl.dropboxusercontent.com/s/2ej14sen9jio54b/Kingdom%20Hearts%20-%20Chain%20of%20Memories%20%28USA%29.gba",
        "sinopsis": "Kingdom Hearts: Chain of Memories es el segundo juego de la serie Kingdom Hearts. Es una secuela directa de Kingdom Hearts y exclusiva de Game Boy Advance. Fue publicado por Square Enix y desarrollado por Jupiter, y fue lanzado en 2004. Cronológicamente, es el tercer juego en la línea de tiempo después de Kingdom Hearts Birth de Sleep y Kingdom Hearts, y tiene lugar durante Kingdom Hearts 358/2 Days."
    },
    {
        "id": 63,
        "reference": "go:gba63",
        "console": "Game Boy Advance",
        "genre": "plataforma",
        "title": "Kirby: Nightmare in Dream Land",
        "year": "2002",
        "rom": "https://dl.dropboxusercontent.com/s/r0e8rk1rk463a4m/Kirby%20-%20Nightmare%20in%20Dream%20Land%20%28USA%29.gba",
        "sinopsis": "Una nueva versión del Kirby's Adventure original para NES."
    },
    {
        "id": 64,
        "reference": "go:gba64",
        "console": "Game Boy Advance",
        "genre": "rpg",
        "title": "The Legend of Zelda: A Link to the Past & Four Swords",
        "year": "2002",
        "rom": "https://dl.dropboxusercontent.com/s/ojxgzkonljix3yy/Legend%20of%20Zelda%2C%20The%20-%20A%20Link%20to%20the%20Past%20%26%20Four%20Swords%20%28USA%29.gba",
        "sinopsis": "The Legend of Zelda: A Link to the Past & Four Swords incluye dos juegos, una adaptación del juego de SNES The Legend of Zelda: A Link to the Past y una nueva aventura multijugador llamada Four Swords."
    },
    {
        "id": 65,
        "reference": "go:gba65",
        "console": "Game Boy Advance",
        "genre": "rpg",
        "title": "The Legend of Zelda: The Minish Cap",
        "year": "2003",
        "rom": "https://dl.dropboxusercontent.com/s/02gkpr7ygwal0dx/Legend%20of%20Zelda%2C%20The%20-%20The%20Minish%20Cap%20%28USA%29.gba",
        "sinopsis": "The Legend of Zelda: The Minish Cap es un juego de acción y aventuras de arriba hacia abajo que cuenta los orígenes del malvado Vaati de Four Swords. Como la mayoría de los otros títulos de la serie, The Minish Cap presenta la tierra totalmente explorable de Hyrule, aunque se puede ver desde los ojos de un humano o los ojos de un Minish, una raza de personas diminutas y una forma alternativa que Link puede transformar. en. A diferencia del enfoque multijugador de los otros juegos de la serie, The Minish Cap conserva la forma original de exploración y mazmorras como se ve en A Link to the Past, Oracle of Seasons y Oracle of Ages, así como personajes que regresan y mecánicas de juego como como Malon y el Spin Attack. Las nuevas características incluyen la fusión de Kinstones y la reducción al tamaño de un Minish."
    },
    {
        "id": 66,
        "reference": "go:gba66",
        "console": "Game Boy Advance",
        "genre": "plataforma",
        "title": "LEGO Star Wars II: The Original Trilogy",
        "year": "2003",
        "rom": "https://dl.dropboxusercontent.com/s/550784tyj8msjpf/LEGO%20Star%20Wars%20II%20-%20The%20Original%20Trilogy%20%28USA%29.gba",
        "sinopsis": "LEGO Star Wars II: La trilogía original toma la personalización divertida e interminable de LEGO y la combina con la historia épica, los personajes y la acción de las películas originales de Star Wars que revolucionaron la cultura pop para siempre Episodio IV Una nueva esperanza, Episodio V El imperio contraataca y el Episodio VI El Retorno del Jedi. Con una singular versión irónica de la Trilogía Original, LEGO Star Wars II sigue la cruzada de las Alianzas Rebeldes para desmantelar el Imperio Galáctico y reconstruir una galaxia en pedazos."
    },
    {
        "id": 67,
        "reference": "go:gba67",
        "console": "Game Boy Advance",
        "genre": "beat em up",
        "title": "The Lord of the Rings: The Return of the King",
        "year": "2003",
        "rom": "https://dl.dropboxusercontent.com/s/akxv9mucbop34rg/Lord%20of%20the%20Rings%2C%20The%20-%20The%20Return%20of%20the%20King%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.gba",
        "sinopsis": "La adaptación en videojuego de la aclamada película del mismo nombre. El Señor de los Anillos: El Retorno del Rey es una continuación de la bien recibida adaptación de las dos primeras películas de la trilogía. El juego amplía lo que logró The Two Towers, con la secuela de acción y aventura que presenta tres líneas argumentales separadas de la película: una sigue a Aragorn, Legolas y Gimli, como hizo The Two Towers, otra sigue a Gandalf y una tercera sigue a Frodo y Sam, con Merry, Pippin y Faramir como personajes desbloqueables."
    },
    {
        "id": 68,
        "reference": "go:gba68",
        "console": "Game Boy Advance",
        "genre": "rpg",
        "title": "The Lord of the Rings: The Third Age",
        "year": "2004",
        "rom": "https://dl.dropboxusercontent.com/s/ugnw8fwe47gjyvh/Lord%20of%20the%20Rings%2C%20The%20-%20The%20Third%20Age%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.gba",
        "sinopsis": "El Señor de los Anillos: La Tercera Edad para Game Boy Advance es un juego de tácticas por turnos lanzado en 2004. El juego consta de 2 campañas (el bien y el mal). En cada campaña, el jugador elige un comandante. A medida que el jugador completa misiones y avanza en la campaña, puede usar puntos de experiencia para comprar habilidades y mejoras de equipo para mejorar el rendimiento de sus héroes principales y secundarios."
    },
    {
        "id": 69,
        "reference": "go:gba69",
        "console": "Game Boy Advance",
        "genre": "beat em up",
        "title": "The Lord of the Rings: The Two Towers",
        "year": "2002",
        "rom": "https://dl.dropboxusercontent.com/s/n3drd1velqfir9g/Lord%20of%20the%20Rings%2C%20The%20-%20The%20Two%20Towers%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.gba",
        "sinopsis": "El Señor de los Anillos: Las Dos Torres es un juego de acción y aventuras basado en las dos primeras películas de la popular serie El Señor de los Anillos, La Comunidad del Anillo y Las Dos Torres. Los jugadores se abren camino a través de algunos de los eventos clave de estas películas como Aragorn, Legolas y Gimli."
    },
    {
        "id": 70,
        "reference": "go:gba70",
        "console": "Game Boy Advance",
        "genre": "plataforma",
        "title": "Disney's Magical Quest 3 Starring Mickey & Donald",
        "year": "2003",
        "rom": "https://dl.dropboxusercontent.com/s/h3mtk4g2um12js9/Magical%20Quest%203%20Starring%20Mickey%20%26%20Donald%20%28USA%29%20%28En%2CFr%2CDe%29.gba",
        "sinopsis": "Huey, Dewy y Louie fueron a esconderse en el ático para esconderse del temperamento de su tío Donald cuando se encontraron con un libro misterioso. Al abrirlo, aparece la mano y secuestra a los niños en Storybook Land. ¡Ahora el Pato Donald y su amigo Mickey Mouse deben ir a salvar a los niños al derrotar al malvado Rey Pete!"
    },
    {
        "id": 71,
        "reference": "go:gba71",
        "console": "Game Boy Advance",
        "genre": "deportes",
        "title": "Mario Golf: Advance Tour",
        "year": "2004",
        "rom": "https://dl.dropboxusercontent.com/s/x6bq6oimqw4v6hh/Mario%20Golf%20-%20Advance%20Tour%20%28USA%29.gba",
        "sinopsis": "¡Toma tus palos y comienza el camino hacia la perfección del golf en esta aventura de golf de rol! Habla con los lugareños en las clínicas de golf, perfecciona tus habilidades en desafíos como Club Slots y Go-Go Gates, ¡e intenta convertirte en el campeón de todos los clubes de campo! Los residentes de Mushroom Kingdom se enfrentan solo a los mejores."
    },
    {
        "id": 72,
        "reference": "go:gba72",
        "console": "Game Boy Advance",
        "genre": "carreras",
        "title": "Mario Kart: Super Circuit",
        "year": "2001",
        "rom": "https://dl.dropboxusercontent.com/s/l6k0ghinlvsq05j/Mario%20Kart%20-%20Super%20Circuit%20%28USA%29.gba",
        "sinopsis": "Mario Kart Super Circuit pone a prueba tus habilidades de conducción en 40 pistas, cada una llena de armas y obstáculos salvajes. Elige jugar como cualquiera de tus personajes favoritos mientras recorres pistas clásicas y nuevas. Si te sientes combativo, prueba el armamento creativo (hongos, plátanos, rayos y estrellas) en el modo Batalla. ¿Tienes ganas de hacer que algunos amigos se coman tu polvo? Ningún problema. ¡Cuatro jugadores pueden competir en Mario Kart Super Circuit usando solo un Game Pak! Si cada jugador tiene una copia del juego, estarán disponibles funciones de bonificación y nuevos modos de juego."
    },
    {
        "id": 73,
        "reference": "go:gba73",
        "console": "Game Boy Advance",
        "genre": "cartas",
        "title": "Mario Party Advance",
        "year": "2005",
        "rom": "https://dl.dropboxusercontent.com/s/4t1ubcqebc1abh9/Mario%20Party%20Advance%20%28USA%29.gba",
        "sinopsis": "¡Es una fiesta portátil en tu Game Boy Advance! Mario Party Advance toma toda la diversión del juego de la consola doméstica y la pone en tus manos. Minijuegos completamente nuevos y una gran cantidad de increíbles artilugios del profesor E. Gadd: baratijas, juguetes, detectores y trucos exclusivos como el Lip Disguise-o-matic que te permite engañar a tus amigos, probar tu compatibilidad y mucho más. Descubre los 60 minijuegos mientras juegas en los tableros de juego para un jugador. Gana monedas mientras juegas a los minijuegos y usa esas monedas para desbloquear Gadgets que puedes usar con tus amigos. Usa tus Gadgets para llevar el juego al mundo real. Coloque su dedo en el Finger X-Ray para ver lo que está oculto dentro, o use el Medidor de compatibilidad para ver qué tan bien se combinan usted y sus amigos."
    },
    {
        "id": 74,
        "reference": "go:gba74",
        "console": "Game Boy Advance",
        "genre": "deportes",
        "title": "Mario Pinball Land",
        "year": "2004",
        "rom": "https://dl.dropboxusercontent.com/s/pr2a8m54ksitime/Mario%20Pinball%20Land%20%28USA%2C%20Australia%29.gba",
        "sinopsis": "Saltar siempre ha ayudado a Mario a realizar hazañas heroicas, pero en Mario Pinball Land, el fontanero debe aprender a rodar para rescatar a la princesa. Cuando Bowser secuestra a Peach y escapa a otra dimensión, un científico transforma a Mario en una pelota para perseguir al demonio. Ahora debes usar tus aletas para disparar a un Mario mucho más redondo hacia las puertas que conducen a nuevas áreas. En su nueva forma, Mario también es útil para derribar enemigos, obtener bonificaciones especiales y encontrar potenciadores."
    },
    {
        "id": 75,
        "reference": "go:gba75",
        "console": "Game Boy Advance",
        "genre": "plataforma",
        "title": "Mario vs. Donkey Kong",
        "year": "2004",
        "rom": "https://dl.dropboxusercontent.com/s/lzxv5v9x20afoc5/Mario%20vs.%20Donkey%20Kong%20%28USA%2C%20Australia%29.gba",
        "sinopsis": "Después de años de aparente buena voluntad, Mario y Donkey Kong están de nuevo, esta vez en Game Boy Advance. Donkey Kong ha robado todos los juguetes de Mini-Mario de Mario Toy Co., y ahora le toca a Mario cazar a su némesis de toda la vida y recuperar los bienes robados. Como Mario, debes correr a través de desafiantes niveles mientras encuentras llaves y liberas Mini Marios antes de que se acabe el tiempo. En el camino, dominarás nuevos movimientos que pueden ayudarte a superar nuevos acertijos."
    },
    {
        "id": 76,
        "reference": "go:gba76",
        "console": "Game Boy Advance",
        "genre": "rpg",
        "title": "Medabots: Metabee",
        "year": "2002",
        "rom": "https://dl.dropboxusercontent.com/s/wr1y0g1xcqi5l0h/Medabots%20-%20Metabee%20%28USA%29.gba",
        "sinopsis": "Únete a Ikki mientras comienza su viaje como Medafighter e intenta salvar su ciudad natal de Riverview City de la malvada banda Rubberobo. Ikki debe resolver varios misterios con la ayuda de sus amigos y el Phantom Renegade. Interactúe con personajes y controle Medabots populares en la serie animada Medabots TV. ¿Puede Ikki salvar al mundo de la traicionera banda Rubberobo y convertirse en el Medafighter número 1? ¡Todo depende de ti!"
    },
    {
        "id": 77,
        "reference": "go:gba77",
        "console": "Game Boy Advance",
        "genre": "rpg",
        "title": "Medabots: Rokusho",
        "year": "2002",
        "rom": "https://dl.dropboxusercontent.com/s/p3qsju0n0xrc4mg/Medabots%20-%20Rokusho%20%28USA%29.gba",
        "sinopsis": "Únete a Ikki mientras comienza su viaje como Medafighter e intenta salvar su ciudad natal de Riverview City de la malvada banda Rubberobo. Interactúe con personajes y controle Medabots populares en la serie animada Medabots TV. ¡Cree su propio Medabot especial a partir de cientos de Medaparts únicos! Roba y cambia Medaparts con amigos. Cada versión de Medabots ofrece Medaparts y Medallas exclusivos que no se encuentran en la otra."
    },
    {
        "id": 78,
        "reference": "go:gba78",
        "console": "Game Boy Advance",
        "genre": "shooter",
        "title": "Medal of Honor: Infiltrator",
        "year": "2003",
        "rom": "https://dl.dropboxusercontent.com/s/ini7agnz0ahzgwu/Medal%20of%20Honor%20-%20Infiltrator%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%29.gba'",
        "sinopsis": "Medal of Honor Infiltrator te pone en el papel del cabo Jake Murphy, un hombre que debe completar cinco audaces misiones para derrotar a los poderes del Eje en la Segunda Guerra Mundial. Desde sabotear los recursos del enemigo hasta capturar personal clave y tiroteos totales, deberás dominar una variedad de estilos de juego para vencer al enemigo. A pie, en un tanque o incluso disfrazado, debes enfrentarte a tus oponentes en el campo de batalla con una variedad de armas de la era de la Segunda Guerra Mundial, incluidas ametralladoras, granadas, bazucas y más.  "
    },
    {
        "id": 79,
        "reference": "go:gba79",
        "console": "Game Boy Advance",
        "genre": "rpg",
        "title": "Mega Man Battle Network",
        "year": "2001",
        "rom": "https://dl.dropboxusercontent.com/s/pq6d8quj6a46cpk/Mega%20Man%20Battle%20Network%20%28USA%29.gba",
        "sinopsis": "En el futuro, un joven guerrero de la red llamado Lan inicia su 'terminal de exploración personal' (PET) y se prepara para piratear la red para combatir el crimen en la red. El PET de Lan no es un navegador de red ordinario. Es Mega Man.EXE, la identidad cibernética, que se infiltra en la red plagada de delitos para luchar contra los destructivos virus informáticos. Derrote a los virus en tiempo real y recopile datos del programa Battle Chips, que contienen valiosos datos de armas e información crítica del sistema. Recoge más de 175 fichas de batalla para ayudar a Land y Mega Man.EXE a restablecer la paz y el orden en la red."
    },
    {
        "id": 80,
        "reference": "go:gba80",
        "console": "Game Boy Advance",
        "genre": "shooter",
        "title": "Mega Man Zero",
        "year": "2002",
        "rom": "https://dl.dropboxusercontent.com/s/y2bvqqfzo10zoqa/Mega%20Man%20Zero%20%28USA%2C%20Europe%29.gba",
        "sinopsis": "¡Tu misión es ayudar al científico exiliado Ciel a descubrir la fuente de una nueva energía reploide! Juega como el amigo de Mega Man, Zero, el reploid de la serie Mega Man X que se volvió bueno por el infeccioso Sigma Virus y 100 años de sueño. Conquista a tus adversarios y encuentra la fuente de energía... o arriesga la derrota final. Depende de ti defender el bien de los poderes destructivos del universo."
    },
    {
        "id": 81,
        "reference": "go:gba81",
        "console": "Game Boy Advance",
        "genre": "shooter",
        "title": "Mega Man Zero 2",
        "year": "2003",
        "rom": "https://dl.dropboxusercontent.com/s/tpvxw5k5mone4ec/Mega%20Man%20Zero%202%20%28USA%29.gba",
        "sinopsis": "En la próxima misión de Zero, cae presa de una trampa tendida por el despiadado comandante de Neo Arcadia. Planeando engañar a Zero, intenta usarlo para sembrar el caos entre los reploids y los humanos una vez más. Pero, ¿puede tener éxito?"
    },
    {
        "id": 82,
        "reference": "go:gba82",
        "console": "Game Boy Advance",
        "genre": "shooter",
        "title": "Metroid: Zero Mission",
        "year": "2004",
        "rom": "https://dl.dropboxusercontent.com/s/8nxub6dg4r9zf4p/Metroid%20-%20Zero%20Mission%20%28USA%29.gba",
        "sinopsis": "El primer juego de Metroid acaba de arañar la superficie de los eventos catastróficos en el planeta Zebes, y por fin el resto de la historia ha salido a la luz. Experimenta la primera de las aventuras legendarias de Samus a través de cinemáticas y secuencias de acción completamente nuevas mientras la cazarrecompensas corre a través de las profundidades hacia su enfrentamiento con el líder de los Piratas Espaciales. Pero, ¿el final de Mother Brain realmente significará el final de la historia...?"
    },
    {
        "id": 83,
        "reference": "go:gba83",
        "console": "Game Boy Advance",
        "genre": "shooter",
        "title": "Metroid: Fusion",
        "year": "2002",
        "rom": "https://dl.dropboxusercontent.com/s/oq15qqdoqnfhtbo/Metroid%20Fusion%20%28USA%29.gba",
        "sinopsis": "La famosa serie Metroid regresa en Game Boy Advance con Metroid Fusion. Después de las hazañas de Samus en el clásico Super Metroid de Super Nintendo, el cazarrecompensas intergaláctico se infecta con una forma de vida parasitaria conocida solo como X. Samus es rescatada y revivida por Metroid DNA solo después de sufrir algunos cambios importantes en su cuerpo y traje, lo que resultó en un cambio drástico en su apariencia y una nueva capacidad para absorber y asimilar las habilidades del virus X. Experimenta un capítulo nuevo y apasionante de la serie Metroid y revive el juego y la exploración atemporales que convirtieron a la serie en una leyenda."
    },
    {
        "id": 84,
        "reference": "go:gba84",
        "console": "Game Boy Advance",
        "genre": "peleas",
        "title": "Mortal Kombat: Deadly Alliance",
        "year": "2002",
        "rom": "https://dl.dropboxusercontent.com/s/so5224807umbrdn/Mortal%20Kombat%20-%20Deadly%20Alliance%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.gba",
        "sinopsis": "Mortal Kombat: Deadly Alliance es la primera salida de Mortal Kombat en los sistemas de próxima generación. Nuevo en DA es un motor de lucha completamente renovado. Los gráficos están en 3D completo y presentan entornos algo interactivos. Cada personaje ahora tiene diferentes posturas de lucha, lo que les permite estar en una postura ofensiva o fatal."
    },
    {
        "id": 85,
        "reference": "go:gba85",
        "console": "Game Boy Advance",
        "genre": "beat em up",
        "title": "Naruto: Ninja Council",
        "year": "2003",
        "rom": "https://dl.dropboxusercontent.com/s/sf9e6xag87mu6ym/Naruto%20-%20Ninja%20Council%20%28USA%29.gba",
        "sinopsis": "Naruto: Ninja Council, conocido como Naruto: Saikyou Ninja Daikesshuu en la versión japonesa, es la primera entrega de la serie Ninja Council. Hay pergaminos que el personaje jugable puede obtener para realizar habilidades a costa de chakra, que pueden usarse para derribar paredes o crear torbellinos. El modo historia sigue vagamente el arco Prólogo - Tierra de las Olas al arco de los Exámenes de Chuunin."
    },
    {
        "id": 86,
        "reference": "go:gba86",
        "console": "Game Boy Advance",
        "genre": "beat em up",
        "title": "Naruto: Ninja Council 2",
        "year": "2004",
        "rom": "https://dl.dropboxusercontent.com/s/2fl7qm1nh7afugo/Naruto%20-%20Ninja%20Council%202%20%28USA%29.gba",
        "sinopsis": "Juego de acción, basado en el manga Shonen Jump. Esta secuela del primer juego de Naruto en GBA (el segundo juego fue una simulación/aventura muy diferente) tiene tres veces la cantidad de etapas y personajes el doble de tamaño. La acción es más ágil y dinámica. Los jugadores pueden transformarse en Naruto, Sasuke y Sakura y usar sus habilidades para superar las etapas de desplazamiento. El juego también utiliza el cable de enlace para un modo cooperativo de dos jugadores y para un modo de batalla de cuatro jugadores."
    },
    {
        "id": 87,
        "reference": "go:gba87",
        "console": "Game Boy Advance",
        "genre": "plataforma",
        "title": "One Piece",
        "year": "2005",
        "rom": "https://f004.backblazeb2.com/file/arandevs2022/cloud-retro-gaming/roms/gameboy-advance/Naruto%20-%20Ninja%20Council%202%20%28USA%29.gba",
        "sinopsis": "One Piece, también conocido como One Piece de Shonen Jump, es un videojuego de aventuras de plataformas en 2D para Nintendo Game Boy Advance basado en el doblaje de 4kids del anime One Piece. Desarrollado por Dimps y publicado por Bandai, fue lanzado el 7 de septiembre de 2005. Es el único juego de One Piece que solo se lanzó en los EE. UU., y el primero de dos que no se lanzó en Japón."
    },
    {
        "id": 88,
        "reference": "go:gba88",
        "console": "Game Boy Advance",
        "genre": "rpg",
        "title": "Onimusha Tactics",
        "year": "2003",
        "rom": "https://dl.dropboxusercontent.com/s/qrqsk8nfobh69yy/Onimusha%20Tactics%20%28USA%29.gba",
        "sinopsis": "Onimusha Tactics es un juego de estrategia por turnos entre el lado del jugador y el lado del enemigo. En cada nivel puedes traer un escuadrón de no más de 10 personas. No hay artículos para comprar o vender, sin embargo, el equipo está disponible y se puede personalizar. Las mejoras de las armas y armaduras existentes se pueden hacer usando las almas derrotadas de los enemigos absorbidos en el Oni Gauntlet. Se pueden encontrar o crear nuevas armas y armaduras mediante la fusión de Genma Stones. Se deben encontrar recetas para cada elemento por separado antes de que se pueda fusionar."
    },
    {
        "id": 89,
        "reference": "go:gba89",
        "console": "Game Boy Advance",
        "genre": "rpg",
        "title": "Pokémon Emerald",
        "year": "2004",
        "rom": "https://dl.dropboxusercontent.com/s/crjh90qwl6dwhbq/Pokemon%20-%20Emerald%20Version%20%28USA%2C%20Europe%29.gba",
        "sinopsis": "Pokémon Emerald Version es un juego hermano de Pokémon Ruby y Sapphire. Emerald Version proporcionó a la historia principal más profundidad y duración, además de realizar pequeños cambios estéticos en el mundo y agregar animaciones únicas para cada Pokémon."
    },
    {
        "id": 90,
        "reference": "go:gba90",
        "console": "Game Boy Advance",
        "genre": "rpg",
        "title": "Pokémon FireRed",
        "year": "2004",
        "rom": "https://dl.dropboxusercontent.com/s/7r6vx86wezsfhxq/Pokemon%20-%20FireRed%20Version%20%28USA%2C%20Europe%29%20%28Rev%201%29.gba",
        "sinopsis": "Como los primeros remakes de la franquicia Pokémon, los juegos revisitan el par original de juegos Pokémon, Pokémon Red y Green Versions, y presentan todos los personajes, elementos de la trama y desafíos de ellos, pero con varias actualizaciones importantes para traerlos a colación. a la velocidad con otros juegos de la Generación III."
    },
    {
        "id": 91,
        "reference": "go:gba91",
        "console": "Game Boy Advance",
        "genre": "rpg",
        "title": "Pokémon Mystery Dungeon: Red Rescue Team",
        "year": "2005",
        "rom": "https://dl.dropboxusercontent.com/s/p0m7ir5ogwolj7v/Pokemon%20Mystery%20Dungeon%20-%20Red%20Rescue%20Team%20%28USA%2C%20Australia%29.gba",
        "sinopsis": "Tú, un humano normal, te encuentras atrapado en el cuerpo de un Pokémon en un mundo habitado por Pokémon. Sin otra opción, emprendes misiones de rescate a través de mazmorras generadas aleatoriamente con tu compañero y amigo recién adquirido para salvar el mundo y volver a tu vida humana."
    },
    {
        "id": 92,
        "reference": "go:gba92",
        "console": "Game Boy Advance",
        "genre": "aventura",
        "title": "Power Rangers: Dino Thunder",
        "year": "2004",
        "rom": "https://dl.dropboxusercontent.com/s/vfc47hlkirrm9a9/Power%20Rangers%20-%20Dino%20Thunder%20%28USA%2C%20Europe%29.gba",
        "sinopsis": "Un juego de acción de Power Rangers basado en la última versión de la serie con dinosaurios Zords. Siempre que los Dinos amenace a la humanidad, ¡cuenta con los Power Rangers para estar allí! Con más de 20 niveles y montones de acertijos y acción, Power Rangers: Dino Thunder les dará a los fanáticos del equipo de acción mucho de qué hablar. Lanzado antes que sus primos de consola, Power Rangers: Dino Thunder combina rompecabezas y acción para una forma de juego única. Usa ataques especiales y potenciadores de armas para vencer a la competencia y recolecta Dino Gems para controlar a los Dino Zords."
    },
    {
        "id": 93,
        "reference": "go:gba93",
        "console": "Game Boy Advance",
        "genre": "beat em up",
        "title": "Power Rangers: Wild Force",
        "year": "2002",
        "rom": "https://dl.dropboxusercontent.com/s/c5f6aegeppjdf5g/Power%20Rangers%20-%20Wild%20Force%20%28USA%2C%20Europe%29.gba",
        "sinopsis": "En Power Rangers Wild Force para Game Boy Advance, los jóvenes jugadores jugarán como su Power Ranger favorito, esta vez armados con la fuerza y las características de los Power Animals, incluidos el bisonte, el tigre, el tiburón, el águila y el león. La aventura de exploración en 3D desde arriba permite a los jugadores enfrentarse a Org, una antigua raza de villanos que buscan destruir el equilibrio de la naturaleza."
    },
    {
        "id": 94,
        "reference": "go:gba94",
        "console": "Game Boy Advance",
        "genre": "plataforma",
        "title": "Prince of Persia: The Sands of Time",
        "year": "2003",
        "rom": "https://dl.dropboxusercontent.com/s/jeu8yc0wgcez567/Prince%20of%20Persia%20-%20The%20Sands%20of%20Time%20%28USA%29%20%28En%2CFr%2CEs%29.gba",
        "sinopsis": "The Sands of Time, desarrollado internamente en Ubisoft Montreal, captura con éxito la mecánica del juego de plataformas original y la extiende a la generación 3D. Un intento anterior de The Learning Company de trasladar el juego a 3D (Prince of Persia 3D) se lanzó en 1999, pero a pesar de su buena acogida inicial no consiguió vender lo suficiente y la empresa responsable de la trilogía original ya estaba cerrando puertas. El juego fue elogiado por su diseño visual, su mecánica de juego finamente afinada y su trama intrigante, lo que le valió varios premios."
    },
    {
        "id": 95,
        "reference": "go:gba95",
        "console": "Game Boy Advance",
        "genre": "plataforma",
        "title": "Rayman Advance",
        "year": "2001",
        "rom": "https://dl.dropboxusercontent.com/s/0d2ybvw3u3i9lv6/Rayman%20Advance%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.gba",
        "sinopsis": "Rayman Advance es un juego de GBA. Es básicamente un puerto de Rayman 1, sin embargo, tiene algunos cambios menores. El malvado Mr. Dark robó el Gran Protoon, secuestró a todos los Electoons y derrotó a Betilla the Fairy. Rayman tiene que viajar a través de 5 mundos antes de finalmente encontrarse con el Sr. Dark y derrotarlo."
    },
    {
        "id": 96,
        "reference": "go:gba96",
        "console": "Game Boy Advance",
        "genre": "rpg",
        "title": "Riviera: The Promised Land",
        "year": "2002",
        "rom": "https://dl.dropboxusercontent.com/s/88w1tgeot4uebg5/Riviera%20-%20The%20Promised%20Land%20%28USA%29.gba",
        "sinopsis": "En Riviera: The Promised Land, seguirás a dos feroces guerreros, cada uno armado con armas divinas, en una misión para derrotar a los demonios de una vez por todas. La aventura incluida te permite experimentar más de 30 horas de juego de rol, completo con minijuegos, múltiples finales y caminos y elementos secretos. El sistema de elementos único del juego permite que los elementos funcionen de manera diferente según los personajes que los equipen."
    },
    {
        "id": 97,
        "reference": "go:gba97",
        "console": "Game Boy Advance",
        "genre": "plataforma",
        "title": "Shaman King: Master of Spirits",
        "year": "2004",
        "rom": "https://dl.dropboxusercontent.com/s/jxsmyna93avpftf/Shaman%20King%20-%20Master%20of%20Spirits%20%28USA%29.gba",
        "sinopsis": "Shaman King: Master of Spirits es un juego de acción y aventuras, desarrollado por KCEJ y publicado por Konami, que se lanzó en 2004."
    },
    {
        "id": 98,
        "reference": "go:gba98",
        "console": "Game Boy Advance",
        "genre": "plataforma",
        "title": "Shaman King: Master of Spirits 2",
        "year": "2005",
        "rom": "https://dl.dropboxusercontent.com/s/iwr9dt2gdcy9x8s/Shaman%20King%20-%20Master%20of%20Spirits%202%20%28USA%29.gba",
        "sinopsis": "Secuela del Shaman King: Master of Spirits original, una vez más asumes el papel de Yoh Asakura mientras intentas salvar a todos tus amigos y compañeros chamanes del espíritu de fuego de Zeke, que está devorando el alma de todos en Dobie Village, donde el chamán. El torneo se llevará a cabo."
    },
    {
        "id": 99,
        "reference": "go:gba99",
        "console": "Game Boy Advance",
        "genre": "rpg",
        "title": "Shining Soul",
        "year": "2002",
        "rom": "https://dl.dropboxusercontent.com/s/766eqses5miid36/Shining%20Soul%20%28USA%29.gba",
        "sinopsis": "Ingrese a un mundo de magia y misterio, donde sus aliados más cercanos a veces pueden convertirse en sus peores enemigos. Shining Soul te sitúa en medio de una lucha desesperada entre el Dragón Oscuro y un grupo de guerreros conocido como Shining Fleet. En la etapa final de la guerra, puedes jugar una de las cuatro clases de personajes: luchador, mago, arquero o dragonute. Personaliza los esquemas de color, las armas y la armadura de tu personaje, y luego explora el mundo de Shining Soul solo o con tres de tus amigos."
    },
    {
        "id": 100,
        "reference": "go:gba100",
        "console": "Game Boy Advance",
        "genre": "rpg",
        "title": "Shining Soul II",
        "year": "2003",
        "rom": "https://dl.dropboxusercontent.com/s/rxz6hespo6xue2j/Shining%20Soul%20II%20%28USA%29.gba",
        "sinopsis": "A medida que los monstruos comienzan a aparecer en el reino de Klantol, el rey Marcel anuncia un gran torneo en el coliseo para encontrar un héroe que pueda proteger al país. Ahora, como poderoso luchador, sacerdotisa, mago oscuro o ninja, debes aceptar el desafío del rey. Cada personaje tiene ciertas fortalezas y debilidades que pueden significar la diferencia entre la victoria y la derrota en los modos de un jugador, multijugador o multijugador cooperativo. Además de valiosas armas y armaduras, puedes equipar a tu grupo con Force Links, que, cuando se combinan, crean una Shining Force, un arma poderosa capaz de diezmar a las fuerzas enemigas."
    },
    {
        "id": 101,
        "reference": "go:gba101",
        "console": "Game Boy Advance",
        "genre": "carreras",
        "title": "The Simpson's Road Rage",
        "year": "2003",
        "rom": "https://dl.dropboxusercontent.com/s/essh4fc80nrsbik/Simpsons%2C%20The%20-%20Road%20Rage%20%28USA%2C%20Europe%29.gba",
        "sinopsis": "Los Simpson: Road Rage es similar al videojuego Crazy Taxi de Sega de 1999, en el sentido de que el objetivo principal es llevar a los pasajeros recogidos a sus destinos lo más rápido posible. El jugador recibe dinero al dejar con éxito a cada pasajero, y se obtienen bonos cuando se transportan en un corto período de tiempo. Los jugadores deben evitar ciertos obstáculos, como otros vehículos y los autobuses de tránsito nuclear de Burns."
    },
    {
        "id": 102,
        "reference": "go:gba102",
        "console": "Game Boy Advance",
        "genre": "simulator",
        "title": "The Sims 2",
        "year": "2004",
        "rom": "https://dl.dropboxusercontent.com/s/gitb0hmn01s2c8j/Sims%202%2C%20The%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.gba",
        "sinopsis": "Los Sims 2 para GameBoy Advance. Al igual que muchos de los juegos de consola, tiene lugar en Strangetown con algunas de las mismas caras. El objetivo del juego es mejorar el hotel agregando extensiones, amueblando habitaciones, completar objetivos, rescatar a los huéspedes o ayudarlos a encontrar objetos perdidos y mantener limpio el hotel."
    },
    {
        "id": 103,
        "reference": "go:gba103",
        "console": "Game Boy Advance",
        "genre": "plataforma",
        "title": "Sonic Advance 2",
        "year": "2002",
        "rom": "https://dl.dropboxusercontent.com/s/60etxmwol6si3uz/Sonic%20Advance%202%20%28USA%29%20%28En%2CJa%2CFr%2CDe%2CEs%2CIt%29.gba",
        "sinopsis": "Sonic regresa para una segunda salida en Game Boy Advance. Una vez más, se pide a Sonic que salve al mundo del malvado Dr. Eggman. En esta ocasión, a Sonic se le unen sus amigos Tails, Knuckles y Cream the Rabbit, la última incorporación al equipo de Sonic. Cada uno viene con un conjunto de movimientos únicos, lo que te permite llegar a ciertas áreas a lo largo de los niveles. Sin embargo, a diferencia de Sonic Advance, debes completar el juego como Sonic para desbloquear a los otros personajes."
    },
    {
        "id": 104,
        "reference": "go:gba104",
        "console": "Game Boy Advance",
        "genre": "plataforma",
        "title": "Sonic Advance 3",
        "year": "2004",
        "rom": "https://dl.dropboxusercontent.com/s/uut42yl1y9fortr/Sonic%20Advance%203%20%28USA%29%20%28En%2CJa%2CFr%2CDe%2CEs%2CIt%29.gba",
        "sinopsis": "Sonic ha vuelto y esta vez necesita la ayuda de todos sus amigos para derrotar al malvado Dr. Eggman. En Sonic Advance 3, Sonic y Tails deben reunirse con sus amigos Cream, Knuckles y Amy. Forme un equipo con cualquiera de los cinco personajes para obtener movimientos de ataque especiales: Sonic aumenta su velocidad, Tails aumenta su poder de salto, Knuckles aumenta su poder de ataque, Amy ofrece el ataque de martillo Piko Piko y Cream le permite realizar un ataque homing. Con un enlace de Game Boy Advance, tú y tres de tus amigos pueden luchar en los modos multijugador."
    },
    {
        "id": 105,
        "reference": "go:gba105",
        "console": "Game Boy Advance",
        "genre": "plataforma",
        "title": "The SpongeBob SquarePants Movie",
        "year": "2004",
        "rom": "https://dl.dropboxusercontent.com/s/s88fhrmt91zj7xt/SpongeBob%20SquarePants%20Movie%2C%20The%20%28USA%29%20%28Beta%202%29.gba",
        "sinopsis": "En una búsqueda heroica y cómica a través de más de 20 niveles de plataformas, conducción y acción deslizante, Bob Esponja y Patricio dejan Bikini Bottom y viajan a tierras nuevas e inexploradas. Los jugadores se unen a su lucha para derrotar el plan diabólico de Plankton para conquistar el mundo... ¡Plan Z! Plankton ha robado la corona del Rey Neptuno y ha asumido el control de la ciudad de Fondo de Bikini, culpando directamente a Don Cangrejo. Juntos, Bob Esponja y Patricio deben viajar a la lejana Ciudad Concha para recuperar la corona, regresar a Fondo de Bikini y salvar al pueblo y al Sr. Cangrejo."
    },
    {
        "id": 106,
        "reference": "go:gba106",
        "console": "Game Boy Advance",
        "genre": "beat em up",
        "title": "Star Wars: Episode III - Revenge of the Sith",
        "year": "2005",
        "rom": "https://dl.dropboxusercontent.com/s/fzok6sk8o4t3nmb/Star%20Wars%20-%20Episode%20III%20-%20Revenge%20of%20the%20Sith%20%28USA%29%20%28En%2CFr%2CEs%29.gba",
        "sinopsis": "El juego de acción/aventura en tercera persona, Star Wars: Episodio III, ofrece la mejor experiencia de acción Jedi cuando Anakin Skywalker y Obi-Wan Kenobi unen sus fuerzas en feroces batallas y heroicos duelos con sables de luz hasta que el ansia de poder de uno y la devoción al deber del otro conducen a una confrontación final entre el bien y el mal."
    },
    {
        "id": 107,
        "reference": "go:gba107",
        "console": "Game Boy Advance",
        "genre": "plataforma",
        "title": "Star Wars Trilogy: Apprentice of the Force",
        "year": "2004",
        "rom": "https://dl.dropboxusercontent.com/s/7mgmbotyzl1zpi6/Star%20Wars%20Trilogy%20-%20Apprentice%20of%20the%20Force%20%28USA%29%20%28En%2CFr%2CEs%29.gba",
        "sinopsis": "Por primera vez, la legendaria trilogía de películas de Star Wars llega a Game Boy Advance. Los jugadores experimentarán las escenas más emocionantes y memorables de Star Wars: A New Hope, The Empire Strikes Back y Return of the Jedi."
    },
    {
        "id": 108,
        "reference": "go:gba108",
        "console": "Game Boy Advance",
        "genre": "peleas",
        "title": "Street Fighter Alpha 3",
        "year": "1998",
        "rom": "https://dl.dropboxusercontent.com/s/ta7zcrsh3c8dtdp/Street%20Fighter%20Alpha%203%20%28USA%29.gba",
        "sinopsis": "Street Fighter Alpha 3, el tercer juego de la serie Alpha, tiene un total de 31 luchadores, la mayor cantidad en la serie hasta el momento. Los nuevos personajes incluyen a los viejos favoritos E. Honda, Blanka, Vega, Cammy, T. Hawk, Dee Jay, Juni y Juli. Algunos de los luchadores más nuevos en el bloque incluyen un ex personaje de Final Fight (Cody, que ha estado en la cárcel desde el último juego de Final Fight, o eso sugiere su ropa), Karin Kanzuki y Rainbow Mika. La principal diferencia entre este Alpha y los dos últimos son los nuevos modos de juego World Tour, Arcade, VS, Training y Entry."
    },
    {
        "id": 109,
        "reference": "go:gba109",
        "console": "Game Boy Advance",
        "genre": "plataforma",
        "title": "Super Mario Advance 2",
        "year": "2001",
        "rom": "https://dl.dropboxusercontent.com/s/lnf73xsqawa27ve/Super%20Mario%20Advance%202%20-%20Super%20Mario%20World%20%28USA%2C%20Australia%29.gba",
        "sinopsis": "Super Mario Advance es una serie de cuatro partes para GBA con juegos de Super Mario de la era NES y SNES. Los remakes vinieron con gráficos ajustados, sonido y contenido adicional. Cada juego de la serie incluye, además, el clásico arcade Mario Bros, que se puede jugar en modo multijugador a través de un cable de enlace."
    },
    {
        "id": 110,
        "reference": "go:gba110",
        "console": "Game Boy Advance",
        "genre": "plataforma",
        "title": "Super Mario Advance 3",
        "year": "2002",
        "rom": "https://dl.dropboxusercontent.com/s/ipakp1ap83p21bm/Super%20Mario%20Advance%203%20-%20Yoshi%27s%20Island%20%28USA%29.gba",
        "sinopsis": "Super Mario Advance es una serie de cuatro partes para GBA con juegos de Super Mario de la era NES y SNES. Los remakes vinieron con gráficos ajustados, sonido y contenido adicional. Cada juego de la serie incluye, además, el clásico arcade Mario Bros, que se puede jugar en modo multijugador a través de un cable de enlace."
    },
    {
        "id": 111,
        "reference": "go:gba111",
        "console": "Game Boy Advance",
        "genre": "peleas",
        "title": "Super Street Fighter II Turbo Revival",
        "year": "2001",
        "rom": "https://dl.dropboxusercontent.com/s/8tnlxvg0ujl9pcq/Super%20Street%20Fighter%20II%20Turbo%20-%20Revival%20%28USA%29.gba",
        "sinopsis": "La obra maestra atemporal de Street Fighter de Capcom conquista el sistema Game Boy Advance. Elige entre más de 16 luchadores del universo Street Fighter y ejecuta movimientos especiales y súper combos para causar estragos en tu oponente y convertirte en el mejor luchador callejero del mundo. Animaciones ultrarrápidas, gráficos increíbles y la jugabilidad característica de Capcom hacen de Super Street Fighter II Turbo el juego de lucha más respetado de todos los tiempos."
    },
    {
        "id": 112,
        "reference": "go:gba112",
        "console": "Game Boy Advance",
        "genre": "rpg",
        "title": "Sword of Mana",
        "year": "2003",
        "rom": "https://dl.dropboxusercontent.com/s/aq6u2prht1jex1u/Sword%20of%20Mana%20%28USA%2C%20Australia%29.gba",
        "sinopsis": "La ubicación del árbol de maná, la fuente de toda vida, se perdió hace mucho tiempo en la leyenda. Han pasado muchos siglos, y el Señor Oscuro del Reino Granz está buscando los secretos del árbol antiguo para poder controlar la fuente de Mana. Ahora, un joven héroe y una heroína deben unirse para derrotar al mal que amenaza tanto al árbol místico como al mundo mismo."
    },
    {
        "id": 113,
        "reference": "go:gba113",
        "console": "Game Boy Advance",
        "genre": "rpg",
        "title": "Tactics Ogre: The Knight of Lodis",
        "year": "2001",
        "rom": "https://dl.dropboxusercontent.com/s/7508tzv95c33i7b/Tactics%20Ogre%20-%20The%20Knight%20of%20Lodis%20%28USA%29.gba",
        "sinopsis": "No hay información"
    },
    {
        "id": 114,
        "reference": "go:gba114",
        "console": "Game Boy Advance",
        "genre": "rpg",
        "title": "Tales of Phantasia",
        "year": "2003",
        "rom": "https://dl.dropboxusercontent.com/s/xdn37gtby0m7uox/Tales%20of%20Phantasia%20%28USA%2C%20Australia%29.gba",
        "sinopsis": "La versión de Game Boy Advance de Tales of Fantasia se basó en las versiones de Playstation del juego, incluidas las voces de los personajes del remake de PlayStation, la tasa reducida de encuentros con enemigos y ajustes en el juego, pero usa la apertura original y el mapa mundial bidimensional."
    },
    {
        "id": 115,
        "reference": "go:gba115",
        "console": "Game Boy Advance",
        "genre": "plataforma",
        "title": "Tarzan: Return to the Jungle",
        "year": "2002",
        "rom": "https://dl.dropboxusercontent.com/s/r50hiqw5sj10ptb/Tarzan%20-%20Return%20to%20the%20Jungle%20%28USA%2C%20Europe%29.gba",
        "sinopsis": "Basado en el cuento clásico de Edgar Rice Burroughs, Disney's Tarzan: Return to the Jungle encuentra a Tarzán en misiones que van desde localizar la Fuente de la Juventud hasta descubrir El Valle Perdido de los Dinosaurios. Además de poder columpiarse de enredaderas, nadar a través de aguas traicioneras y participar en la acción de surfear árboles, Tarzán ahora podrá blandir su fiel bumerán, su poderosa lanza y su famoso llamado animal para proteger a sus amigos y su hogar en la jungla. En el camino, los amigos de Tarzán, Jane, Terk y el profesor Porter se unirán a él en sus aventuras en la jungla."
    },
    {
        "id": 116,
        "reference": "go:gba116",
        "console": "Game Boy Advance",
        "genre": "beat em up",
        "title": "Teen Titans",
        "year": "2005",
        "rom": "https://dl.dropboxusercontent.com/s/rrr0bw2tyonxm25/Teen%20Titans%20%28USA%29%20%28En%2CFr%29.gba",
        "sinopsis": "No hay información"
    },
    {
        "id": 117,
        "reference": "go:gba117",
        "console": "Game Boy Advance",
        "genre": "beat em up",
        "title": "Teen Titans 2",
        "year": "2006",
        "rom": "https://dl.dropboxusercontent.com/s/3oj3f9nblpt7ek5/Teen%20Titans%202%20%28USA%29%20%28En%2CFr%29.gba",
        "sinopsis": "Juega como Robin, Cyborg, Raven, Beast Boy y Starfire en esta secuela llena de acción del popular juego Game Boy Advance. La Hermandad ha vuelto y, una vez más, depende de los Jóvenes Titanes evitar que se apoderen de la ciudad de Titán. Tomando a los Titanes por sorpresa, Brain secuestra a los cinco superhéroes adolescentes y los mantiene prisioneros. Robin logra escapar y encontrar a sus compañeros Titanes. Una vez libres, el equipo se dispone a enfrentarse a la Hermandad."
    },
    {
        "id": 118,
        "reference": "go:gba118",
        "console": "Game Boy Advance",
        "genre": "beat em up",
        "title": "Teenage Mutant Ninja Turtles",
        "year": "2003",
        "rom": "https://dl.dropboxusercontent.com/s/uog1fvpri1dz0gd/Teenage%20Mutant%20Ninja%20Turtles%20%28USA%29.gba",
        "sinopsis": "Teenage Mutant Ninja Turtles es un videojuego de Game Boy Advance de 2003, basado en la serie de televisión de 2003. En este juego, cada tortuga tiene su propio conjunto único de niveles para completar. Además de los niveles tradicionales de desplazamiento lateral, hay carreras de vista en tercera persona, un nivel de planeador de caparazón para Donatello y una carrera de bicicletas entre Raphael y Casey Jones. El juego también se publicó en un paquete doble con su secuela TMNT 2: Battle Nexus."
    },
    {
        "id": 119,
        "reference": "go:gba119",
        "console": "Game Boy Advance",
        "genre": "beat em up",
        "title": "Teenage Mutant Ninja Turtles 2: Battle Nexus",
        "year": "2004",
        "rom": "https://dl.dropboxusercontent.com/s/0kn9tpmvb9qzs2o/Teenage%20Mutant%20Ninja%20Turtles%202%20-%20Battle%20Nexus%20%28USA%29.gba",
        "sinopsis": "Teenage Mutant Ninja Turtles 2: Battle Nexus fue lanzado para Game Boy Advance; que es un juego de plataformas en 2D, a diferencia de su versión lanzada al mismo tiempo para PS2, GameCube y Xbox, que es una tercera persona de beat 'em up. Fue lanzado en 2004 por Konami y fue la secuela de Teenage Mutant Ninja Turtles y basado en la serie de televisión de 2003."
    },
    {
        "id": 120,
        "reference": "go:gba120",
        "console": "Game Boy Advance",
        "genre": "peleas",
        "title": "Tekken Advance",
        "year": "2001",
        "rom": "https://dl.dropboxusercontent.com/s/0259qbhnmjhz88h/Tekken%20Advance%20%28USA%29.gba",
        "sinopsis": "Tekken Advance es un juego de lucha lanzado para Game Boy Advance. No es canónico para la historia de Tekken, pero sigue los eventos de Tekken 3. Utiliza sprites basados en los modelos 3D de Tekken 3 para sus personajes y fue el primer juego de Tekken que se lanzó en una plataforma de Nintendo."
    },
    {
        "id": 121,
        "reference": "go:gba121",
        "console": "Game Boy Advance",
        "genre": "deportes",
        "title": "Tony Hawk's Pro Skater 3",
        "year": "2002",
        "rom": "https://dl.dropboxusercontent.com/s/qnn0dfqqgymkep7/Tony%20Hawk%27s%20Pro%20Skater%203%20%28USA%2C%20Europe%29.gba",
        "sinopsis": "Tony Hawk regresa con una nueva alineación de patinadores, una nueva alineación de parques para atravesar y un nivel de gráficos completamente nuevo."
    },
    {
        "id": 122,
        "reference": "go:gba122",
        "console": "Game Boy Advance",
        "genre": "shooter",
        "title": "Turok: Evolution",
        "year": "2002",
        "rom": "https://dl.dropboxusercontent.com/s/gvp5lhmi0j7mqar/Turok%20-%20Evolution%20%28USA%29.gba",
        "sinopsis": "La historia comienza en 1886. La caballería del Capitán Tobias Bruckner aplasta a la Nación Saquin. Tal'Set, el único superviviente, se enfrenta a Bruckner en un duelo a muerte. Una puerta mística repentina aparece y los sumerge en la oscuridad. La puerta lleva a Tal'Set a las Tierras Perdidas. Allí conoce a la Gente del Río. Djunn, el mejor guerrero de la tribu, accede a ayudar a Tal'Set en su búsqueda."
    },
    {
        "id": 123,
        "reference": "go:gba123",
        "console": "Game Boy Advance",
        "genre": "plataforma",
        "title": "Ultimate Spider-Man",
        "year": "2005",
        "rom": "https://dl.dropboxusercontent.com/s/mx05l9uw6zup3zf/Ultimate%20Spider-Man%20%28USA%29.gba",
        "sinopsis": "Basado en el cómic del mismo nombre, Ultimate Spider-Man te permite jugar como el héroe Spider-Man o su archienemigo, Venom. Usa las técnicas de combate únicas de Spider-Man o Venom para luchar contra una gran cantidad de personajes de Spider-Man. Las contribuciones artísticas de los creadores de la serie crean una experiencia auténtica de Spider-Man."
    },
    {
        "id": 124,
        "reference": "go:gba124",
        "console": "Game Boy Advance",
        "genre": "shooter",
        "title": "Van Helsing",
        "year": "2004",
        "rom": "https://dl.dropboxusercontent.com/s/qnc6zt1n2pnzcfi/Van%20Helsing%20%28USA%29.gba",
        "sinopsis": "Van Helsing es un juego de disparos en tercera persona para PlayStation 2, Xbox, Game Boy Advance y teléfono móvil, que se basa en la película de acción y terror de 2004 del mismo nombre de Stephen Sommers. Comenzando con el asesinato de Mr. Hyde en París, uno debe usar el personaje de Van Helsing para cazar a Drácula en Transilvania. El personaje de Carl falta por completo en el videojuego, pero con una precisión razonable, los personajes de Anna Valerious, Velkan Valerious, Igor, Drácula y sus tres novias se representan como en la película."
    },
    {
        "id": 125,
        "reference": "go:gba125",
        "console": "Game Boy Advance",
        "genre": "plataforma",
        "title": "Wario Land 4",
        "year": "2001",
        "rom": "https://dl.dropboxusercontent.com/s/mhew4wm1dympfem/Wario%20Land%204%20%28USA%2C%20Europe%29.gba",
        "sinopsis": "¡Ey! ¡Tú! ¡Si, tú! ¡Escucha cuando Wario te está hablando! Acabo de leer sobre esta legendaria Pirámide de Oro, y me vas a ayudar a explorarla. Hay un montón de tesoros allí para tomar, y lo quiero todo. Estoy seguro de que habrá todo tipo de enemigos extraños y grandes y malos jefes allí, así que si no crees que puedes hackearlo, deja el juego ahora. No quiero que ningún perdedor me haga saltar a pozos sin fondo, ¿me oyes?"
    },
    {
        "id": 126,
        "reference": "go:gba126",
        "console": "Game Boy Advance",
        "genre": "beat em up",
        "title": "X-Men: Reign of Apocalypse",
        "year": "2001",
        "rom": "https://dl.dropboxusercontent.com/s/kkl2rptmf8f9skl/X-Men%20-%20Reign%20of%20Apocalypse%20%28USA%2C%20Europe%29.gba",
        "sinopsis": "Tú y tus compañeros X-Men están perdidos en una realidad alternativa, solo para descubrir que el supervillano Apocalipsis reina supremo. No solo te encuentras a merced de sus secuaces, sino que también la línea entre amigo y enemigo se difumina peligrosamente en este universo espejo. Tu única esperanza es abrirte camino a través de numerosos enemigos y amenazas hasta llegar a Warp Gate y regresar a casa. ¿Sobrevivirás lo suficiente para llegar allí?"
    },
    {
        "id": 127,
        "reference": "go:gba127",
        "console": "Game Boy Advance",
        "genre": "cartas",
        "title": "Yu-Gi-Oh! Reshef of Destruction",
        "year": "2003",
        "rom": "https://dl.dropboxusercontent.com/s/aaws2wqzakl4ilp/Yu-Gi-Oh%21%20-%20Reshef%20of%20Destruction%20%28USA%29.gba",
        "sinopsis": "En tu regreso a Battle City, comienzas otra misión para recuperar cartas del milenio robadas que pueden destruir el mundo. Yu-Gi-Oh! Reshef of Destruction presenta una historia completamente nueva que lo inicia en una búsqueda para evitar que Reshef ahogue el mundo en la oscuridad. Dado que las batallas del juego se libran con cartas, debes construir un mazo fuerte con 800 cartas diferentes (incluidas las tres cartas de dioses egipcios) para tener una oportunidad contra tus enemigos."
    },
    {
        "id": 128,
        "reference": "go:gba128",
        "console": "Game Boy Advance",
        "genre": "rpg",
        "title": "Yu-Gi-Oh! The Eternal Duelist Soul",
        "year": "2002",
        "rom": "https://dl.dropboxusercontent.com/s/vpis0me2omt2z1e/Yu-Gi-Oh%21%20-%20The%20Eternal%20Duelist%20Soul%20%28USA%29.gba",
        "sinopsis": "Yu-Gi-Oh! El Alma de Duelista Eterna es un Yu-Gi-Oh! videojuego para Game Boy Advance. Es la versión internacional de Yu-Gi-Oh! Duel Monsters 5 Expert 1. El juego es similar a las reglas de duelo estándar, excepto que el Side Deck permite menos de 15 cartas y es más conveniente para obtener cartas para tu Deck que cambiar entre duelos, ya que los duelos de CPU son duelos individuales en lugar de duelos. partidos (con algunas excepciones en eventos)."
    },
    {
        "id": 129,
        "reference": "go:gba129",
        "console": "Game Boy Advance",
        "genre": "cartas",
        "title": "Yu-Gi-Oh! The Sacred Cards",
        "year": "2002",
        "rom": "https://dl.dropboxusercontent.coms/2gvae5ra4tc291y/Yu-Gi-Oh%21%20-%20The%20Sacred%20Cards%20%28USA%29.gba",
        "sinopsis": "En Yu-Gi-Oh! Las cartas sagradas, es tan importante jugar bien tus cartas como conseguir las cartas correctas. Este juego de rol único te ofrece cartas como armas contra la dura competencia. Lucharás en un torneo organizado por Kaiba Corporation y ganarás las poderosas Cartas de dioses egipcios. Basado en eventos de Yu-Gi-Oh! La serie de televisión animada The Sacred Cards ofrece cientos de cartas, más de 100 duelistas y rivales, y sorpresas y giros inesperados."
    },
    {
        "id": 130,
        "reference": "go:gba130",
        "console": "Game Boy Advance",
        "genre": "cartas",
        "title": "Yu-Gi-Oh! GX Duel Academy",
        "year": "2006",
        "rom": "https://dl.dropboxusercontent.com/s/e2yrf5hy0cegnl7/Yu-Gi-Oh%21%20GX%20-%20Duel%20Academy%20%28USA%29.gba",
        "sinopsis": "El objetivo es avanzar en el juego, siguiendo la primera temporada del anime. Principalmente, vienes a Duel Academy para convertirte en el Rey de los Juegos. Al principio, estarás en Slifer Red Dorm con rangos de abandono escolar. Tienes que batirte en duelo y hacer pruebas para conseguir un dormitorio y un rango más altos. Cuando ganes duelos, obtendrás DP por comprar paquetes de refuerzo para mejorar tu Deck y tus habilidades."
    },
    {
        "id": 131,
        "reference": "go:gba131",
        "console": "Game Boy Advance",
        "genre": "rpg",
        "title": "Zoids: Legacy",
        "year": "2004",
        "rom": "https://dl.dropboxusercontent.com/s/h4c5ygb7wfiev35/Zoids%20Legacy%20%28USA%29.gba",
        "sinopsis": "En los confines del universo, los habitantes humanos del Planeta Zi permanecen trabados en combate. La población, dividida entre el bien y el mal, usa formas de vida gigantescas llamadas Zoids para luchar entre sí por el control de este mundo. Durante un reciente experimento con armas, el Planeta Zi experimentó una fusión temporal-espacial accidental, creando una colisión de guerreros Zoids de dos eras, el Siglo Caótico y el Siglo Nuevo. Ahora, todas las esperanzas de devolver el planeta Zi a la normalidad descansan en Zeru, un prometedor guerrero Zoids. Ayuda a Van, Fiona, Bit Cloud y Zeru a usar todo el poder de los ZOIDS para traer la paz a su mundo. A medida que se desarrolla la historia, los jugadores pueden personalizar y actualizar sus Zoids únicos para mejorar su eficiencia y realizar movimientos de ataque combinados. Lanzado en Japón como Zoids Saga II, Legacy presenta más de 140 tipos diferentes de Zoids, cada uno se puede personalizar con diferentes armas y nuevos esquemas de color."
    },
    {
        "id": 132,
        "reference": "go:gba132",
        "console": "Game Boy Advance",
        "genre": "rpg",
        "title": "Pokémon Ruby",
        "year": "2002",
        "rom": "https://dl.dropboxusercontent.com/s/1sy8drayyukdt0e/Pokemon%20-%20Ruby%20Version%20%28USA%2C%20Europe%29%20%28Rev%202%29.gba",
        "sinopsis": "Secuela de las versiones Oro y Plata de Pokémon (1999), las versiones Rubí y Zafiro de Pokémon ofrecen 135 Pokémon nuevos, sistemas de entrenamiento y lucha más complejos, nuevas organizaciones criminales, una campaña más larga y centrada en la historia y gráficos actualizados para crear un nuevo Pokémon técnicamente mejorado. Experiencia Pokémon."
    },
    {
        "id": 133,
        "reference": "go:gba133",
        "console": "Game Boy Advance",
        "genre": "rpg",
        "title": "Pokémon Sapphire",
        "year": "2002",
        "rom": "https://dl.dropboxusercontent.com/s/gf1s1va0oe62j6q/Pokemon%20-%20Sapphire%20Version%20%28USA%2C%20Europe%29%20%28Rev%202%29.gba",
        "sinopsis": "Secuela de las versiones Oro y Plata de Pokémon (1999), las versiones Rubí y Zafiro de Pokémon ofrecen 135 Pokémon nuevos, sistemas de entrenamiento y lucha más complejos, nuevas organizaciones criminales, una campaña más larga y centrada en la historia y gráficos actualizados para crear un nuevo Pokémon técnicamente mejorado. Experiencia Pokémon."
    },
    {
        "id": 134,
        "reference": "go:gba134",
        "console": "Game Boy Advance",
        "genre": "rpg",
        "title": "Harvest Moon: Friends of Mineral Town",
        "year": "2003",
        "rom": "https://dl.dropboxusercontent.com/s/8gk2rko6a9qr62r/Harvest%20Moon%20-%20Friends%20of%20Mineral%20Town%20%28U%29%20%5B%21%5D.gba",
        "sinopsis": "Convierte un campo de rocas y malezas descuidado durante mucho tiempo en una granja exitosa en este juego de rol rústico."
    },
    {
        "id": 135,
        "reference": "go:gba135",
        "console": "Game Boy Advance",
        "genre": "deportes",
        "title": "Mario Tennis: Power Tour",
        "year": "2005",
        "rom": "https://dl.dropboxusercontent.com/s/dsecvfa71xu91zf/Mario%20Tennis%20Advance%20-%20Power%20Tour%20%28U%29.gba",
        "sinopsis": "Los jugadores pueden probar su revés en esta aventura única de tenis de rol. Entrena duro en la Royal Tennis Academy para ser un campeón. Obtenga experiencia y mejore sus habilidades a través de lecciones y torneos, y ascienda a la cima de las clasificaciones. Juega como Mario, Peach, Waluigi o Donkey Kong en una gran cantidad de modos salvajes. Avanza en la historia y desbloquea aún más personajes, todos con sus propios movimientos de poder. Vence a Mario en su propio juego, luego únete a uno o tres amigos para divertirte aún más frenéticamente."
    },
    {
        "id": 136,
        "reference": "go:gba136",
        "console": "Game Boy Advance",
        "genre": "rpg",
        "title": "Mega Man Battle Network 2",
        "year": "2001",
        "rom": "https://dl.dropboxusercontent.com/s/c211u0cngzizvys/Megaman%20Battle%20Network%202%20%28U%29%20%5B%21%5D.gba",
        "sinopsis": "Entra en el universo futurista de Mega Man.EXE en esta nueva aventura de la serie Battle Network. Únete a él en su batalla para luchar contra los delitos cibernéticos en esta mega aventura de rol. Ahora, hay una nueva organización criminal en la red en la ciudad y su piratería informática ha creado un virus que está cobrando impulso rápidamente. Depende de Mega Man.EXE, su amigo Lan y sus amigos unirse a Net-Battlers y ganar esta nueva batalla cibernética. ¡Detenlo antes de que se propague!"
    },
    {
        "id": 137,
        "reference": "go:gba137",
        "console": "Game Boy Advance",
        "genre": "rpg",
        "title": "Mega Man Battle Network 3: Blue",
        "year": "2003",
        "rom": "https://dl.dropboxusercontent.com/s/gebhefiqlofjlkg/Megaman%20Battle%20Network%203%20-%20Blue%20Version%20%28U%29.gba",
        "sinopsis": "Únete a Mega Mega.EXE, su amigo Lan y sus amigos mientras mantienen la red a salvo del caos cibernético en la aventura de red de batalla más expansiva hasta el momento. ¡Junto con la versión blanca, encuentra todos los cambios de estilo de batalla de Mega Man, fichas Giga Class, enemigos y descubre más sorpresas solo para ti!"
    },
    {
        "id": 138,
        "reference": "go:gba138",
        "console": "Game Boy Advance",
        "genre": "rpg",
        "title": "Mega Man Battle Network 6: Cybeast Falzar",
        "year": "2005",
        "rom": "https://dl.dropboxusercontent.com/s/i2ljn266fhjh8ot/Mega%20Man%20Battle%20Network%206%20-%20Cybeast%20Gregar%20%28USA%29.gba",
        "sinopsis": "Mega Man Battle Network 6 es la sexta y última entrega de la serie Mega Man Battle Network de Capcom, lanzada para Game Boy Advance. El juego se lanzó en dos versiones: Cybeast Falzar y Cybeast Gregar. Introdujo varios personajes nuevos mientras conservaba los existentes. Cada versión tiene sus propias funciones Cross (Double Souls significativamente modificadas) y Beast Out."
    },
    {
        "id": 139,
        "reference": "go:gba139",
        "console": "Game Boy Advance",
        "genre": "shooter",
        "title": "Mega Man Zero 3",
        "year": "2004",
        "rom": "https://dl.dropboxusercontent.com/s/wnysnqjswr1qjg3/Mega%20Man%20Zero%203%20%28USA%29.gba",
        "sinopsis": "Es el tercer capítulo de la serie de aventuras y acción Mega Man Zero para Game Boy Advance. Con un nuevo sistema de personalización, ahora puedes equipar a Zero con una combinación de chips que afectarán tanto a sus atributos como a sus habilidades, permitiéndote adaptarlo a diferentes desafíos. Entre sus otras habilidades nuevas, Zero ahora tendrá un arma llamada barra de retroceso. Ahora salta al doble de su altura normal. Estas nuevas habilidades le permitirán a nuestro héroe marchar hacia Arcadia para derrotar al malvado Omega sin ayuda... ¿O no?"
    },
    {
        "id": 140,
        "reference": "go:gba140",
        "console": "Game Boy Advance",
        "genre": "shooter",
        "title": "Mega Man Zero 4",
        "year": "2005",
        "rom": "https://dl.dropboxusercontent.com/s/hjz4qc5qrtbi7sb/Mega%20Man%20Zero%204%20%28USA%29.gba",
        "sinopsis": "Mega Man Zero 4 es un videojuego creado por Capcom e Inti Creates para Game Boy Advance en 2005. Es la cuarta y última entrega de la serie Mega Man Zero, lo que convierte a Zero en la primera subserie de Mega Man en ver una conclusión adecuada. El juego presenta Zero Knuckle, un arma que le permite a Zero robar las armas de otros enemigos y usarlas para sí mismo, así como una nueva mecánica en la que Zero puede alterar las condiciones climáticas antes de ingresar a uno de los ocho niveles principales."
    },
    {
        "id": 141,
        "reference": "go:gba141",
        "console": "Game Boy Advance",
        "genre": "rpg",
        "title": "Pokémon LeafGreen",
        "year": "2004",
        "rom": "https://dl.dropboxusercontent.com/s/42ip4vt822cbrt4/Pokemon%20-%20Leaf%20Green%20Version%20%28U%29%20%28V1.1%29.gba",
        "sinopsis": "Pokémon LeafGreen Version y Pokémon FireRed Version son un par de juegos de la tercera generación de la serie principal que se desarrollan en la región de Kanto. Fueron lanzados en Japón el 29 de enero de 2004, en Norteamérica el 9 de septiembre de 2004, en Australia el 23 de septiembre de 2004 y en Europa el 1 de octubre de 2004. Como los primeros remakes de la franquicia Pokémon, los juegos revisitan el original. un par de juegos de Pokémon, las versiones roja y verde de Pokémon, y presentan todos los personajes, elementos de la trama y desafíos de ellos, pero con varias actualizaciones importantes para ponerlos al día con otros juegos de la Generación III."
    },
    {
        "id": 142,
        "reference": "go:gba142",
        "console": "Game Boy Advance",
        "genre": "deportes",
        "title": "Pokémon Pinball: Ruby & Sapphire",
        "year": "2004",
        "rom": "https://dl.dropboxusercontent.com/s/5ghfzdm7h0evwyn/Pokemon%20Pinball%20-%20Ruby%20%26%20Sapphire%20%28U%29%20%28V1.0%29%20%5BhI%5D.gba",
        "sinopsis": "Pokemon Pinball tiene todas las características que esperarías de un juego de pinball, incluidas mesas de bonificación, muchos parachoques y formas de ganar puntos masivos. Al igual que con su juego de pinball de videojuego estándar, el botón izquierdo en el D-pad y el botón A controlan las aletas con los gatillos R / L que se usan para sacudir la mesa. El problema aquí es que todo tiene un tema en Pokémon. En lugar de una pelota, usas una Pokébola. En lugar de los parachoques estándar, estás golpeando la Pokébola contra otros Pokémon, y el objetivo final es, por supuesto, atraparlos a todos. El juego cuenta con 200 Pokémon, dos mesas principales y soporte para cable de enlace."
    },
    {
        "id": 143,
        "reference": "go:gba143",
        "console": "Game Boy Advance",
        "genre": "plataforma",
        "title": "SpongeBob SquarePants: Battle for Bikini Bottom",
        "year": "2003",
        "rom": "https://dl.dropboxusercontent.com/s/m2astzzk6gt6yua/SpongeBob%20SquarePants%20-%20Battle%20for%20Bikini%20Bottom%20%28U%29%20%5BhI%5D.gba",
        "sinopsis": "Versión GBA de Spongebob Squarepants: Battle For Bikini Bottom. A diferencia de su contraparte de consola, es un juego de plataformas en 2D."
    },
    {
        "id": 144,
        "reference": "go:gba144",
        "console": "Game Boy Advance",
        "genre": "plataforma",
        "title": "Super Ghouls 'n Ghosts",
        "year": "2002",
        "rom": "https://dl.dropboxusercontent.com/s/5wbhnn99xvm5pat/Super%20Ghouls%20%27N%20Ghosts%20%28U%29.gba",
        "sinopsis": "La versión Game Boy Advance de Super Ghouls 'n Ghosts incluye un modo Organizar que no está presente en el original. El modo Arrange carece de una segunda ejecución, por lo que el brazalete de la diosa se puede obtener en cualquier momento cuando Arthur está equipado con la armadura dorada. Ambos modos contienen una nueva función Guardar, que permite al jugador continuar en el último punto de control con la armadura y el arma que haya equipado. El modo Arrange también presenta nuevas rutas y nuevos jefes."
    },
    {
        "id": 145,
        "reference": "go:gba145",
        "console": "Game Boy Advance",
        "genre": "beat em up",
        "title": "The Grim Adventures of Billy & Mandy",
        "year": "2006",
        "rom": "https://dl.dropboxusercontent.com/s/ezda2wbxgwfg3n1/Grim%20Adventures%20of%20Billy%20%26%20Mandy%2C%20The%20%28USA%29.gba",
        "sinopsis": "The Grim Adventures of Billy & Mandy enfrenta a los personajes del popular programa de televisión Cartoon Network en un juego de aventura/lucha, lleno de caos y violencia. En el Modo Batalla, los jugadores pueden usar una multitud de armas en arenas destructibles como el Desierto de la Perdición y el Inframundo. Los jugadores también tienen la opción de jugar solos o con un amigo en el Modo Aventura, una serie de misiones basadas en historias donde los jugadores pueden desbloquear nuevas armas y nuevos personajes jugables."
    },
    {
        "id": 146,
        "reference": "go:gba146",
        "console": "Game Boy Advance",
        "genre": "aventura",
        "title": "Harry Potter and the Goblet of Fire",
        "year": "2005",
        "rom": "https://dl.dropboxusercontent.com/s/stc5iyqcv0nj4i7/Harry%20Potter%20and%20the%20Goblet%20of%20Fire%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CDa%29.gba",
        "sinopsis": "Harry Potter y el cáliz de fuego para Nintendo DS y Game Boy Advance es un juego de acción/aventura de arriba hacia abajo en el que juegas como los tres amigos y progresas a través de la historia basada en el libro y la película. Ábrete camino a través de varios escenarios atacando enemigos y resolviendo acertijos usando hechizos. Un botón dispara un hechizo a distancia, como Confoundus, mientras que otro se usa para hechizos de flujo, como Wingardium Leviosa, que se puede mover con el Panel de control. También puedes llamar a tus amigos para darle más poder a tus hechizos mágicos. La versión de DS incluye un pequeño juego de bonificación en el que te encargas de una criatura mágica llamada 'Niffler'. Es un juego de simulación, como un Tamagotchi muy simple. Puedes alimentar al escarbato, limpiarlo y darle juguetes. Dependiendo de lo que hagas, estará más o menos complacido contigo. Actúa lo suficientemente bien, y se volverá realmente feliz, y te permitirá darle palmaditas para hacerlo aún más feliz."
    },
    {
        "id": 147,
        "reference": "go:gba147",
        "console": "Game Boy Advance",
        "genre": "aventura",
        "title": "Harry Potter and the Order of the Phoenix",
        "year": "2007",
        "rom": "https://dl.dropboxusercontent.com/s/gqt6eey3ctiqsk8/Harry%20Potter%20and%20the%20Order%20of%20the%20Phoenix%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CDa%29.gba",
        "sinopsis": "Tanto en la versión de Nintendo DS como en la de GBA, el jugador puede caminar por Hogwarts en fondos renderizados casi en 3D, como en los primeros juegos de Resident Evil. El modo de juego consiste en varios minijuegos, a los que juegas presionando los botones en el momento adecuado o haciendo diferentes tipos de movimientos con el lápiz óptico en la pantalla táctil."
    },
    {
        "id": 148,
        "reference": "go:gba148",
        "console": "Game Boy Advance",
        "genre": "shooter",
        "title": "Tomb Raider: Legend",
        "year": "2006",
        "rom": "https://dl.dropboxusercontent.com/s/vmbqsu06c2v7sbd/Lara%20Croft%20Tomb%20Raider%20-%20Legend%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.gba",
        "sinopsis": "La versión GBA de Lara Croft Tomb Raider: Legend es un juego de plataformas de desplazamiento lateral más similar a la versión de DS en lugar de las versiones de consola 3D de un estudio de desarrollo diferente. A diferencia del juego GBA anterior de la serie, se usa una vista lateral en lugar de una perspectiva de cámara aérea más titulada. Lara también puede saltar, atacar con sus armas y necesita moverse a nuevas plataformas, evitar obstáculos y eliminar enemigos y animales en su camino. El tiempo y la precisión son esenciales para llegar a las plataformas, como en los primeros juegos de Prince of Persia. Se recolectan nuevas armas cuando los enemigos las sueltan, pero esto no cambia el sprite del arma que sostiene Lara. También hay una serie de secuencias de vehículos en las que Lara conduce una bicicleta."
    },
    {
        "id": 149,
        "reference": "go:gba149",
        "console": "Game Boy Advance",
        "genre": "beat em up",
        "title": "Spider-man 3",
        "year": "2007",
        "rom": "https://dl.dropboxusercontent.com/s/etw1lvqu7ril1in/Spider-Man%203%20%28USA%29.gba",
        "sinopsis": "Experimenta un sistema de combate completamente nuevo, de dos maneras emocionantes. Rediseñado desde cero, un sistema de combate único permite que tanto Spider-Man como Black-Suited Spider-Man realicen poderes y habilidades específicos de cada traje. Las animaciones, los combos y los finalizadores de última generación hacen que los puñetazos, las patadas y los ataques web sean más heroicos que nunca. Lucha contra 10 de los enemigos más infames de Spider-Man de la película y el universo de Marvel, incluidos Sandman y Venom."
    },
    {
        "id": 150,
        "reference": "go:gba150",
        "console": "Game Boy Advance",
        "genre": "rpg",
        "title": "Super Robot Taisen Original Generation",
        "year": "2002",
        "rom": "https://dl.dropboxusercontent.com/s/9yqmlzsszy0rz45/Super%20Robot%20Taisen%20-%20Original%20Generation%20%28USA%29.gba",
        "sinopsis": "Han pasado doscientos años desde el comienzo de la Era espacial, un período de tiempo en el que la civilización comenzó a expandirse en el espacio. Sin embargo, a principios del siglo XXI, dos meteoritos impactaron y destruyeron gran parte de la Tierra, sumiendo a la humanidad en el caos. Para el año 179 de la Era Espacial, el Gobierno Federal de la Tierra descubrió una tecnología secreta, denominada Extra-Over Technology, o EOT, dentro de un tercer meteorito que había golpeado la Tierra en las Islas Marquesas en el Pacífico Sur. El Dr. Bian Zoldark, mientras investigaba el meteorito, también descubrió que los creadores de la Tecnología Extra-Over se dirigían a la Tierra para recuperarlo. Para defender la tierra, el gobierno comienza a desarrollar un grupo de mechas humanoides, conocidos como Personal Troopers."
    }
]

export default games;   