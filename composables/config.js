export const useConfig = () => {
  return {
    API_BASE_URL: 'https://isantur.ru/',
    API_ADMIN: 'http://10.10.10.77:5168/',
    // API_BASE_URL: 'https://testv.santur.ru/',
    // API_ADMIN: 'https://testv.santur.ru/',
    PHONE_SITE: '73432700404',
    EMAIL_SITE: 'santur@santur.ru',
    WHATSAPP_SITE: '79321217497',
  };
};

export const useMainMenu = () => {
  return [
    {
      name: 'О компании',
      url: '#',
      child: [
        {
          name: 'О Сантехкомплект-Урал',
          url: '/about/company',
        },
        {
          name: 'Менеджмент компании',
          url: '/about/company-managers',
        },
        {
          name: 'Информация для поставщиков',
          url: '/about/informaciya-dlya-postavshhikov',
        },
        {
          name: 'Новости компании',
          url: '/about/news',
        },
        {
          name: 'Объекты комплектации',
          url: '/about/objects',
        },
        {
          name: 'Вакансии',
          url: '/about/vacancy',
        },
      ],
    },
    {
      name: 'Услуги',
      url: '#',
      child: [
        {
          name: 'Доставка',
          url: '/services/delivery',
        },
        {
          name: 'Проектирование и производство',
          url: 'https://pro.santur.ru',
        },
        // {
        //   name: 'Сервис и ремонт котлов',
        //   url: '#',
        // },
      ],
    },
    {
      name: 'Клиентам',
      url: '#',
      child: [
        {
          name: 'Наши бренды',
          url: '/clients/brands',
        },
        {
          name: 'Сотрудничество',
          url: '/clients/cooperation',
        },
        {
          name: 'Отзывы о компании',
          url: '/clients/reviews',
        },
        {
          name: 'Прием рекламаций',
          url: '/clients/claim',
        },
      ],
    },
    {
      name: 'Ресурсы',
      url: '#',
      child: [
        {
          name: 'Мастер-Сантехник',
          url: 'https://msantehnik.ru',
        },
        {
          name: 'Инженерный форум',
          url: 'https://forum.santur.ru',
        },
        {
          name: 'Пожарное оборудование',
          url: 'https://fire.santur.ru',
        },
        {
          name: 'Собственное производство',
          url: 'https://pro.santur.ru',
        },
        {
          name: 'Наружные сети',
          url: 'https://seti.santur.ru',
        },
      ],
    },
    {
      name: 'Контакты',
      url: '/contact',
      child: [],
    },
  ];
};

export const masterAddressesEkb = [
  {
    address: 'Екатеринбург, ул. Сулимова, 23',
    time: 'Пн-Пт: 09:00-19:00; Сб-Вс: 10:00-17:00',
    phone: '73432700425',
  },
  {
    address: 'Екатеринбург, ул. Белинского, 216',
    time: 'Пн-Пт: 09:00-20:00; Сб: 10:00-18:00; Вс: 10:00-17:00',
    phone: '73432700426',
  },
  {
    address: 'Екатеринбург, пр-т Орджоникидзе, 21',
    time: 'Пн-Пт: 09:00-20:00; Сб: 10:00-18:00; Вс: 10:00-17:00',
    phone: '73432700427',
  },
  {
    address: 'Екатеринбург, ул. Крауля, 55',
    time: 'Пн-Пт: 09:00-20:00; Сб-Вс: 10:00-18:00',
    phone: '73432700428',
  },
  {
    address: 'Екатеринбург, бул. Денисова-Уральского, 16',
    time: 'Пн-Пт: 09:00-20:00; Сб: 10:00-18:00; Вс: 10:00-17:00',
    phone: '73432700429',
  },
  {
    address: 'Екатеринбург, ул. Техническая, 40',
    time: 'Пн-Пт: 09:00-20:00; Сб-Вс: 10:00-18:00',
    phone: '73432700431',
  },
  {
    address: 'Екатеринбург, ул. Большакова, 157',
    time: 'Пн-Пт: 09:00-20:00; Сб-Вс: 10:00-18:00',
    phone: '73432700433',
  },
  {
    address: 'Екатеринбург, ул. Суходольская, 47',
    time: 'Пн-Пт: 09:00-20:00; Сб-Вс: 10:00-18:00',
    phone: '73432700434',
  },
];

export const masterAddressesPishma = [
  {
    address: 'Верхняя Пышма, пр-т Успенский, 34',
    time: 'Пн-Пт.: 09:00-20:00; Сб-Вс: 10:00-18:00',
    phone: '73432700416',
  },
];
export const masterAddressesTagil = [
  {
    address: 'Нижний Тагил, ул. Фрунзе, 58',
    time: 'Пн-Пт.: 09:00-19:00, Сб-Вс.: 10:00-17:00',
    phone: '73435486017',
  },
  {
    address: 'Нижний Тагил, ул. Мира, 29',
    time: 'Пн-Пт.: 09:00-19:00, Сб-Вс.: 09:00-17:00',
    phone: '73435412875',
  },
  {
    address: 'Нижний Тагил, ул. Зари, 19а',
    time: 'Пн-Пт.: 09:00-19:00, Сб-Вс.: 09:00-17:00',
    phone: '73435378206',
  },
  {
    address: 'Черноисточинское шоссе, 64А',
    time: 'Ежедневно 08:00-19:00',
    phone: '73435384447',
  },
];
