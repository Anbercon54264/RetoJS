let op = prompt(
    "Seleccione el tipo de animales del que desea ver ejemplos: \n 1 - Vertebrados \n 2 - Invertebrados \n 3 - Herbívoros \n 4 - Carnívoros"
);
if (op !== "1" && op !== "2" && op !== "3" && op !== "4") {
    alert("Elija una opcion entre 1 y 4");
} else {
    let vertebrados =
        "\n 1 - Perro \n 2 - Canguro \n 3 - Gorila \n 4 - Mono \n 5 - Camello";
    let Invertebrados =
        "\n 1 - Mariquita \n 2 - Luciérnaga \n 3 - Escorpión \n 4 - Caracol \n 5 - Medusas";
    let Herbivoros =
        "\n 1 - Caballo \n 2 - Cabra \n 3 - Canguro \n 4 - Ciervo \n 5 - Elefante";
    let Carnivoros =
        "\n 1 - Águila \n 2 - Cocodrilo \n 3 - Foca \n 4 - Gaviota \n 5 - Coyote";

    let opMostrar = "NA";
    if (op === "1") {
        opMostrar = vertebrados;
    }
    if (op === "2") {
        opMostrar = Invertebrados;
    }
    if (op === "3") {
        opMostrar = Herbivoros;
    }
    if (op === "4") {
        opMostrar = Carnivoros;
    }
    let op2 = prompt("De que animal desea mas información " + opMostrar);
    if (op2 !== "1" && op2 !== "2" && op2 !== "3" && op2 !== "4" && op2 !== "5") {
        alert("Elija una opcion entre 1 y 5");
    } else {
        let descripcion = "NA2";
        if (op === "1") {
            //"\n 1 - Perro \n 2 - Canguro \n 3 - Gorila \n 4 - Mono \n 5 - Camello";
            if (op2 === "1") {
                descripcion =
                    "El perro (Canis familiaris o Canis lupus familiaris dependiendo de si se lo considera una especie por derecho propio o una subespecie del lobo),1​2​3​ llamado perro doméstico o can, es un mamífero carnívoro de la familia de los cánidos, que constituye una especie del género Canis.";
            }
            if (op2 === "2") {
                descripcion =
                    "El término canguro es el nombre común que se utiliza para designar a las especies de mayor tamaño de la subfamilia Macropodinae, tal como el término ualabí se utiliza para denominar a las de menor tamaño.";
            }
            if (op2 === "3") {
                descripcion =
                    "Los gorilas son primates herbívoros que habitan los bosques de África central. Son los más grandes de los primates vivos. El género se compone de dos especies: el gorila occidental y el oriental, con dos subespecies cada una";
            }
            if (op2 === "4") {
                descripcion =
                    "Los términos mono y simio son sinónimos en el idioma español,1​ pero en zoología suele hacerse una distinción entre ambos, debido a la influencia del idioma inglés, en el que los términos equivalentes monkey y ape tienen diferentes significados.";
            }
            if (op2 === "5") {
                descripcion =
                    "Camelus es un género de mamíferos artiodáctilos de la familia Camelidae que incluye a las tres especies vivientes de la familia originarias del Viejo Mundo, que son denominadas popularmente como camellos y dromedarios. Son animales ungulados nativos de zonas secas y desérticas de Asia.";
            }
        }
        if (op === "2") {
            //let Invertebrados ="\n 1 - Mariquita \n 2 - Luciérnaga \n 3 - Escorpión \n 4 - Caracol \n 5 - Medusas";
            if (op2 === "1") {
                descripcion =
                    "Los coccinélidos son una familia de insectos coleópteros de la superfamilia Cucujoidea.​ Reciben diferentes nombres según el lugar, siendo el más común mariquita. Tienen el cuerpo redondeado y con frecuencia colores vivos. Muchas especies se alimentan de pulgones, por lo que contribuyen a controlar estas plagas.";
            }
            if (op2 === "2") {
                descripcion =
                    "Los lampíridos son una familia de coleópteros polífagos que incluye los insectos conocidos como luciérnagas, bichos de luz, curucusíes​, isondúes, ​ cucuyos y gusanos de luz, caracterizados por su capacidad de emitir luz.";
            }
            if (op2 === "3") {
                descripcion =
                    "Scorpiones es un orden de artrópodos arácnidos depredadores conocidos comúnmente como escorpiones o alacranes. Se caracterizan por un contar con un par de pinzas de agarre y una cola estrecha y segmentada, a menudo formando una reconocible curva hacia delante sobre la espalda y siempre rematada con un aguijón.";
            }
            if (op2 === "4") {
                descripcion =
                    "El término caracol es el nombre común de los moluscos gasterópodos provistos de una concha espiral. Hay caracoles marinos (a veces denominados caracolas), dulceacuícolas y terrestres. Los caracoles se mueven por medio de una serie de contracciones musculares ondulatorias que recorren la cara inferior del pie.";
            }
            if (op2 === "5") {
                descripcion =
                    "Las medusas (Medusozoa), también llamadas aguamalas, malaguas, aguavivas, aguacuajito, aguacuajada, o lágrimas de mar, son animales marinos pertenecientes al filo Cnidaria (más conocidos como celentéreos); son pelágicos, de cuerpo gelatinoso, con forma de campana de la que cuelga un manubrio tubular, con la boca en el extremo inferior, a veces prolongado por largos tentáculos cargados con células urticantes llamados cnidocitos. Aparecieron hace unos 500 millones de años en el Cámbrico.";
            }
        }
        if (op === "3") {
            //let Herbivoros ="\n 1 - Caballo \n 2 - Cabra \n 3 - Canguro \n 4 - Ciervo \n 5 - Elefante";
            if (op2 === "1") {
                descripcion =
                    "El caballo ​​ es un mamífero perisodáctilo domesticado de la familia de los équidos. Es un herbívoro perisodáctilo de gran porte, y cuello largo y arqueado poblado por largas crines. A la hembra del caballo se le llama yegua y a las crías, si son machos, potros o potrillos, y si son hembras, potras o potrancas.";
            }
            if (op2 === "2") {
                descripcion =
                    "La cabra es un mamífero artiodáctilo de la subfamilia Caprinae que fue domesticado alrededor del octavo milenio a. C., sobre todo por su carne y leche.​ Al macho de la cabra se le llama cabrón, así como también cabro, chivato, macho cabrío, irasco o chivo, y a las crías se las llama cabrito, chivo o chivito.";
            }
            if (op2 === "3") {
                descripcion =
                    "El término canguro es el nombre común que se utiliza para designar a las especies de mayor tamaño de la subfamilia Macropodinae, tal como el término ualabí se utiliza para denominar a las de menor tamaño.";
            }
            if (op2 === "4") {
                descripcion =
                    "El ciervo común, también llamado ciervo europeo, ciervo rojo, ciervo colorado o venado, es una especie de cérvido ampliamente distribuida por el hemisferio norte.";
            }
            if (op2 === "5") {
                descripcion =
                    "Los elefantes o elefántidos son una familia de mamíferos placentarios del orden Proboscidea. Antiguamente se clasificaban, junto con otros mamíferos de piel gruesa, en el orden, ahora inválido, de los paquidermos. Existen hoy en día tres especies y diversas subespecies.";
            }
        }
        if (op === "4") {
            //let Carnivoros ="\n 1 - Águila \n 2 - Cocodrilo \n 3 - Foca \n 4 - Gaviota \n 5 - Coyote";
            if (op2 === "1") {
                descripcion =
                    "Águila es el nombre dado a las aves de presa, del orden de Accipitriformes, ​, ​ familia Accipitridae, subfamilia Buteoninae. Pertenecen a varios géneros, los cuales están sujetos a una reclasificación más adecuada puesto que los expertos no llegan a una opinión consensuada.";
            }
            if (op2 === "2") {
                descripcion =
                    "Crocodylidae es una familia de saurópsidos, arcosaurios comúnmente conocidos como cocodrilos. Incluye a catorce especies actuales.​ Se trata de grandes reptiles semiacuáticos que viven en las regiones tropicales de África, Asia, América y Australia.";
            }
            if (op2 === "3") {
                descripcion =
                    "Los fócidos o focas verdaderas son una familia de mamíferos pinnípedos adaptados a vivir en medios acuáticos la mayor parte del tiempo. El nombre común deriva directamente del latín phoca, que a su vez tiene su origen en el griego φώκη. Se conocen 33 especies.";
            }
            if (op2 === "4") {
                descripcion = "Las gaviotas son un grupo de aves clasificadas dentro del orden Charadriiformes y familia Laridae, pertenecientes al suborden Lari. Están estrechamente relacionados con los charranes, los cuales eran considerados una subfamilia de las gaviotas. Laridae está compuestos por diez géneros y 56 especies. ";
            }
            if (op2 === "5") {
                descripcion = "El coyote es una especie de mamífero carnívoro de la familia Canidae. Los coyotes solo se encuentran en América del Norte, América Central y recientemente América del Sur; desde Canadá hasta Colombia. Habita en una gran diversidad de ecosistemas, tropicales, templados y áridos.";
            }
        }
        alert(descripcion);
    }
}
