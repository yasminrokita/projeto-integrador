const pessoas = [
    {
        id: "hipocrates",
        nome: "Hipócrates",
        anos: "c. 460–370 a.C.",
        periodo: "Antiguidade",
        data: "c. 460 a.C.",
        area: "Medicina",
        icone: "⚕️",
        titulo: "Pai da Medicina",
        bio: [
            "Hipócrates foi um médico grego tradicionalmente conhecido como o Pai da Medicina. A tradição associada a seu nome valorizou a observação dos sintomas e a busca por causas naturais das doenças.",
            "A medicina hipocrática considerava fatores como alimentação, hábitos e ambiente. A Teoria dos Quatro Humores, associada a essa tradição, influenciou a medicina por séculos, embora hoje seja considerada ultrapassada.",
            "O Juramento de Hipócrates tornou-se um símbolo histórico da ética médica, associado à responsabilidade profissional e ao cuidado com os pacientes."
        ],
        legado: "Ajudou a fortalecer uma abordagem sistemática e baseada na observação na história da medicina."
    },
    {
        id: "arquimedes",
        nome: "Arquimedes",
        anos: "c. 287–212 a.C.",
        periodo: "Antiguidade",
        data: "c. 287 a.C.",
        area: "Matemática e Física",
        icone: "📐",
        titulo: "Matemática em ação",
        bio: [
            "Arquimedes foi matemático, físico, engenheiro e inventor grego. Estudou geometria, áreas, volumes, equilíbrio e alavancas, mostrando como a matemática podia resolver problemas práticos.",
            "Seu nome está ligado ao Princípio de Arquimedes, que explica o empuxo exercido por um fluido sobre um corpo nele imerso.",
            "Também trabalhou com mecanismos para elevar água, como o parafuso de Arquimedes, e desenvolveu métodos para calcular áreas e volumes."
        ],
        legado: "Seu trabalho aproximou a matemática da física e da engenharia, influenciando a ciência durante muitos séculos."
    },
    {
        id: "hildegarda",
        nome: "Hildegarda de Bingen",
        anos: "1098–1179",
        periodo: "Idade Média",
        data: "1098",
        area: "Música e natureza",
        icone: "🎼",
        titulo: "Conhecimento plural",
        bio: [
            "Hildegarda de Bingen foi religiosa, escritora, compositora e estudiosa da natureza na Europa medieval, na região que hoje corresponde à Alemanha.",
            "Compôs música religiosa e escreveu sobre religião, filosofia, plantas, alimentação e saúde. Em uma época de oportunidades limitadas para mulheres, tornou-se uma voz intelectual reconhecida.",
            "Algumas ideias médicas de seus escritos pertencem ao conhecimento medieval e não correspondem à ciência atual. Sua trajetória continua importante para a história da música e da cultura."
        ],
        legado: "Reuniu música, escrita e observação da natureza, deixando um legado importante na cultura medieval."
    },
    {
        id: "gutenberg",
        nome: "Johannes Gutenberg",
        anos: "c. 1400–1468",
        periodo: "Idade Média",
        data: "c. 1450",
        area: "Comunicação",
        icone: "📚",
        titulo: "Ideias em circulação",
        bio: [
            "Johannes Gutenberg foi um artesão e inventor alemão que desenvolveu, em meados do século XV, um sistema europeu de impressão com tipos móveis de metal.",
            "Antes da impressão em larga escala, muitos livros eram copiados à mão. A prensa facilitou a reprodução dos textos e ampliou a circulação de informações e ideias.",
            "A Bíblia de Gutenberg, produzida por volta de 1454–1455, é a obra mais famosa associada a seu sistema de impressão."
        ],
        legado: "A impressão em larga escala transformou a comunicação e a disseminação do conhecimento."
    },
    {
        id: "ada",
        nome: "Ada Lovelace",
        anos: "1815–1852",
        periodo: "Revolução Industrial",
        data: "1843",
        area: "Computação",
        icone: "💻",
        titulo: "Pioneira da programação",
        bio: [
            "Ada Lovelace foi uma matemática e escritora inglesa que estudou as ideias da Máquina Analítica, projeto concebido por Charles Babbage.",
            "Em 1843, publicou notas sobre a máquina, incluindo um algoritmo para calcular números de Bernoulli, frequentemente descrito como um dos primeiros algoritmos publicados destinados a ser executados por uma máquina.",
            "Ada imaginou que máquinas poderiam manipular símbolos e trabalhar com outros tipos de informação, não apenas números. Essa visão antecipou ideias importantes da computação moderna."
        ],
        legado: "Seu trabalho ajudou a imaginar a computação como algo muito além de uma simples calculadora."
    },
    {
        id: "faraday",
        nome: "Michael Faraday",
        anos: "1791–1867",
        periodo: "Revolução Industrial",
        data: "1831",
        area: "Eletricidade e química",
        icone: "⚡",
        titulo: "Energia em movimento",
        bio: [
            "Michael Faraday foi um físico e químico inglês que se tornou um pesquisador influente apesar de ter tido pouca educação formal.",
            "Em 1831, demonstrou a indução eletromagnética: mudanças no campo magnético podem produzir corrente elétrica. Esse princípio é fundamental para geradores e transformadores.",
            "Faraday também pesquisou eletrólise e realizou contribuições importantes à química."
        ],
        legado: "Suas descobertas ajudaram a estabelecer bases científicas para tecnologias elétricas utilizadas até hoje."
    },
    {
        id: "mandela",
        nome: "Nelson Mandela",
        anos: "1918–2013",
        periodo: "Século XX",
        data: "1994",
        area: "Direitos humanos",
        icone: "✊🏿",
        titulo: "Luta por igualdade",
        bio: [
            "Nelson Mandela foi um líder sul-africano que lutou contra o apartheid, sistema de segregação racial que negava direitos à população negra da África do Sul.",
            "Foi preso em 1962 e passou 27 anos na prisão. Libertado em 1990, participou das negociações que contribuíram para o fim do apartheid.",
            "Em 1994, tornou-se o primeiro presidente negro eleito democraticamente na África do Sul. Defendeu a democracia, os direitos humanos e a reconciliação."
        ],
        legado: "Sua trajetória tornou-se um símbolo mundial da resistência ao racismo e da luta por igualdade."
    },
    {
        id: "einstein",
        nome: "Albert Einstein",
        anos: "1879–1955",
        periodo: "Século XX",
        data: "1905",
        area: "Física",
        icone: "🪐",
        titulo: "Uma nova visão do universo",
        bio: [
            "Albert Einstein foi um físico nascido na Alemanha que transformou a compreensão de espaço, tempo, movimento e gravidade.",
            "Em 1905, apresentou a teoria da relatividade especial e a equação E = mc², que expressa a relação entre massa e energia. Em 1915, apresentou a relatividade geral.",
            "Einstein também explicou o efeito fotoelétrico, trabalho pelo qual recebeu o Prêmio Nobel de Física de 1921. Além da ciência, defendeu a paz e os direitos humanos."
        ],
        legado: "Suas teorias continuam influenciando a física, a astronomia e a compreensão do universo."
    }
];

