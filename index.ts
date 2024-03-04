//primitive types
let firstname : string = 'chloe'; //변수에 타입 지정 가능
let age : number = 27;
let address : string = 'Gwacheon';
let members : string[] = ['choi', 'lee'];
var snackFavor : { name : string, taste : string } = { name : 'matbam', taste:'chestnut'} //변수 하나에 여러 자료 넣고 싶으면 오브젝트 자료형 써도 가능쓰
// 오브젝트 자료에도 타입지정 가능 위 변수에는 오브젝트만, 타입 맞는 애들만 들어올 수가 있음
let portfolio : {
    contents: string[],
    days: number,
    started: boolean,
} = {
    contents : ['hardcodingpage', 'reactpage'],
    days : 3,
    started : true,
  }

//union type, any, unknown
let member1: number | string = 2014;
let member2: (number | string | boolean) = 'choi';
//이러고 나면 멤버1은 숫자로 할당, 멤버2는 문자열로 할당, 그래도 가변적인것
let array1: (string | number)[] = [1, '2', 3];
let object1: { a: string | number } = { a: '123' }
//유니언타입은 연산 불가
let age1: string|number;
// age1 + 1; error

//any 일반 자바스크립트 변수처럼 넣었다 빼는 것
let surname: any;
surname = 123;
surname = [];

//unknown 모든 자료형 허용해줌, 단 any보다는 안전
let famliyname: unknown;
famliyname = 123;
famliyname = [];
// let hi: string = famliyname; error
// famliyname -1 연산도 타입 맞아야 가능함

//practice1
let user : string = 'choi';
let age2 : undefined | number = undefined;
let cute : boolean = true; 
let chloe : (string|number|undefined|boolean)[]= [user, age, cute];
//practice2
let school:{
    score: (number | boolean)[],
    teacher: string,
    friend: string | string[]
} = {
    score : [100, 97, 84],
    teacher : 'Apple',
    friend : 'Covy'
}
school.score[4.5] = false;
school.friend = ['Lee' , school.teacher]