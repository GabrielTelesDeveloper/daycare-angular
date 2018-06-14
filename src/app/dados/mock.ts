import { Creche } from "../models/Creche";
import { Servico } from "../models/Servico";
import { Local } from "../models/Local";

export const MOCK: Creche[] = [
    {
        id: 1,
        dirImagem: "assets/img/creches/babykids.jpg",
        nome: "Baby Kids",
        avaliacao: 3.5,
        sobre: "Fundada em 2018, a Baky Kids conta com professoras especializadas e auxiliares, onde visamos um acompanhamento mais efetivo de cada criança. Contamos com um excelente espaço, além de passarmos a segurança que seu filho merece.",
        horario: "Segunda à sexta, de 8h às 22h",
        faixaEtaria: "0-5 anos",
        telefone: "(61) 3256-5569",
        servicos: [
            {
                icone: "assets/img/servicos/futebol.png",
                descricao: "Futebol"
            },
            {
                icone: "assets/img/servicos/music.png",
                descricao: "Educação Musical"
            }
        ],
        local: {
            endereco: "St. Sudoeste Superquadra Sudoeste 303/304 - Cruzeiro / Sudoeste / Octogonal, Brasília - Distrito Federal do Brasil, Brasilien",
            lat: -15.8004049,
            lon: -47.9278497
        },
        fotos: [
            { imagem: 'assets/img/fotos/img1.jpg' },
            { imagem: 'assets/img/fotos/img3.jpg' }
        ]

    },
    {
        id: 2,
        dirImagem: "assets/img/creches/babies.jpg",
        nome: "Babies",
        avaliacao: 4.9,
        sobre: "Na Babies seu baby literalmente ficará mais feliz! Contamos com um exelente espaço, além de oferecermos os melhores serviços já existentes no mercado. Venha nos fazer uma visita!",
        horario: "Segunda à sexta, de 8h às 18h",
        faixaEtaria: "0-3 anos",
        telefone: "(61) 3325-4420",
        servicos: [
            {
                icone: "assets/img/servicos/natacao.png",
                descricao: "Natação"
            },
            {
                icone: "assets/img/servicos/capoeira.png",
                descricao: "Capoeira"
            }
        ],
        local: {
            endereco: "Gama, Brasília - Distrito Federal do Brasil, Brasilien",
            lat: -15.9665094,
            lon: -48.0452284
        },
        fotos: [
            { imagem: 'assets/img/fotos/img4.jpg' },
            { imagem: 'assets/img/fotos/img5.jpg' }
        ]

    },
    {
        id: 3,
        dirImagem: "assets/img/creches/primeirospassos.jpg",
        nome: "Primeiros Passos",
        avaliacao: 4.1,
        sobre: "Na Primeiros Passos seu baby literalmente ficará mais á vontade! Contamos com um exelente espaço, além de oferecermos os melhores serviços já existentes no mercado. Venha nos fazer uma visita!",
        horario: "Segunda à quinta, de 8h às 20h",
        faixaEtaria: "0-4 anos",
        telefone: "(61) 3325-9999",
        servicos: [
            {
                icone: "assets/img/servicos/natacao.png",
                descricao: "Natação"
            },
            {
                icone: "assets/img/servicos/capoeira.png",
                descricao: "Capoeira"
            },
            {
                icone: "assets/img/servicos/futebol.png",
                descricao: "Futebol"
            }
        ],
        local: {
            endereco: "Gama, Brasília - Distrito Federal do Brasil, Brasilien",
            lat: -15.9665094,
            lon: -48.0452284
        },
        fotos: [
            { imagem: 'assets/img/fotos/img4.jpg' },
            { imagem: 'assets/img/fotos/img5.jpg' }
        ]

    },
    {
        id: 4,
        dirImagem: "assets/img/creches/mscreche.jpg",
        nome: "MS Creche",
        avaliacao: 2.5,
        sobre: "Fundada em 1998, a MS Creche conta com professoras especializadas e auxiliares, onde visamos um acompanhamento mais efetivo de cada criança. Contamos com um excelente espaço, além de passarmos a segurança que seu filho merece.",
        horario: "Horário Variável",
        faixaEtaria: "0-2 anos",
        telefone: "(61) 3256-3333",
        servicos: [
            {
                icone: "assets/img/servicos/futebol.png",
                descricao: "Futebol"
            },
            {
                icone: "assets/img/servicos/music.png",
                descricao: "Educação Musical"
            },
            {
                icone: "assets/img/servicos/capoeira.png",
                descricao: "Capoeira"
            },
            {
                icone: "assets/img/servicos/services.png",
                descricao: "Nutrição"
            }
        ],
        local: {
            endereco: "St. Sudoeste Superquadra Sudoeste 303/304 - Cruzeiro / Sudoeste / Octogonal, Brasília - Distrito Federal do Brasil, Brasilien",
            lat: -15.8004049,
            lon: -47.9278497
        },
        fotos: [
            { imagem: 'assets/img/fotos/img1.jpg' },
            { imagem: 'assets/img/fotos/img3.jpg' }
        ]

    },
]