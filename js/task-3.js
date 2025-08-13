/*  3. Завдання:
    Потрібно зробити парсинг масиву array:
    balance сума в копійках, потрібно перевести в гривні та зробити суму з пробілами та 2 символами після крапки, наприклад 1 000 000.00
    dateStartUnix перевести у формат 'день.місяць.рік(00.00.0000)' і змінити параметр на dateStart
    dateEnd перекласти у формат '00.00.0000'
    записати дані по терміну та типу в об'єкт, наприклад {term: 32, type: 'M', value: '32 місяці)'}
    відсортувати термін за зростанням по параметру term 1 , 100 , 4 , 6  і тд.
*/

const array = [
  {
    balance: 500000,
    term: 1,
    type: "M",
    dateStartUnix: 1693947600,
    dateEnd: "2023-11-03T00:00:00",
  },
  {
    balance: 4508000,
    term: 6,
    type: "M",
    dateStartUnix: 1693947600,
    dateEnd: "2023-11-03T00:00:00",
  },
  {
    balance: 87500,
    term: 18,
    type: "M",
    dateStartUnix: 1693947600,
    dateEnd: "2023-11-03T00:00:00",
  },
  {
    balance: 2503,
    term: 100,
    type: "D",
    dateStartUnix: 1693947600,
    dateEnd: "2023-11-03T00:00:00",
  },
  {
    balance: 126500,
    term: 4,
    type: "M",
    dateStartUnix: 1693947600,
    dateEnd: "2023-11-03T00:00:00",
  },
];

function getPlural(num, one, few, many) {
  const mod10 = num % 10;
  const mod100 = num % 100;
  if (mod10 === 1 && mod100 !== 11) return one;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return few;
  return many;
}

function formatDate(date) {
  const d = date.getDate().toString().padStart(2, "0");
  const m = (date.getMonth() + 1).toString().padStart(2, "0");
  const y = date.getFullYear();
  return `${d}.${m}.${y}`;
}

const parsed = array
  .map((item) => {
    const balance = (item.balance / 100).toLocaleString("uk-UA", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    const dateStart = formatDate(new Date(item.dateStartUnix * 1000));
    const dateEnd = formatDate(new Date(item.dateEnd));

    let unit;
    if (item.type === "M") {
      unit = getPlural(item.term, "місяць", "місяці", "місяців");
    } else {
      unit = getPlural(item.term, "день", "дні", "днів");
    }

    const value = `${item.term} ${unit}`;

    return {
      balance,
      term: item.term,
      type: item.type,
      dateStart,
      dateEnd,
      value,
    };
  })
  .sort((a, b) => a.term - b.term);

console.log(parsed);
