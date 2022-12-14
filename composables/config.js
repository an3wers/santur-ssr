export const useConfig = () => {
  return {
    // API_BASE_URL: 'https://isantur.ru/',
    API_BASE_URL: 'https://santur.ru/',
    API_ADMIN: 'https://admin.santur.ru/api/',
    // API_ADMIN: 'https://testv.santur.ru/api/',
    PHONE_SITE: '73432700404',
    EMAIL_SITE: 'santur@santur.ru',
    WHATSAPP_SITE: '79321217497',
    SOCIAL_URLS: {
      vk: 'https://vk.com/santehcomplekt_ural',
      tg: 'https://t.me/santechekb',
      youtube: 'https://www.youtube.com/channel/UCdcLjll0oT4Oi14rMazkr5g',
    }
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
          target: '_self'
        },
        {
          name: 'Менеджмент компании',
          url: '/about/company-managers',
          target: '_self'
        },
        {
          name: 'Информация для поставщиков',
          url: '/about/informaciya-dlya-postavshhikov',
          target: '_self'
        },
        {
          name: 'Новости компании',
          url: '/about/news',
          target: '_self'
        },
        {
          name: 'Объекты комплектации',
          url: '/about/objects',
          target: '_self'
        },
        {
          name: 'Вакансии',
          url: '/about/vacancy',
          target: '_self'
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
          target: '_self'
        },
        {
          name: 'Проектирование и производство',
          url: 'https://pro.santur.ru',
          target: '_blank'
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
          target: '_self'
        },
        {
          name: 'Сотрудничество',
          url: '/clients/cooperation',
          target: '_self'
        },
        {
          name: 'Как купить товар',
          url: '/clients/how-buy',
          target: '_self'
        },
        {
          name: 'Отзывы о компании',
          url: '/clients/reviews',
          target: '_self'
        },
        {
          name: 'Прием рекламаций',
          url: '/clients/claim',
          target: '_self'
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
          target: '_blank'
        },
        {
          name: 'Инженерный форум',
          url: 'https://forum.santur.ru',
          target: '_blank'
        },
        {
          name: 'Пожарное оборудование',
          url: 'https://fire.santur.ru',
          target: '_blank'
        },
        {
          name: 'Собственное производство',
          url: 'https://pro.santur.ru',
          target: '_blank'
        },
        {
          name: 'Наружные сети',
          url: 'https://seti.santur.ru',
          target: '_blank'
        },
        {
          name: 'Сервис самостоятельных заявок',
          url: 'https://santechportal.ru',
          target: '_blank'
        },
      ],
    },
    {
      name: 'Контакты',
      url: '/contact',
      child: [],
      target: '_self'
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
