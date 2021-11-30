let students = [
    { name: 'Marco', id: 213, grades: 78 },
    { name: 'Paola', id: 110, grades: 96 },
    { name: 'Andrea', id: 250, grades: 48 },
    { name: 'Gaia', id: 145, grades: 74 },
    { name: 'Luigi', id: 196, grades: 68 },
    { name: 'Piero', id: 102, grades: 50 },
    { name: 'Francesca', id: 120, grades: 84 },
  ];

  const targheArray = students.map((element) => {
      const nomeMaiusciolo = element.name.toUpperCase();
      return nomeMaiusciolo;
  });
  
  const bestStudents = students.filter((element) => {
      return element.grades > 70;
  });

  const bestStudentHigherId = students.filter((element) => {
      return element.grades > 70 && element.id > 120;
  });
  console.log(bestStudentHigherId);