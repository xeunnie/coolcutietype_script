//primitive types
var firstname = 'chloe'; //변수에 타입 지정 가능
var age = 27;
var address = 'Gwacheon';
var members = ['choi', 'lee'];
var snackFavor = { name: 'matbam', taste: 'chestnut' }; //변수 하나에 여러 자료 넣고 싶으면 오브젝트 자료형 써도 가능쓰
// 오브젝트 자료에도 타입지정 가능 위 변수에는 오브젝트만, 타입 맞는 애들만 들어올 수가 있음
var portfolio = {
    contents: ['hardcodingpage', 'reactpage'],
    days: 3,
    started: true,
};
//union type, any, unknown
var member1 = 2014;
var member2 = 'choi';
//이러고 나면 멤버1은 숫자로 할당, 멤버2는 문자열로 할당, 그래도 가변적인것
var array1 = [1, '2', 3];
var object1 = { a: '123' };
//유니언타입은 연산 불가
var age1;
// age1 + 1; error
//any 일반 자바스크립트 변수처럼 넣었다 빼는 것
var surname;
surname = 123;
surname = [];
//unknown 모든 자료형 허용해줌, 단 any보다는 안전
var famliyname;
famliyname = 123;
famliyname = [];
// let hi: string = famliyname; error
// famliyname -1 연산도 타입 맞아야 가능함
//practice1
var user = 'choi';
var age2 = undefined;
var cute = true;
var chloe = [user, age, cute];
//practice2
var school = {
    score: [100, 97, 84],
    teacher: 'Apple',
    friend: 'Covy'
};
school.score[4.5] = false;
school.friend = ['Lee', school.teacher];
