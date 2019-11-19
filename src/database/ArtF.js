const artsF = [
    {
    _id: "101",
    title: "The Yellow Umbrella",
    owner: { name: "Jaime Gomez", pic: "https://i.ibb.co/x1HMCG8/099980.jpg"},
    url: "https://i.ibb.co/3Cf4cPv/304-original.png",
    route: "/jaime",
    sub: true,
    cat: { name: "Cultura Pop", path: "/cat5"},
    shopping: {cost: 8, cart: true}
    },
    {
    _id: "102",
    title: "Happy Couple",
    owner: { name: "George Ruth", pic: "https://i.ibb.co/2ZKZnWB/099921.jpg"},
    url: "https://i.ibb.co/NtW6bM4/253-original.png",
    route: "/george",
    sub: true,
    cat: { name: "Caricaturas", path: "/cat6"},
    shopping: {cost: 8, cart: true}
    },
    {
    _id: "103",
    title: "Cooking Thoughts",
    owner: { name: "Isabel Mendiola", pic: "https://i.ibb.co/JkRPh9W/059998.jpg"},
    url: "https://i.ibb.co/X7xDBjy/11-original-png-1000h.jpg",
    route: "/isabel",
    sub: true,
    cat: { name: "Comics", path: "/cat7"},
    shopping: {cost: 8, cart: true}
    },
    {
    _id: "105",
    title: "The Long Ride",
    owner: { name: "Jaime Gomez", pic: "https://i.ibb.co/x1HMCG8/099980.jpg"},
    url: "https://i.ibb.co/vsLNbwR/Thelongride.jpg",
    route: "/jaime",
    sub: true,
    cat: { name: "Comics", path: "/cat7"},
    shopping: {cost: -1, cart: false}
    },
    {
    _id: "106",
    title: "Late Night",
    owner: { name: "Jaime Gomez", pic: "https://i.ibb.co/x1HMCG8/099980.jpg"},
    url: "https://i.ibb.co/sJF2ywD/latenight.jpg",
    route: "/isabel",
    sub: true,
    cat: { name: "Comics", path: "/cat7"},
    shopping: {cost: -1, cart: false}
    },
    {
    _id: "107",
    title: "Summer",
    owner: { name: "Jaime Gomez", pic: "https://i.ibb.co/x1HMCG8/099980.jpg"},
    url: "https://i.ibb.co/hd4rPY7/Summer.jpg",
    route: "/jaime",
    sub: true,
    cat: { name: "Comics", path: "/cat7"},
    shopping: {cost: -1, cart: false}
    },
    {
    _id: "108",
    title: "Off The Wall",
    owner: { name: "David Smith", pic: "https://i.ibb.co/q06NFVH/099903.jpg"},
    url: "https://i.ibb.co/YXYQLWB/Shoes.jpg",
    route: "/david",
    sub: false,
    cat: { name: "Cultura Pop", path: "/cat5"},
    shopping: {cost: -1, cart: false}
    },
    {
    _id: "109",
    title: "Breathe",
    owner: { name: "Jaime Gomez", pic: "https://i.ibb.co/x1HMCG8/099980.jpg"},
    url: "https://i.ibb.co/BZncNQM/Nature.jpg",
    route: "/jaime",
    sub: true,
    cat: { name: "Comics", path: "/cat7"},
    shopping: {cost: -1, cart: false}
    },
    {
    _id: "110",
    title: "Hunter",
    owner: { name: "George Ruth", pic: "https://i.ibb.co/PDCDmF8/099921.jpg"},
    url: "https://i.ibb.co/cbK3sp6/Hunter.jpg",
    route: "/george",
    sub: false,
    cat: { name: "Animales", path: "/cat2"},
    shopping: {cost: -1, cart: false}
    },
    {
    _id: "111",
    title: "New Born",
    owner: { name: "David Smith", pic: "https://i.ibb.co/q06NFVH/099903.jpg"},
    url: "https://i.ibb.co/4jRNtmf/puper.jpg",
    route: "/david",
    sub: false,
    cat: { name: "Animales", path: "/cat2"},
    shopping: {cost: -1, cart: false}
    },
    {
    _id: "112",
    title: "The Boat Capitan",
    owner: { name: "Jessica White", pic: "https://i.ibb.co/645Z9py/099954.jpg"},
    url: "https://i.ibb.co/gymZ5Z8/Mickey.jpg", 
    route: "/jess",
    sub: false,
    cat: { name: "Caricaturas", path: "/cat6"},
    shopping: {cost: -1, cart: false}
    },
    {
    _id: "113",
    title: "The Wolf at Night",
    owner: { name: "Jessica White", pic: "https://i.ibb.co/645Z9py/099954.jpg"},
    url: "https://i.ibb.co/vBrmgqL/perrito.jpg", 
    route: "/jess",
    sub: false,
    cat: { name: "Animales", path: "/cat2"},
    shopping: {cost: -1, cart: false}
    },
    {
    _id: "114",
    title: "Super Man",
    owner: { name: "George Ruth", pic: "https://i.ibb.co/PDCDmF8/099921.jpg"},
    url: "https://i.ibb.co/7Y8tmxS/superhero.jpg",
    route: "/george",
    sub: false,
    cat: { name: "Comics", path: "/cat7"},
    shopping: {cost: -1, cart: false}
    },
    {
    _id: "115",
    title: "The Detective",
    owner: { name: "Jessica White", pic: "https://i.ibb.co/645Z9py/099954.jpg"},
    url: "https://i.ibb.co/M8s4Df7/detective.jpg", 
    route: "/jess",
    sub: false,
    cat: { name: "Retratos", path: "/cat1"},
    shopping: {cost: -1, cart: false}
    },
    {
    _id: "116",
    title: "Tiny",
    owner: { name: "David Smith", pic: "https://i.ibb.co/q06NFVH/099903.jpg"},
    url: "https://i.ibb.co/BLjyGtj/Who.jpg",
    route: "/david",
    sub: false,
    cat: { name: "Naturaleza", path: "/cat3"},
    shopping: {cost: -1, cart: false}
    },
    {
    _id: "116",
    title: "Creativity",
    owner: { name: "David Smith", pic: "https://i.ibb.co/q06NFVH/099903.jpg"},
    url: "https://i.ibb.co/7GVjj3B/the-hand.jpg",
    route: "/david",
    sub: false,
    cat: { name: "Anatomia", path: "/cat4"},
    shopping: {cost: -1, cart: false}
    },
  ];
  const solution = array => {
    let unique = new Set();
    array.forEach( e => {
        unique.add(e.name);
    })
    let uniqueS = new Array();
    unique.forEach(e => uniqueS.push(e));
    let newB = array.map((item) => {
        if (uniqueS.indexOf(item.name) !== -1) {
            uniqueS[uniqueS.indexOf(item.name)] = 0;
            return item;
        }
    })
    let final = new Array();
    newB.forEach(e => {
    if (e !== undefined) {
        final.push(e);
        }
    })
return final;

}
  
  export function getArtF() {
      return artsF;
}

  export function getArfFU() {
    let unique = [...new Set(artsF.map(item => item.owner.name))];
    return unique.length;
}

    export const getArtFC = () => {
return solution(artsF.map(item => item.cat));
}

