const eventos = document.getElementById("eventos");
const gradePessoas = document.getElementById("pessoas");
const busca = document.getElementById("busca");
const filtroArea = document.getElementById("filtroArea");
const modal = document.getElementById("modal");

let periodoSelecionado = "Todos";

function mostrarLinhaDoTempo() {
    const filtradas = pessoas.filter(p =>
        periodoSelecionado === "Todos" ||
        p.periodo === periodoSelecionado
    );

    eventos.innerHTML = filtradas.map(p => `
        <article class="evento">
            <small>${p.data} · ${p.periodo}</small>
            <h3>${p.icone} ${p.nome}</h3>
            <p>${p.titulo}</p>
            <button onclick="abrirPessoa('${p.id}')">
                Conhecer história ↗
            </button>
        </article>
    `).join("");
}

function mostrarPessoas() {
    const termo = busca.value.toLowerCase();
    const area = filtroArea.value;

    const filtradas = pessoas.filter(p => {
        const combinaNome = p.nome.toLowerCase().includes(termo);
        const combinaArea = area === "Todas" || p.area === area;
        const combinaPeriodo =
            periodoSelecionado === "Todos" ||
            p.periodo === periodoSelecionado;

        return combinaNome && combinaArea && combinaPeriodo;
    });

    document.getElementById("quantidade").textContent = filtradas.length;

    document.getElementById("semResultados")
        .classList.toggle("escondido", filtradas.length > 0);

    gradePessoas.innerHTML = filtradas.map(p => `
        <button class="card" onclick="abrirPessoa('${p.id}')">
            <span class="icone">${p.icone}</span>
            <span class="periodo-texto">${p.periodo}</span>
            <h3>${p.nome}</h3>
            <p><strong>${p.titulo}</strong></p>
            <p>${p.bio[0]}</p>
            <span class="ler">Ler biografia →</span>
        </button>
    `).join("");
}

