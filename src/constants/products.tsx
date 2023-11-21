import { Product, ProductLineIds, ProductLineLabels } from "types/products";

type ProductMap = {
  [key in ProductLineIds]: Product[];
};

export const PRODUCTS: ProductMap = {
  [ProductLineIds.Complementary]: [
    {
      productImg: "putty-polifibra.png",
      name: "Polifibra",
      pdf: "FT_-_P7_Automotriz_1.pdf",
      description:
        "Masilla para corregir imperfecciones, defectos, grietas y hendiduras en partes de fibra de vidrio.",
      instructions: (
        <>
          <h3>Aplicación y uso:</h3>
          <p>
            Masilla para corregir imperfecciones, defectos, grietas y hendiduras
            en partes de fibra de vidrio. La superficie que se va a masillar
            debe estar completamente limpia, seca, libre de partículas sueltas,
            mugre, grasa, aceites y óxidos para obtener una buena adherencia.
            Debe revolver bien el contenido del envase antes de usarlo y sacar
            sólo la cantidad necesaria. Masajee el tubo del catalizador con sus
            manos y presione para usar de este 2 gramos por cada 100 gramos de
            Masilla Plástica Poliéster POLIFIBRA. Para obtener un curado más
            rápido puede aumentar la cantidad de catalizador; tenga en cuenta
            que a mayor temperatura el curado es más rápido y a menor
            temperatura más lento por lo tanto debe aumentar el catalizador.
          </p>
        </>
      ),
    },
    {
      productImg: "resin-p-2002.png",
      name: "Resinas precalentadas p-2002",
      pdf: "FT_-_P7_Automotriz_1.pdf",
      shortenedName: "P-2002",
      description:
        "La Resina P-2000 y P-2002 es una resina poliéster no saturada de tipo ortoftálico modificado, semirígida, de media reactividad y baja viscosidad, disuelta en estireno. La Resina P-2000 se suministra pre-acelerada y tixotrópica.",
      instructions: (
        <>
          <h3>Aplicación:</h3>
          <p>
            La Resina P-2000 y P-2002 es apropiada para todos los usos generales
            en la reparación y fabricación de piezas de plástico reforzado como
            toboganes, lavaplatos, bañeras, jacuzzis, botes, cascos,
            carrocerías, entre otros.
          </p>
        </>
      ),
    },
    {
      productImg: "resin-p-2000.png",
      name: "Resinas precalentadas p-2000",
      pdf: "FT_-_P7_Automotriz_1.pdf",
      shortenedName: "P-2000",
      description:
        "La Resina P-2000 y P-2002 es una resina poliéster no saturada de tipo ortoftálico modificado, semirígida, de media reactividad y baja viscosidad, disuelta en estireno. La Resina P-2000 se suministra pre-acelerada y tixotrópica.",
      instructions: (
        <>
          <h3>Aplicación:</h3>
          <p>
            La Resina P-2000 y P-2002 es apropiada para todos los usos generales
            en la reparación y fabricación de piezas de plástico reforzado como
            toboganes, lavaplatos, bañeras, jacuzzis, botes, cascos,
            carrocerías, entre otros.
          </p>
        </>
      ),
    },
    {
      productImg: "misc-cremapulidora2.png",
      name: "Crema pulidora #2",
      pdf: "FT_-_P7_Automotriz_1.pdf",
      shortenedName: "Pulidora #2",
      description:
        "Este producto es un compuesto abrasivo a base de agua de corte (agresividad) medio formulado para remover rayas de lijas 1500 y 2000. Puede ser utilizado en todo tipo de pintura (esmaltes, lacas, poliuretanos) seco o curado y deja un acabado brillante. Se puede aplicar a mano o con máquina.",
    },
    {
      productImg: "misc-brillocar.png",
      name: "Brillocar",
      pdf: "FT_-_P7_Automotriz_1.pdf",
      description:
        "Es un producto diseñado para renovar, brillar y proteger pinturas base disolventes (acrílicos, poliuretanos, lacas, esmaltes) aplicadas en superficies metálicas, fibra de vidrio o plásticas, eliminando también rayones ligeros en la superficie. Antes de aplicar la superficie debe estar libre de partículas que puedan rayarla. Tome un paño o esponja que puede ser seca o húmeda y vierta la crema, aplique por secciones presionando la esponja. Dejar secar (hasta que se vea opaco).",
    },
    {
      productImg: "putty-blanca.png",
      name: "Blanca",
      pdf: "FT_-_P7_Automotriz_1.pdf",
      description:
        "La aparición de defectos en medio del proceso de recuperación estética puede ser evitados, no es una tarea sencilla, pero a su vez no representa...",
    },
    {
      productImg: "putty-2klite.png",
      name: "2k-Lite",
      pdf: "FT_-_P7_Automotriz_1.pdf",
      description:
        "La aparición de defectos en medio del proceso de recuperación estética puede ser evitados, no es una tarea sencilla, pero a su vez no representa...",
    },
  ],
  [ProductLineIds.Architectural]: [
    {
      productImg: "architecture-impecryl.png",
      name: "Impecryl Arquitectónico",
      pdf: "FT_-_P7_Automotriz_1.pdf",
      shortenedName: "Impecryl",
      description:
        "Útil como protector impermeabilizante, anticorrosivo e insonorizante en superficies expuestas a la intemperie, como cubiertas de zinc, galvanizadas, eternit y tejas de barro, techos metálicos o en material. y terrazas, adobe y cemento al aire, bajantes y canoas, pisos Es útil para impermeabilizar maderas con exposición al agua. En aplicaciones de cemento se puede mezclar un galón por cada bulto de cemento. (30-50 Kg.). Para morteros, pisos terrazas",
    },
    {
      productImg: "waterproofing-s3.png",
      name: "Impermeabilizante Asfáltico Protector S-3",
      pdf: "FT_-_P7_Automotriz_1.pdf",
      shortenedName: "Protector S-3",
      description:
        "Útil para impermeabilizar superficies expuestas al agua como techos, y terrazas, también para guardabarros y baúles de vehículos para evitar la corrosión.",
      instructions: (
        <>
          <h3>Aplicación y uso:</h3>
          <p>
            Útil para impermeabilizar superficies expuestas al agua como techos,
            y terrazas, también para guardabarros y baúles de vehículos para
            evitar la corrosión. La superficie que se va a impermeabilizar debe
            estar completamente seca y libre de partículas sueltas, mugre,
            grasas, aceites y óxidos. El secado es de una hora al tacto y 24
            horas para curado total.
          </p>
        </>
      ),
    },
    {
      productImg: "putty-rocadura.png",
      name: "Roca Dura",
      pdf: "FT_-_P7_Automotriz_1.pdf",
      description:
        "Para metalmecánica, mármol, cerrajería, perfilería y doméstico.",
      instructions: (
        <>
          <h3>Aplicación y uso:</h3>
          <p>
            Es un compuesto a base de resina poliéster semirrígida, diseñado
            para pegar piezas de cerámica y mármol, para resanar pisos, tuberías
            PVC y metálica. Por su color blanco permite entonar otros colores de
            acuerdo a las necesidades. Mezcle con espátula todo el contenido
            hasta el fondo, hasta obtener una misma textura o fluidez en todo el
            producto. Tome la cantidad necesaria a parte y mezcle el catalizador
            o secante (2 gramos de catalizador por cada 100 gramos de masilla),
            esta mezcla debe hacerse en una superficie limpia, no lo haga sobre
            papel o cartón). Si desea secamiento más rápido, agregue más
            catalizador, pero tenga en cuenta que le dé tiempo de aplicarla; si
            necesita retardar el secamiento reduzca la cantidad de catalizador.
            El secamiento también varía con las temperaturas a más frío más
            lento, a más calor más rápido. La superficie a reparar debe estar
            previamente pulida, libre de humedad, óxidos, grasas o polvo; para
            obtener una óptima adherencia de la supermasilla. No devuelva la
            masilla catalizada al envase original, ni objetos que hayan tenido
            contacto con el catalizador.
          </p>
        </>
      ),
    },
    {
      productImg: "misc-removedorpintura.png",
      name: "Removedor de Pinturas",
      pdf: "FT_-_P7_Automotriz_1.pdf",
      shortenedName: "Removedor",
      description: "Remueve lacas, esmaltes y casi toda clase de pinturas.",
      instructions: (
        <>
          <h3>Aplicación y uso:</h3>
          <p>
            Útil para remover pinturas, lacas convencionales, barnices, resinas
            alquídicas, epóxicas, esteres, láminas catalizadas con epoxi y
            acrílicos de superficies metálicas o de madera; especialmente cuando
            se desee dar un nuevo acabado. Se aplica sobre la superficie que se
            quiere tratar, con la ayuda de una brocha o en su defecto por
            inmersión del objeto, dejándolo actuar por espacio de 5 a 15 minutos
            al cabo de los cuales con una rasqueta o cepillo se ayuda a retirar
            la pintura, si quedan vestigios de esta en capas gruesas se aplica
            de nuevo el removedor hasta lograr su completa remoción. A
            continuación se lava la superficie primero con agua y luego con
            disolvente, para eliminar residuos del removedor.
          </p>
        </>
      ),
    },
    {
      productImg: "putty-poliacrylT1.png",
      name: "Resina acrílica Poliacryl T1",
      pdf: "FT_-_P7_Automotriz_1.pdf",
      shortenedName: "Poliacryl T1",
      description:
        "Resina acrílica para reforzar pinturas, cemento, yeso, estuco.",
      instructions: (
        <>
          <h3>Aplicación y uso:</h3>
          <p>
            Es un producto que al usarse puro, forma un sello impermeable,
            siempre flexible, de alta adherencia, resistencia al esfuerzo
            mecánico y al calor. Resina acrílica para reforzar pinturas,
            cemento, yeso, estuco.
          </p>
        </>
      ),
    },
    {
      productImg: "putty-P-25.png",
      name: "Sellador P-25",
      pdf: "FT_-_P7_Automotriz_1.pdf",
      description:
        "Es un producto que seca formando un sello impermeable, siempre flexible, impermeable y de alta adherencia, resistencia al esfuerzo mecánico y al calor. No se derrite.",
      instructions: (
        <>
          <h3>Usos:</h3>
          <p>
            En vehículos es útil para sellar e impermeabilizar juntas,
            igualmente en ventanas, puertas, uniones de vidrios, unión en partes
            metálicas, en cemento, maderas y conductos de aire, etc.
          </p>
          <h3>Aplicación:</h3>
          <p>
            La superficie a sellar debe estar libre de humedades, suciedades y
            partículas sueltas como polvo, grasas, limaduras de hierro, óxido,
            etc.
          </p>
        </>
      ),
    },
  ],
  [ProductLineIds.Automotive]: [
    {
      productImg: "waterproofing-impecryl.png",
      name: "Impermeabilizante vehicular flexible Impecryl",
      pdf: "FT_-_P7_Automotriz_1.pdf",
      shortenedName: "Impecryl",
      description: "Protector impermeabilizante flexible de alta adherencia.",
      instructions: (
        <>
          <h3>Aplicación y uso:</h3>
          <p>
            Recubrimiento de gran elasticidad, flexibilidad y adherencia a base
            de resinas acrílicas de alta calidad.Útil como protector
            impermeabilizante, anticorrosivo e insonorizante en superficies
            metálicas, como pisos de automóviles, guardabarros, baúl, volcos,
            chasis y elementos expuestos a humedad; también para cubiertas de
            zinc, galvanizadas y pisos metálicos. Es útil para impermeabilizar
            maderas con exposición al agua y aplicaciones en cemento. El
            producto viene listo para aplicar con brocha o pistola, se sugiere
            dos (2) manos en cualquier uso, dejando secar entre cada aplicación.
            El tiempo de secado es de 30 minutos al tocarlo y una hora para
            continuar los acabados (varía de acuerdo con la temperatura
            ambiente).
          </p>
        </>
      ),
    },
    {
      productImg: "putty-poliflex.png",
      name: "Poliflex",
      pdf: "FT_-_P7_Automotriz_1.pdf",
      description:
        "Especial para rellenar, resanar y corregir hendiduras en superficies metálicas, planas y curvas o en uniones con soldaduras, principalmente, en el sector de la reparación de latonería y pintura de vehículos, también en cerrajería y en muebles tubulares; para la industria de carrocerías metálicas y en fibra de vidrio y para la fabricación de maquinaria industrial.",
      instructions: (
        <>
          <h3>Aplicación y uso:</h3>
          <p>
            Recubrimiento de gran elasticidad, flexibilidad y adherencia a base
            de resinas acrílicas de alta calidad.Útil como protector
            impermeabilizante, anticorrosivo e insonorizante en superficies
            metálicas, como pisos de automóviles, guardabarros, baúl, volcos,
            chasis y elementos expuestos a humedad; también para cubiertas de
            zinc, galvanizadas y pisos metálicos. Es útil para impermeabilizar
            maderas con exposición al agua y aplicaciones en cemento. El
            producto viene listo para aplicar con brocha o pistola, se sugiere
            dos (2) manos en cualquier uso, dejando secar entre cada aplicación.
            El tiempo de secado es de 30 minutos al tocarlo y una hora para
            continuar los acabados (varía de acuerdo con la temperatura
            ambiente).
          </p>
        </>
      ),
    },
    {
      productImg: "putty-rosada.png",
      name: "Rosada",
      pdf: "FT_-_Masilla Rosada.pdf",
      description:
        "Para vehículos de alta gama Lijado en seco y húmedo – Poro cerrado.",
      instructions: (
        <>
          <h3>Aplicación:</h3>
          <p>
            Mezcle con espátula todo el contenido hasta el fondo, hasta obtener
            una misma textura o fluidez en todo el producto. Tome la cantidad
            necesaria a parte y mezcle el catalizador o secante (2 gramos de
            catalizador por cada 100 gramos de masilla), esta mezcla debe
            hacerse en una superficie limpia, no lo haga sobre papel o cartón).
            Si desea secamiento más rápido, agregue más catalizador, pero tenga
            en cuenta que le dé tiempo de aplicarla; si necesita retardar el
            secamiento reduzca la cantidad de catalizador. El secamiento también
            varía con las temperaturas a más frío más lento, a más calor más
            rápido. La superficie a reparar debe estar previamente pulida, libre
            de humedad, óxidos, grasas o polvo; para obtener una óptima
            adherencia de la supermasilla. No devuelva la masilla catalizada al
            envase original, ni objetos que hayan tenido contacto con el
            catalizador.
          </p>
        </>
      ),
    },
    {
      productImg: "putty-kross.png",
      name: "Kross",
      pdf: "FT_-_Masilla Kross.pdf",
      description:
        "Para vehículos de alta gama. Lijado en seco y húmedo – Poro cerrado.",
      instructions: (
        <>
          <h3>Aplicación y uso:</h3>
          <p>
            Especial para rellenar y dar acabados, resanar y corregir hendiduras
            en superficies metálicas, planas y curvas o en uniones con
            soldaduras, principalmente, en el sector de la reparación de
            latonería y pintura de vehículos, también en cerrajería y en muebles
            tubulares; para la industria de carrocerías metálicas y en fibra de
            vidrio y para la fabricación de maquinaria industrial. Mezcle con
            espátula todo el contenido hasta el fondo, hasta obtener una misma
            textura o fluidez en todo el producto. Tome la cantidad necesaria a
            parte y mezcle el catalizador o secante (2 gramos de catalizador por
            cada 100 gramos de masilla), esta mezcla debe hacerse en una
            superficie limpia, no lo haga sobre papel o cartón). Si desea
            secamiento más rápido, agregue más catalizador, pero tenga en cuenta
            que le dé tiempo de aplicarla; si necesita retardar el secamiento
            reduzca la cantidad de catalizador. El secamiento también varía con
            las temperaturas a más frío más lento, a más calor más rápido. La
            superficie a reparar debe estar previamente pulida, libre de
            humedad, óxidos, grasas o polvo; para obtener una óptima adherencia
            de la supermasilla. No devuelva la masilla catalizada al envase
            original, ni objetos que hayan tenido contacto con el catalizador.
          </p>
        </>
      ),
    },
    {
      productImg: "putty-1a.png",
      name: "Nueva 1A",
      pdf: "FT_-_P7_Automotriz_1.pdf",
      description: "Alto poder de relleno.",
      instructions: (
        <>
          <h3>Aplicación y uso:</h3>
          <p>
            Especial para rellenar y dar acabados, resanar y corregir hendiduras
            en superficies metálicas, planas y curvas o en uniones con
            soldaduras, principalmente, en el sector de la reparación de
            latonería y pintura de vehículos, también en cerrajería y en muebles
            tubulares; para la industria de carrocerías metálicas y en fibra de
            vidrio y para la fabricación de maquinaria industrial. Mezcle con
            espátula todo el contenido hasta el fondo, hasta obtener una misma
            textura o fluidez en todo el producto. Tome la cantidad necesaria a
            parte y mezcle el catalizador o secante (2 gramos de catalizador por
            cada 100 gramos de masilla), esta mezcla debe hacerse en una
            superficie limpia, no lo haga sobre papel o cartón). Si desea
            secamiento más rápido, agregue más catalizador, pero tenga en cuenta
            que le dé tiempo de aplicarla; si necesita retardar el secamiento
            reduzca la cantidad de catalizador. El secamiento también varía con
            las temperaturas a más frío más lento, a más calor más rápido. La
            superficie a reparar debe estar previamente pulida, libre de
            humedad, óxidos, grasas o polvo; para obtener una óptima adherencia
            de la supermasilla. No devuelva la masilla catalizada al envase
            original, ni objetos que hayan tenido contacto con el catalizador
          </p>
        </>
      ),
    },
    {
      productImg: "putty-premium.png",
      name: "Premium",
      pdf: "FFT_-_Masilla Premium.pdf",
      description:
        "Para vehículos de alta gama. Lijado en seco y húmedo – Poro cerrado.",
      instructions: (
        <>
          <h3>Aplicación y uso:</h3>
          <p>
            Especial para rellenar y dar acabados, resanar y corregir hendiduras
            en superficies metálicas, planas y curvas o en uniones con
            soldaduras, principalmente, en el sector de la reparación de
            latonería y pintura de vehículos, también en cerrajería y en muebles
            tubulares; para la industria de carrocerías metálicas y en fibra de
            vidrio y para la fabricación de maquinaria industrial. Mezcle con
            espátula todo el contenido hasta el fondo, hasta obtener una misma
            textura o fluidez en todo el producto. Tome la cantidad necesaria a
            parte y mezcle el catalizador o secante (2 gramos de catalizador por
            cada 100 gramos de masilla), esta mezcla debe hacerse en una
            superficie limpia, no lo haga sobre papel o cartón). Si desea
            secamiento más rápido, agregue más catalizador, pero tenga en cuenta
            que le dé tiempo de aplicarla; si necesita retardar el secamiento
            reduzca la cantidad de catalizador. El secamiento también varía con
            las temperaturas a más frío más lento, a más calor más rápido. La
            superficie a reparar debe estar previamente pulida, libre de
            humedad, óxidos, grasas o polvo; para obtener una óptima adherencia
            de la supermasilla. No devuelva la masilla catalizada al envase
            original, ni objetos que hayan tenido contacto con el catalizador.
          </p>
        </>
      ),
    },
    {
      productImg: "putty-rojarapida.png",
      name: "Roja Rápida",
      pdf: "FT_-_P7_Automotriz_1.pdf",
      description: "Para detalles y acabados.",
      instructions: (
        <>
          <h3>Aplicación y uso:</h3>
          <p>
            Masilla para corregir imperfecciones poco profundas en superficies
            metálicas, planas o curvas. La masilla ROJA RÁPIDA se aplica en
            capas delgadas para evitar el rechupe con masillador o espátula,
            dejar secar bien entre capa y capa. Luego lijar en húmedo o seco a
            partir de 45 minutos con papel 320 o 360. Lije hasta emparejar las
            partes y evitar llagas en el acabado. Terminando el lijado, se seca
            y limpia bien la superficie aplicando base POLICOLOR.
          </p>
        </>
      ),
    },
  ],
};

export const PRODUCT_LINES = [
  {
    backgroundImg: "puttyLineBg.png",
    id: ProductLineIds.Complementary,
    label: ProductLineLabels.Complementary,
  },
  {
    backgroundImg: "architecturalLineBg.png",
    id: ProductLineIds.Architectural,
    label: ProductLineLabels.Architectural,
  },
  {
    backgroundImg: "waterproofingLineBg.png",
    id: ProductLineIds.Automotive,
    label: ProductLineLabels.Automotive,
  },
];