// export function getArtFC() {
// const unique = artsF.filter((value, index, self) => {
//     return self.indexOf(value.cat) === index;
// })
// return unique;
// Try 1
// let cate = artsF.map(item => {
//     return item.cat
// })
// console.log(cate, "hola")
// let cats = new Set();
// artsF.forEach((e, index) => {
//     var temp = cats.size;
//     cats.add(e.cat.name);
// }) 
// let catsA = [...new Set(cats)];
// return catsA;
//Try 2
// return [...new Set(artsF.map(item => item.cat.name))];
//Try 3
// let cats = new Set([]);
// for (let i = 0; i < artsF.size; i++) {
//     cats.push(artsF[i]);
// }
// let catsS = new Array([]);
// for (let i = 0; i < cats.size; i++) {
//     catsS.push(cats[i]);
// }
// return catsS
// for (let i = 0; i < artsF.length; i++) {
//     cats.add(artsF[i].cat.name);
// }
// let catsA = Array.from(new Set(cats));
//Trash
//Try 2
// return [...new Set(artsF.map(item => item.cat.name))];
//Try 3
// let cats = new Set([]);
// for (let i = 0; i < artsF.size; i++) {
//     cats.push(artsF[i]);
// }
// let catsS = new Array([]);
// for (let i = 0; i < cats.size; i++) {
//     catsS.push(cats[i]);
// }
// return catsS
// for (let i = 0; i < artsF.length; i++) {
//     cats.add(artsF[i].cat.name);
// }
// let catsA = Array.from(new Set(cats));
// console.log("test 1")
// if (cats.size > temp) {
//     cats[num].add(e.cat.path);
//     num++;
// }
// console.log(e, index);
//   export function getArfFU() {
//       return artsP.owner.name.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], []).length()
//   }