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

//function, parameter, return
function fx1(x: number): number{ //타입 지정은 여기서만 가능 1number는 파라미터, 2number는 리턴값 타입지정
    return x * 2
}
fx1(2);
function fxVoid(x: number): void{ 
    1+1 //리턴 쓰기 싫은 함수에 넣으면 됨
}
fx1(2); //여기에 파라미터 안쓰면 에러남
function fx2(x?: number): void{ //물음표 치는 것은 (number|undefined) 똑같음
}
fx2;
//narrowing
function fx3(x: number | string){
    if(typeof x === 'string'){
        return x + 1
    } else {
        return x + 1
    }
}
function fx4(x: number|string){
    let array2: number[] = [];
    if(typeof x === 'number'){//타입을 특정지을 수만 있다면 다 인정해줌
        array2[0] = x;
    }
}
//type assertion
function fx5(x: number|string){
    let array3 : number[] = [];
    array3[0] = x as number;
}

//practice
function sayHi(x?: string){
    if(x){
        console.log('hello' + x)
    } else {
        console.log('no name')
    }
}
function lettercounter(x: number|string): number{
    return x.toString().length
}
function passCheck(test1: number, test2: boolean, test3: string):string|void{
    let grade: number = 0;
    grade += test1;
    if(test2 === true){
        grade+= 500
    }
    if(test3 === 'excellent'){
        grade +=100
    }
    if (grade >= 600){
        return 'pass'
    }
}
//practice
function cleaningfx(a:(number|string)[]){ //파라미터로 어래이 가능하게
    let cleaned: number[] = []; // 클리닝 완료된 변수 작명
    a.forEach((b)=>{ //어래이 반복문을 위한 포위치
        if(typeof b === 'string') { //반복문 돌리면 어래이 안에 있던 자료가 b라는 파람으로 나옴
            cleaned.push(parseFloat(b)) // 스트링이면 숫자로 파싱하고 푸시
        } else {
            cleaned.push(b) //숫자면 그냥 푸시
        }
    })
    return cleaned
}
console.log(cleaningfx([123,'3']))
function fx6( x: {subject: string|string[]}){
    if(typeof x.subject === 'string'){
        return x.subject
    } else if (Array.isArray(x.subject)){ //변수가 어래이인지 확인하려면 typeof는 못쓰고 Array.isArray()이거나 다른 방법 써야함
        return x.subject[x.subject.length -1]
    } else {
        return 'none'
    }
}
console.log( fx6({ subject: ['english', 'art']}))