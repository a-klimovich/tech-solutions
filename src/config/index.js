export const SERVICE_KEYS = {
  internet: "internet",
  tv: "tv",
  phone: "phone",
  decoder: "decoder"
};

export const SERVICES = {
  [SERVICE_KEYS.internet]: {
    name: "Internet",
    description: 'A global network of connected devices and computers that allow for communication and access to information.',
    prices: {
      2023: 39,
      2024: 49,
      2025: 59
    }
  },
  [SERVICE_KEYS.tv]: {
    name: "TV",
    description: 'An electronic device that displays visual content such as shows, movies, and news broadcasts.',
    prices: {
      2023: 49,
      2024: 49,
      2025: 59
    }
  },
  [SERVICE_KEYS.phone]: {
    name: "Phone",
    description: 'A portable device that allows for communication through voice or text messages.',
    prices: {
      2023: 29,
      2024: 29,
      2025: 29
    }
  },
  [SERVICE_KEYS.decoder]: {
    name: "Decoder",
    description: 'A device that translates digital signals into an analog format for display on a TV or other screen.',
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
