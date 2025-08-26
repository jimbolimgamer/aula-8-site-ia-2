export const perguntas = [
    {
        enunciado: "Você prefere escutar música ao vivo ou em estúdios/gravações?",
        alternativas: [
            {
                texto: "Ao vivo",
                afirmacao: [
                    "Você gosta de estravazar ",
                    "Gosta de ir em shows "
                ],
                proxima: 1,
            },
            {
                texto: "Em estúdios/gravações",
                afirmacao: [
                    ", você prefere algo mais contido ",
                    ", gosta das versões de estúdios "
                ],
                proxima: 2,
            },
        ]
    },
    {
        enunciado: "Qual estilo musical você prefere?",
        alternativas: [
            {
                texto: "Rock.",
                afirmacao: [
                    " , letras mais profundas",
                    ",  letras radicais",
                ],
                proxima: 3,
            },
            {
                texto: "Pop.",
                afirmacao: [
                    ", batidas mais animadas",
                    ", batidas alegres"
                ],
                proxima: 4,
            },
        ]
    },
    {
        enunciado: "Você curte mais ouvir música enquanto faz outras atividades ou quando está totalmente focado nela?",
        alternativas: [
            {
                texto: "Enquanto faço outras atividades.",
                afirmacao: [
                    ", as música te faz se sentir bem",
                    ", as músicas te completam"
                    
                ],
                proxima: 3,
            },
            {
                texto: "Totalmente focado.",
                afirmacao: [
                    ", as música te ajuda a se concentrar",
                    ", te ajudam a focar",
                ],
                proxima: 4,
            },
        ]
    },
    {
        enunciado: "Você prefere ouvir músicas antigas ou as mais recentes?",
        alternativas: [
            {
                texto: "Músicas antigas",
                afirmacao: [
                    ", gosta de músicas antigas pelo que elas representam",
                    ", te lembram de momentos onde você era feliz"
                ],
                proxima: 5,
            },
            {
                texto: "Músicas recentes.",
                afirmacao: [
                    ", está sempre atualizado com as músicas",
                    ", gosta das tendências"
                ],
                proxima: 6,
            },
        ]
    },
    {
        enunciado: "Você prefere ouvir músicas com letras mais profundas ou com uma batida animada? ",
        alternativas: [
            {
                texto: "Letras profundas.",
                afirmacao: [
                    ", gosta de refletir.",
                    ", gosta de pensar sobre a letra,"
                ],
            },
            {
                texto: "Batida animada.",
                afirmacao: [
                    ", prefere uma música divertida. ",
                    ", músicas divertidas.",
                ],
            },
        ]
    }
];