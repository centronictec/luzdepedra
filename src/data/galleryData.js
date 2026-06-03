const imageModules = import.meta.glob('/src/assets/imagens/*.png', { eager: true })

const imageDescriptions = [
  {
    title: "Marmore Carrara",
    subtitle: "Elegancia Atemporal",
    description: "Inspirado nos classicos marmores italianos, esta peca traz a sofisticacao do Carrara com veios suaves.",
    date: "2024",
    style: "Classico Renovado",
    location: "Sala de Estar - Brasilia/DF"
  },
  {
    title: "Onix Dourado",
    subtitle: "Luxo Contemporaneo",
    description: "Veios dourados que dancam sobre fundo escuro, criando um contraste dramatico e sofisticado.",
    date: "2024",
    style: "Contemporaneo",
    location: "Hall de Entrada - Sao Paulo/SP"
  },
  {
    title: "Calcatta Gold",
    subtitle: "O Ouro que Brilha",
    description: "A fusao perfeita entre o marmore Calcatta e toques de ouro puro.",
    date: "2023",
    style: "Luxo",
    location: "Escritorio - Rio de Janeiro/RJ"
  },
  {
    title: "Estatua Branco",
    subtitle: "Pureza Escultural",
    description: "Branco puro com veios suaves que lembram esculturas gregas.",
    date: "2024",
    style: "Minimalista",
    location: "Cozinha - Belo Horizonte/MG"
  },
  {
    title: "Verde Imperial",
    subtitle: "Natureza e Sofisticacao",
    description: "Verde profundo que remete as florestas imperiais com veios dourados.",
    date: "2023",
    style: "Organico",
    location: "Jardim de Inverno - Curitiba/PR"
  },
  {
    title: "Nero Marquina",
    subtitle: "Contraste Dramatico",
    description: "Preto absoluto com veios brancos que criam efeito de movimento e profundidade.",
    date: "2024",
    style: "Dramatico",
    location: "Home Theater - Porto Alegre/RS"
  },
  {
    title: "Rosa Portugues",
    subtitle: "Romantismo em Tom",
    description: "Tons suaves de rosa mesclados com veios dourados e brancos.",
    date: "2023",
    style: "Romantico",
    location: "Quarto - Salvador/BA"
  },
  {
    title: "Azul Royal",
    subtitle: "Realeza Moderna",
    description: "Azul profundo que remete ao ceu noturno com veios dourados.",
    date: "2024",
    style: "Real",
    location: "Biblioteca - Recife/PE"
  },
  {
    title: "Travertino Romano",
    subtitle: "Heranca Antiga",
    description: "Inspirado nos antigos travertinos romanos para ambientes contemporaneos.",
    date: "2023",
    style: "Historico",
    location: "Area Gourmet - Fortaleza/CE"
  }
]

export const galleryImages = Object.keys(imageModules)
  .sort()
  .map((path, index) => {
    const src = imageModules[path].default
    const desc = imageDescriptions[index] || imageDescriptions[0]
    return {
      id: index + 1,
      src: src,
      title: desc.title,
      subtitle: desc.subtitle,
      description: desc.description,
      date: desc.date,
      style: desc.style,
      location: desc.location,
      category: index < 3 ? "Destaque" : index < 6 ? "Classicos" : "Exclusivos"
    }
  })

export const getImagesByCategory = (category) => {
  if (category === 'all') return galleryImages
  return galleryImages.filter(img => img.category === category)
}

export const getAllCategories = () => {
  return ['all', ...new Set(galleryImages.map(img => img.category))]
}
