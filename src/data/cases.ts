export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  services: string[];
  challenge: string;
  solution: string;
  results: string[];
  tags: string[];
  coverGradient: string;
  quote?: { text: string; author: string; role: string };
}

export const cases: CaseStudy[] = [
  {
    id: "1",
    slug: "ecommerce-content-sistema",
    title: "Контент-система для e-commerce бренда: от 3 до 50 роликов в месяц",
    client: "Крупный e-commerce бренд",
    industry: "E-commerce",
    services: ["content-systemy", "short-form-video", "smm-content-strategy"],
    challenge: "Бренд публиковал 3–4 поста в месяц, не имел short-form стратегии и терял долю внимания конкурентам в соцсетях.",
    solution: "Разработали контент-матрицу по 5 рубрикам, построили конвейер производства, внедрили AI для ускорения сценариев. Запустили систему за 3 недели.",
    results: ["Охваты выросли с 50K до 1.2M в месяц", "Вовлечённость +340%", "Стоимость единицы контента ↓ в 2.5 раза", "Контракт продлён на 12 месяцев"],
    tags: ["Short-form", "Контент-системы", "E-commerce"],
    coverGradient: "from-red-500/20 to-orange-500/10",
    quote: { text: "Martin Media построили нам не просто контент-план, а целый медиа-конвейер.", author: "Мария К.", role: "Head of Marketing" },
  },
  {
    id: "2",
    slug: "fintech-reklamnaya-kampaniya",
    title: "Рекламная видеокампания для финтех-стартапа",
    client: "Финтех-стартап",
    industry: "Финтех",
    services: ["reklamnye-roliki", "videoproduction"],
    challenge: "Стартап выходил на рынок и нуждался в серии роликов, которые объяснят продукт и сформируют доверие у сложной B2B-аудитории.",
    solution: "Создали серию из 5 роликов: 1 имиджевый + 4 продуктовых. Разработали визуальный язык с нуля, использовали motion design и live-action.",
    results: ["CTR рекламы +85% vs бенчмарк", "Cost per lead ↓ на 40%", "Brand awareness в целевом сегменте +45%"],
    tags: ["Рекламные ролики", "Видеопродакшн", "Финтех"],
    coverGradient: "from-blue-500/20 to-cyan-500/10",
    quote: { text: "Ребята поняли продукт лучше, чем многие из нашей команды. Результат видео превзошёл ожидания.", author: "Алексей Д.", role: "CEO" },
  },
  {
    id: "3",
    slug: "klinika-ai-assistant",
    title: "AI-ассистент для сети клиник: мгновенные ответы 24/7",
    client: "Сеть медицинских клиник",
    industry: "Медицина",
    services: ["ai-assistenty", "ai-integracii"],
    challenge: "Call-центр не справлялся с потоком обращений. Пациенты ждали ответа по 2–4 часа, 30% уходили к конкурентам.",
    solution: "Разработали AI-ассистента, обученного на базе знаний клиники. Интегрировали с CRM и мессенджерами. Ассистент записывает на приём, отвечает на FAQ и квалифицирует обращения.",
    results: ["Время ответа: с 2 часов до мгновенного", "Нагрузка на call-центр ↓ на 45%", "Конверсия в запись +28%", "Работает 24/7 без выходных"],
    tags: ["AI-ассистенты", "Автоматизация", "Медицина"],
    coverGradient: "from-emerald-500/20 to-teal-500/10",
  },
  {
    id: "4",
    slug: "horeca-short-form",
    title: "Short-form стратегия для ресторанной сети: 1M+ просмотров за месяц",
    client: "Ресторанная сеть",
    industry: "HoReCa",
    services: ["short-form-video", "smm-content-strategy"],
    challenge: "Ресторанная сеть из 12 заведений не присутствовала в TikTok и Reels. Конкуренты активно набирали аудиторию.",
    solution: "Разработали контент-стратегию для вертикального формата: рубрики, съёмочный процесс, пакет 20 роликов в месяц. Запустили за 2 недели.",
    results: ["1.2M просмотров за первый месяц", "15K новых подписчиков", "Рост бронирований из соцсетей на 35%"],
    tags: ["Short-form", "SMM", "HoReCa"],
    coverGradient: "from-amber-500/20 to-yellow-500/10",
  },
  {
    id: "5",
    slug: "saas-3d-product-video",
    title: "3D-продуктовое видео для SaaS-платформы",
    client: "SaaS-платформа",
    industry: "IT & SaaS",
    services: ["3d-motion-design", "videoproduction"],
    challenge: "Сложный B2B-продукт требовал визуального объяснения. Скриншоты и текст не конвертировали. Нужен был ролик, который покажет ценность за 60 секунд.",
    solution: "Создали 3D-анимированное видео с product tour: интерфейс, фичи, результаты. Стилистика — clean tech, без лишней сложности.",
    results: ["Конверсия demo-запросов +55%", "Среднее время на лендинге +120%", "Ролик используется в outbound-продажах"],
    tags: ["3D и motion", "Видеопродакшн", "IT & SaaS"],
    coverGradient: "from-violet-500/20 to-purple-500/10",
  },
  {
    id: "6",
    slug: "retail-ai-automation",
    title: "AI-автоматизация маркетинга для розничной сети",
    client: "Розничная сеть",
    industry: "Ритейл",
    services: ["ai-integracii", "content-systemy"],
    challenge: "Маркетинговая команда из 4 человек не справлялась с объёмом контента для 50+ точек. Каждая единица контента создавалась вручную.",
    solution: "Внедрили AI-инструменты для генерации и адаптации контента. Автоматизировали создание карточек товаров, постов и рассылок. Построили полуавтоматический конвейер.",
    results: ["Скорость создания контента x8", "Экономия 60+ часов в месяц", "Единый стиль на всех 50+ точках"],
    tags: ["AI-интеграции", "Контент-системы", "Ритейл"],
    coverGradient: "from-rose-500/20 to-pink-500/10",
  },
];