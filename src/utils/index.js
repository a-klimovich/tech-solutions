import { SERVICES, PACKAGES } from "../config";

/**
 * @param {string[]} services
 */
const getPossiblePackeges = (services) =>
  PACKAGES.filter((pack) =>
    pack.services.every((service) => services.includes(service))
  );

/**
 * @param {number} year
 * @param {string[]} services
 * @param {object} packege
 */
const applyPackege = ({year, services, packege}) => {
  const freeServices = packege?.offers?.freeServices || [];
  const servicesInPackege = new Set([...packege.services, ...freeServices]);

  const additianalServices = services.filter(
    (key) => !servicesInPackege.has(key)
  );

  const packegePrice = packege.prices[year];
  const servicesPrice = additianalServices.reduce(
    (acc, item) => acc + SERVICES[item].prices[year],
    0
  );

  const servicesOnActiveFreeServices = Array.from(new Set([...services, ...freeServices]))

  return {
    packege,
    services: servicesOnActiveFreeServices,
    totalPrice: packegePrice + servicesPrice
  };
};

/**
 * @param {string[]} services
 */
const getComputedServices = (services) => services.reduce((acc, service) => Array.from(
  new Set([...acc, service, ...SERVICES[service].require || []])
), []);

export const getCalculatedCoast = (data) => {
  const { year, services } = data;

  const computedServices = getComputedServices(services);

  const possiblePackeges = getPossiblePackeges(computedServices);

  if (possiblePackeges.length === 0) {
    const totalPrice = computedServices.reduce(
      (acc, item) => acc + SERVICES[item].prices[year],
      0
    );

    return {
      packege: null,
      services: computedServices,
      totalPrice
    };
  }

  const applyedPackeges = possiblePackeges.map((packege) =>
    applyPackege({
      year, 
      services: computedServices,
      packege
    })
  );

  return applyedPackeges.sort((a, b) => a.totalPrice - b.totalPrice)[0];
};