function abrirPessoa(id) {
    const pessoa = pessoas.find(p => p.id === id);

    if (!pessoa) return;

    document.getElementById("modalPeriodo").textContent = pessoa.periodo;
    document.getElementById("modalNome").textContent =
        pessoa.icone + " " + pessoa.nome;

    document.getElementById("modalAnos").textContent = pessoa.anos;
    document.getElementById("modalArea").textContent = pessoa.area;

    document.getElementById("modalBio").innerHTML =
        pessoa.bio.map(paragrafo => `<p>${paragrafo}</p>`).join("");

    document.getElementById("modalLegado").textContent = pessoa.legado;

    modal.classList.remove("escondido");
}

function fecharModal() {
    modal.classList.add("escondido");
}

document.getElementById("fechar").addEventListener("click", fecharModal);

modal.addEventListener("click", evento => {
    if (evento.target === modal) {
        fecharModal();
    }
});

document.addEventListener("keydown", evento => {
    if (evento.key === "Escape") fecharModal();
});

document.querySelectorAll(".periodo").forEach(botao => {
    botao.addEventListener("click", () => {
        document.querySelectorAll(".periodo").forEach(b =>
            b.classList.remove("ativo")
        );

        botao.classList.add("ativo");
        periodoSelecionado = botao.dataset.periodo;

        mostrarLinhaDoTempo();
        mostrarPessoas();
    });
});

busca.addEventListener("input", mostrarPessoas);
filtroArea.addEventListener("change", mostrarPessoas);

// QUIZ: descobre qual personalidade combina com suas respostas.

const resultadosQuiz = {
    curiosidade: {
        nome: "Michael Faraday",
        id: "faraday",
        icone: "⚡",
        explicacao: "Sua curiosidade e vontade de investigar lembram Faraday, que realizou experimentos importantes sobre eletricidade e magnetismo."
    },
    criatividade: {
        nome: "Ada Lovelace",
        id: "ada",
        icone: "💻",
        explicacao: "Você gosta de imaginar possibilidades. Ada Lovelace enxergou usos futuros para máquinas que ainda nem existiam plenamente."
    },
    justica: {
        nome: "Nelson Mandela",
        id: "mandela",
        icone: "✊🏿",
        explicacao: "Você valoriza a justiça e a transformação social. Mandela dedicou sua vida à luta contra o apartheid e pela igualdade."
    },
    logica: {
        nome: "Arquimedes",
        id: "arquimedes",
        icone: "📐",
        explicacao: "Você gosta de organizar problemas e encontrar soluções. Arquimedes uniu raciocínio matemático a desafios concretos."
    }
};

document.getElementById("quizForm").addEventListener("submit", evento => {
    evento.preventDefault();

    const respostas = new FormData(evento.target);
    const pontuacao = {
        curiosidade: 0,
        criatividade: 0,
        justica: 0,
        logica: 0
    };

    ["q1", "q2", "q3"].forEach(pergunta => {
        pontuacao[respostas.get(pergunta)]++;
    });

    const vencedor = Object.keys(pontuacao).sort(
        (a, b) => pontuacao[b] - pontuacao[a]
    )[0];

    const resultado = resultadosQuiz[vencedor];

    document.getElementById("resultado").innerHTML = `
        <h3>${resultado.icone} Sua mente parceira é ${resultado.nome}!</h3>
        <p>${resultado.explicacao}</p>
        <button type="button" class="botao"
            onclick="abrirPessoa('${resultado.id}')">
            Conhecer essa personalidade →
        </button>
        <p><small>Resultado lúdico baseado nas suas respostas — não é um teste científico.</small></p>
    `;

    document.getElementById("resultado").classList.remove("escondido");
});

// Botão para alternar entre português e inglês.

let idiomaAtual = "pt";

document.getElementById("idioma").addEventListener("click", () => {
    idiomaAtual = idiomaAtual === "pt" ? "en" : "pt";

    if (idiomaAtual === "en") {
        alert("A versão em inglês pode ser adicionada às biografias e aos textos do site.");
        document.getElementById("idioma").textContent = "PT";
    } else {
        document.getElementById("idioma").textContent = "EN";
    }
});

mostrarLinhaDoTempo();
mostrarPessoas();