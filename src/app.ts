export{};

type user = {
    id: number,
    name: string
}

const nyname : string ="phan duc vuong";
const nyso : number = 2;
const arrSo: number[] = [1,2,3];
const object : object = {};
const arrObject: user[] = [{id: 1, name: "vuong"}, {id: 2, name: "vuong"},{id: 3, name: "vuong"}];

export type User = {
    id: number,
    name: string,
    age: number,
    occupation: string
};

export const users: unknown[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

export function logPerson(user: User) {
    console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(logPerson);