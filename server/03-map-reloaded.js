const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ];

  const rta = orders.map(item => item.total)
  console.log(rta); //[ 60, 120, 180, 240 ]

  /*
  const rta2 = orders.map(item => {
    item.tax = 21
    return item;
  })
  */

  const rta3 = orders.map(item => {
    return {
        ...item,
        tax: 21
    }
  })

  //console.log(rta2);
  console.group(rta3)
  console.log('original', orders)