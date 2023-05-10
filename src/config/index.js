export const SERVICE_KEYS = {
  internet: "internet",
  tv: "tv",
  phone: "phone",
  decoder: "decoder"
};

export const SERVICES = {
  [SERVICE_KEYS.internet]: {
    name: "Internet",
    prices: {
      2023: 39,
      2024: 49,
      2025: 59
    }
  },
  [SERVICE_KEYS.tv]: {
    name: "TV",
    prices: {
      2023: 49,
      2024: 49,
      2025: 59
    }
  },
  [SERVICE_KEYS.phone]: {
    name: "Phone",
    prices: {
      2023: 29,
      2024: 29,
      2025: 29
    }
  },
  [SERVICE_KEYS.decoder]: {
    name: "Decoder",
    require: [SERVICE_KEYS.tv],
    prices: {
      2023: 29,
      2024: 29,
      2025: 29
    }
  }
};

export const PACKAGES = [
  {
    services: [SERVICE_KEYS.internet, SERVICE_KEYS.tv],
    name: "Internet and TV",
    offers: {
      freeServices: [SERVICE_KEYS.decoder]
    },
    prices: {
      2023: 79,
      2024: 89,
      2025: 99
    }
  },
  {
    services: [SERVICE_KEYS.internet, SERVICE_KEYS.phone],
    name: "Internet and Phone",
    prices: {
      2023: 64,
      2024: 64,
      2025: 64
    }
  }
];
