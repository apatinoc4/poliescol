export const formatDate = (dateString: string) => {
  const monthsInSpanish = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const dateObj = new Date(dateString);

  const day = dateObj.getDate();
  const month = monthsInSpanish[dateObj.getMonth()];
  const year = dateObj.getFullYear();

  return `${day} de ${month} ${year}`;
};
