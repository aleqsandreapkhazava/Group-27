
const ადამნიათირიგი = [
    {
      სახელი: "a;els",
      წლეი: 12,
      სიგრძე: 175,
      სესქი: "მამაკც"
    },
    {
      სახელი: "ანა",
      წლეი: 25,
      სიგრძე: 165,
      სესქი: "ქაი"
    },
    {
      სახელი: "თამარი",
      წლეი: 40,
      სიგრძე: 160,
      სესქი: "ქაი"
    },
    {
        სახელი: "დავითი",
        წლეი: 35,
      სიგრძე: 180,
      სესქი: "მამაკც"
    }
  ];
  

  ადამნიათირიგი.forEach(person => {
    console.log(`1) ადამიანი:
  სახელი: ${person.სახელი},
  ასაკი: ${person.წლეი},
  სიმაღლე: ${person.  სიგრძე},
  სქესი: ${person.სესქი}`);
  });
  