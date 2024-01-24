let filterToggle = true;

const pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
    },
    {
        id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "https://images.ctfassets.net/cnu0m8re1exe/59qssnh6iHfxY2r3FrctNZ/195cca2a860caed3b434a2d3de1ea555/trex.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill",
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "https://static.independent.co.uk/2020/09/28/12/newFile.jpg"
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "https://neurosciencenews.com/files/2023/11/dinosaur-senses-neurosicence.jpg"
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "https://topdogtips.com/wp-content/uploads/2021/10/Untitled-design-2021-10-16T003430.917.jpg"
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      id: 16,
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://media.istockphoto.com/id/1168444910/photo/stegosaurus-forest-scene-3d-illustration.jpg?s=612x612&w=0&k=20&c=Uqm7C-MOQdzcbI6UPOyaVabe76wcpFgb6WLiJqOyUTI="
    },
    {
     id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "https://people.com/thmb/n6EdTmvAL3TkkAqrT47caD6tUu8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(723x121:725x123)/wisp-the-cat-from-tiktok-092823-1-74797b02afe7475295e1478b2cdf2883.jpg"
    },
    {
      id: 18,
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://static.scientificamerican.com/sciam/cache/file/27360B33-0B68-4289-8563F1C6979A1B1B_source.jpg?w=1200"
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "http://dailynewsdig.com/wp-content/uploads/2014/03/Creative-And-Funny-Dog-Stock-Photography-Pictures-2.jpg"
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "https://images2.minutemediacdn.com/image/upload/c_crop,w_2121,h_1193,x_0,y_0/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/mentalfloss/01h84ks8b3kn95ybj78q.jpg"
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://images.immediate.co.uk/production/volatile/sites/3/2021/08/Jurassic-World-Evolution-2-b542b8c.jpg?quality=90&resize=620,414"
    },
    {
        id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1"
    },
    {
        id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
        id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "http://www.dogbreedplus.com/dog_breeds/images/basset-hound-4.jpg"
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "http://funbk.s3.amazonaws.com/wp-content/uploads/2016/06/funny-cat-video-which-will-make-you-laugh-louder.jpg"
    },
    {
        id: 26,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
        id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
        id: 28,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
        id: 29,
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
        id: 30,
      name: "Lucy",
      color: "blue",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "https://c02.purpledshub.com/uploads/sites/41/2019/07/dino_dps_03-7b541f7.jpg?w=1029&webp=1"
    }
  ];


//*************************************//
  // GENERATE HTML FOR ARRAY OF OBJECTS //
//*************************************//

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};


const cardsOnDom = (array) => {
  let domString = "";

  for (const pet of array) {
    domString += 
      ` <div class="card" style="width: 18rem;">
        <img src="${pet.imageUrl}" class="card-img-top" alt="${pet.name}">
        <div class="card-body">
          <h5 class="card-title">${pet.name}</h5>
          <p class="card-text">Color: ${pet.color}</p>
          <p class="card-text">Special Skill: ${pet.specialSkill}</p>
          <p class="card-text">${pet.type}</p>
          <button class="btn btn-danger" id="delete--${pet.id}">Delete</button>
        </div>
      </div> `;
  };

  renderToDom('#app', domString);
}

// cardsOnDom(pets);


//****************************//
// FILTER THE ARRAY BY TYPE //
//*************************//
const filter = (array, petType) => {
  filterToggle = false;
  const typeArray = [];

  for(const pet of array) {
    if (pet.type === petType) {
      typeArray.push(pet);
    }
  }
  return typeArray;
}

const showAllButton = document.querySelector('#all-btn');
const showCatButton = document.querySelector('#cat-btn');
const showDogButton = document.querySelector('#dog-btn');
const showDinoButton = document.querySelector('#dino-btn');

showAllButton.addEventListener("click", () => {
  filterToggle = true;
  cardsOnDom(pets);
});

showCatButton.addEventListener("click", () => {
  const catsInArray = filter(pets, "cat");
  cardsOnDom(catsInArray);
});

showDogButton.addEventListener("click", () => {
  const dogsInArray = filter(pets, "dog");
  cardsOnDom(dogsInArray);
});

showDinoButton.addEventListener("click", () => {
  const dinosInArray = filter(pets, "dino");
  cardsOnDom(dinosInArray);
});

//****************************//
// ADD TO ARRAY WITH HTML FORM //
//****************************//

const form = document.querySelector('form');

const addPet = (e) => {
  e.preventDefault();

  const newPet = {
    id: pets.length + 1,
    name: document.querySelector("#name").value,
    color: document.querySelector("#color").value,
    specialSkill: document.querySelector("#skill").value,
    type: document.querySelector("#type").value,
    imageUrl: document.querySelector("#image").value,
  }

  pets.push(newPet);
  cardsOnDom(pets);
  // console.log(pets);
  form.reset();
}

form.addEventListener("submit", addPet);


//****************************//
// CREATE DELETE FUNCTION //
//****************************//

const app = document.querySelector("#app");

app.addEventListener("click", (e) => {
  if (e.target.id.includes("delete")) {
    const [, id] = e.target.id.split("--");

    const index = pets.findIndex(e => e.id === Number(id));

    const findArray = pets.find((p) => p.id === Number(id));
    
    pets.splice(index, 1);
    
    if (filterToggle = true) {
      cardsOnDom(pets);
    } else {
      const filterAfterDelete = filter(pets, findArray.type);
      cardsOnDom(filterAfterDelete);
    };
  }


  // cardsOnDom(pets);
})

const startApp = () => {
  cardsOnDom(pets);
}


startApp();
